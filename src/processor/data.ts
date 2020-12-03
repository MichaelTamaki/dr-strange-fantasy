import { LeagueData, sortTeams } from "./processor";

export const ASS_INTERFERENCE: LeagueData = {
  teams: [
    {
      teamName: "Spongebobthemusical",
      wins: 8,
      losses: 4,
      pointsFor: 0
    },
    {
      teamName: "The Chosen One™",
      wins: 8,
      losses: 4,
      pointsFor: 0
    },
    {
      teamName: "❄️☃️❄️",
      wins: 8,
      losses: 4,
      pointsFor: 0
    },
    {
      teamName: "Please no covid",
      wins: 8,
      losses: 4,
      pointsFor: 0
    },
    {
      teamName: "3D Glasses",
      wins: 6,
      losses: 6,
      pointsFor: 0
    },
    {
      teamName: "Tom Brady's Left Nut",
      wins: 6,
      losses: 6,
      pointsFor: 0
    },
    {
      teamName: "McCafé",
      wins: 5,
      losses: 7,
      pointsFor: 0
    },
    {
      teamName: "The LV Raiders",
      wins: 5,
      losses: 7,
      pointsFor: 0
    },
    {
      teamName: "ms. steelersyourman",
      wins: 5,
      losses: 7,
      pointsFor: 0
    },
    {
      teamName: "Saquon Barkley's ACL",
      wins: 5,
      losses: 7,
      pointsFor: 200
    },
    {
      teamName: "Qhazz Q. Qichaels",
      wins: 5,
      losses: 7,
      pointsFor: 100
    },
    {
      teamName: "Sidney with a Knife",
      wins: 3,
      losses: 8,
      pointsFor: 0
    }
  ],
  week13Matchups: [
    {
      teamName1: "Qhazz Q. Qichaels",
      teamName2: "Spongebobthemusical"
    },
    {
      teamName1: "The Chosen One™",
      teamName2: "McCafé"
    },
    {
      teamName1: "❄️☃️❄️",
      teamName2: "Sidney with a Knife"
    },
    {
      teamName1: "ms. steelersyourman",
      teamName2: "Saquon Barkley's ACL"
    },
    {
      teamName1: "The LV Raiders",
      teamName2: "3D Glasses"
    },
    {
      teamName1: "Tom Brady's Left Nut",
      teamName2: "Please no covid"
    }
  ]
};

ASS_INTERFERENCE.teams.sort(sortTeams);
ASS_INTERFERENCE.teams.reverse();
