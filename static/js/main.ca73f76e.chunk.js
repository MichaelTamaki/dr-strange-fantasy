(this["webpackJsonpdr-strange-fantasy"]=this["webpackJsonpdr-strange-fantasy"]||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),i=s.n(n),o=s(4),r=s.n(o),c=(s(10),s(2)),m=(s(11),{teams:[{teamName:"Spongebobthemusical",wins:8,losses:4,pointsFor:1303.35},{teamName:"The Chosen One\u2122",wins:8,losses:4,pointsFor:1615.95},{teamName:"\u2744\ufe0f\u2603\ufe0f\u2744\ufe0f",wins:8,losses:4,pointsFor:1267.85+119.85},{teamName:"Please no covid",wins:8,losses:4,pointsFor:1186.7+156.15},{teamName:"3D Glasses",wins:6,losses:6,pointsFor:1225.35+89.05},{teamName:"Tom Brady's Left Nut",wins:6,losses:6,pointsFor:1289.2},{teamName:"McCaf\xe9",wins:5,losses:7,pointsFor:1339.8},{teamName:"The LV Raiders",wins:5,losses:7,pointsFor:1311.8},{teamName:"ms. steelersyourman",wins:5,losses:7,pointsFor:1219.45+97.65},{teamName:"Saquon Barkley's ACL",wins:5,losses:7,pointsFor:1149.75},{teamName:"Qhazz Q. Qichaels",wins:5,losses:7,pointsFor:1148.2},{teamName:"Sidney with a Knife",wins:3,losses:8,pointsFor:1209.6}],week13Matchups:[{teamName1:"Qhazz Q. Qichaels",teamName2:"Spongebobthemusical"},{teamName1:"The Chosen One\u2122",teamName2:"McCaf\xe9"},{teamName1:"\u2744\ufe0f\u2603\ufe0f\u2744\ufe0f",teamName2:"Sidney with a Knife"},{teamName1:"ms. steelersyourman",teamName2:"Saquon Barkley's ACL"},{teamName1:"The LV Raiders",teamName2:"3D Glasses"},{teamName1:"Tom Brady's Left Nut",teamName2:"Please no covid"}],playoffTeams:8});m.teams.forEach((function(e){e.pointsFor=Math.round(100*e.pointsFor)/100}));var l={teams:[{teamName:"W's@Okta",wins:11,losses:1,pointsFor:1296.54},{teamName:"Sea Titans",wins:9,losses:3,pointsFor:1307.3},{teamName:"Ryan's Meme Team",wins:7,losses:5,pointsFor:1380.86},{teamName:"Losers@Okta",wins:7,losses:5,pointsFor:1321.08},{teamName:"Ryan's Team",wins:7,losses:5,pointsFor:1303.44},{teamName:"Chris's Crazy Team",wins:7,losses:5,pointsFor:1252.08},{teamName:"SF Football Team",wins:7,losses:5,pointsFor:1251.28},{teamName:"Backstreet's Back",wins:7,losses:5,pointsFor:1229.78},{teamName:"Unsportsmanlike",wins:6,losses:6,pointsFor:1158.92},{teamName:"Game of Jones",wins:5,losses:7,pointsFor:1256.68},{teamName:"Great White NorthIAN",wins:4,losses:8,pointsFor:1131.86},{teamName:"Rockers",wins:3,losses:9,pointsFor:1064.04},{teamName:"Qichael Qichaels",wins:2,losses:10,pointsFor:1153.52},{teamName:"Bill's Mafia",wins:2,losses:10,pointsFor:946.28}],week13Matchups:[{teamName1:"Qichael Qichaels",teamName2:"Sea Titans"},{teamName1:"Losers@Okta",teamName2:"Great White NorthIAN"},{teamName1:"Ryan's Meme Team",teamName2:"Bill's Mafia"},{teamName1:"Backstreet's Back",teamName2:"SF Football Team"},{teamName1:"W's@Okta",teamName2:"Chris's Crazy Team"},{teamName1:"Ryan's Team",teamName2:"Rockers"},{teamName1:"Unsportsmanlike",teamName2:"Game of Jones"}],playoffTeams:6};function u(e,t){return e.wins===t.wins?t.pointsFor-e.pointsFor:t.wins-e.wins}function h(e){var t=e.week13Matchups.findIndex((function(e){return void 0===e.team1Won}));if(-1===t)return[e];var s=e.week13Matchups[t],a=JSON.stringify(e),n=JSON.parse(a);n.week13Matchups[t].team1Won=!0;var i=n.teams.find((function(e){return e.teamName===s.teamName1})),o=n.teams.find((function(e){return e.teamName===s.teamName2}));i.wins+=1,o.losses+=1,n.teams.sort(u);var r=h(n),c=JSON.parse(a);c.week13Matchups[t].team1Won=!1;var m=c.teams.find((function(e){return e.teamName===s.teamName1})),l=c.teams.find((function(e){return e.teamName===s.teamName2}));m.losses+=1,l.wins+=1,c.teams.sort(u);var j=h(c);return r.concat(j)}function j(e,t){var s=e.teams.findIndex((function(e){return e.teamName===t}));if(-1===s)throw new Error("whaaa???");var a=e.teams[s],n=e.teams[e.playoffTeams-1],i=e.teams[e.playoffTeams];return a.wins===n.wins&&n.wins===i.wins?e.teams.filter((function(e){return e.wins===a.wins&&e!==a})).map((function(e){return{teamName:e.teamName,pointDiff:Math.round(100*(a.pointsFor-e.pointsFor))/100}})):s<e.playoffTeams}var d=s.p+"static/media/dr-strange-thinking.21fec87a.jpeg",f=s.p+"static/media/dr-strange-talking.419c1dfe.jpeg";var p=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),s=t[0],i=t[1],o=Object(n.useState)(),r=Object(c.a)(o,2),u=r[0],p=r[1],b=Object(n.useState)(),N=Object(c.a)(b,2),O=N[0],x=N[1],w=Object(n.useState)(0),F=Object(c.a)(w,2),g=F[0],y=F[1],k=Object(n.useState)([]),v=Object(c.a)(k,2),T=v[0],S=v[1],C=Object(n.useState)(),M=Object(c.a)(C,2),W=M[0],B=M[1];function L(e,t){var s=T.findIndex((function(t){return t.matchupIndex===e}));if(-1!==s&&T.splice(s,1)[0].team1Won===t)return void S(T.splice(0));T.push({matchupIndex:e,team1Won:t}),S(T.splice(0))}return Object(n.useEffect)((function(){var e=h(0===s?m:l);p(e),x(e),y(0),S([]),B(e[0].teams[0].teamName)}),[s]),Object(n.useEffect)((function(){u&&(x(u.filter((function(e){return T.every((function(t){return e.week13Matchups[t.matchupIndex].team1Won===t.team1Won}))}))),y(0))}),[u,T]),O&&W?Object(a.jsxs)("div",{style:{maxWidth:"800px",margin:"auto"},children:[Object(a.jsx)("img",{style:{maxWidth:"500px"},src:d,alt:"Doctor Strange Thinking"}),Object(a.jsx)("div",{children:Object(a.jsxs)("select",{value:s,onChange:function(e){i(Number(e.target.value))},children:[Object(a.jsx)("option",{value:"0",children:"Interference"}),Object(a.jsx)("option",{value:"1",children:"OKTA - AFL"})]})}),Object(a.jsx)("h2",{children:"Week 13 Matchups"}),Object(a.jsx)("p",{children:"Click on a team to lock a win for the matchup"}),Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Team 1"}),Object(a.jsx)("th",{children:"vs."}),Object(a.jsx)("th",{children:"Team 2"})]})}),Object(a.jsx)("tbody",{children:O[g].week13Matchups.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{onClick:function(){return L(t,!0)},children:e.teamName1}),Object(a.jsx)("td",{style:{background:T.find((function(e){return t===e.matchupIndex}))&&"green"},children:e.team1Won?"<-":"->"}),Object(a.jsx)("td",{onClick:function(){return L(t,!1)},children:e.teamName2})]})}))})]}),Object(a.jsxs)("p",{children:["Outcome ",g+1," out of ",O.length]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){return g+1<O.length&&y(g+1)},children:"+"}),Object(a.jsx)("button",{onClick:function(){return g-1>=0&&y(g-1)},children:"-"})]}),Object(a.jsx)("h2",{children:"Teams"}),Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Team"}),Object(a.jsx)("th",{children:"Wins"}),Object(a.jsx)("th",{children:"Losses"}),Object(a.jsx)("th",{children:"Points For"}),Object(a.jsx)("th",{children:"Point differentials to get playoffs"})]})}),Object(a.jsx)("tbody",{children:O[g].teams.map((function(e,t){var s=j(O[g],e.teamName);return Object(a.jsxs)("tr",{style:{background:!0===s?"green":!1===s?"red":void 0},children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:e.teamName}),Object(a.jsx)("td",{children:e.wins}),Object(a.jsx)("td",{children:e.losses}),Object(a.jsx)("td",{children:e.pointsFor}),Object(a.jsx)("td",{children:!0!==s&&!1!==s&&s.map((function(e){return Object(a.jsx)("p",{children:e.pointDiff<0?"Beat ".concat(e.teamName," by ").concat(-e.pointDiff," pts"):"".concat(e.teamName," must beat you by ").concat(e.pointDiff," pts")})}))})]})}))})]}),Object(a.jsx)("h2",{children:"Given a team, how many outcomes lead to playoffs?"}),Object(a.jsx)("select",{value:W,onChange:function(e){B(e.target.value)},children:O[g].teams.map((function(e,t){return Object(a.jsx)("option",{value:e.teamName,children:e.teamName})}))}),Object(a.jsxs)("p",{children:["Out of ",O.length," outcomes..."]}),Object(a.jsxs)("p",{children:["You are guaranteed playoffs in ",O.filter((function(e){return!0===j(e,W)})).length," outcomes"]}),Object(a.jsxs)("p",{children:["You are on the edge of playoffs in ",O.filter((function(e){return"object"===typeof j(e,W)})).length," outcomes"]}),Object(a.jsxs)("p",{children:["You are eliminated from playoffs in ",O.filter((function(e){return!1===j(e,W)})).length," outcomes"]}),Object(a.jsx)("img",{style:{maxWidth:"500px"},src:f,alt:"Doctor Strange Thinking"})]}):Object(a.jsx)("h1",{children:"Loading..."})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),a(e),n(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.ca73f76e.chunk.js.map