export interface TeamData {
  teamName: string;
  wins: number;
  losses: number;
  pointsFor: number;
}

export interface WeekMatchups {
  teamName1: string;
  teamName2: string;
  team1Won?: boolean | null;
}

export interface LeagueData {
  teams: TeamData[];
  week13Matchups: WeekMatchups[];
}

export function sortTeams(team1: TeamData, team2: TeamData) {
  if (team1.wins === team2.wins) {
    return team2.pointsFor - team1.pointsFor;
  } else {
    return team2.wins - team1.wins;
  }
};

export function produceAllOutcomes(league: LeagueData): LeagueData[] {
  const undeterminedMatchupIndex = league.week13Matchups.findIndex((matchup) => matchup.team1Won === undefined);
  
  // Base case
  if (undeterminedMatchupIndex === -1) {
    return [league];
  }

  // Create branches
  const matchup = league.week13Matchups[undeterminedMatchupIndex];
  const json = JSON.stringify(league);

  const branch1League: LeagueData = JSON.parse(json);
  branch1League.week13Matchups[undeterminedMatchupIndex].team1Won = true;
  const branch1Team1 = branch1League.teams.find((team) => team.teamName === matchup.teamName1) as TeamData;
  const branch1Team2 = branch1League.teams.find((team) => team.teamName === matchup.teamName2) as TeamData;
  branch1Team1.wins += 1;
  branch1Team2.losses += 1;
  branch1League.teams.sort(sortTeams);
  const branch1Outcomes = produceAllOutcomes(branch1League);

  const branch2League: LeagueData = JSON.parse(json);
  branch2League.week13Matchups[undeterminedMatchupIndex].team1Won = false;
  const branch2Team1 = branch2League.teams.find((team) => team.teamName === matchup.teamName1) as TeamData;
  const branch2Team2 = branch2League.teams.find((team) => team.teamName === matchup.teamName2) as TeamData;
  branch2Team1.losses += 1;
  branch2Team2.wins += 1;
  branch2League.teams.sort(sortTeams);
  const branch2Outcomes = produceAllOutcomes(branch2League);

  return branch1Outcomes.concat(branch2Outcomes);
};

export function clinchedPlayoffs(league: LeagueData, teamName: string, playoffTeams: number): boolean | { teamName: string; pointDiff: number; }[] {
  const teamIndex = league.teams.findIndex((t) => t.teamName === teamName);

  if (teamIndex === -1) {
    throw new Error("whaaa???")
  }

  const team = league.teams[teamIndex];
  const cutoffTopTeam = league.teams[playoffTeams - 1];
  const cutoffBotTeam = league.teams[playoffTeams];

  // If the wins are the same as the teams on the playoff cutoff, then calculate the point differential
  if (team.wins === cutoffTopTeam.wins && cutoffTopTeam.wins === cutoffBotTeam.wins) {
    const cutoffTeams = league.teams.filter((t) => t.wins === team.wins && t !== team);
    return cutoffTeams.map((t) => {
      return {
        teamName: t.teamName,
        pointDiff: Math.round((team.pointsFor - t.pointsFor) * 100) / 100
      };
    });
  } else {
    return teamIndex < playoffTeams;
  }
}
