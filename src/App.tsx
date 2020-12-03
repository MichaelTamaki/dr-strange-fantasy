import React, { useState, useEffect } from 'react';
import './App.css';
import { ASS_INTERFERENCE } from './processor/data';
import { clinchedPlayoffs, LeagueData, produceAllOutcomes, TeamData, WeekMatchups } from './processor/processor';

function App() {
  const [outcomes, setOutcomes] = useState<LeagueData[]>();
  const [outcomeIndex, setOutcomeIndex] = useState<number>(0);

  useEffect(() => {
    setOutcomes(produceAllOutcomes(ASS_INTERFERENCE));
  }, []);

  if (!outcomes) {
    return <h1>Calculating outcomes...</h1>;
  }

  return (
    <div className="App">
      <h2>Teams</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points For</th>
            <th>Clinched playoffs</th>
          </tr>
        </thead>
        <tbody>
          { outcomes[outcomeIndex].teams.map(function (team, index) {
              const playoffEligible = clinchedPlayoffs(outcomes[outcomeIndex], team.teamName, 8);
              return <tr>
                <td>{index + 1}</td>
                <td>{team.teamName}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.pointsFor}</td>
                <td>{playoffEligible !== true && playoffEligible !== false && "hol up"}</td>
              </tr>
            })
          }
        </tbody>
      </table>

      <h2>Week 13 Matchups</h2>
      <p>Outcome {outcomeIndex + 1} out of {outcomes.length}</p>
      <div>
        <button onClick={() => outcomeIndex + 1 < outcomes.length && setOutcomeIndex(outcomeIndex + 1)}>+</button>
        <button onClick={() => outcomeIndex - 1 >= 0 && setOutcomeIndex(outcomeIndex - 1)}>-</button>
      </div>
      <p>Click on a team name to lock a matchup as a victory</p>
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
                <td>{matchup.teamName1}</td>
                <td>{matchup.team1Won ? "<-" : "->"}</td>
                <td>{matchup.teamName2}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
