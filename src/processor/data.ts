import { LeagueData, sortTeams } from "./processor";

export const ASS_INTERFERENCE: LeagueData = {
  teams: [
    {
      teamName: "Spongebobthemusical",
      wins: 8,
      losses: 4,
      pointsFor: 1190.80 + 112.55
    },
    {
      teamName: "The Chosen One™",
      wins: 8,
      losses: 4,
      pointsFor: 1459.05 + 156.90
    },
    {
      teamName: "❄️☃️❄️",
      wins: 8,
      losses: 4,
      pointsFor: 1267.85 + 119.85
    },
    {
      teamName: "Please no covid",
      wins: 8,
      losses: 4,
      pointsFor: 1186.70 + 156.15
    },
    {
      teamName: "3D Glasses",
      wins: 6,
      losses: 6,
      pointsFor: 1225.35 + 89.05
    },
    {
      teamName: "Tom Brady's Left Nut",
      wins: 6,
      losses: 6,
      pointsFor: 1194.80 + 94.40
    },
    {
      teamName: "McCafé",
      wins: 5,
      losses: 7,
      pointsFor: 1246.80 + 93.00
    },
    {
      teamName: "The LV Raiders",
      wins: 5,
      losses: 7,
      pointsFor: 1194.80 + 117.00
    },
    {
      teamName: "ms. steelersyourman",
      wins: 5,
      losses: 7,
      pointsFor: 1219.45 + 97.65
    },
    {
      teamName: "Saquon Barkley's ACL",
      wins: 5,
      losses: 7,
      pointsFor: 1052.40 + 97.35
    },
    {
      teamName: "Qhazz Q. Qichaels",
      wins: 5,
      losses: 7,
      pointsFor: 1018.10 + 130.10
    },
    {
      teamName: "Sidney with a Knife",
      wins: 3,
      losses: 8,
      pointsFor: 1145.00 + 64.60
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

ASS_INTERFERENCE.teams.forEach((t) => {
  t.pointsFor = Math.round(t.pointsFor * 100) / 100;
})
ASS_INTERFERENCE.teams.sort(sortTeams);
ASS_INTERFERENCE.teams.reverse();
