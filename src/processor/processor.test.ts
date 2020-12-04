import { ASS_INTERFERENCE } from "./data";
import { LeagueData, produceAllOutcomes, clinchedPlayoffs } from "./processor";

describe ("processor", function () {
  const mockLeague: LeagueData = {
    teams: [
      {
        teamName: "Aingus",
        wins: 4,
        losses: 0,
        pointsFor: 500
      },
      {
        teamName: "Bingus",
        wins: 4,
        losses: 0,
        pointsFor: 400
      },
      {
        teamName: "Cingus",
        wins: 0,
        losses: 4,
        pointsFor: 500
      },
      {
        teamName: "Dingus",
        wins: 0,
        losses: 4,
        pointsFor: 400
      }
    ],
    week13Matchups: [
      {
        teamName1: "Aingus",
        teamName2: "Bingus"
      },
      {
        teamName1: "Cingus",
        teamName2: "Dingus"
      }
    ],
    playoffTeams: 2
  };

  const outcome1: LeagueData = {
    teams: [
      {
        teamName: "Aingus",
        wins: 5,
        losses: 0,
        pointsFor: 500
      },
      {
        teamName: "Bingus",
        wins: 4,
        losses: 1,
        pointsFor: 400
      },
      {
        teamName: "Cingus",
        wins: 1,
        losses: 4,
        pointsFor: 500
      },
      {
        teamName: "Dingus",
        wins: 0,
        losses: 5,
        pointsFor: 400
      }
    ],
    week13Matchups: [
      {
        teamName1: "Aingus",
        teamName2: "Bingus",
        team1Won: true
      },
      {
        teamName1: "Cingus",
        teamName2: "Dingus",
        team1Won: true
      }
    ],
    playoffTeams: 2
  };

  const outcome2: LeagueData = {
    teams: [
      {
        teamName: "Aingus",
        wins: 5,
        losses: 0,
        pointsFor: 500
      },
      {
        teamName: "Bingus",
        wins: 4,
        losses: 1,
        pointsFor: 400
      },
      {
        teamName: "Dingus",
        wins: 1,
        losses: 4,
        pointsFor: 400
      },
      {
        teamName: "Cingus",
        wins: 0,
        losses: 5,
        pointsFor: 500
      }
    ],
    week13Matchups: [
      {
        teamName1: "Aingus",
        teamName2: "Bingus",
        team1Won: true
      },
      {
        teamName1: "Cingus",
        teamName2: "Dingus",
        team1Won: false
      }
    ],
    playoffTeams: 2
  };

  const outcome3: LeagueData = {
    teams: [
      {
        teamName: "Bingus",
        wins: 5,
        losses: 0,
        pointsFor: 400
      },
      {
        teamName: "Aingus",
        wins: 4,
        losses: 1,
        pointsFor: 500
      },
      {
        teamName: "Cingus",
        wins: 1,
        losses: 4,
        pointsFor: 500
      },
      {
        teamName: "Dingus",
        wins: 0,
        losses: 5,
        pointsFor: 400
      }
    ],
    week13Matchups: [
      {
        teamName1: "Aingus",
        teamName2: "Bingus",
        team1Won: false
      },
      {
        teamName1: "Cingus",
        teamName2: "Dingus",
        team1Won: true
      }
    ],
    playoffTeams: 2
  };

  const outcome4: LeagueData = {
    teams: [
      {
        teamName: "Bingus",
        wins: 5,
        losses: 0,
        pointsFor: 400
      },
      {
        teamName: "Aingus",
        wins: 4,
        losses: 1,
        pointsFor: 500
      },
      {
        teamName: "Dingus",
        wins: 1,
        losses: 4,
        pointsFor: 400
      },
      {
        teamName: "Cingus",
        wins: 0,
        losses: 5,
        pointsFor: 500
      },
    ],
    week13Matchups: [
      {
        teamName1: "Aingus",
        teamName2: "Bingus",
        team1Won: false
      },
      {
        teamName1: "Cingus",
        teamName2: "Dingus",
        team1Won: false
      }
    ],
    playoffTeams: 2
  };

  describe("produceAllOutcomes", function () {
    it("straight forward", function () {
      const outcomes = produceAllOutcomes(mockLeague);
      expect(outcomes[0]).toEqual(outcome1);
      expect(outcomes[1]).toEqual(outcome2);
      expect(outcomes[2]).toEqual(outcome3);
      expect(outcomes[3]).toEqual(outcome4);
      expect(outcomes.length).toBe(2 ** 2) // 2^2 is the number of possibilities for 6 coin flips
    })

    it("ass interference", function () {
      const outcomes = produceAllOutcomes(ASS_INTERFERENCE);
      expect(outcomes.length).toBe(2 ** 6); // 2^6 is the number of possibilities for 6 coin flips
    });
  });

  describe("clenchedPlayoffs", function () {
    it("straight forward", function () {
      const closeLeague: LeagueData = JSON.parse(JSON.stringify(mockLeague));
      closeLeague.week13Matchups[0].team1Won = true;
      closeLeague.week13Matchups[1].team1Won = true;

      closeLeague.playoffTeams = 1;
      expect(clinchedPlayoffs(closeLeague, "Aingus")).toEqual([{ teamName: "Bingus", pointDiff: 100 }]);
      expect(clinchedPlayoffs(closeLeague, "Bingus")).toEqual([{ teamName: "Aingus", pointDiff: -100 }]);
      expect(clinchedPlayoffs(closeLeague, "Cingus")).toBe(false);
      expect(clinchedPlayoffs(closeLeague, "Dingus")).toBe(false);

      closeLeague.playoffTeams = 2;
      expect(clinchedPlayoffs(closeLeague, "Aingus")).toBe(true);
      expect(clinchedPlayoffs(closeLeague, "Bingus")).toBe(true);
      expect(clinchedPlayoffs(closeLeague, "Cingus")).toBe(false);
      expect(clinchedPlayoffs(closeLeague, "Dingus")).toBe(false);

      closeLeague.playoffTeams = 3;
      expect(clinchedPlayoffs(closeLeague, "Aingus")).toBe(true);
      expect(clinchedPlayoffs(closeLeague, "Bingus")).toBe(true);
      expect(clinchedPlayoffs(closeLeague, "Cingus")).toEqual([{ teamName: "Dingus", pointDiff: 100 }]);
      expect(clinchedPlayoffs(closeLeague, "Dingus")).toEqual([{ teamName: "Cingus", pointDiff: -100 }]);
    });
  });
});
