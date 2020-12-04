import React, { useState, useEffect } from 'react';
import './App.css';
import { ASS_INTERFERENCE, OKTA_AFL } from './processor/data';
import { clinchedPlayoffs, LeagueData, produceAllOutcomes } from './processor/processor';
import drStrangeThinking from './dr-strange-thinking.jpeg';
import drStrangeTalking from './dr-strange-talking.jpeg';

function App() {
  const [selectedDataIndex, setSelectedDataIndex] = useState<number>(0);
  const [allOutcomes, setAllOutcomes] = useState<LeagueData[]>();
  const [outcomes, setOutcomes] = useState<LeagueData[]>();
  const [outcomeIndex, setOutcomeIndex] = useState<number>(0);
  const [lockedWins, setLockedWins] = useState<{ matchupIndex: number, team1Won: boolean; }[]>([]);
  const [selectedTeamName, setSelectedTeamName] = useState<string>();

  useEffect(() => {
    const o = selectedDataIndex === 0 ? produceAllOutcomes(ASS_INTERFERENCE) : produceAllOutcomes(OKTA_AFL);
    setAllOutcomes(o);
    setOutcomes(o);
    setOutcomeIndex(0);
    setLockedWins([]);
    setSelectedTeamName(o[0].teams[0].teamName);
  }, [selectedDataIndex]);

  useEffect(() => {
    if (!allOutcomes) { return; }
    setOutcomes(allOutcomes.filter((outcome) => {
      return lockedWins.every((l) => outcome.week13Matchups[l.matchupIndex].team1Won === l.team1Won)
    }))
    setOutcomeIndex(0);
  }, [allOutcomes, lockedWins]);

  function setTeamWin(matchupIndex: number, team1Won: boolean) {
    const existingIndex = lockedWins.findIndex((l) => l.matchupIndex === matchupIndex);
    if (existingIndex !== -1) {
      const removedWins = lockedWins.splice(existingIndex, 1);
      // Do not add a new locked win if team1Won is the same
      if (removedWins[0].team1Won === team1Won) {
        setLockedWins(lockedWins.splice(0));
        return;
      }
    }
    lockedWins.push({ matchupIndex, team1Won });
    setLockedWins(lockedWins.splice(0));
  }

  if (!outcomes || !selectedTeamName) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <img style={{ maxWidth: "500px" }} src={drStrangeThinking} alt="Doctor Strange Thinking" />
      <div>
        <select value={selectedDataIndex} onChange={(e) => { setSelectedDataIndex(Number(e.target.value)) }}>
          <option value="0">Interference</option>
          <option value="1">OKTA - AFL</option>
        </select>
      </div>
      <h2>Week 13 Matchups</h2>
      <p>Click on a team to lock a win for the matchup</p>
      <table>
        <thead>
          <tr>
            <th>Team 1</th>
            <th>vs.</th>
            <th>Team 2</th>
          </tr>
        </thead>
        <tbody>
          { outcomes[outcomeIndex].week13Matchups.map(function (matchup, index) {
              return <tr>
                <td onClick={() => setTeamWin(index, true)}>{matchup.teamName1}</td>
                <td style={{ background: lockedWins.find((l) => index === l.matchupIndex) && "green" }}>{matchup.team1Won ? "<-" : "->"}</td>
                <td onClick={() => setTeamWin(index, false)}>{matchup.teamName2}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      <p>Outcome {outcomeIndex + 1} out of {outcomes.length}</p>
      <div>
        <button onClick={() => outcomeIndex + 1 < outcomes.length && setOutcomeIndex(outcomeIndex + 1)}>+</button>
        <button onClick={() => outcomeIndex - 1 >= 0 && setOutcomeIndex(outcomeIndex - 1)}>-</button>
      </div>

      <h2>Teams</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points For</th>
            <th>Point differentials to get playoffs</th>
          </tr>
        </thead>
        <tbody>
          { outcomes[outcomeIndex].teams.map(function (team, index) {
              const playoffEligible = clinchedPlayoffs(outcomes[outcomeIndex], team.teamName);
              return <tr style={{ background: playoffEligible === true ? "green" : playoffEligible === false ? "red" : undefined }}>
                <td>{index + 1}</td>
                <td>{team.teamName}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.pointsFor}</td>
                <td>{playoffEligible !== true && playoffEligible !== false && playoffEligible.map((v) => <p>{v.pointDiff < 0 ? `Beat ${v.teamName} by ${-v.pointDiff} pts` : `${v.teamName} must beat you by ${v.pointDiff} pts`}</p>)}</td>
              </tr>
            })
          }
        </tbody>
      </table>

      <h2>Given a team, how many outcomes lead to playoffs?</h2>
      <select value={selectedTeamName} onChange={(e) => { setSelectedTeamName(e.target.value) }}>
        { outcomes[outcomeIndex].teams.map((team, index) => <option value={team.teamName}>{team.teamName}</option>)}
      </select>
      <p>Out of {outcomes.length} outcomes...</p>
      <p>You are guaranteed playoffs in {outcomes.filter((o) => clinchedPlayoffs(o, selectedTeamName) === true).length} outcomes</p>
      <p>You are on the edge of playoffs in {outcomes.filter((o) => typeof clinchedPlayoffs(o, selectedTeamName) === "object").length} outcomes</p>
      <p>You are eliminated from playoffs in {outcomes.filter((o) => clinchedPlayoffs(o, selectedTeamName) === false).length} outcomes</p>
      <img style={{ maxWidth: "500px" }} src={drStrangeTalking} alt="Doctor Strange Thinking" />
    </div>
  );
}

export default App;
