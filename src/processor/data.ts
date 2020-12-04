import { LeagueData } from "./processor";

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
  ],
  playoffTeams: 8
};

ASS_INTERFERENCE.teams.forEach((t) => {
  t.pointsFor = Math.round(t.pointsFor * 100) / 100;
});

export const OKTA_AFL: LeagueData = {
  teams: [
    {
      teamName: "W's@Okta",
      wins: 11,
      losses: 1,
      pointsFor: 1296.54
    },
    {
      teamName: "Sea Titans",
      wins: 9,
      losses: 3,
      pointsFor: 1307.30
    },
    {
      teamName: "Ryan's Meme Team",
      wins: 7,
      losses: 5,
      pointsFor: 1380.86
    },
    {
      teamName: "Losers@Okta",
      wins: 7,
      losses: 5,
      pointsFor: 1321.08
    },
    {
      teamName: "Ryan's Team",
      wins: 7,
      losses: 5,
      pointsFor: 1303.44
    },
    {
      teamName: "Chris's Crazy Team",
      wins: 7,
      losses: 5,
      pointsFor: 1252.08
    },
    {
      teamName: "SF Football Team",
      wins: 7,
      losses: 5,
      pointsFor: 1251.28
    },
    {
      teamName: "Backstreet's Back",
      wins: 7,
      losses: 5,
      pointsFor: 1229.78
    },
    {
      teamName: "Unsportsmanlike",
      wins: 6,
      losses: 6,
      pointsFor: 1158.92
    },
    {
      teamName: "Game of Jones",
      wins: 5,
      losses: 7,
      pointsFor: 1256.68
    },
    {
      teamName: "Great White NorthIAN",
      wins: 4,
      losses: 8,
      pointsFor: 1131.86
    },
    {
      teamName: "Rockers",
      wins: 3,
      losses: 9,
      pointsFor: 1064.04
    },
    {
      teamName: "Qichael Qichaels",
      wins: 2,
      losses: 10,
      pointsFor: 1153.52
    },
    {
      teamName: "Bill's Mafia",
      wins: 2,
      losses: 10,
      pointsFor: 946.28
    }
  ],
  week13Matchups: [
    {
      teamName1: "Qichael Qichaels",
      teamName2: "Sea Titans"
    },
    {
      teamName1: "Losers@Okta",
      teamName2: "Great White NorthIAN"
    },
    {
      teamName1: "Ryan's Meme Team",
      teamName2: "Bill's Mafia"
    },
    {
      teamName1: "Backstreet's Back",
      teamName2: "SF Football Team"
    },
    {
      teamName1: "W's@Okta",
      teamName2: "Chris's Crazy Team"
    },
    {
      teamName1: "Ryan's Team",
      teamName2: "Rockers"
    },
    {
      teamName1: "Unsportsmanlike",
      teamName2: "Game of Jones"
    }
  ],
  playoffTeams: 6
};
