var roomName = "Real soccer x5 Beagertest";
var maxPlayers = 10;
var roomPublic = true;
var playerName = "Beager fake";
 
/* STADIUM */
//Os valores se aplicam ao campo em que a partida é jogada - os valores padrão são o mapa oficial RS
var stadiumWidth = 1150;
var stadiumHeight = 600;
var radiusBall = 10;
var throwInLeeway = 350;
var greenLine = 510;
 
/* SETTINGS */
 
var triggerDistance = radiusBall + 15 + 0.19;
var outLineY = stadiumWidth - (radiusBall / 2) + 6;
stadiumWidth += (radiusBall / 2) + 6;
stadiumHeight += (radiusBall / 2) + 6;
var abuser = 0;
 
var Team = {
    SPECTATORS: 0,
    RED: 1,
    BLUE: 2
};
var lastScores = 0;
var lastTeamTouched = 0;
var lineBallPosition;
var exitingPos = null;
var previousBallPos;
var assistingTouch = "";
var lastPlayerTouched = "";
var lat = -14.2;
var long = -51.9;
var backMSG = false;
var lastCall;
var isBallUp = false;
var crossed = false;
var isTimeAddedShown = false;
var isTimeAddedShowndos = false;
var isTimeAddedShowntres = false;
var isTimeAddedShowncuatro = false;
var isTimeAddedShowncinco = false;
var isTimeAddedShownseis = false;
var isTimeAddedShownquince = false;
var isTimeAddedShownsiete = false;
var lineCrossedPlayers = [{name: "temp", times: 0}];
var isBallKickedOutside = false;
var previousPlayerTouched;
var timeOutside = 0;
var db = { p: { N: 13, kt: 2 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spammerosFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 4000) > db.p.kt) { room.kickPlayer(player.id, "Spamma não parceiro ", true); } } }
var db = { p: { N: 6, kt: 1 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spamFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 1000) > db.p.kt) { room.kickPlayer(player.id, "Sem spam", true); } } }
var room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: playerName,token: "thr1.AAAAAFyRjgZMy18R2w9YjQ.-FYMqQV18YE", geo: {code: 'br', lat: -23, lon: -46}});
var RSHLMap=`
{

	"name" : "Escreva !help para ver os comandos",

	"width" : 1500,

	"height" : 734,

	"spawnDistance" : 300,

	"bg" : { "type" : "grass", "width" : 1150, "height" : 600, "kickOffRadius" : 180, "cornerRadius" : 0 },

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65

	},

	"ballPhysics" : {
		"radius" : 10,
		"bCoef" : 0.5,
		"invMass" : 1,
		"damping" : 0.99,
		"color" : "FFFFFF",
		"cMask" : [ "all"
		],
		"cGroup" : [ "ball"
		]

	},

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : 660, "trait" : "kickOffBarrier" },
		/* 1 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "C7E6BD" },
		/* 2 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "C7E6BD" },
		/* 3 */ { "x" : 0, "y" : -660, "trait" : "kickOffBarrier" },
		
		/* 4 */ { "x" : 1150, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 5 */ { "x" : 840, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 6 */ { "x" : 1150, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 7 */ { "x" : 840, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 8 */ { "x" : 1150, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 9 */ { "x" : 1031, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 10 */ { "x" : 1150, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 11 */ { "x" : 1029, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 12 */ { "x" : 840, "y" : -170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 13 */ { "x" : 840, "y" : 170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 14 */ { "x" : -1150, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 15 */ { "x" : -840, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 16 */ { "x" : -1150, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 17 */ { "x" : -840, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 18 */ { "x" : -1150, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 19 */ { "x" : -1030, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 20 */ { "x" : -1150, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 21 */ { "x" : -1030, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 22 */ { "x" : -840, "y" : 170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 23 */ { "x" : -840, "y" : -170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 24 */ { "x" : 935, "y" : 4, "trait" : "line", "color" : "a7cf9b" },
		/* 25 */ { "x" : 935, "y" : -4, "trait" : "line", "color" : "a7cf9b" },
		/* 26 */ { "x" : -935, "y" : 4, "trait" : "line", "color" : "a7cf9b" },
		/* 27 */ { "x" : -935, "y" : -4, "trait" : "line", "color" : "a7cf9b" },
		/* 28 */ { "x" : -1150, "y" : 574, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 29 */ { "x" : -1125, "y" : 599, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 30 */ { "x" : -1125, "y" : -600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 31 */ { "x" : -1150, "y" : -575, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 32 */ { "x" : 1124, "y" : 600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 33 */ { "x" : 1150, "y" : 574, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 34 */ { "x" : 1150, "y" : -574, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 35 */ { "x" : 1124, "y" : -600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "b3d4a7" },
		/* 36 */ { "x" : 0, "y" : -4, "trait" : "line", "color" : "b3d4a7" },
		/* 37 */ { "x" : 0, "y" : 4, "trait" : "line", "color" : "b3d4a7" },
		/* 38 */ { "x" : 0, "y" : -4, "trait" : "line", "color" : "b3d4a7" },
		/* 39 */ { "x" : 0, "y" : 4, "trait" : "line", "color" : "b3d4a7" },
		/* 40 */ { "x" : -1170, "y" : 150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 41 */ { "x" : -1170, "y" : 250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 42 */ { "x" : 1170, "y" : 150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 43 */ { "x" : 1170, "y" : 250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 44 */ { "x" : -1170, "y" : -150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 45 */ { "x" : -1170, "y" : -250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 46 */ { "x" : 1170, "y" : -150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 47 */ { "x" : 1170, "y" : -250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 48 */ { "x" : 1161, "y" : -599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 49 */ { "x" : 1189, "y" : -579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 50 */ { "x" : 1161, "y" : 599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 51 */ { "x" : 1189, "y" : 579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 52 */ { "x" : -1162, "y" : 599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 53 */ { "x" : -1190, "y" : 579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 54 */ { "x" : -1162, "y" : -600, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 55 */ { "x" : -1190, "y" : -580, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		
		/* 56 */ { "x" : -1177, "y" : -250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 57 */ { "x" : -1177, "y" : -150, "cMask" : ["ball" ] },
		
		/* 58 */ { "x" : -1170, "y" : 250, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 59 */ { "x" : -1177, "y" : 250, "bCoef" : 0, "cMask" : ["ball" ] },
		
		/* 60 */ { "x" : -1170, "y" : 150, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 61 */ { "x" : -1177, "y" : 150, "cMask" : ["ball" ] },
		/* 62 */ { "x" : 1177, "y" : -250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 63 */ { "x" : 1177, "y" : -150, "cMask" : ["ball" ] },
		
		/* 64 */ { "x" : 1170, "y" : -150, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 65 */ { "x" : 1170, "y" : -250, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 66 */ { "x" : 1177, "y" : 250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 67 */ { "x" : 1177, "y" : 150, "cMask" : ["ball" ] },
		
		/* 68 */ { "x" : 1170, "y" : 250, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 69 */ { "x" : 1170, "y" : 150, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 70 */ { "x" : 0, "y" : 180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : -180 },
		/* 71 */ { "x" : 0, "y" : -180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : -180 },
		/* 72 */ { "x" : 0, "y" : -180, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		/* 73 */ { "x" : 0, "y" : 180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : 0 },
		/* 74 */ { "x" : 0, "y" : -180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : 0 },
		/* 75 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		/* 76 */ { "x" : 0, "y" : 180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		/* 77 */ { "x" : 0, "y" : -180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		
		/* 78 */ { "x" : -818, "y" : -600, "trait" : "line", "curve" : 90, "color" : "638750" },
		/* 79 */ { "x" : -1150, "y" : -347, "trait" : "line", "curve" : 90, "color" : "638750" },
		/* 80 */ { "x" : -1150, "y" : 347, "trait" : "line", "color" : "638750" },
		/* 81 */ { "x" : -820, "y" : 600, "trait" : "line", "color" : "638750" },
		/* 82 */ { "x" : 820, "y" : 600, "trait" : "line", "color" : "638750" },
		/* 83 */ { "x" : 1150, "y" : 347, "trait" : "line", "color" : "638750" },
		/* 84 */ { "x" : 820, "y" : -600, "trait" : "line", "curve" : -90, "color" : "638750" },
		/* 85 */ { "x" : 1150, "y" : -347, "trait" : "line", "curve" : -90, "color" : "638750" },
		/* 86 */ { "x" : 1150, "y" : -525, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 87 */ { "x" : -1150, "y" : -525, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 88 */ { "x" : 1150, "y" : 525, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 89 */ { "x" : -1150, "y" : 525, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 90 */ { "x" : -1150, "y" : -600, "trait" : "line", "color" : "b3d4a7" },
		/* 91 */ { "x" : -1150, "y" : 600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFF00" },
		/* 92 */ { "x" : 1150, "y" : 600, "trait" : "line", "color" : "b3d4a7" },
		/* 93 */ { "x" : 1150, "y" : -600, "trait" : "line", "color" : "b3d4a7" },
		
		/* 94 */ { "x" : -1416, "y" : -475, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 95 */ { "x" : -1300, "y" : -475, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 96 */ { "x" : -1300, "y" : 475, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 97 */ { "x" : -1416, "y" : 475, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 98 */ { "x" : -1414, "y" : -475, "trait" : "kickOffBarrier" },
		/* 99 */ { "x" : -1300, "y" : -475, "trait" : "kickOffBarrier" },
		/* 100 */ { "x" : -1300, "y" : 475, "trait" : "kickOffBarrier" },
		/* 101 */ { "x" : -1416, "y" : 475, "trait" : "kickOffBarrier" },
		
		/* 102 */ { "x" : -1356, "y" : -76, "bCoef" : 0, "cMask" : ["blue" ], "color" : "6666FF" },
		/* 103 */ { "x" : -1356, "y" : 84, "bCoef" : 0, "cMask" : ["blue" ], "color" : "6666FF" },
		/* 104 */ { "x" : -1361, "y" : -76, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 105 */ { "x" : -1351, "y" : -76, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 106 */ { "x" : -1361, "y" : 84, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 107 */ { "x" : -1351, "y" : 84, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 108 */ { "x" : -1410, "y" : -76, "bCoef" : 0, "cMask" : ["red" ] },
		/* 109 */ { "x" : -1410, "y" : 84, "bCoef" : 0, "cMask" : ["red" ] },
		/* 110 */ { "x" : 1400, "y" : -475, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400 },
		/* 111 */ { "x" : 1300, "y" : -475, "bCoef" : 0, "cMask" : ["red" ] },
		/* 112 */ { "x" : 1300, "y" : 475, "bCoef" : 0, "cMask" : ["red" ] },
		/* 113 */ { "x" : 1400, "y" : 475, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400 },
		
		/* 114 */ { "x" : 1400, "y" : -475, "trait" : "kickOffBarrier", "dist" : -1400 },
		/* 115 */ { "x" : 1300, "y" : -475, "trait" : "kickOffBarrier" },
		/* 116 */ { "x" : 1300, "y" : 475, "trait" : "kickOffBarrier" },
		/* 117 */ { "x" : 1400, "y" : 475, "trait" : "kickOffBarrier", "dist" : -1400 },
		
		/* 118 */ { "x" : 1345, "y" : -82, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF6666" },
		/* 119 */ { "x" : 1345, "y" : 78, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF6666" },
		/* 120 */ { "x" : 1350, "y" : -82, "bCoef" : 0, "cMask" : ["red" ] },
		/* 121 */ { "x" : 1340, "y" : -82, "bCoef" : 0, "cMask" : ["red" ] },
		/* 122 */ { "x" : 1350, "y" : 78, "bCoef" : 0, "cMask" : ["red" ] },
		/* 123 */ { "x" : 1340, "y" : 78, "bCoef" : 0, "cMask" : ["red" ] },
		/* 124 */ { "x" : 1410, "y" : -82, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 125 */ { "x" : 1410, "y" : 78, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 126 */ { "x" : 1150, "y" : -120.92552225676228, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7", "curve" : 0 },
		/* 127 */ { "x" : 1212.8375029631984, "y" : -120.92552225676228, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 128 */ { "x" : 1150.1431278225696, "y" : 116.05779951814779, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 129 */ { "x" : 1212.9145962189946, "y" : 116.05779951814779, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 130 */ { "x" : 1150, "y" : 116.05779951814779, "bCoef" : 0, "cMask" : ["wall" ], "curve" : 0, "color" : "b3d4a7" },
		/* 131 */ { "x" : 1259, "y" : -148.867722739, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 132 */ { "x" : 1259.5, "y" : 144, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 133 */ { "x" : 1213.8375029631984, "y" : -118.92552225676228, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 134 */ { "x" : 1260, "y" : -146.867722739, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 135 */ { "x" : 1207.8375029631984, "y" : -119.92552225676228, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 136 */ { "x" : 1254, "y" : -147.867722739, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 137 */ { "x" : 1211.9145962189946, "y" : 117.05779951814779, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 138 */ { "x" : 1258.5, "y" : 145, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 139 */ { "x" : 1150, "y" : -120, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "C7E6BD", "curve" : 0 },
		/* 140 */ { "x" : 1213, "y" : -120, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "curve" : 0 },
		/* 141 */ { "x" : 1150, "y" : 116, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 142 */ { "x" : 1213, "y" : 116, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "curve" : 0 },
		/* 143 */ { "x" : -1150, "y" : 118.00879788978456, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7", "curve" : 0 },
		/* 144 */ { "x" : -1213.3215131279903, "y" : 117.74394897515494, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 145 */ { "x" : -1149.628852252629, "y" : -118.97302216202547, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 146 */ { "x" : -1212.3997630875529, "y" : -119.23759275268432, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 147 */ { "x" : -1150, "y" : -118.97241890367377, "bCoef" : 0, "cMask" : ["wall" ], "curve" : 0, "color" : "b3d4a7" },
		/* 148 */ { "x" : -1259.6013715431845, "y" : 145.49133453725509, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 149 */ { "x" : -1258.866981665902, "y" : -147.37589424369935, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 150 */ { "x" : -1213.3130746008003, "y" : 119.7397519175683, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 151 */ { "x" : -1259.5929330159947, "y" : 147.48713747966846, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 152 */ { "x" : -1215.3871097379695, "y" : -119.24178092786758, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 153 */ { "x" : -1261.8543283163185, "y" : -147.3800824188826, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 154 */ { "x" : -1150.4806674009055, "y" : 117.08328385388425, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "C7E6BD", "curve" : 0 },
		/* 155 */ { "x" : -1213.4801078094943, "y" : 116.81775004310506, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "curve" : 0 },
		/* 156 */ { "x" : -1149.485969316082, "y" : -118.91461989892463, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 157 */ { "x" : -1212.4854097246707, "y" : -119.1801537097038, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "curve" : 0, "radius" : 1 },
		
		/* 158 */ { "x" : -1150, "y" : -602, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 159 */ { "x" : -1150, "y" : -620.49609375, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 160 */ { "x" : -1148, "y" : -620.49609375, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 161 */ { "x" : -1148, "y" : -602, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 162 */ { "x" : 1149.968665547433, "y" : -618.9686646206542, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 163 */ { "x" : 1150.0694602019682, "y" : -600.4728455134504, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 164 */ { "x" : 1148.069489899352, "y" : -600.4619464927276, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 165 */ { "x" : 1147.9686952448167, "y" : -618.9577655999315, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 166 */ { "x" : 1158, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 167 */ { "x" : 1168, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 168 */ { "x" : 1149, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		/* 169 */ { "x" : 1158, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 170 */ { "x" : 1149, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 171 */ { "x" : 1168, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		
		/* 172 */ { "x" : 1149.7396826762401, "y" : 597.9263578863065, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 173 */ { "x" : 1153.08526210564, "y" : 579.1424902194007, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 174 */ { "x" : 1155.0010783610655, "y" : 579.7166400913391, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 175 */ { "x" : 1151.7040246689874, "y" : 598.3023373212908, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 176 */ { "x" : 1161.6678517948505, "y" : 578.0712784773244, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 177 */ { "x" : 1171.2713154212654, "y" : 580.8593757453787, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 178 */ { "x" : 1153.0247345310775, "y" : 575.5619909360759, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		/* 179 */ { "x" : 1160.6641350766317, "y" : 581.528531244323, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 180 */ { "x" : 1152.0210178128586, "y" : 579.0192437030742, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 181 */ { "x" : 1170.2675987030466, "y" : 584.316628512377, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		
		/* 182 */ { "x" : -1152.8011166944932, "y" : 581.2713204942369, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 183 */ { "x" : -1150.0489225384003, "y" : 599.5615066971152, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 184 */ { "x" : -1152.026657561816, "y" : 599.8591040377528, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 185 */ { "x" : -1154.7788517179088, "y" : 581.5689178348746, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 186 */ { "x" : -1162.170956870286, "y" : 578.11573185304, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 187 */ { "x" : -1152.4133863896525, "y" : 575.9271664975008, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 188 */ { "x" : -1170.9527703028564, "y" : 580.085440673025, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		/* 189 */ { "x" : -1161.383072006498, "y" : 581.6284631816164, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 190 */ { "x" : -1170.1648854390683, "y" : 583.5981720016015, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 191 */ { "x" : -1151.6255015258641, "y" : 579.4398978260773, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		/* 192 */ { "x" : -1159, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E", "radius" : 20 },
		
		/* 193 */ { "x" : -1149, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49", "radius" : 20 },
		
		/* 194 */ { "x" : -1168, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E", "radius" : 20 },
		/* 195 */ { "x" : -1159, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E", "radius" : 20 },
		
		/* 196 */ { "x" : -1168, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49", "radius" : 20 },
		
		/* 197 */ { "x" : -1149, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E", "radius" : 20 },
		
		/* 198 */ { "bCoef" : 1, "cMask" : ["ball" ], "x" : 1160, "y" : -126, "vis" : false },
		/* 199 */ { "bCoef" : 1, "cMask" : ["ball" ], "x" : 1299, "y" : -126, "vis" : false },
		/* 200 */ { "bCoef" : 1, "cMask" : ["ball" ], "x" : 1161, "y" : 122, "vis" : false },
		/* 201 */ { "bCoef" : 1, "cMask" : ["ball" ], "x" : 1297, "y" : 122, "vis" : false },
		/* 202 */ { "bCoef" : 1, "cMask" : ["ball" ], "x" : -1155, "y" : -123, "vis" : false, "curve" : 0 },
		/* 203 */ { "bCoef" : 1, "cMask" : ["ball" ], "x" : -1296, "y" : -123, "vis" : false, "curve" : 0 },
		/* 204 */ { "bCoef" : 1, "cMask" : ["ball" ], "x" : -1154, "y" : 120, "vis" : false, "curve" : 0 },
		/* 205 */ { "bCoef" : 1, "cMask" : ["ball" ], "x" : -1298, "y" : 120, "vis" : false, "curve" : 0 },
		/* 206 */ { "x" : -70, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 207 */ { "x" : -90, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 208 */ { "x" : -70, "y" : 687, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 209 */ { "x" : -110, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 210 */ { "x" : -130, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 211 */ { "x" : -150, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 212 */ { "x" : -170, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 213 */ { "x" : -190, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 214 */ { "x" : -210, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 215 */ { "x" : -230, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 216 */ { "x" : -250, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 217 */ { "x" : -287.01500879340676, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 218 */ { "x" : -286.93953763264415, "y" : 687, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 219 */ { "x" : -270, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 220 */ { "x" : -286.93953763264415, "y" : 730, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 221 */ { "x" : -286.93953763264415, "y" : 698, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 222 */ { "x" : -70, "y" : 730, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 223 */ { "x" : -70, "y" : 698, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 224 */ { "x" : 297, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 225 */ { "x" : 277, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 226 */ { "x" : 297, "y" : 687, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 227 */ { "x" : 257, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 228 */ { "x" : 237, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 229 */ { "x" : 217, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 230 */ { "x" : 197, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 231 */ { "x" : 177, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 232 */ { "x" : 157, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 233 */ { "x" : 137, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 234 */ { "x" : 117, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 235 */ { "x" : 79.98499120659324, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 236 */ { "x" : 80.06046236735585, "y" : 687, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 237 */ { "x" : 97, "y" : 667, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "color" : "ffffff" },
		/* 238 */ { "x" : 80.06046236735585, "y" : 730, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 239 */ { "x" : 80.06046236735585, "y" : 698, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 240 */ { "x" : 297, "y" : 730, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 241 */ { "x" : 297, "y" : 698, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 242 */ { "x" : -199, "y" : 711, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : -400 },
		/* 243 */ { "x" : -199, "y" : 700, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : -400 },
		/* 244 */ { "x" : 164, "y" : 704, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : -400 },
		/* 245 */ { "x" : 166, "y" : 696, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : -400 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "kickOffBarrier" },
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		
		{ "v0" : 4, "v1" : 5, "color" : "b3d4a7", "trait" : "line", "y" : 250 },
		{ "v0" : 5, "v1" : 7, "color" : "b3d4a7", "trait" : "line", "x" : 840 },
		{ "v0" : 6, "v1" : 7, "color" : "b3d4a7", "trait" : "line", "y" : -250 },
		{ "v0" : 8, "v1" : 9, "color" : "b3d4a7", "trait" : "line", "y" : 195 },
		{ "v0" : 9, "v1" : 11, "color" : "b3d4a7", "trait" : "line", "x" : 1030 },
		{ "v0" : 10, "v1" : 11, "color" : "b3d4a7", "trait" : "line", "y" : -150 },
		{ "v0" : 12, "v1" : 13, "curve" : -110, "color" : "b3d4a7", "trait" : "line", "x" : 840 },
		{ "v0" : 14, "v1" : 15, "color" : "b3d4a7", "trait" : "line", "y" : -337 },
		{ "v0" : 15, "v1" : 17, "color" : "b3d4a7", "trait" : "line", "x" : -840 },
		{ "v0" : 16, "v1" : 17, "color" : "b3d4a7", "trait" : "line", "y" : 250 },
		{ "v0" : 18, "v1" : 19, "color" : "b3d4a7", "trait" : "line", "y" : -150 },
		{ "v0" : 19, "v1" : 21, "color" : "b3d4a7", "trait" : "line", "x" : -1030 },
		{ "v0" : 20, "v1" : 21, "color" : "b3d4a7", "trait" : "line", "y" : 150 },
		{ "v0" : 22, "v1" : 23, "curve" : -110, "color" : "b3d4a7", "trait" : "line", "x" : -840 },
		{ "v0" : 24, "v1" : 25, "curve" : -180, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -180, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 180, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 180, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 90, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 90, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : -90, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -90, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 28, "v1" : 29, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 32, "v1" : 33, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 34, "v1" : 35, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -180, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 38, "v1" : 39, "curve" : 180, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -90, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 38, "v1" : 39, "curve" : 90, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 40, "v1" : 41, "curve" : 40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		{ "v0" : 42, "v1" : 43, "curve" : -40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : 1220 },
		{ "v0" : 44, "v1" : 45, "curve" : -40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		{ "v0" : 46, "v1" : 47, "curve" : 40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : 1220 },
		{ "v0" : 48, "v1" : 49, "curve" : -60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 50, "v1" : 51, "curve" : 60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 52, "v1" : 53, "curve" : -60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 54, "v1" : 55, "curve" : 60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		
		{ "v0" : 45, "v1" : 56, "vis" : true, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 44, "v1" : 57, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 61, "v1" : 60, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 59, "v1" : 58, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 67, "v1" : 69, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		{ "v0" : 66, "v1" : 68, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		{ "v0" : 62, "v1" : 65, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		{ "v0" : 63, "v1" : 64, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		
		{ "v0" : 70, "v1" : 71, "curve" : 180, "vis" : true, "color" : "b3d4a7", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 70, "v1" : 71, "curve" : -180, "vis" : true, "color" : "b3d4a7", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 74, "v1" : 73, "vis" : true, "color" : "b3d4a7", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		
		{ "v0" : 78, "v1" : 79, "curve" : 90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 80, "v1" : 81, "curve" : 90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 82, "v1" : 83, "curve" : 90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 84, "v1" : 85, "curve" : -90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "638750", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "y" : -525 },
		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "638750", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "y" : 525 },
		{ "v0" : 90, "v1" : 91, "vis" : true, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 91, "v1" : 92, "vis" : true, "color" : "b3d4a7", "trait" : "line", "y" : 600 },
		{ "v0" : 90, "v1" : 93, "vis" : true, "color" : "b3d4a7", "trait" : "line", "y" : -600 },
		{ "v0" : 92, "v1" : 93, "vis" : true, "color" : "b3d4a7", "trait" : "line" },
		
		{ "v0" : 94, "v1" : 95, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : -475 },
		{ "v0" : 95, "v1" : 96, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "x" : -1300 },
		{ "v0" : 96, "v1" : 97, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : 475 },
		
		{ "v0" : 98, "v1" : 99, "trait" : "kickOffBarrier", "y" : -475 },
		{ "v0" : 100, "v1" : 101, "trait" : "kickOffBarrier", "y" : 475 },
		
		{ "v0" : 102, "v1" : 103, "color" : "6666FF", "bCoef" : 1000000, "cMask" : ["blue" ] },
		{ "v0" : 104, "v1" : 105, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 106, "v1" : 107, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 108, "v1" : 109, "vis" : false, "bCoef" : 1000000, "cMask" : ["red" ], "x" : -1410 },
		{ "v0" : 110, "v1" : 111, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : -475 },
		{ "v0" : 111, "v1" : 112, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "x" : 1300 },
		{ "v0" : 112, "v1" : 113, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : 475 },
		
		{ "v0" : 114, "v1" : 115, "trait" : "kickOffBarrier", "y" : -475 },
		{ "v0" : 116, "v1" : 117, "trait" : "kickOffBarrier", "y" : 475 },
		
		{ "v0" : 118, "v1" : 119, "color" : "FF6666", "bCoef" : 1000000, "cMask" : ["red" ] },
		{ "v0" : 120, "v1" : 121, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 122, "v1" : 123, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 124, "v1" : 125, "vis" : false, "bCoef" : 1000000, "cMask" : ["blue" ], "x" : 1410 },
		{ "v0" : 126, "v1" : 130, "curve" : 0, "vis" : true, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "x" : 1150 },
		{ "v0" : 127, "v1" : 131, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 129, "v1" : 132, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 133, "v1" : 134, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 135, "v1" : 136, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 137, "v1" : 138, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 139, "v1" : 140, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet" },
		{ "v0" : 141, "v1" : 142, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet" },
		
		{ "v0" : 143, "v1" : 147, "curve" : 0, "vis" : true, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1150 },
		{ "v0" : 144, "v1" : 148, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 146, "v1" : 149, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 150, "v1" : 151, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 152, "v1" : 153, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 154, "v1" : 155, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet" },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet" },
		
		{ "v0" : 158, "v1" : 159, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 160, "v1" : 161, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		
		{ "v0" : 162, "v1" : 163, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 164, "v1" : 165, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 167, "v1" : 167, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148 },
		
		{ "v0" : 166, "v1" : 168, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 169, "v1" : 170, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 169, "v1" : 170, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 170, "v1" : 170, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 169, "v1" : 171, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 172, "v1" : 173, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 174, "v1" : 175, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 176, "v1" : 177, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 176, "v1" : 177, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 177, "v1" : 177, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148 },
		
		{ "v0" : 176, "v1" : 178, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 179, "v1" : 180, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 179, "v1" : 180, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 180, "v1" : 180, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 179, "v1" : 181, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 182, "v1" : 183, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 184, "v1" : 185, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 187, "v1" : 187, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148 },
		
		{ "v0" : 186, "v1" : 188, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 189, "v1" : 190, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 189, "v1" : 190, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 190, "v1" : 190, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 189, "v1" : 191, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 192, "v1" : 193, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		{ "v0" : 192, "v1" : 193, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		{ "v0" : 193, "v1" : 193, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148, "radius" : 20 },
		
		{ "v0" : 192, "v1" : 194, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "radius" : 20 },
		
		{ "v0" : 195, "v1" : 196, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		{ "v0" : 195, "v1" : 196, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		{ "v0" : 196, "v1" : 196, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		
		{ "v0" : 195, "v1" : 197, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "radius" : 20 },
		
		{ "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "v0" : 198, "v1" : 199, "y" : -126 },
		{ "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "v0" : 200, "v1" : 201, "y" : 122 },
		
		{ "vis" : true, "color" : "FFFFFF", "trait" : "line", "v0" : 142, "v1" : 140 },
		{ "vis" : true, "color" : "FFFFFF", "trait" : "line", "v0" : 155, "v1" : 157 },
		
		{ "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "v0" : 202, "v1" : 203, "y" : -123 },
		{ "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "v0" : 204, "v1" : 205, "y" : 120 },
		{ "v0" : 206, "v1" : 207, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 206, "v1" : 208, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : -70 },
		{ "v0" : 209, "v1" : 210, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : 667 },
		{ "v0" : 211, "v1" : 212, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : 667 },
		{ "v0" : 213, "v1" : 214, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : 667 },
		{ "v0" : 215, "v1" : 216, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : 667 },
		{ "v0" : 217, "v1" : 218, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 217, "v1" : 219, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 220, "v1" : 221, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : -286.93953763264415 },
		{ "v0" : 222, "v1" : 223, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : -70 },
		{ "v0" : 224, "v1" : 225, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 224, "v1" : 226, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : -70 },
		{ "v0" : 227, "v1" : 228, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : 667 },
		{ "v0" : 229, "v1" : 230, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : 667 },
		{ "v0" : 231, "v1" : 232, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : 667 },
		{ "v0" : 233, "v1" : 234, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : 667 },
		{ "v0" : 235, "v1" : 236, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 235, "v1" : 237, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 238, "v1" : 239, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : -286.93953763264415 },
		{ "v0" : 240, "v1" : 241, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : -70 },
		{ "v0" : 242, "v1" : 243, "curve" : -328.13941952332465, "vis" : false, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 244, "v1" : 245, "curve" : -336.8674849233308, "vis" : false, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] }

	],

	"goals" : [
		{ "p0" : [-1160,115 ], "p1" : [-1160,-116.89189189189187 ], "team" : "red" },
		{ "p0" : [1160,115.16891891891896 ], "p1" : [1160,-117.98923923923925 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [1150,-119 ], "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [1150,116 ], "trait" : "goalPost" },
		
		{ "radius" : 1.3, "invMass" : 0, "pos" : [1259.5,144 ], "color" : "4a4e52", "cMask" : ["ball" ] },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [1257.5,-147 ], "color" : "4a4e52", "cMask" : ["ball" ] },
		
		{ "radius" : 5, "pos" : [-1150,116.08750755868094 ], "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [-1150,-118.91461989892463 ], "trait" : "goalPost" },
		
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-1257.8669727834986,-146.38010906609267 ], "color" : "4a4e52", "cMask" : ["ball" ] },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-1258.0977098047515,144.62151209452182 ], "color" : "4a4e52", "cMask" : ["ball" ] },
		
		{ "radius" : 1.5, "pos" : [-1150.5542972394846,-600.1732586129118 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [1150.4457027605154,-600.1732586129118 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [1148.8518594069587,599.6163281131223 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [-1149.6336058891993,599.8040409312609 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		
		{ "radius" : 15, "invMass" : 1e-27, "pos" : [-181,705 ], "color" : "4D4C48", "bCoef" : 1000, "cMask" : ["red" ], "cGroup" : ["wall" ], "damping" : 1, "speed" : [0,-0.5 ] },
		{ "radius" : 15, "invMass" : 1e-27, "pos" : [185,705 ], "color" : "403F45", "bCoef" : 1000, "cMask" : ["red" ], "cGroup" : ["wall" ], "damping" : 1, "speed" : [0,-0.5 ] },
		
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-1213,-115.94335025910397 ], "color" : "EBEBEB", "cMask" : ["red","blue" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-1213,114.01959566270045 ], "color" : "EBEBEB", "cMask" : ["red","blue" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [1215.3026132256864,-117.94335025910397 ], "color" : "EBEBEB", "cMask" : ["red","blue" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [1214.2683113988894,114.01959566270044 ], "color" : "EBEBEB", "cMask" : ["red","blue" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0, "_selected" : true },
		
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,-104 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,-92 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,-80 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,-66 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,-54 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,-42 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,-30 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,-17 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,-5 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,7 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,21 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,33 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,45 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,57 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,70 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,84 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1231,96 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1222,-110 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [-1223,106 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1230.2111411003648,101.02219858837724 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1230.1818536511014,89.02223432820897 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1230.1525662018378,77.0222700680407 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1230.1183975110305,63.02231176451105 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1230.089110061767,51.02234750434279 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1230.0598226125035,39.022383244174534 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1230.03053516324,27.022418984006265 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.9988070932047,14.022457702157311 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.9695196439413,2.022493441989056 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.940232194678,-9.977470818179214 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.9060635038704,-23.977429121708838 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.876776054607,-35.97739338187711 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.8474886053436,-47.97735764204538 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.8182011560802,-59.977321902213646 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.786473086045,-72.97728318406257 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.7523043952374,-86.97724148759221 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1229.723016945974,-98.97720574776048 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1221.2258116298703,107.04414630540893 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true },
		{ "radius" : 1.3, "invMass" : 1.5, "pos" : [1221.698634564809,-108.95765099839176 ], "color" : "EBEBEB", "cMask" : ["ball","red","blue" ], "damping" : 0.96, "_selected" : true }

	],

	"joints" : [
		{ "d0" : 15, "d1" : 19, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 19, "d1" : 20, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 20, "d1" : 21, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 21, "d1" : 22, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 22, "d1" : 23, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 23, "d1" : 24, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 24, "d1" : 25, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 25, "d1" : 26, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 26, "d1" : 27, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 27, "d1" : 28, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 28, "d1" : 29, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 29, "d1" : 30, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 30, "d1" : 31, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 31, "d1" : 32, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 32, "d1" : 33, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 33, "d1" : 34, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 34, "d1" : 35, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 35, "d1" : 36, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 36, "d1" : 37, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 37, "d1" : 38, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 38, "d1" : 16, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 17, "d1" : 39, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 39, "d1" : 40, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 40, "d1" : 41, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 41, "d1" : 42, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 42, "d1" : 43, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 43, "d1" : 44, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 44, "d1" : 45, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 45, "d1" : 46, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 46, "d1" : 47, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 47, "d1" : 48, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 48, "d1" : 49, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 49, "d1" : 50, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 50, "d1" : 51, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 51, "d1" : 52, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 52, "d1" : 53, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 53, "d1" : 54, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 54, "d1" : 55, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 55, "d1" : 56, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 56, "d1" : 18, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" }


	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -625, "bCoef" : 0, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -625, "bCoef" : 0, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -665, "bCoef" : 0 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0 },
		{ "normal" : [1,0 ], "dist" : -1420, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1420, "bCoef" : 0 },
		{ "normal" : [1,0 ], "dist" : -1238, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -1238, "bCoef" : 0, "cMask" : ["ball" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 2 },
		"stanchion" : { "radius" : 1.3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 1.3, "invMass" : 0, "bCoef" : 0.5, "color" : "FFFF00", "cGroup" : [ ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" },
		"tunnel" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "000000" },
		"advertising" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "333333" },
		"teambench" : { "vis" : true, "cMask" : [ ], "color" : "000000" },
		"manager" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "333333" },
		"physio" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "666666" },
		"redsubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "E56E56" },
		"bluesubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "5689E5" }

	}
}`;
var RSGLH=`
{

	"name" : "Escreva !help para ver os comandosℹ​​",

	"width" : 1500,

	"height" : 800,

	"spawnDistance" : 300,

	"redSpawnPoints" : [
		[ -245, -30
		],
		[ -245, 30
		],
		[ -245, 90
		],
		[ -245, -90
		],
		[ -245, 150
		],
		[ -245, -150
		],
		[ -211, 768
		],
		[ -155, 768
		],
		[ -100, 768
		]

	],

	"blueSpawnPoints" : [
		[ 245, -30
		],
		[ 245, 30
		],
		[ 245, 90
		],
		[ 245, -90
		],
		[ 245, 150
		],
		[ 245, -150
		],
		[ 113, 768
		],
		[ 169, 768
		],
		[ 224, 768
		]

	],

	"bg" : { "type" : "grass", "width" : 1150, "height" : 600, "kickOffRadius" : 180, "cornerRadius" : 0, "color" : "6a9158" },

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65

	},

	"ballPhysics" : {
		"radius" : 10,
		"bCoef" : 0.5,
		"invMass" : 1,
		"damping" : 0.99,
		"color" : "FFFFFF",
		"cMask" : [ "all"
		],
		"cGroup" : [ "ball"
		]

	},

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : 660, "trait" : "kickOffBarrier" },
		/* 1 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "C7E6BD" },
		/* 2 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "C7E6BD" },
		/* 3 */ { "x" : 0, "y" : -660, "trait" : "kickOffBarrier" },
		
		/* 4 */ { "x" : 1150, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 5 */ { "x" : 840, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 6 */ { "x" : 1150, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 7 */ { "x" : 840, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 8 */ { "x" : 1150, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 9 */ { "x" : 1031, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 10 */ { "x" : 1150, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 11 */ { "x" : 1029, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 12 */ { "x" : 840, "y" : -170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 13 */ { "x" : 840, "y" : 170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 14 */ { "x" : -1150, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 15 */ { "x" : -840, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 16 */ { "x" : -1150, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 17 */ { "x" : -840, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 18 */ { "x" : -1150, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 19 */ { "x" : -1030, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 20 */ { "x" : -1150, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 21 */ { "x" : -1030, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 22 */ { "x" : -840, "y" : 170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 23 */ { "x" : -840, "y" : -170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 24 */ { "x" : 935, "y" : 4, "trait" : "line", "color" : "a7cf9b" },
		/* 25 */ { "x" : 935, "y" : -4, "trait" : "line", "color" : "a7cf9b" },
		/* 26 */ { "x" : -935, "y" : 4, "trait" : "line", "color" : "a7cf9b" },
		/* 27 */ { "x" : -935, "y" : -4, "trait" : "line", "color" : "a7cf9b" },
		/* 28 */ { "x" : -1150, "y" : 574, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 29 */ { "x" : -1125, "y" : 599, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 30 */ { "x" : -1125, "y" : -600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 31 */ { "x" : -1150, "y" : -575, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 32 */ { "x" : 1124, "y" : 600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 33 */ { "x" : 1150, "y" : 574, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 34 */ { "x" : 1150, "y" : -574, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 35 */ { "x" : 1124, "y" : -600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "b3d4a7" },
		/* 36 */ { "x" : 0, "y" : -4, "trait" : "line", "color" : "b3d4a7" },
		/* 37 */ { "x" : 0, "y" : 4, "trait" : "line", "color" : "b3d4a7" },
		/* 38 */ { "x" : 0, "y" : -4, "trait" : "line", "color" : "b3d4a7" },
		/* 39 */ { "x" : 0, "y" : 4, "trait" : "line", "color" : "b3d4a7" },
		/* 40 */ { "x" : -1170, "y" : 150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "546f48" },
		/* 41 */ { "x" : -1170, "y" : 250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "546f48" },
		/* 42 */ { "x" : 1170, "y" : 150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		/* 43 */ { "x" : 1170, "y" : 250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		/* 44 */ { "x" : -1170, "y" : -150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		/* 45 */ { "x" : -1170, "y" : -250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		/* 46 */ { "x" : 1170, "y" : -150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "546f48" },
		/* 47 */ { "x" : 1170, "y" : -250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "546f48" },
		/* 48 */ { "x" : 1161, "y" : -599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "546f48" },
		/* 49 */ { "x" : 1189, "y" : -579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "546f48" },
		/* 50 */ { "x" : 1161, "y" : 599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "546f48" },
		/* 51 */ { "x" : 1189, "y" : 579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "546f48" },
		/* 52 */ { "x" : -1161, "y" : 599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "546f48" },
		/* 53 */ { "x" : -1189, "y" : 579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "546f48" },
		/* 54 */ { "x" : -1161, "y" : -599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "546f48" },
		/* 55 */ { "x" : -1189, "y" : -579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "546f48" },
		
		/* 56 */ { "x" : -1177, "y" : -250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 57 */ { "x" : -1177, "y" : -150, "cMask" : ["ball" ] },
		
		/* 58 */ { "x" : -1170, "y" : 250, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		
		/* 59 */ { "x" : -1177, "y" : 250, "bCoef" : 0, "cMask" : ["ball" ] },
		
		/* 60 */ { "x" : -1170, "y" : 150, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		
		/* 61 */ { "x" : -1177, "y" : 150, "cMask" : ["ball" ] },
		/* 62 */ { "x" : 1177, "y" : -250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 63 */ { "x" : 1177, "y" : -150, "cMask" : ["ball" ] },
		
		/* 64 */ { "x" : 1170, "y" : -150, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		/* 65 */ { "x" : 1170, "y" : -250, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		
		/* 66 */ { "x" : 1177, "y" : 250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 67 */ { "x" : 1177, "y" : 150, "cMask" : ["ball" ] },
		
		/* 68 */ { "x" : 1170, "y" : 250, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		/* 69 */ { "x" : 1170, "y" : 150, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "546f48" },
		
		/* 70 */ { "x" : 0, "y" : 180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : -180 },
		/* 71 */ { "x" : 0, "y" : -180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : -180 },
		/* 72 */ { "x" : 0, "y" : -180, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		/* 73 */ { "x" : 0, "y" : 180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : 0 },
		/* 74 */ { "x" : 0, "y" : -180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : 0 },
		/* 75 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		/* 76 */ { "x" : 0, "y" : 180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		/* 77 */ { "x" : 0, "y" : -180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		
		/* 78 */ { "x" : -818, "y" : -598, "trait" : "line", "curve" : 90, "color" : "638750" },
		/* 79 */ { "x" : -1148, "y" : -347, "trait" : "line", "curve" : 90, "color" : "638750" },
		/* 80 */ { "x" : -1148, "y" : 347, "trait" : "line", "color" : "638750" },
		/* 81 */ { "x" : -820, "y" : 598, "trait" : "line", "color" : "638750" },
		/* 82 */ { "x" : 820, "y" : 598, "trait" : "line", "color" : "638750" },
		/* 83 */ { "x" : 1148, "y" : 347, "trait" : "line", "color" : "638750" },
		/* 84 */ { "x" : 820, "y" : -598, "trait" : "line", "curve" : -90, "color" : "638750" },
		/* 85 */ { "x" : 1148, "y" : -347, "trait" : "line", "curve" : -90, "color" : "638750" },
		/* 86 */ { "x" : 1148, "y" : -525, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 87 */ { "x" : -1148, "y" : -525, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 88 */ { "x" : 1148, "y" : 525, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 89 */ { "x" : -1148, "y" : 525, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		
		/* 90 */ { "x" : -1416, "y" : -475, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 91 */ { "x" : -1300, "y" : -475, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 92 */ { "x" : -1300, "y" : 475, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 93 */ { "x" : -1416, "y" : 475, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 94 */ { "x" : -1414, "y" : -475, "trait" : "kickOffBarrier" },
		/* 95 */ { "x" : -1300, "y" : -475, "trait" : "kickOffBarrier" },
		/* 96 */ { "x" : -1300, "y" : 475, "trait" : "kickOffBarrier" },
		/* 97 */ { "x" : -1416, "y" : 475, "trait" : "kickOffBarrier" },
		
		/* 98 */ { "x" : -1356, "y" : -76, "bCoef" : 0, "cMask" : ["blue" ], "color" : "6666FF" },
		/* 99 */ { "x" : -1356, "y" : 84, "bCoef" : 0, "cMask" : ["blue" ], "color" : "6666FF" },
		/* 100 */ { "x" : -1361, "y" : -76, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 101 */ { "x" : -1351, "y" : -76, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 102 */ { "x" : -1361, "y" : 84, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 103 */ { "x" : -1351, "y" : 84, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 104 */ { "x" : -1410, "y" : -76, "bCoef" : 0, "cMask" : ["red" ] },
		/* 105 */ { "x" : -1410, "y" : 84, "bCoef" : 0, "cMask" : ["red" ] },
		/* 106 */ { "x" : 1400, "y" : -475, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400 },
		/* 107 */ { "x" : 1300, "y" : -475, "bCoef" : 0, "cMask" : ["red" ] },
		/* 108 */ { "x" : 1300, "y" : 475, "bCoef" : 0, "cMask" : ["red" ] },
		/* 109 */ { "x" : 1400, "y" : 475, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400 },
		
		/* 110 */ { "x" : 1400, "y" : -475, "trait" : "kickOffBarrier", "dist" : -1400 },
		/* 111 */ { "x" : 1300, "y" : -475, "trait" : "kickOffBarrier" },
		/* 112 */ { "x" : 1300, "y" : 475, "trait" : "kickOffBarrier" },
		/* 113 */ { "x" : 1400, "y" : 475, "trait" : "kickOffBarrier", "dist" : -1400 },
		
		/* 114 */ { "x" : 1345, "y" : -82, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF6666" },
		/* 115 */ { "x" : 1345, "y" : 78, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF6666" },
		/* 116 */ { "x" : 1350, "y" : -82, "bCoef" : 0, "cMask" : ["red" ] },
		/* 117 */ { "x" : 1340, "y" : -82, "bCoef" : 0, "cMask" : ["red" ] },
		/* 118 */ { "x" : 1350, "y" : 78, "bCoef" : 0, "cMask" : ["red" ] },
		/* 119 */ { "x" : 1340, "y" : 78, "bCoef" : 0, "cMask" : ["red" ] },
		/* 120 */ { "x" : 1410, "y" : -82, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 121 */ { "x" : 1410, "y" : 78, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 122 */ { "x" : 1212.8375029631984, "y" : -117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 123 */ { "x" : 1212.9145962189946, "y" : 117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 124 */ { "x" : 1260, "y" : -144, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 125 */ { "x" : 1260, "y" : 144, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 126 */ { "x" : 1150, "y" : -117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "C7E6BD", "curve" : 0 },
		/* 127 */ { "x" : 1213, "y" : -117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 128 */ { "x" : 1150, "y" : 117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 129 */ { "x" : 1213, "y" : 117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 130 */ { "x" : -1213.3215131279903, "y" : 117.74394897515494, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 131 */ { "x" : -1212.3997630875529, "y" : -119.23759275268432, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 132 */ { "x" : -1260, "y" : 144, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 133 */ { "x" : -1260, "y" : -144, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 134 */ { "x" : -1150, "y" : 117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "C7E6BD", "curve" : 0 },
		/* 135 */ { "x" : -1213.4801078094943, "y" : 117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 136 */ { "x" : -1150, "y" : -117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 137 */ { "x" : -1212.4854097246707, "y" : -117, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 138 */ { "x" : -1150, "y" : -602, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 139 */ { "x" : -1150, "y" : -620.49609375, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 140 */ { "x" : -1148, "y" : -620.49609375, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 141 */ { "x" : -1148, "y" : -602, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 142 */ { "x" : -73, "y" : 670, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 143 */ { "x" : -103, "y" : 670, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 144 */ { "x" : -73, "y" : 690, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 145 */ { "x" : -124, "y" : 670, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 146 */ { "x" : -144, "y" : 670, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 147 */ { "x" : -164, "y" : 670, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 148 */ { "x" : -184, "y" : 670, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 149 */ { "x" : -234, "y" : 670, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 150 */ { "x" : -234, "y" : 690, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 151 */ { "x" : -204, "y" : 670, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 152 */ { "x" : -234, "y" : 725, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 153 */ { "x" : -234, "y" : 701, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 154 */ { "x" : -73, "y" : 725, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 155 */ { "x" : -73, "y" : 701, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		
		/* 156 */ { "x" : 1149.968665547433, "y" : -618.9686646206542, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 157 */ { "x" : 1150.0694602019682, "y" : -600.4728455134504, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 158 */ { "x" : 1148.069489899352, "y" : -600.4619464927276, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 159 */ { "x" : 1147.9686952448167, "y" : -618.9577655999315, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 160 */ { "x" : 1158, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "beff28" },
		
		/* 161 */ { "x" : 1168, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ff3034" },
		
		/* 162 */ { "x" : 1149, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "beff28" },
		/* 163 */ { "x" : 1158, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "beff28" },
		
		/* 164 */ { "x" : 1149, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ff3034" },
		
		/* 165 */ { "x" : 1168, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "beff28" },
		
		/* 166 */ { "x" : 1149.7396826762401, "y" : 597.9263578863065, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 167 */ { "x" : 1153.08526210564, "y" : 579.1424902194007, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 168 */ { "x" : 1155.0010783610655, "y" : 579.7166400913391, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 169 */ { "x" : 1151.7040246689874, "y" : 598.3023373212908, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 170 */ { "x" : 1161.6678517948505, "y" : 578.0712784773244, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "beff28" },
		
		/* 171 */ { "x" : 1171.2713154212654, "y" : 580.8593757453787, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ff3034" },
		
		/* 172 */ { "x" : 1153.0247345310775, "y" : 575.5619909360759, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "beff28" },
		/* 173 */ { "x" : 1160.6641350766317, "y" : 581.528531244323, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "beff28" },
		
		/* 174 */ { "x" : 1152.0210178128586, "y" : 579.0192437030742, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ff3034" },
		
		/* 175 */ { "x" : 1170.2675987030466, "y" : 584.316628512377, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "beff28" },
		
		/* 176 */ { "x" : -1152.8011166944932, "y" : 581.2713204942369, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 177 */ { "x" : -1150.0489225384003, "y" : 599.5615066971152, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 178 */ { "x" : -1152.026657561816, "y" : 599.8591040377528, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 179 */ { "x" : -1154.7788517179088, "y" : 581.5689178348746, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 180 */ { "x" : -1162.170956870286, "y" : 578.11573185304, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "beff28" },
		
		/* 181 */ { "x" : -1152.4133863896525, "y" : 575.9271664975008, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ff3034" },
		
		/* 182 */ { "x" : -1170.9527703028564, "y" : 580.085440673025, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "beff28" },
		/* 183 */ { "x" : -1161.383072006498, "y" : 581.6284631816164, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "beff28" },
		
		/* 184 */ { "x" : -1170.1648854390683, "y" : 583.5981720016015, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ff3034" },
		
		/* 185 */ { "x" : -1151.6255015258641, "y" : 579.4398978260773, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "beff28" },
		/* 186 */ { "x" : -1159, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "beff28", "radius" : 20 },
		
		/* 187 */ { "x" : -1149, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ff3034", "radius" : 20 },
		
		/* 188 */ { "x" : -1168, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "beff28", "radius" : 20 },
		/* 189 */ { "x" : -1159, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "beff28", "radius" : 20 },
		
		/* 190 */ { "x" : -1168, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ff3034", "radius" : 20 },
		
		/* 191 */ { "x" : -1149, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "beff28", "radius" : 20 },
		
		/* 192 */ { "x" : -170, "y" : 705, "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "curve" : -400, "cGroup" : ["all" ] },
		/* 193 */ { "x" : -171, "y" : 713, "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "curve" : -400, "cGroup" : ["all" ] },
		
		/* 194 */ { "x" : 243, "y" : 671, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 195 */ { "x" : 213, "y" : 671, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 196 */ { "x" : 243, "y" : 691, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 197 */ { "x" : 192, "y" : 671, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 198 */ { "x" : 172, "y" : 671, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 199 */ { "x" : 152, "y" : 671, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 200 */ { "x" : 132, "y" : 671, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 201 */ { "x" : 82, "y" : 671, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 202 */ { "x" : 82, "y" : 691, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 203 */ { "x" : 112, "y" : 671, "bCoef" : 0.001, "cMask" : ["wall" ], "color" : "FFFFFF", "trait" : "line" },
		/* 204 */ { "x" : 82, "y" : 726, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 205 */ { "x" : 82, "y" : 702, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 206 */ { "x" : 243, "y" : 726, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 207 */ { "x" : 243, "y" : 702, "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		
		/* 208 */ { "x" : 147, "y" : 715, "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "curve" : -400, "cGroup" : ["all" ] },
		/* 209 */ { "x" : 147, "y" : 704, "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "curve" : -400, "cGroup" : ["all" ] },
		
		/* 210 */ { "x" : 1214.8375029631984, "y" : -116, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "6a9158", "curve" : 0 },
		/* 211 */ { "x" : 1212.9145962189946, "y" : 119, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "6a9158", "curve" : 0 },
		/* 212 */ { "x" : 1262, "y" : -143, "bCoef" : 0, "cMask" : ["wall" ], "color" : "6a9158", "trait" : "line" },
		/* 213 */ { "x" : 1260, "y" : 146, "bCoef" : 0, "cMask" : ["wall" ], "color" : "6a9158", "trait" : "line" },
		/* 214 */ { "x" : -1212.3215131279903, "y" : 118.74394897515492, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "6a9158", "curve" : 0 },
		/* 215 */ { "x" : -1210.3997630875529, "y" : -120.23759275268432, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "6a9158", "curve" : 0 },
		/* 216 */ { "x" : -1259, "y" : 145, "bCoef" : 0, "cMask" : ["wall" ], "color" : "6a9158", "trait" : "line" },
		/* 217 */ { "x" : -1258, "y" : -145, "bCoef" : 0, "cMask" : ["wall" ], "color" : "6a9158", "trait" : "line" },
		
		/* 218 */ { "bCoef" : -3, "cMask" : ["ball" ], "x" : 1161, "y" : 250, "_selected" : true },
		/* 219 */ { "x" : 1177, "y" : -250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 220 */ { "bCoef" : -3, "cMask" : ["ball" ], "x" : 1161, "y" : -250 },
		/* 221 */ { "x" : -1161, "y" : -250, "bCoef" : -3, "cMask" : ["ball" ] },
		/* 222 */ { "bCoef" : 0, "cMask" : ["ball" ], "x" : -1177, "y" : -250 },
		/* 223 */ { "x" : -1161, "y" : 250, "bCoef" : -3, "cMask" : ["ball" ] },
		/* 224 */ { "bCoef" : 0, "cMask" : ["ball" ], "x" : -1178, "y" : 250 },
		/* 225 */ { "cMask" : ["red" ], "x" : -229.5, "y" : 771, "curve" : -180, "color" : "FF6666", "bCoef" : 0 },
		/* 226 */ { "cMask" : ["red" ], "x" : -191.5, "y" : 771, "curve" : -180, "color" : "FF6666", "bCoef" : 0 },
		/* 227 */ { "cMask" : ["red" ], "x" : -174.5, "y" : 771, "curve" : -180, "color" : "FF6666", "bCoef" : 0 },
		/* 228 */ { "cMask" : ["red" ], "x" : -136.5, "y" : 771, "curve" : -180, "color" : "FF6666", "bCoef" : 0 },
		/* 229 */ { "cMask" : ["red" ], "x" : -118.5, "y" : 771, "curve" : -180, "color" : "FF6666", "bCoef" : 0 },
		/* 230 */ { "cMask" : ["red" ], "x" : -80.5, "y" : 771, "curve" : -180, "color" : "FF6666", "bCoef" : 0 },
		/* 231 */ { "cMask" : ["blue" ], "x" : 94.5, "y" : 772, "curve" : -180, "color" : "6666FF", "bCoef" : 0 },
		/* 232 */ { "cMask" : ["blue" ], "x" : 132.5, "y" : 772, "curve" : -180, "color" : "6666FF", "bCoef" : 0 },
		/* 233 */ { "cMask" : ["blue" ], "x" : 149.5, "y" : 772, "curve" : -180, "color" : "6666FF", "bCoef" : 0 },
		/* 234 */ { "cMask" : ["blue" ], "x" : 187.5, "y" : 772, "curve" : -180, "color" : "6666FF", "bCoef" : 0 },
		/* 235 */ { "cMask" : ["blue" ], "x" : 205.5, "y" : 772, "curve" : -180, "color" : "6666FF", "bCoef" : 0 },
		/* 236 */ { "cMask" : ["blue" ], "x" : 243.5, "y" : 772, "curve" : -180, "color" : "6666FF", "bCoef" : 0 },
		/* 237 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : -1420, "y" : 670, "curve" : 0, "pos" : [-245,120 ] },
		/* 238 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : 1420, "y" : 670, "curve" : 0, "pos" : [-245,120 ] },
		/* 239 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : 305, "y" : 670 },
		/* 240 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : 305, "y" : 795 },
		/* 241 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : 0, "y" : 670 },
		/* 242 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : 0, "y" : 799 },
		/* 243 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : -305, "y" : 670 },
		/* 244 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : -305, "y" : 796 },
		/* 245 */ { "bCoef" : -7, "cMask" : ["red","blue" ], "x" : 305, "y" : 680 },
		/* 246 */ { "bCoef" : -7, "cMask" : ["red","blue" ], "x" : -305, "y" : 680 },
		/* 247 */ { "x" : -174, "y" : 693, "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "curve" : -400, "cGroup" : ["all" ] },
		/* 248 */ { "x" : -179, "y" : 704, "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "curve" : -400, "cGroup" : ["all" ] },
		/* 249 */ { "x" : 143, "y" : 694, "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "curve" : -400, "cGroup" : ["all" ] },
		/* 250 */ { "x" : 138, "y" : 705, "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "curve" : -400, "cGroup" : ["all" ] },
		/* 251 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : -1420, "y" : 670, "curve" : 0, "pos" : [-245,90 ] },
		/* 252 */ { "bCoef" : 0, "cMask" : ["red","blue" ], "x" : 1420, "y" : 670, "curve" : 0, "pos" : [-245,90 ] }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "kickOffBarrier" },
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		
		{ "v0" : 4, "v1" : 5, "color" : "b3d4a7", "trait" : "line", "y" : 250 },
		{ "v0" : 5, "v1" : 7, "color" : "b3d4a7", "trait" : "line", "x" : 840 },
		{ "v0" : 6, "v1" : 7, "color" : "b3d4a7", "trait" : "line", "y" : -250 },
		{ "v0" : 8, "v1" : 9, "color" : "b3d4a7", "trait" : "line", "y" : 195 },
		{ "v0" : 9, "v1" : 11, "color" : "b3d4a7", "trait" : "line", "x" : 1030 },
		{ "v0" : 10, "v1" : 11, "color" : "b3d4a7", "trait" : "line", "y" : -150 },
		{ "v0" : 12, "v1" : 13, "curve" : -110, "color" : "b3d4a7", "trait" : "line", "x" : 840 },
		{ "v0" : 14, "v1" : 15, "color" : "b3d4a7", "trait" : "line", "y" : -337 },
		{ "v0" : 15, "v1" : 17, "color" : "b3d4a7", "trait" : "line", "x" : -840 },
		{ "v0" : 16, "v1" : 17, "color" : "b3d4a7", "trait" : "line", "y" : 250 },
		{ "v0" : 18, "v1" : 19, "color" : "b3d4a7", "trait" : "line", "y" : -150 },
		{ "v0" : 19, "v1" : 21, "color" : "b3d4a7", "trait" : "line", "x" : -1030 },
		{ "v0" : 20, "v1" : 21, "color" : "b3d4a7", "trait" : "line", "y" : 150 },
		{ "v0" : 22, "v1" : 23, "curve" : -110, "color" : "b3d4a7", "trait" : "line", "x" : -840 },
		{ "v0" : 24, "v1" : 25, "curve" : -180, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -180, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 180, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 180, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 90, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 90, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : -90, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -90, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 28, "v1" : 29, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 32, "v1" : 33, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 34, "v1" : 35, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -180, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 38, "v1" : 39, "curve" : 180, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -90, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 38, "v1" : 39, "curve" : 90, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 40, "v1" : 41, "curve" : 40, "vis" : true, "color" : "546f48", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		{ "v0" : 42, "v1" : 43, "curve" : -40, "vis" : true, "color" : "546f48", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : 1220 },
		{ "v0" : 44, "v1" : 45, "curve" : -40, "vis" : true, "color" : "546f48", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		{ "v0" : 46, "v1" : 47, "curve" : 40, "vis" : true, "color" : "546f48", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : 1220 },
		{ "v0" : 48, "v1" : 49, "curve" : -60, "vis" : true, "color" : "546f48", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 50, "v1" : 51, "curve" : 60, "vis" : true, "color" : "546f48", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 52, "v1" : 53, "curve" : -60, "vis" : true, "color" : "546f48", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 54, "v1" : 55, "curve" : 60, "vis" : true, "color" : "546f48", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		
		{ "v0" : 45, "v1" : 56, "vis" : true, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 44, "v1" : 57, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 61, "v1" : 60, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 59, "v1" : 58, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 67, "v1" : 69, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		{ "v0" : 66, "v1" : 68, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		{ "v0" : 62, "v1" : 65, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		{ "v0" : 63, "v1" : 64, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		
		{ "v0" : 70, "v1" : 71, "curve" : 180, "vis" : true, "color" : "b3d4a7", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 70, "v1" : 71, "curve" : -180, "vis" : true, "color" : "b3d4a7", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 74, "v1" : 73, "vis" : true, "color" : "b3d4a7", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		
		{ "v0" : 78, "v1" : 79, "curve" : 90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 80, "v1" : 81, "curve" : 90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 82, "v1" : 83, "curve" : 90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 84, "v1" : 85, "curve" : -90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "638750", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "y" : -525 },
		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "638750", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "y" : 525 },
		
		{ "v0" : 90, "v1" : 91, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : -475 },
		{ "v0" : 91, "v1" : 92, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "x" : -1300 },
		{ "v0" : 92, "v1" : 93, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : 475 },
		
		{ "v0" : 94, "v1" : 95, "trait" : "kickOffBarrier", "y" : -475 },
		{ "v0" : 96, "v1" : 97, "trait" : "kickOffBarrier", "y" : 475 },
		
		{ "v0" : 98, "v1" : 99, "color" : "6666FF", "bCoef" : 1000000, "cMask" : ["blue" ] },
		{ "v0" : 100, "v1" : 101, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 102, "v1" : 103, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 104, "v1" : 105, "vis" : false, "bCoef" : 1000000, "cMask" : ["red" ], "x" : -1410 },
		{ "v0" : 106, "v1" : 107, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : -475 },
		{ "v0" : 107, "v1" : 108, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "x" : 1300 },
		{ "v0" : 108, "v1" : 109, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : 475 },
		
		{ "v0" : 110, "v1" : 111, "trait" : "kickOffBarrier", "y" : -475 },
		{ "v0" : 112, "v1" : 113, "trait" : "kickOffBarrier", "y" : 475 },
		
		{ "v0" : 114, "v1" : 115, "color" : "FF6666", "bCoef" : 1000000, "cMask" : ["red" ] },
		{ "v0" : 116, "v1" : 117, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 118, "v1" : 119, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 120, "v1" : 121, "vis" : false, "bCoef" : 1000000, "cMask" : ["blue" ], "x" : 1410 },
		{ "v0" : 122, "v1" : 124, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 123, "v1" : 125, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 127, "v1" : 129, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : -242 },
		
		{ "v0" : 126, "v1" : 127, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet", "y" : -117 },
		{ "v0" : 128, "v1" : 129, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet", "y" : 117 },
		
		{ "v0" : 130, "v1" : 132, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 131, "v1" : 133, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 135, "v1" : 137, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : -242 },
		
		{ "v0" : 134, "v1" : 135, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet", "y" : 117 },
		{ "v0" : 136, "v1" : 137, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet", "y" : -117 },
		
		{ "v0" : 138, "v1" : 139, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 140, "v1" : 141, "curve" : 0, "vis" : true, "color" : "6a9158", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		
		{ "v0" : 142, "v1" : 143, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 142, "v1" : 144, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "x" : -85, "trait" : "line" },
		{ "v0" : 145, "v1" : 146, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "y" : 667, "trait" : "line" },
		{ "v0" : 147, "v1" : 148, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "y" : 667, "trait" : "line" },
		{ "v0" : 149, "v1" : 150, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "x" : -246, "trait" : "line" },
		{ "v0" : 149, "v1" : 151, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 152, "v1" : 153, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "x" : -246, "trait" : "line" },
		{ "v0" : 154, "v1" : 155, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "x" : -85, "trait" : "line" },
		
		{ "v0" : 156, "v1" : 157, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 158, "v1" : 159, "curve" : 0, "vis" : true, "color" : "6a9158", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 160, "v1" : 161, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 160, "v1" : 161, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 161, "v1" : 161, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148 },
		
		{ "v0" : 160, "v1" : 162, "vis" : true, "color" : "beff28", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 163, "v1" : 164, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 163, "v1" : 164, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 164, "v1" : 164, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 163, "v1" : 165, "vis" : true, "color" : "beff28", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 168, "v1" : 169, "curve" : 0, "vis" : true, "color" : "6a9158", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 171, "v1" : 171, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148 },
		
		{ "v0" : 170, "v1" : 172, "vis" : true, "color" : "beff28", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 173, "v1" : 174, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 173, "v1" : 174, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 174, "v1" : 174, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 173, "v1" : 175, "vis" : true, "color" : "beff28", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 176, "v1" : 177, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 178, "v1" : 179, "curve" : 0, "vis" : true, "color" : "6a9158", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 180, "v1" : 181, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 180, "v1" : 181, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 181, "v1" : 181, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148 },
		
		{ "v0" : 180, "v1" : 182, "vis" : true, "color" : "beff28", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 183, "v1" : 184, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 183, "v1" : 184, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 184, "v1" : 184, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 183, "v1" : 185, "vis" : true, "color" : "beff28", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		{ "v0" : 187, "v1" : 187, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148, "radius" : 20 },
		
		{ "v0" : 186, "v1" : 188, "vis" : true, "color" : "beff28", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "radius" : 20 },
		
		{ "v0" : 189, "v1" : 190, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		{ "v0" : 189, "v1" : 190, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		{ "v0" : 190, "v1" : 190, "curve" : 0, "vis" : true, "color" : "ff3034", "bCoef" : 0, "cMask" : ["wall" ], "radius" : 20 },
		
		{ "v0" : 189, "v1" : 191, "vis" : true, "color" : "beff28", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "radius" : 20 },
		
		{ "v0" : 192, "v1" : 193, "curve" : 339.255609892985, "vis" : false, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "cGroup" : ["all" ] },
		
		{ "v0" : 194, "v1" : 195, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 194, "v1" : 196, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "x" : 239, "trait" : "line" },
		{ "v0" : 197, "v1" : 198, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "y" : 667, "trait" : "line" },
		{ "v0" : 199, "v1" : 200, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "y" : 667, "trait" : "line" },
		{ "v0" : 201, "v1" : 202, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "x" : 78, "trait" : "line" },
		{ "v0" : 201, "v1" : 203, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 204, "v1" : 205, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "x" : 78, "trait" : "line" },
		{ "v0" : 206, "v1" : 207, "color" : "FFFFFF", "bCoef" : 0.001, "cMask" : ["wall" ], "x" : 239, "trait" : "line" },
		
		{ "v0" : 208, "v1" : 209, "curve" : -328.13941952332465, "vis" : false, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "cGroup" : ["all" ] },
		
		{ "v0" : 210, "v1" : 212, "curve" : 0, "vis" : true, "color" : "6a9158", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 211, "v1" : 213, "curve" : 0, "vis" : true, "color" : "6a9158", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 214, "v1" : 216, "curve" : 0, "vis" : true, "color" : "6a9158", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 215, "v1" : 217, "curve" : 0, "vis" : true, "color" : "6a9158", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "vis" : false, "bCoef" : 0, "cMask" : ["ball" ], "v0" : 66, "v1" : 218 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["ball" ], "v0" : 219, "v1" : 220, "y" : -250 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["ball" ], "v0" : 221, "v1" : 222, "y" : -250 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["ball" ], "v0" : 223, "v1" : 224, "y" : 250 },
		{ "color" : "FF6666", "cMask" : ["red" ], "v0" : 225, "v1" : 226, "curve" : -180, "bCoef" : 0 },
		{ "color" : "FF6666", "cMask" : ["red" ], "v0" : 227, "v1" : 228, "curve" : -180, "bCoef" : 0 },
		{ "color" : "FF6666", "cMask" : ["red" ], "v0" : 229, "v1" : 230, "curve" : -180, "bCoef" : 0 },
		{ "color" : "6666FF", "cMask" : ["blue" ], "v0" : 231, "v1" : 232, "curve" : -180, "bCoef" : 0 },
		{ "color" : "6666FF", "cMask" : ["blue" ], "v0" : 233, "v1" : 234, "curve" : -180, "bCoef" : 0 },
		{ "color" : "6666FF", "cMask" : ["blue" ], "v0" : 235, "v1" : 236, "curve" : -180, "bCoef" : 0 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red","blue" ], "v0" : 237, "v1" : 238, "y" : 670, "curve" : 0, "pos" : [-245,120 ] },
		{ "curve" : 0, "vis" : false, "bCoef" : 0, "cMask" : ["red","blue" ], "v0" : 239, "v1" : 240, "x" : 305 },
		{ "curve" : 0, "vis" : false, "bCoef" : 0, "cMask" : ["red","blue" ], "v0" : 241, "v1" : 242 },
		{ "curve" : 0, "vis" : false, "bCoef" : 0, "cMask" : ["red","blue" ], "v0" : 243, "v1" : 244 },
		{ "curve" : 0, "vis" : false, "bCoef" : -7, "cMask" : ["red","blue" ], "v0" : 245, "v1" : 246, "y" : 680 },
		{ "v0" : 247, "v1" : 248, "curve" : 336.8745487587137, "vis" : false, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "cGroup" : ["all" ] },
		{ "v0" : 249, "v1" : 250, "curve" : 336.8745487587137, "vis" : false, "color" : "ffffff", "bCoef" : 0.001, "cMask" : ["wall","red","blue" ], "cGroup" : ["all" ] },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red","blue" ], "v0" : 251, "v1" : 252, "y" : 670, "curve" : 0, "pos" : [-245,90 ] }

	],

	"goals" : [
		{ "p0" : [-1160,117 ], "p1" : [-1160,-117 ], "team" : "red" },
		{ "p0" : [1160,117 ], "p1" : [1160,-117 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [1150,-117 ], "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [1150,117 ], "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [1260,144 ], "color" : "4a4e52", "cMask" : ["ball" ], "y" : 3, "x" : 12 },
		{ "radius" : 3, "invMass" : 0, "pos" : [1260,-144 ], "color" : "4a4e52", "cMask" : ["ball" ] },
		
		{ "radius" : 5, "pos" : [-1150,117 ], "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [-1150,-117 ], "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-1260,-144 ], "color" : "4a4e52", "cMask" : ["ball" ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1260,144 ], "color" : "4a4e52", "cMask" : ["ball" ] },
		
		{ "radius" : 1.5, "pos" : [-1150.5542972394846,-600.1732586129118 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [1150.4457027605154,-600.1732586129118 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [1148.8518594069587,599.6163281131223 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [-1149.6336058891993,599.8040409312609 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		
		{ "radius" : 15, "invMass" : 1e-27, "pos" : [-149,713 ], "color" : "4D4C48", "bCoef" : 1000, "cMask" : ["red" ], "cGroup" : ["wall" ], "damping" : 1, "speed" : [0,-0.5 ] },
		{ "radius" : 15, "invMass" : 1e-27, "pos" : [167,707 ], "color" : "403F45", "bCoef" : 1000, "cMask" : ["red" ], "cGroup" : ["wall" ], "damping" : 1, "speed" : [0,-0.5 ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -625, "bCoef" : 0, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -625, "bCoef" : 0, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -665, "bCoef" : 0 },
		{ "normal" : [0,-1 ], "dist" : -797, "bCoef" : 0 },
		{ "normal" : [1,0 ], "dist" : -1220, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -1220, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [1,0 ], "dist" : -1420, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1420, "bCoef" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 2 },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.5, "color" : "FFFF00", "cGroup" : [ ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" },
		"tunnel" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "000000" },
		"advertising" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "333333" },
		"teambench" : { "vis" : true, "cMask" : [ ], "color" : "000000" },
		"manager" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "333333" },
		"physio" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "666666" },
		"redsubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "E56E56" },
		"bluesubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "5689E5" }

	}
}`;
// trusted admin list
const CensurarMensajes = ['autista', 'macaco', 'preto', 'aidético','macac.o','filho da puta'];

// trusted admin list
const trustBanList = [''];
let connections = []

room.setCustomStadium(RSGLH);
room.setScoreLimit(0);
room.setTimeLimit(0);
room.setTeamsLock(true);
room.setTeamColors(1, 60, 0xFFFFFF, [0xFF4D40, 0xFF4D40, 0xFF4D40]);
room.setTeamColors(2, 60, 0xFFFFFF, [0x0080ff, 0x0080ff, 0x0080ff]);

function clonekick(player){
    players = room.getPlayerList();
    for (i = 0; i < players.length-1; i++){
        if (player.name == players[i].name){
            room.kickPlayer(player.id,"Já existe um jogador com esse nome",false);
        }
    }
}
 
var ScoresNumbers = '0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣';
var boldedNumbers = '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗';
var circledNumbers = '🄋⓵⓶⓷⓸⓹⓺⓻⓼⓽';
 
function boldedNumber(num){
    var result = '';
    var reversedDigits = [];
    do{
        reversedDigits.push(num % 10);
        num = Math.floor(num / 10);
    }while(num > 0);
    for (var i = reversedDigits.length; i-- > 0; ){
        result += boldedNumbers.substr(reversedDigits[i]*2, 2);
    }
   
    return result;
}

function scorerNumber(num){
    var result = '';
    var reversedDigits = [];
    do{
        reversedDigits.push(num % 10);
        num = Math.floor(num / 10);
    }while(num > 0);
    for (var i = reversedDigits.length; i-- > 0; ){
        result += ScoresNumbers.substr(reversedDigits[i]*3, 3);
    }
   
    return result;
}

 
function circledNumber(num){
    var result = '';
    var reversedDigits = [];
    do{
        reversedDigits.push(num % 10);
        num = Math.floor(num / 10);
    }while(num > 0);
    for (var i = reversedDigits.length; i-- > 0; ){
        if(reversedDigits[i] == 0){
            result += circledNumbers.substr(reversedDigits[i], 2);
        }else{
            result += circledNumbers.substr(1+reversedDigits[i], 1);
        }
    }
   
    return result;
}
 
 
/*
    Functions
*/
// If there are no admins left in the room give admin to one of the remaining players.
function CensuradorDeSpammeros(message) {
    if (CensurarMensajes.includes(message)) {
        return true;
    }else return false;
}

function checkBanedAdmins(player) {
    if (trustBanList.includes(player.name)) {
        room.kickPlayer(player.id,"Acesso negado", true);
    }
}

function updateAdmins() {
  // Get all players except the host (id = 0 is always the host)
  var players = room.getPlayerList().filter((player) => player.id != 0 );
  if ( players.length == 0 ){room.stopGame();} // No players left, do nothing.
  if ( players.find((player) => player.admin) != null ) return; // There's an admin left so do nothing.
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}
setInterval(function(){room.clearBans(); room.sendChat('Limpou os bans!'); },1800000);
setInterval(function(){            
            room.setPlayerAdmin(room.getPlayerList().filter((player) => player.admin == true && player.id != 0)[0].id, false);
            room.setPlayerAdmin(room.getPlayerList().filter((player) => player.id != 0)[2].id, true); 
            room.sendChat('Sim, à Beager. Não, à Beager fake :P'); },5400000);
 
function initPlayerStats(player){
}
 
 
 
/*
for commands
*/
 
function swapFun(player){
    if (player.admin == true){
        if (room.getScores() == null) {
            players = room.getPlayerList();
            for (i = 0; i < players.length; i++){
                if (players[i].team == 1){
                    room.setPlayerTeam(players[i].id, 2);
                }
                else if (players[i].team == 2){
                    room.setPlayerTeam(players[i].id, 1);
                }
            }
        }
    }
}
 
 
var superAdmins = ["Beager"];
function pushMuteFun(player, message){ // !mute Anddy
    // Prevent somebody to talk in the room (uses the nickname, not the id)
    // need to be admin
    if (superAdmins.includes(player.name) == true){
        if (!(mutedPlayers.includes(message.substr(6)))) mutedPlayers.push(message.substr(6));
    }
}
 
 
function gotMutedFun(player){
    if (mutedPlayers.includes(player.name)){
        return true;
    }
}
var superAdmins = ["Beager" ];
function unmuteFun(player, message){ // !unmute Anddy
    // Allow somebody to talk if he has been muted
    // need to be admin
    if (superAdmins.includes(player.name) == true){
        pos = mutedPlayers.indexOf(message.substr(9));
        mutedPlayers.splice(pos, 1);
    }
}
 
function confirmFun(player, message){ // !confirm aaa
    // Prevent somebody to talk in the room (uses the nickname, not the id)
    // need to be admin
    let password = message.substr(9);
    let account = accounts.find(a => a.password === password);
    if (account !== undefined) {
        account.playerId = player.id;
        room.sendChat("[" + player.name + "] " + account.username + " ha accedido a su cuenta.");
        confirmedPlayers.add(player.id);
        if (stats.hasOwnProperty(account.username)){}
        else {stats[account.username] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"];}
    }
    return false;
}
 
function chatasbotFun(player, message){
    messagetext = message.substr(11)
    room.sendChat(messagetext);
    return false;
}  
 
function adminFun(player, message){ // !admin Andis
    // Gives admin to the person who type this password
 
    room.setPlayerAdmin(player.id, true);
    return false; // The message won't be displayed
}
 
function resignFun(player, message){
    room.setPlayerAdmin(player.id, false);
    updateAdmins();
}
 
function CamisetasFun(player) { // !camisetas
    room.sendAnnouncement("| !laliga | !seriea | !premierleague | !bundesliga | !eredivisie | !liga1 |  !superlig | !campeonatorusso | !premierucrania | !superligasuiça ⚽ ✦", player.id, 0xFF6F00, "bold", 0);
    room.sendAnnouncement("✦ ⚽  !paises | !superliga | !ascenso | !brasileirao | !campeonatouruguaio | !ligaparaguaia | !ligaaguila | !ligapro | !liga1peru | !campeonatochileno | !ligaboliviana | !ligamx | !mls | !fantasmas", player.id, 0xFF6F00, "bold", 0);
}
function FantasmasFun(player) { // !fantasmas
    room.sendAnnouncement("Equipes Fantasmas: ", player.id, 0xfaebd6, "bold", 0);
    room.sendAnnouncement(" exSeleções:  | !𝐔𝐑𝐒𝐒 | !𝐘𝐔𝐆 | !𝐂𝐙𝐄", player.id, 0xfaebd6, "bold", 0);
    room.sendAnnouncement(" exClubes: | !𝐀𝐋𝐔 | !𝐋𝐎𝐀", player.id, 0xfaebd6, "bold", 0);
}
function SuperligaFun(player) { // !superliga
    room.sendAnnouncement("SuperLiga: | !𝐁𝐎𝐂 | !𝐑𝐈𝐕 | !𝐒𝐋𝐎 | !𝐑𝐀𝐂 | !𝐈𝐍𝐃 | !𝐇𝐔𝐑 | !𝐆𝐈𝐌 | !𝐄𝐒𝐓 | !𝐍𝐎𝐁 | !𝐂𝐄𝐍", player.id, 0xADF4FF, "normal", 0); 
    room.sendAnnouncement("| !𝐁𝐀𝐍𝐃 | !𝐋𝐀𝐍 | !𝐔𝐍𝐈 | !𝐂𝐒𝐅 | !𝐀𝐋𝐃 | !𝐀𝐀𝐀𝐉 | !𝐀𝐓𝐔 | !𝐓𝐀𝐋 | !𝐀𝐑𝐒𝐄 | !𝐃𝐘𝐉 | !𝐂𝐂𝐒", player.id, 0xADF4FF, "normal", 0); 
    room.sendAnnouncement("| !𝐆𝐎𝐃 | !𝐕𝐄𝐋 | !𝐏𝐀𝐓", player.id, 0xADF4FF, "normal", 0); 
}
function AscensoFun(player) { // !ascenso
    room.sendAnnouncement(' Ascenso: | !𝐓𝐈𝐆 | !𝐀𝐋𝐁 | !𝐅𝐂𝐎 | !𝐂𝐇𝐀 | !𝐀𝐓𝐋 |  !𝐒𝐌𝐓 | !𝐎𝐋𝐏 | !𝐏𝐋𝐀 | !𝐁𝐄𝐋 | !𝐐𝐔𝐈 | !𝐌𝐎𝐑 | !𝐍𝐂𝐇', player.id, 0xDB1414, "normal", 0); 
    room.sendAnnouncement('| !𝐃𝐎𝐂 | !𝐒𝐂𝐇 | !𝐑𝐈𝐄 | !𝐒𝐌𝐒𝐉 | !𝐀𝐆𝐑 | !𝐀𝐋𝐕 | !𝐒𝐓𝐄𝐋​ | !𝐌𝐄𝐑 | !𝐀𝐝𝐐 | !𝐂𝐉𝐀 | !𝐆𝐲𝐓 | !𝐀𝐋𝐌 | !𝐂𝐀𝐃𝐔 | !𝐕𝐒𝐂', player.id, 0xDB1414, "normal", 0); 
}
function CampeonatoChilenoFun(player) { // !campeonatochileno
    room.sendAnnouncement("(🇨🇱) CampeonatoChileno:  | !𝐂𝐂𝐎 | !𝐔𝐃𝐂 | !𝐔𝐂𝐀 | !𝐂𝐃𝐏 | !𝐂𝐎𝐁", player.id, 0xFF2A12, "normal", 0); 
}
function LigaBolivianaFun(player) { // !ligaboliviana
    room.sendAnnouncement("(🇧🇴) LigaBoliviana:  | !𝐁𝐋𝐕 | !𝐒𝐓𝐆 | !𝐖𝐓𝐌", player.id, 0x5ACC31, "normal", 0); 
}
function MLSFun(player) { // !mls
    room.sendAnnouncement("(🇺🇸) Mls : | !𝐋𝐀 | !𝐓𝐎𝐅𝐂 | !𝐍𝐘𝐂 | !𝐀𝐓𝐋𝐔 | !𝐋𝐀𝐅𝐂 | !𝐒𝐄𝐀 | !𝐍𝐘𝐑𝐁 | !𝐏𝐓𝐈𝐌", player.id, 0x1930FF, "normal", 0); 
}
function LigaUruguayaFun(player) { // !campeonatouruguayo
    room.sendAnnouncement('(🇺🇾) 𝙲ampeonato uruguaio: | !𝐍𝐀𝐂 | !𝐏𝐄𝐍 | !𝐃𝐀𝐍 | !𝐑𝐀𝐌 | !𝐑𝐈𝐔', player.id, 0x69CDFF, "normal", 0); 
}
function CampeonatoRusoFun(player) { // !campeonatoruso
    room.sendAnnouncement('(🇷🇺) 𝙲ampeonato Russo | !𝐒𝐏𝐌 | !𝐂𝐒𝐊 | !𝐙𝐄𝐍 | !𝐋𝐎𝐊 | !𝐃𝐈𝐍', player.id, 0xe11a22, "normal", 0); 
}
function PremierUcranianaFun(player) { // !premierucrania
    room.sendAnnouncement('(🇺🇦) Liga premier ucrania| !𝐒𝐇𝐀 | !𝐃𝐘𝐊 | !𝐍𝐘𝐕', player.id, 0xFFF954, "normal", 0); 
}
function LaLigaFun(player) { // !laliga
    room.sendAnnouncement('(🇪🇸) LaLiga: | !𝐑𝐌𝐀 | !𝐁𝐀𝐑 | !𝐀𝐓𝐌 | !𝐕𝐀𝐋 | !𝐁𝐄𝐓 | !𝐆𝐄𝐓 | !𝐋𝐄𝐕 | !𝐑𝐀𝐘', player.id, 0xFF2A00, "normal", 0); 
}
function LigaAguilaFun(player) { // !ligaaguila
    room.sendAnnouncement('(🇨🇴) Liga Aguila: | !𝐀𝐓𝐍 | !𝐌𝐈𝐋 | !𝐀𝐌𝐄 | !𝐒𝐅𝐄 | !𝐂𝐀𝐋 | !𝐎𝐍𝐂', player.id, 0xFFE959, "normal", 0); 
}
function LigaParaguayaFun(player) { // !ligaparaguaya
    room.sendAnnouncement('(🇵🇾) Liga Paraguaia: | !𝐂𝐂𝐏 | !𝐎𝐋𝐈 | !𝐆𝐔𝐀 | !𝐋𝐈𝐁', player.id, 0xa3a3a3, "normal", 0);
}
function SerieATIMFun(player) { // !seriea
    room.sendAnnouncement('(🇮🇹) Serie A Italia: | !𝐉𝐔𝐕 | !𝐀𝐂𝐌 | !𝐈𝐍𝐓 | !𝐑𝐎𝐌 | !𝐍𝐀𝐏 | !𝐋𝐀𝐙 | !𝐅𝐈𝐎 | !𝐀𝐓𝐀', player.id, 0x6699FF, "normal", 0);
}
function BrasilLeagueFun(player) { // !brasileirão
    room.sendAnnouncement('(🇧🇷) BR: |!𝐒𝐀𝐎 | !𝐒𝐀𝐍 | !𝐂𝐎𝐑 | !𝐂𝐑𝐔 | !𝐆𝐑𝐄 | !𝐅𝐋𝐀 | !𝐒𝐂𝐈 | !𝐏𝐀𝐋 | !𝐕𝐀𝐒 | !𝐂𝐀𝐌 ', player.id, 0xF7FF19, "normal", 0);
    room.sendAnnouncement('| !𝐅𝐋𝐔 | !𝐁𝐎𝐓 | !𝐏𝐀𝐑', player.id, 0xF7FF19, "normal", 0); 
}
function PremierLeagueFun(player) { // !premierleague
    room.sendAnnouncement('(🇬🇧) Premier League: | !𝐓𝐎𝐓 | !𝐋𝐈𝐕| !𝐀𝐑𝐒 | !𝐂𝐇𝐄| !𝐌𝐔𝐍 | !𝐌𝐂𝐈 | !𝐀𝐕𝐋 | !𝐖𝐁𝐀 | !𝐅𝐔𝐋 | !𝐋𝐄𝐈 ', player.id, 0xFFFFFF, "normal", 0); 
    room.sendAnnouncement('| !𝐒𝐎𝐔 | !𝐖𝐀𝐓 | !𝐂𝐑𝐘 | !𝐄𝐕𝐄', player.id, 0xFFFFFF, "normal", 0); 
}
function SuperLigFun(player) { // !superlig
    room.sendAnnouncement('(🇹🇷) Super Liga: | !𝐆𝐒 | !𝐅𝐁 | !𝐁𝐉𝐊 ', player.id, 0xFA0000, "normal", 0); 
}
function PaisesFun(player) { // !paises
    room.sendAnnouncement('(🌎) Países: | !𝐁𝐑𝐀 | !𝐀𝐑𝐆 | !𝐔𝐑𝐔 | !𝐂𝐇𝐈 | !𝐂𝐎𝐋 | !𝐏𝐄𝐑 | !𝐏𝐆𝐘 | !𝐄𝐂𝐔 | !𝐕𝐄𝐍 | !𝐁𝐎𝐋 | !𝐀𝐋𝐄 | !𝐈𝐓𝐀', player.id, 0x5793FA, "normal", 0);  
    room.sendAnnouncement('| !𝐄𝐒𝐏 | !𝐅𝐑𝐀 | !𝐏𝐎𝐑 | !𝐈𝐍𝐆 | !𝐇𝐎𝐋 | !𝐂𝐑𝐎 | !𝐁𝐄𝐋𝐆 | !𝐍𝐆𝐀 | !𝐉𝐀𝐏 | !𝐔𝐒𝐀 | !𝐐𝐀𝐓 | !𝐂𝐍𝐎 | !𝐂𝐒𝐔 | !𝐀𝐔𝐓 | !𝐍𝐙𝐄 | !𝐑𝐔𝐒', player.id, 0x5793FA, "normal", 0); 
}
function BundesligaFun(player) { // !bundesliga
    room.sendAnnouncement('(🇩🇪) Bundesliga: | !𝐁𝐕𝐁 | !𝐅𝐂𝐁', player.id, 0xF5FAF8, "normal", 0); 
}
function EredivisieFun(player) { // !eredivisie
    room.sendAnnouncement('(🇳🇱) Ere divisão: | !𝐀𝐉𝐀 | !𝐅𝐄𝐘 | !𝐏𝐒𝐕 | !𝐖𝐈𝐋', player.id, 0xFA6400, "normal", 0); 
} 

function Ligue1Fun(player) { // !ligue1
    room.sendAnnouncement('(🇫🇷) Liga 1: | !𝐏𝐒𝐆 | !𝐎𝐆𝐂 | !𝐎𝐌 | !𝐎𝐋 | !𝐀𝐒𝐌 | !𝐅𝐂𝐍 | !𝐑𝐄𝐍 | !𝐒𝐓𝐄', player.id, 0x3744FA, "normal", 0); 
}
function LigaMXFun(player) { // !ligamx
    room.sendAnnouncement('(🇲🇽) Liga MX: | !𝐀𝐌𝐂 | !𝐂𝐇𝐕 | !𝐂𝐑𝐔𝐙 | !𝐓𝐆𝐒 | !𝐌𝐓𝐘', player.id, 0x75FF59, "normal", 0); 
} 
function LigaProFun(player) { // !ligapro
    room.sendAnnouncement('(🇪🇨) Liga Pro: | !𝐋𝐃𝐔 | !𝐁𝐒𝐂 | !𝐄𝐌𝐄 | !𝐈𝐃𝐕', player.id, 0xFAFF5C, "normal", 0); 
}
function RaiffeisenSuperLeagueFun(player) { // !superligasuiza
    room.sendAnnouncement('(🇨🇭) Raifeissen Super Liga: | !𝐁𝐀𝐒 | ', player.id, 0xFF0A0A, "normal", 0); 
}
function Liga1PeruFun(player) { // !liga1peru
    room.sendAnnouncement('(🇵🇪) Liga 1: | !𝐔𝐍𝐕 | !𝐀𝐋𝐈 | !𝐂𝐑𝐈 | !𝐌𝐄𝐋 ', player.id, 0xFF1C1C, "normal", 0); 
}
function RiverFun(player) { // !RIV
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('riv/titular/red | riv/titular/blue | riv/alternativa/red |riv/alternativa/blue | riv/tercera/red |riv/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('riv/titular/red/2018 | riv/titular/blue/2018 | riv/alternativa/red/2018 |riv/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('riv/titular/red/2017 | riv/titular/blue/2017 | riv/alternativa/red/2017 |riv/alternativa/blue/2017', player.id, 0x6BFFB5, "normal", 0);
}
function RIVTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -144, 0x0e0e0e, [0xF7F7FB, 0xFB2F35, 0xF7F7FB]);
    }
}
function RIVTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -144, 0x0e0e0e, [0xF7F7FB, 0xFB2F35, 0xF7F7FB]);
    }
}
function RIVAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x701332, 0xA6093A, 0x701332]);
    }
}
function RIVAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x701332, 0xA6093A, 0x701332]);
    }
}
function RIVTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 49, 0xF5F5F5, [0xD52828, 0x1C1C1C, 0x1C1C1C]);
    }
}
function RIVTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 49, 0xF5F5F5, [0xD52828, 0x1C1C1C, 0x1C1C1C]);
    }
}
function RIVTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -145, 0x050505, [0xFCFBFB, 0xFE0B18, 0xFCFBFB]);
    }
}
function RIVTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -145, 0x050505, [0xFCFBFB, 0xFE0B18, 0xFCFBFB]);
    }
}
function RIVAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xebebeb, [0x3E2864, 0x261F32]);
    }
}
function RIVAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xebebeb, [0x3E2864, 0x261F32]);
    }
}
function RIVTitular2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x000000, [0xFFFFFF, 0xBD1F22, 0xFFFFFF]);
    }
}
function RIVTitular2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x000000, [0xFFFFFF, 0xBD1F22, 0xFFFFFF]);
    }
}
function RIVAlternativa2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xe0dfdc, [0xF32424]);
    }
}
function RIVAlternativa2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xe0dfdc, [0xF32424]);
    }
}
function BocaFun(player) { // !BOC
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('boc/titular/red | boc/titular/blue | boc/alternativa/red |boc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('boc/titular/red/2018 | boc/titular/blue/2018 | boc/alternativa/red/2018 |boc/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('boc/titular/red/2017 | boc/titular/blue/2017 | boc/alternativa/red/2017 |boc/alternativa/blue/2017 | boc/tercera/red/2017 |boc/tercera/blue/2017', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('boc/titular/red/2016 | boc/titular/blue/2016 | boc/alternativa/red/2016 |boc/alternativa/blue/2016', player.id, 0x6BFFB5, "normal", 0);
}
function BOCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x192A51, 0xF8AD1D, 0x192A51]);
    }
}
function BOCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x192A51, 0xF8AD1D, 0x192A51]);
    }
}
function BOCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x6183F2, [0xFCB629, 0x0B1941, 0xFCB629]);
    }
}
function BOCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x6183F2, [0xFCB629, 0x0B1941, 0xFCB629]);
    }
}
function BOCTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xffff3f, [0x063C6F]);
    }
}
function BOCTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xffff3f, [0x063C6F]);
    }
}
function BOCAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x0F1E5A, [0xFFFFFF, 0xFFE735, 0xFFFFFF]);
    }
}
function BOCAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x0F1E5A, [0xFFFFFF, 0xFFE735, 0xFFFFFF]);
    }
}
function BOCTitular2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0D376F, 0xF6DD00, 0x0D376F]);
    }
}
function BOCTitular2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0D376F, 0xF6DD00, 0x0D376F]);
    }
}
function BOCAlternativa2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x100704, [0xF9D807]);
    }
}
function BOCAlternativa2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x100704, [0xF9D807]);
    }
}
function BOCTercera2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x2D4C94, 0x1F2833, 0x2D4C94]);
    }
}
function BOCTercera2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x2D4C94, 0x1F2833, 0x2D4C94]);
    }
}
function BOCTitular2016RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x1D2349, 0xFBEC6C, 0x1D2349]);
    }
}
function BOCTitular2016BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x1D2349, 0xFBEC6C, 0x1D2349]);
    }
}
function BOCAlternativa2016RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xD1D1D1, [0xF7DF44, 0x232940, 0xFFFFFF]);
    }
}
function BOCAlternativa2016BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xD1D1D1, [0xF7DF44, 0x232940, 0xFFFFFF]);
    }
}
function SanLorenzoFun(player) { // !SLO
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('slo/titular/red | slo/titular/blue | slo/alternativa/red | slo/alternativa/blue ', player.id, 0x6BFFB5, "normal", 0);
}
function SLOTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xE1082E, 0x172547, 0xE1082E]);
    }
}
function SLOTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xE1082E, 0x172547, 0xE1082E]);
    }
}
function SLOAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x24294d, [0xEDEEF3]);
    }
}
function SLOAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x24294d, [0xEDEEF3]);
    }
}
function RacingFun(player) { // !RAC
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rac/titular/red | rac/titular/blue | rac/alternativa/red | rac/alternativa/blue | rac/tercera/red | rac/tercera/blue  | rac/alternativa2/red | rac/alternativa2/blue ', player.id, 0x6BFFB5, "normal", 0);
}
function RACTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x151515, [0x01AFE1, 0xFFFFFF, 0x01AFE1]);
    }
}
function RACTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x151515, [0x01AFE1, 0xFFFFFF, 0x01AFE1]);
    }
}
function RACAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xeeeeed, [0x1D1E23, 0x11B8E5, 0x1D1E23]);
    }
}
function RACAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xeeeeed, [0x1D1E23, 0x11B8E5, 0x1D1E23]);
    }
}
function RACTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xF7F7F7, [0x59A1C6, 0x095D8C, 0x59A1C6]);
    }
}
function RACTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xF7F7F7, [0x59A1C6, 0x095D8C, 0x59A1C6]);
    }
}
function RACAlternativa2RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 140, 0xFFFFFF, [0xF5C4D7, 0x19304F, 0x19304F]);
    }
}
function RACAlternativa2BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 140, 0xFFFFFF, [0xF5C4D7, 0x19304F, 0x19304F]);
    }
}
function IndependienteFun(player) { // !IND
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ind/titular/red | ind/titular/blue | ind/alternativa/red | ind/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CAITitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xf3f4f6, [0xDF2628]);
    }
}
function CAITitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xf3f4f6, [0xDF2628]);
    }
}
function CAIAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xe12c23, [0xECEFF6]);
    }
}
function CAIAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xe12c23, [0xECEFF6]);
    }
}
function AldosiviFun(player) { // !ALD
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ald/titular/red | ald/titular/blue | ald/alternativa/red | ald/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ALDTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF8F232, 0x0E9E59, 0xF8F232]);
    }
}
function ALDTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF8F232, 0x0E9E59, 0xF8F232]);
    }
}
function ALDAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xFAF035, 0xA9ACB6, 0xA9ACB6]);
    }
}
function ALDAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xFAF035, 0xA9ACB6, 0xA9ACB6]);
    }
}
function GimnasiaFun(player) { // !GIM
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gim/titular/red | gim/titular/blue | gim/alternativa/red |gim/alternativa/blue | gim/tercera/red |gim/tercera/blue | gim/alternativa/clasica/red |gim/alternativa/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GIMTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x3D71F2, [0xFFFFFF, 0x1F2B53, 0xFFFFFF]);
    }
}
function GIMTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x3D71F2, [0xFFFFFF, 0x1F2B53, 0xFFFFFF]);
    }
}
function GIMAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x1A264F, 0x022C94]);
    }
}
function GIMAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x1A264F, 0x022C94]);
    }
}
function GIMTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x4B4D3F, 0x221F3A, 0x4B4D3F]);
    }
}
function GIMTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x4B4D3F, 0x221F3A, 0x4B4D3F]);
    }
}
function GIMAlternativaClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x9E9EB8, [0x202743, 0xFFFFFF, 0x202743]);
    }
}
function GIMAlternativaClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x9E9EB8, [0x202743, 0xFFFFFF, 0x202743]);
    }
}
function NewellsFun(player) { // !NOB
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nob/titular/red | nob/titular/blue | nob/alternativa/red | nob/alternativa/blue | nob/tercera/red | nob/tercera/blue | nob/rosa/red | nob/rosa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NOBTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xD91626, 0x242424]);
    }
}
function NOBTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xD91626, 0x242424]);
    }
}
function NOBAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xC2C2C2, [0xFFFFFF, 0xE31625, 0x1E1E1E]);
    }
}
function NOBAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xC2C2C2, [0xFFFFFF, 0xE31625, 0x1E1E1E]);
    }
}
function NOBTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x191919, 0xD41831, 0xD41831]);
    }
}
function NOBTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x191919, 0xD41831, 0xD41831]);
    }
}
function NOBRosaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xF7C9E5, 0xFC83B8]);
    }
}
function NOBRosaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xF7C9E5, 0xFC83B8]);
    }
}
function CentralFun(player) { // !CEN
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cen/titular/red | cen/titular/blue | cen/alternativa/red | cen/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CENTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFFD61E, 0x182B5A, 0xFFD61E]);
    }
}
function CENTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFFD61E, 0x182B5A, 0xFFD61E]);
    }
}
function CENAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x172b5c, [0xFFD61E]);
    }
}
function CENAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x172b5c, [0xFFD61E]);
    }
}
function DefensaFun(player) { // !DYJ
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('dyj/titular/red | dyj/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DYJTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x000000, [0xFFFF00, 0x0D8000, 0xFFFF00]);
    }
}
function DYJTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x000000, [0xFFFF00, 0x0D8000, 0xFFFF00]);
    }
}
function AtleticoMadridFun(player) { // !ATM
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atm/titular/red | atm/titular/blue | atm/alternativa/red | atm/alternativa/blue | atm/tercera/red | atm/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ATMTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xB5B9C9, [0xFFFAFB, 0xF41819, 0xFFFAFB]);
    }
}
function ATMTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xB5B9C9, [0xFFFAFB, 0xF41819, 0xFFFAFB]);
    }
}
function ATMAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xe61711, [0x201F24]);
    }
}
function ATMAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xe61711, [0x201F24]);
    }
}
function ATMTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 152, 0x0a243f, [0xAFD4EB, 0xA6CFE8]);
    }
}
function ATMTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 152, 0x0a243f, [0xAFD4EB, 0xA6CFE8]);
    }
}
function BarcelonaFun(player) { // !BAR
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bar/titular/red | bar/titular/blue | bar/alternativa/red | bar/alternativa/blue |  | bar/tercera/red | bar/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BARTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffda26, [0xBC223B, 0x1D397A, 0xBC223B]);
    }
}
function BARTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffda26, [0xBC223B, 0x1D397A, 0xBC223B]);
    }
}
function BARAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x22285a, [0xFADA3C]);
    }
}
function BARAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x22285a, [0xFADA3C]);
    }
}
function BARTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x23285a, [0x4ED9CB, 0x36CCBC]);
    }
}
function BARTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x23285a, [0x4ED9CB, 0x36CCBC]);
    }
}
function RealMadridFun(player) { // !RMA
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rma/titular/red | rma/titular/blue | rma/alternativa/red | rma/alternativa/blue | rma/tercera/red | rma/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RMATitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xc3af69, [0xFDFDFD]);
    }
}
function RMATitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xc3af69, [0xFDFDFD]);
    }
}
function RMAAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 243, 0xcebc77, [0x1C2E4D, 0x1C2E4D, 0x233B58]);
    }
}
function RMAAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 243, 0xcebc77, [0x1C2E4D, 0x1C2E4D, 0x233B58]);
    }
}
function RMATerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x002957, [0x6EE2C8]);
    }
}
function RMATerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x002957, [0x6EE2C8]);
    }
}
function InterMilanFun(player) { // !INT
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('int/titular/red | int/titular/blue | int/alternativa/red | int/alternativa/blue | int/tercera/red | int/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function INTTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0082E1, 0x0C161E, 0x0082E1]);
    }
}
function INTTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x0082E1, 0x0C161E, 0x0082E1]);
    }
}
function INTAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0x7DEDDF]);
    }
}
function INTAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0x7DEDDF]);
    }
}
function INTTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffce0a, [0x1B1B1C]);
    }
}
function INTTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffce0a, [0x1B1B1C]);
    }
}
function MilanFun(player) { // !ACM
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('acm/titular/red | acm/titular/blue | acm/alternativa/red | acm/alternativa/blue | acm/tercera/red | acm/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MILTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9f9f9, [0xE7002E, 0x242223, 0xE7002E]);
    }
}
function MILTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9f9f9, [0xE7002E, 0x242223, 0xE7002E]);
    }
}
function MILAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xa61726, [0xFAFAFA]);
    }
}
function MILAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xa61726, [0xFAFAFA]);
    }
}
function MILTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9f9f9, [0x2A2A2A]);
    }
}
function MILTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9f9f9, [0x2A2A2A]);
    }
}
function CruzeiroFun(player) { // !CRU
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cru/titular/red | cru/titular/blue | cru/alternativa/red | cru/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CRUTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xfefefd, [0x2251C4]);
    }
}
function CRUTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xfefefd, [0x2251C4]);
    }
}
function CRUAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x2f3f99, [0xF6F6FA]);
    }
}
function CRUAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x2f3f99, [0xF6F6FA]);
    }
}
function PalmeirasFun(player) { // !PAL
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pal/titular/red | pal/titular/blue | pal/alternativa/red | pal/alternativa/blue | pal/tercera/red | pal/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PALTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0x133D2F]);
    }
}
function PALTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0x133D2F]);
    }
}
function PALAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x10372a, [0xF2F1F2]);
    }
}
function PALAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x10372a, [0xF2F1F2]);
    }
}
function PALTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0x5ADAC5]);
    }
}
function PALTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0x5ADAC5]);
    }
}
function GremioFun(player) { // !GRE
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gre/titular/red | gre/titular/blue | gre/alternativa/red | gre/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GRETitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0099DB, 0x20181E, 0x0099DB]);
    }
}
function GRETitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x19A2FF, 0x20181E, 0x19A2FF]);
    }
}
function GREAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0088be, [0xFAFAFC]);
    }
}
function GREAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0088be, [0xFAFAFC]);
    }
}
function TottenhamFun(player) { // !TOT
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tot/titular/red| tot/titular/blue| tot/alternativa/red| tot/alternativa/blue | tot/tercera/red| tot/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tot/titular/red/2018 | tot/titular/blue/2018 | tot/alternativa/red/2018 | tot/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
}
function TOTTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x161d4f, [0xF0F0F1]);
    }
}
function TOTTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x161d4f, [0xF0F0F1]);
    }
}
function TOTAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfffeff, [0x1B294B, 0x1B294B, 0x232956]);
    }
}
function TOTAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfffeff, [0x1B294B, 0x1B294B, 0x232956]);
    }
}
function TOTTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x161d4f, [0x3AC0EB, 0x36B4E3]);
    }
}
function TOTTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x161d4f, [0x3AC0EB, 0x36B4E3]);
    }
}
function TOTTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x293356, [0xFFFFFF, 0xFFFFFF, 0x293356]);
    }
}
function TOTTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x293356, [0xFFFFFF, 0xFFFFFF, 0x293356]);
    }
}
function TOTAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x20374C, 0x0EAF9B]);
    }
}
function TOTAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x20374C, 0x0EAF9B]);
    }
}
function LiverpoolFun(player) { // !LIV
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('liv/titular/red | liv/titular/blue | liv/alternativa/red | liv/alternativa/blue | liv/tercera/red | liv/tercera/blue  | liv/titular/red/2018 | liv/titular/blue/2018 | liv/alternativa/red/2018 | liv/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
}
function LIVTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xF7F7F7, [0xA80617, 0xB60D1F, 0xA80617]);
    }
}
function LIVTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xF7F7F7, [0xA80617, 0xB60D1F, 0xA80617]);
    }
}
function LIVAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd91f29, [0xEBEBF0, 0xF7F7FC, 0xEBEBF0]);
    }
}
function LIVAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd91f29, [0xEBEBF0, 0xF7F7FC, 0xEBEBF0]);
    }
}
function LIVTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x61c8b0, [0x1E1D22]);
    }
}
function LIVTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x61c8b0, [0x1E1D22]);
    }
}
function LIVTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xA5191A]);
    }
}
function LIVTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xA5191A]);
    }
}
function LIVAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xec0109, [0xDDE1E4]);
    }
}
function LIVAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xec0109, [0xDDE1E4]);
    }
}
function ArgentinaFun(player) { // !ARG
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('arg/titular/red | arg/titular/blue | arg/alternativa/red | arg/alternativa/blue | arg/titular/red/2018 | arg/titular/blue/2018 | arg/titular/red/2016 | arg/titular/blue/2016 | arg/alternativa/red/2016 | arg/alternativa/blue/2016 | arg/bandera/red | arg/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ARGTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x142743, [0xC4EAF3, 0xFBF6F9, 0xC4EAF3]);
    }
}
function ARGTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x142743, [0xC4EAF3, 0xFBF6F9, 0xC4EAF3]);
    }
}
function ARGAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x2B2A2D]);
    }
}
function ARGAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x2B2A2D]);
    }
}
function ARGTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x181219, [0xF3F5F6, 0xA8D0E4, 0xF3F5F6]);
    }
}
function ARGTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x181219, [0xF3F5F6, 0xA8D0E4, 0xF3F5F6]);
    }
}
function ARGTitular2016RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x010101, [0xA5D2E8, 0xFFFFFF, 0xA5D2E8]);
    }
}
function ARGTitular2016BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x010101, [0xA5D2E8, 0xFFFFFF, 0xA5D2E8]);
    }
}
function ARGAlternativa2016RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf7f7f7, [0x003E6F]);
    }
}
function ARGAlternativa2016BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf7f7f7, [0x003E6F]);
    }
}
function ARGBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf6b40e, [0x74ACDF, 0xFFFFFF, 0x74ACDF]);
    }
}
function ARGBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf6b40e, [0x74ACDF, 0xFFFFFF, 0x74ACDF]);
    }
}
function BelgicaFun(player) { // !BÉL
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('belg/titular/red | belg/titular/blue | belg/alternativa/red | belg/alternativa/blue | belg/bandera/red | belg/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BelgicaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFE524 , [0xD51F1C]);
    }
}
function BelgicaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFE524 , [0xD51F1C]);
    }
}
function BelgicaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000 , [0xF9C700, 0xF4AC00]);
    }
}
function BelgicaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000 , [0xF9C700, 0xF4AC00]);
    }
}
function BelgicaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF , [0x000000, 0xFAE042, 0xED2939]);
    }
}
function BelgicaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF , [0x000000, 0xFAE042, 0xED2939]);
    }
}
function BrasilFun(player) { // !BRA
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bra/titular/red | bra/titular/blue | bra/alternativa/red | bra/alternativa/blue | bra/tercera/red | bra/tercera/blue | bra/retro/red | bra/retro/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BRATitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x019054, [0xF6DC3E]);
    }
}
function BRATitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x019054, [0xF6DC3E]);
    }
}
function BRAAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xfdda01, [0x0853B7, 0x086ACC]);
    }
}
function BRAAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xfdda01, [0x0853B7, 0x086ACC]);
    }
}
function BRATerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0053b5, [0xF8F9FE]);
    }
}
function BRATerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0053b5, [0xF8F9FE]);
    }
}
function BRARetroRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x20801e, [0xf0e237]);
    }
}
function BRARetroBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x20801e, [0xf0e237]);
    }
}
function ChileFun(player) { // !CHI
    room.sendAnnouncement('Pode escolher entre::', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('chi/titular/red | chi/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CHITitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xFF3829]);
    }
}
function CHITitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xFF3829]);
    }
}
function UruguayFun(player) { // !URU
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('uru/titular/red | uru/titular/blue | uru/alternativa/red | uru/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function URUTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0x8ABBE4]);
    }
}
function URUTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0x8ABBE4]);
    }
}
function URUAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xFCFBFB]);
    }
}
function URUAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xFCFBFB]);
    }
}
function FranciaFun(player) { // !FRA
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fra/titular/red | fra/titular/blue | fra/alternativa/red | fra/alternativa/blue | fra/bandera/red | fra/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FRATitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xf9f9f9, [0x1F273A, 0x1F273A, 0x3C87D9]);
    }
}
function FRATitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xf9f9f9, [0x1F273A, 0x1F273A, 0x3C87D9]);
    }
}
function FRAAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x171f47, [0xF1F2F4]);
    }
}
function FRAAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x171f47, [0xF1F2F4]);
    }
}
function FRABanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 1, 0x000000 , [0x002395, 0xFFFFFF, 0xED2939]);
    }
}
function FRABanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 1, 0x000000 , [0x002395, 0xFFFFFF, 0xED2939]);
    }
}
function CroaciaFun(player) { // !CRO
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cro/titular/red | cro/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CROTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x2F4767, [0xDD083C, 0xFFFFFF, 0xFFFFFF]);
    }
}
function CROTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x2F4767, [0xDD083C, 0xFFFFFF, 0xFFFFFF]);
    }
}
function NapoliFun(player) { // !NAP
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nap/titular/red | nap/titular/blue | nap/alternativa/red | nap/alternativa/blue | nap/titular/red/ucl | nap/titular/blue/ucl', player.id, 0x6BFFB5, "normal", 0);
}
function NAPTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x031a45, [0x2485C8]);
    }
}
function NAPTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x031a45, [0x2485C8]);
    }
}
function NAPAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 299, 0xFFFFFF, [0x7E8641, 0x7E8641, 0x33392E]);
    }
}
function NAPAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 299, 0xFFFFFF, [0x7E8641, 0x7E8641, 0x33392E]);
    }
}
function NAPTitularUCLRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 299, 0xe0e0e0, [0x0C8FEA]);
    }
}
function NAPTitularUCLBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 299, 0xe0e0e0, [0x0C8FEA]);
    }
}
function BayernFun(player) { // !FCB
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fcb/titular/red | fcb/titular/blue | fcb/alternativa/red | fcb/alternativa/blue | fcb/tercera/red | fcb/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FCBTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF3000E]);
    }
}
function FCBTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF3000E]);
    }
}
function FCBAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x62676a, [0xF6F8FC]);
    }
}
function FCBAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x62676a, [0xF6F8FC]);
    }
}
function FCBTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xe76352, [0x132243]);
    }
}
function FCBTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xe76352, [0x132243]);
    }
}

function BorussiaFun(player) { // !BVB
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bvb/titular/red | bvb/titular/blue | bvb/alternativa/red | bvb/alternativa/blue | bvb/titular/red/ucl | bvb/titular/blue/ucl', player.id, 0x6BFFB5, "normal", 0);
}
function BorussiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x1f191a, [0xFFDB00]);
    }
}
function BorussiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x1f191a, [0xFFDB00]);
    }
}
function BorussiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xcecfd1, [0x252525]);
    }
}
function BorussiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xcecfd1, [0x252525]);
    }
}
function BorussiaTitularChampionsRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1f191a, [0x28222B, 0xFBCC30, 0xFBCC30]);
    }
}
function BorussiaTitularChampionsBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1f191a, [0x28222B, 0xFBCC30, 0xFBCC30]);
    }
}
function JuventusFun(player) { // !JUV
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('juv/titular/red | juv/titular/blue | juv/alternativa/red | juv/alternativa/blue | juv/tercera/red | juv/tercera/blue | juv/cuarta/red | juv/cuarta/blue', player.id, 0x6BFFB5, "normal", 0);
}
function JuventusTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0x9D9FA6, [0xF4F5F6, 0x222424]);
    }
}
function JuventusTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0x9D9FA6, [0xF4F5F6, 0x222424]);
    }
}
function JuventusAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xd31218, [0xF9F4EE, 0xF6EDE5]);
    }
}
function JuventusAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xd31218, [0xF9F4EE, 0xF6EDE5]);
    }
}
function JuventusTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfefefe, [0x1E9BE0, 0x0E7ECA]);
    }
}
function JuventusTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfefefe, [0x1E9BE0, 0x0E7ECA]);
    }
}
function JuventusCuartaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xa4fb3d, [0xCFCFCF, 0x1F1F21, 0xCFCFCF]);
    }
}
function JuventusCuartaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xa4fb3d, [0xCFCFCF, 0x1F1F21, 0xCFCFCF]);
    }
}

function EstudiantesFun(player) { // !EST
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('est/titular/red | est/titular/blue | est/alternativa/red | est/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EstudiantesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFA132C, 0xFFFFFF, 0xFA132C]);
    }
}
function EstudiantesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFA132C, 0xFFFFFF, 0xFA132C]);
    }
}
function EstudiantesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 243, 0xFFFFFF, [0x1C1C1E, 0x1C1C1E, 0xC80F22]);
    }
}
function EstudiantesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 243, 0xFFFFFF, [0x1C1C1E, 0x1C1C1E, 0xC80F22]);
    }
}
function BanfieldFun(player) { // !BAND
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('band/titular/red | band/titular/blue | band/alternativa/red | band/alternativa/blue | band/clasica/red | band/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BanfieldTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 44, 0xb5ac44, [0xFFFFFF, 0x066748, 0xFFFFFF]);
    }
}
function BanfieldTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 44, 0xb5ac44, [0xFFFFFF, 0x066748, 0xFFFFFF]);
    }
}
function BanfieldAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 44, 0xFFFFFF, [0x1C1C1C, 0x09694A, 0x1C1C1C]);
    }
}
function BanfieldAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 44, 0xFFFFFF, [0x1C1C1C, 0x09694A, 0x1C1C1C]);
    }
}
function BanfieldClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0a0a0a, [0x02953F, 0xFEFFFF, 0x02953F]);
    }
}
function BanfieldClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0a0a0a, [0x02953F, 0xFEFFFF, 0x02953F]);
    }
}
function LanusFun(player) { // !LAN
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lan/titular/red | lan/titular/blue | lan/alternativa/red | lan/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LanusTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0x630B29, 0x731430, 0x731430]);
    }
}
function LanusTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0x630B29, 0x731430, 0x731430]);
    }
}
function LanusAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x2B0812, [0xFFFFFF, 0x761731, 0xFFFFFF]);
    }
}
function LanusAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x2B0812, [0xFFFFFF, 0x761731, 0xFFFFFF]);
    }
}
function ManUnitedFun(player) { // !MUN
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mun/titular/red | mun/titular/blue | mun/alternativa/red | mun/alternativa/blue | mun/tercera/red | mun/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ManUnitedTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfdfdfd, [0xF40022]);
    }
}
function ManUnitedTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfdfdfd, [0xF40022]);
    }
}
function ManUnitedAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x191816, [0xE1D2BF]);
    }
}
function ManUnitedAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x231f20, [0xF5EAD4]);
    }
}
function ManUnitedTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x231f20, [0xF5EAD4]);
    }
}
function ManUnitedTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 233, 0xf24134, [0x2B2F35, 0x212125]);
    }
}
function ManCityFun(player) { // !MCI
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mci/titular/red | mci/titular/blue | mci/alternativa/red | mci/alternativa/blue | mci/tercera/red | mci/tercera/blue | mci/titular/red/ucl | mci/titular/blue/ucl', player.id, 0x6BFFB5, "normal", 0);
}
function ManCityTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x92D5F5]);
    }
}
function ManCityTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x92D5F5]);
    }
}
function ManCityAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xf8d711, [0x242424, 0x242424, 0xF58371]);
    }
}
function ManCityAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xf8d711, [0x242424, 0x242424, 0xF58371]);
    }
}
function ManCityTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xF5FB9C, 0xFEDC99, 0xFE9B7C]);
    }
}
function ManCityTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xF5FB9C, 0xFEDC99, 0xFE9B7C]);
    }
}
function ManCityTitularChampionsRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x4f2a78, [0x93D4F5]);
    }
}
function ManCityTitularChampionsBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x4f2a78, [0x93D4F5]);
    }
}
function ArsenalFun(player) { // !ARS
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ars/titular/red | ars/titular/blue | ars/alternativa/red | ars/alternativa/blue | ars/tercera/red | ars/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ArsenalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x9BA3B0, [0xFFFFFF, 0xE11124, 0xFFFFFF]);
    }
}
function ArsenalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x9BA3B0, [0xFFFFFF, 0xE11124, 0xFFFFFF]);
    }
}
function ArsenalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 55, 0x0e2436, [0xEEC313, 0xFCCA08, 0xD3AC13]);
    }
}
function ArsenalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 55, 0x0e2436, [0xEEC313, 0xFCCA08, 0xD3AC13]);
    }
}
function ArsenalTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfecc00, [0x27354F]);
    }
}
function ArsenalTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfecc00, [0x27354F]);
    }
}
function ChelseaFun(player) { // !CHE
    room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('che/titular/red | che/titular/blue | che/alternativa/red | che/alternativa/blue | che/tercera/red | che/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChelseaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -45, 0xFFFFFF, [0x3F60E3, 0x3F60E3, 0x33499F]);
    }
}
function ChelseaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -45, 0xFFFFFF, [0x3F60E3, 0x3F60E3, 0x33499F]);
    }
}
function ChelseaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 52, 0x003b7d, [0xF8F8F8]);
    }
}
function ChelseaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 52, 0x003b7d, [0xF8F8F8]);
    }
}
function ChelseaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 56, 0xf9500f, [0x1A1A1A, 0x161616]);
    }
}
function ChelseaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 56, 0xf9500f, [0x1A1A1A, 0x161616]);
    }
}
function ParanaenseFun(player) { // !PAR
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('par/titular/red | par/titular/blue | par/alternativa/red | par/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ParanaenseTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 48, 0xFFFFFF, [0xC6012C, 0xC6012C, 0x100E0F]);
    }
}
function ParanaenseTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 48, 0xFFFFFF, [0xC6012C, 0xC6012C, 0x100E0F]);
    }
}
function ParanaenseAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 48, 0x0e0e0e, [0xFFFFFF, 0xFFFFFF, 0xBABABA]);
    }
}
function ParanaenseAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 48, 0x0e0e0e, [0xFFFFFF, 0xFFFFFF, 0xBABABA]);
    }
}
function HuracanFun(player) { // !HUR
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('hur/titular/red | hur/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function HuracanTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 52, 0xf01d12, [0xFFFFFF]);
    }
}
function HuracanTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 52, 0xf01d12, [0xFFFFFF]);
    }
}
function TigreFun(player) { // !TIG
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tig/titular/red | tig/titular/blue | tig/alternativa/red | tig/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function TigreTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0746DF, 0xEF3239, 0x0746DF]);
    }
}
function TigreTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0746DF, 0xEF3239, 0x0746DF]);
    }
}
function TigreAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0E54DA, 0xFD043E, 0xFFFFFF]);
    }
}
function TigreAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0E54DA, 0xFD043E, 0xFFFFFF]);
    }
}
function AlemaniaFun(player) { // !ALE
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ale/titular/red | ale/titular/blue | ale/bandera/red | ale/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlemaniaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x24201d, [0xFFFFFF]);
    }
}
function AlemaniaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x24201d, [0xFFFFFF]);
    }
}
function AlemaniaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF , [0x000000, 0xDD0000, 0xFFCE00]);
    }
}
function AlemaniaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF , [0x000000, 0xDD0000, 0xFFCE00]);
    }
}
function EspanaFun(player) { // !ESP
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('esp/titular/red | esp/titular/blue | esp/alternativa/red | esp/alternativa/blue | esp/bandera/red | esp/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EspanaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xffdd0e, [0xF81C1E]);
    }
}
function EspanaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xffdd0e, [0xF81C1E]);
    }
}
function EspanaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfd2721, [0xE5E6E7]);
    }
}
function EspanaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfd2721, [0xE5E6E7]);
    }
}
function EspanaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xad1519 , [0xC60B1E, 0xFFC400, 0xC60B1E]);
    }
}
function EspanaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xad1519 , [0xC60B1E, 0xFFC400, 0xC60B1E]);
    }
}
function PortugalFun(player) { // !POR
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('por/titular/red | por/titular/blue | por/alternativa/red | por/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PortugalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf4b568, [0xF31633]);
    }
}
function PortugalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf4b568, [0xF31633]);
    }
}
function PortugalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xca262e, [0xF2F2F2]);
    }
}
function PortugalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xca262e, [0xF2F2F2]);
    }
}
function ArgentinosJrsFun(player) { // !AAAJ
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('aaaj/titular/red | aaaj/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ArgentinosJrsTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 123, 0x075b99, [0xE62C2D, 0xFFFFFF, 0xE62C2D]);
    }
}
function ArgentinosJrsTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 123, 0x075b99, [0xE62C2D, 0xFFFFFF, 0xE62C2D]);
    }
}
function AllBoysFun(player) { // !ALB
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('alb/titular/red | alb/titular/blue | alb/alternativa/red | alb/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AllBoysTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x282a27, [0xFFFFFF]);
    }
}
function AllBoysTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x282a27, [0xFFFFFF]);
    }
}
function AllBoysAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xD6D6D6, [0xFFFFFF, 0x1E1A17, 0xFFFFFF]);
    }
}
function AllBoysAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xD6D6D6, [0xFFFFFF, 0x1E1A17, 0xFFFFFF]);
    }
}
function AtlantaFun(player) { // !ATL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atl/titular/red | atl/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtlantaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xEFB756, 0x253D63, 0xEFB756]);
    }
}
function AtlantaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xEFB756, 0x253D63, 0xEFB756]);
    }
}
function BelgranoFun(player) { // !BEL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bel/titular/red | bel/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BelgranoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x01B6FB]);
    }
}
function BelgranoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x01B6FB]);
    }
}
function ChacaritaFun(player) { // !CHA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cha/titular/red | cha/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChacaritaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x050505, [0x171111, 0xFFFFFF, 0xFF352A]);
    }
}
function ChacaritaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x050505, [0x171111, 0xFFFFFF, 0xFF352A]);
    }
}
function TalleresFun(player) { // !TAL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tal/titular/red | tal/titular/blue | tal/alternativa/red | tal/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function TalleresTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0E1E3B, [0x042EA6, 0xFFFFFF, 0x0042EA6]);
    }
}
function TalleresTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0E1E3B, [0x042EA6, 0xFFFFFF, 0x0042EA6]);
    }
}
function TalleresAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x064DB4, 0x063477, 0x061F45]);
    }
}
function TalleresAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x064DB4, 0x063477, 0x061F45]);
    }
}
function PlatenseFun(player) { // !PLA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pla/titular/red | pla/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PlatenseTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xBABABA, [0xFFFFFF, 0x382A29, 0xFFFFFF]);
    }
}
function PlatenseTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xBABABA, [0xFFFFFF, 0x382A29, 0xFFFFFF]);
    }
}
function OlimpoFun(player) { // !OLI
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('olp/titular/red | olp/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OlimpoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFFDD00, 0x24201D, 0xFFDD00]);
    }
}
function OlimpoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFFDD00, 0x24201D, 0xFFDD00]);
    }
}
function SanMartinTucumanFun(player) { // !SMT
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('smt/titular/red | smt/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SanMartinTucumanTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x131112, [0xC72824, 0xFFFFFF, 0xC72824]);
    }
}
function SanMartinTucumanTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x131112, [0xC72824, 0xFFFFFF, 0xC72824]);
    }
}
function AtlTucumanFun(player) { // !ATU
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atu/titular/red | atu/titular/blue | atu/alternativa/red | atu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtlTucumanTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x171717, [0xFFFFFF, 0x4CB3F0, 0xFFFFFF]);
    }
}
function AtlTucumanTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x171717, [0xFFFFFF, 0x4CB3F0, 0xFFFFFF]);
    }
}
function AtlTucumanAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xccd5e6, [0x151A37]);
    }
}
function AtlTucumanAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xccd5e6, [0x151A37]);
    }
}
function FerroFun(player) { // !FCO
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fco/titular/red | fco/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FerroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x1F8961]);
    }
}
function FerroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x1F8961]);
    }
}
function NacionalFun(player) { // !NAC
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nac/titular/red | nac/titular/blue | nac/alternativa/red | nac/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NacionalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9020a, [0xFAF9FF]);
    }
}
function NacionalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9020a, [0xFAF9FF]);
    }
}
function NacionalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xf9020a, [0x003361, 0xFFFFFF, 0x003361]);
    }
}
function NacionalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 50, 0xf9020a, [0x003361, 0xFFFFFF, 0x003361]);
    }
}
function PenarolFun(player) { // !PEN
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pen/titular/red | pen/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PenarolTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFFE828, 0x000000, 0xFFE828]);
    }
}
function PenarolTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFFE828, 0x000000, 0xFFE828]);
    }
}
function QuilmesFun(player) { // !QUI
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('qui/titular/red | qui/titular/blue | qui/alternativa/red | qui/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function QuilmesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x423f8e, [0xFFFFFF]);
    }
}
function QuilmesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x423f8e, [0xFFFFFF]);
    }
}
function QuilmesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0xFFFFFF, [0x397EF7, 0x17478F]);
    }
}
function QuilmesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0xFFFFFF, [0x397EF7, 0x17478F]);
    }
}
function ChicagoFun(player) { // !CHI
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nch/titular/red | nch/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChicagoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0xFFFFFF, [0x3AC991, 0x000000, 0x3AC991]);
    }
}
function ChicagoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0xFFFFFF, [0x3AC991, 0x000000, 0x3AC991]);
    }
}
function MoronFun(player) { // !MOR
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mor/titular/red | mor/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MoronTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x242b35, [0xFFFFFF, 0xE21C1C, 0xFFFFFF]);
    }
}
function MoronTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x242b35, [0xFFFFFF, 0xE21C1C, 0xFFFFFF]);
    }
}
function UnionFun(player) { // !UNI
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('uni/titular/red | uni/titular/blue | uni/alternativa/red | uni/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function UnionTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x1155a1, [0xFFFFFF, 0xDD0005, 0xFFFFFF]);
    }
}
function UnionTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x1155a1, [0xFFFFFF, 0xDD0005, 0xFFFFFF]);
    }
}
function UnionAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 126, 0xFFFFFF, [0xF81726, 0x1461C7, 0x1461C7]);
    }
}
function UnionAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 126, 0xFFFFFF, [0xF81726, 0x1461C7, 0x1461C7]);
    }
}
function ColonFun(player) { // !CSF
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('csf/titular/red | csf/titular/blue | csf/alternativa/red | csf/alternativa/blue | csf/tercera/red | csf/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ColonTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xE61628, 0x18181E]);
    }
}
function ColonTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xE61628, 0x18181E]);
    }
}
function ColonAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 61, 0x000000, [0x7B0C1D, 0xFFFFFF, 0xFFFFFF]);
    }
}
function ColonAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 61, 0x000000, [0x7B0C1D, 0xFFFFFF, 0xFFFFFF]);
    }
}
function ColonTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xB5B4B9, 0xBEBFC1, 0xBEBFC1]);
    }
}
function ColonTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xB5B4B9, 0xBEBFC1, 0xBEBFC1]);
    }
}
function SarandiFun(player) { // !ARSE
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('arse/titular/red | arse/titular/blue | arse/alternativa/red | arse/alternativa/blue | arse/tercera/red | arse/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SarandiTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0x70D1FF, 0xF12931, 0x70D1FF]);
    }
}
function SarandiTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0x70D1FF, 0xF12931, 0x70D1FF]);
    }
}
function SarandiAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0x1D1E1E, 0xF52626, 0x1D1E1E]);
    }
}
function SarandiAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0x1D1E1E, 0xF52626, 0x1D1E1E]);
    }
}
function SarandiTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xe61b37, [0xFFFFFF, 0xFFFFFF, 0x3BA1F6]);
    }
}
function SarandiTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xe61b37, [0xFFFFFF, 0xFFFFFF, 0x3BA1F6]);
    }
}
function DocksudFun(player) { // !DOC
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('doc/titular/red | doc/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DocksudTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x254494, 0xF3C706, 0x254494]);
    }
}
function DocksudTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x254494, 0xF3C706, 0x254494]);
    }
}
function ColombiaFun(player) { // !COL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('col/titular/red | col/titular/blue | col/alternativa/red | col/alternativa/blue | col/bandera/red | col/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ColombiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xe93733, [0xF0E054, 0xF0E054, 0xF3E675]);
    }
}
function ColombiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xe93733, [0xF0E054, 0xF0E054, 0xF3E675]);
    }
}
function ColombiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 38, 0xfc3537, [0x02379E]);
    }
}
function ColombiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 38, 0xfc3537, [0x02379E]);
    }
}
function ColombiaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF , [0xFCD116, 0x003893, 0xCE1126]);
    }
}
function ColombiaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF , [0xFCD116, 0x003893, 0xCE1126]);
    }
}
function PeruFun(player) { // !PER
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('per/titular/red | per/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PeruTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 39, 0x171a11, [0xFFFFFF, 0xFF353B, 0xFFFFFF]);
    }
}
function PeruTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 39, 0x171a11, [0xFFFFFF, 0xFF353B, 0xFFFFFF]);
    }
}
function WestBromFun(player) { // !WBA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('wba/titular/red | wba/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function WestBromTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xde2b2e, [0xFFFFFF, 0x1B2A41, 0xFFFFFF]);
    }
}
function WestBromTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xde2b2e, [0xFFFFFF, 0x1B2A41, 0xFFFFFF]);
    }
}
function AstonVillaFun(player) { // !AVL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('avl/titular/red | avl/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AstonVillaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x7A252A, 0x9F313A, 0x7A252A]);
    }
}
function AstonVillaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x7A252A, 0x9F313A, 0x7A252A]);
    }
}
function FulhamFun(player) { // !FUL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ful/titular/red | ful/titular/blue | ful/alternativa/red | ful/alternativa/blue | ful/clasica/red | ful/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FulhamTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1e202c, [0xF0EFF5]);
    }
}
function FulhamTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1e202c, [0xF0EFF5]);
    }
}
function FulhamAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xC71B29, 0x372729, 0xC71B29]);
    }
}
function FulhamAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xC71B29, 0x372729, 0xC71B29]);
    }
}
function FulhamClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xe41b15, [0x000000, 0xFFFFFF, 0x000000]);
    }
}
function FulhamClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xe41b15, [0x000000, 0xFFFFFF, 0x000000]);
    }
}
function LeicesterFun(player) { // !LEI
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lei/titular/red | lei/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LeicesterTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 270, 0xFFFFFF, [0x364CFA, 0x3035FF]);
    }
}
function LeicesterTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 270, 0xFFFFFF, [0x364CFA, 0x3035FF]);
    }
}
function DanubioFun(player) { // !DAN
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('dan/titular/red | dan/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DanubioTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xdb0d24, [0xFFFFFF, 0x131514, 0xFFFFFF]);
    }
}
function DanubioTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 50, 0xdb0d24, [0xFFFFFF, 0x131514, 0xFFFFFF]);
    }
}
function RamplaJrsFun(player) { // !RAM
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ram/titular/red | ram/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RamplaJrsTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFF2E3B, 0x1D836D, 0xFF2E3B]);
    }
}
function RamplaJrsTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFF2E3B, 0x1D836D, 0xFF2E3B]);
    }
}
function SacachispasFun(player) { // !SCH
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sch/titular/red | sch/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SacachispasTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x262d3f, [0xFFFFFF, 0x9477B7, 0xFFFFFF]);
    }
}
function SacachispasTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x262d3f, [0xFFFFFF, 0x9477B7, 0xFFFFFF]);
    }
}
function HolandaFun(player) { // !HOL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('hol/titular/red | hol/titular/blue | hol/alternativa/red | hol/alternativa/blue | hol/retro/red | hol/retro/blue  hol/bandera/red | hol/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function HolandaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x200801, [0xF85404, 0xF85404, 0xF75E21]);
    }
}
function HolandaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x200801, [0xF85404, 0xF85404, 0xF75E21]);
    }
}
function HolandaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x0d285f, [0x4ECDE4, 0x47BAD9, 0x3CA1C7]);
    }
}
function HolandaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x0d285f, [0x4ECDE4, 0x47BAD9, 0x3CA1C7]);
    }
}
function HolandaRetroRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x111419, [0xFC5F36, 0xFF7453, 0xF9A580]);
    }
}
function HolandaRetroBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x111419, [0xFC5F36, 0xFF7453, 0xF9A580]);
    }
}
function HolandaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xAE1C28, 0xFFFFFF, 0x21468B]);
    }
}
function HolandaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xAE1C28, 0xFFFFFF, 0x21468B]);
    }
}
function BoliviaFun(player) { // !BOL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bol/titular/red | bol/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BoliviaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x26A057]);
    }
}
function BoliviaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x26A057]);
    }
}
function ItaliaFun(player) { // !ITA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ita/titular/red | ita/titular/blue | ita/alternativa/red | ita/alternativa/blue | ita/retro/red | ita/retro/blue | ita/bandera/red | ita/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ItaliaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9f9f9, [0x0269DC]);
    }
}
function ItaliaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9f9f9, [0x0269DC]);
    }
}
function ItaliaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x053da7, [0xF0F1F1]);
    }
}
function ItaliaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x053da7, [0xF0F1F1]);
    }
}
function ItaliaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 1, 0x000000 , [0x009246, 0xFFFFFF, 0xCE2B37]);
    }
}
function ItaliaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 1, 0x000000 , [0x009246, 0xFFFFFF, 0xCE2B37]);
    }
}
function ItaliaRetroRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xdbbc52, [0x1d3b6d, 0x2163b7, 0x1d3b6d]);
    }
}
function ItaliaRetroBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xdbbc52, [0x1d3b6d, 0x2163b7, 0x1d3b6d]);
    }
}
function InglaterraFun(player) { // !ING
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ing/titular/red | ing/titular/blue | ing/alternativa/red | ing/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function InglaterraTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xdc1413, [0xF3F4F9]);
    }
}
function InglaterraTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xdc1413, [0xF3F4F9]);
    }
}
function InglaterraAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xfbf9f9, [0xDB141F]);
    }
}
function InglaterraAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xfbf9f9, [0xDB141F]);
    }
}
function ParaguayFun(player) { // !PGY
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pgy/titular/red | pgy/titular/blue | pgy/alternativa/red | pgy/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ParaguayTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x15327d, [0xFBFBFB, 0xF52A38, 0xFBFBFB]);
    }
}
function ParaguayTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x15327d, [0xFBFBFB, 0xF52A38, 0xFBFBFB]);
    }
}
function ParaguayAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x1637D4, 0x0018A0]);
    }
}
function ParaguayAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x1637D4, 0x0018A0]);
    }
}
function VenezuelaFun(player) { // !VEN
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ven/titular/red | ven/titular/blue | ven/alternativa/red | ven/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function VenezuelaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x810B2B]);
    }
}
function VenezuelaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x810B2B]);
    }
}
function VenezuelaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xa30023, [0xFAFAFA]);
    }
}
function VenezuelaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xa30023, [0xFAFAFA]);
    }
}
function QatarFun(player) { // !QAT
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('qat/titular/red | qat/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function QatarTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xBD1C2E]);
    }
}
function QatarTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xBD1C2E]);
    }
}
function AjaxFun(player) { // !AJA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('aja/titular/red | aja/titular/blue | aja/alternativa/red | aja/alternativa/blue | aja/alternativa/red/2018 | aja/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
}
function AjaxTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xB8BCC2, [0xFCFAFC, 0xE11025, 0xFCFAFC]);
    }
}
function AjaxTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xB8BCC2, [0xFCFAFC, 0xE11025, 0xFCFAFC]);
    }
}
function AjaxAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xee7024, [0x255459, 0x05707C, 0x255459]);
    }
}
function AjaxAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xee7024, [0x255459, 0x05707C, 0x255459]);
    }
}
function AjaxAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xc5c390, [0xDFDCC9, 0x1C2427, 0x1C2427]);
    }
}
function AjaxAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xc5c390, [0xDFDCC9, 0x1C2427, 0x1C2427]);
    }
}
function PSVFun(player) { // !PSV
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('psv/titular/red | psv/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PSVTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x030303, [0xFFFFFF, 0xFA2747, 0xFFFFFF]);
    }
}
function PSVTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x030303, [0xFFFFFF, 0xFA2747, 0xFFFFFF]);
    }
}
function FeyenoordFun(player) { // !FEY
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fey/titular/red | fey/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FEYTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFFFFFF, 0xFA203B]);
    }
}
function FEYTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFFFFFF, 0xFA203B]);
    }
}
function ParisFun(player) { // !PSG
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('psg/titular/red | psg/titular/blue | psg/alternativa/red | psg/alternativa/blue | psg/tercera/red | psg/tercera/blue | psg/entrenamiento/red | psg/entrenamiento/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PSGTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf3f3f3, [0x293359, 0xE71B38, 0x293359]);
    }
}
function PSGTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf3f3f3, [0x293359, 0xE71B38, 0x293359]);
    }
}
function PSGAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0e0e0e, [0xFB503D]);
    }
}
function PSGAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0e0e0e, [0xFB503D]);
    }
}
function PSGTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x191e3f, [0xD40709, 0xEAF4F6, 0xEAF4F6]);
    }
}
function PSGTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x191e3f, [0xD40709, 0xEAF4F6, 0xEAF4F6]);
    }
}
function PSGEntrenamientoRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 57, 0xFFFFFF, [0xFF4F47, 0x2A232A, 0x55555F]);
    }
}
function PSGEntrenamientoBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 57, 0xFFFFFF, [0xFF4F47, 0x2A232A, 0x55555F]);
    }
}
function RiestraFun(player) { // !RIE
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rie/titular/red | rie/titular/blue | rie/alternativa/red | rie/alternativa/blue  ', player.id, 0x6BFFB5, "normal", 0);
}
function RiestraTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x1D1C21]);
    }
}
function RiestraTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x1D1C21]);
    }
}
function RiestraAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0x19161b, [0xFDFDFD]);
    }
}
function RiestraAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0x19161b, [0xFDFDFD]);
    }
}
function CentralCordobaSdEFun(player) { // !CCS
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ccs/titular/red | ccs/titular/blue | ccs/alternativa/red | ccs/alternativa/blue | ccs/tercera/red | ccs/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CentralCordobaSdETitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd10d1d, [0x1D1D1D, 0xFFFFFF, 0x1D1D1D]);
    }
}
function CentralCordobaSdETitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd10d1d, [0x1D1D1D, 0xFFFFFF, 0x1D1D1D]);
    }
}
function CentralCordobaSdEAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x9C181C, 0x9C181C, 0xC02122]);
    }
}
function CentralCordobaSdEAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x9C181C, 0x9C181C, 0xC02122]);
    }
}
function CentralCordobaSdETerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xca0009, [0xE7E7E7, 0xFBFBFB]);
    }
}
function CentralCordobaSdETerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 50, 0xca0009, [0xE7E7E7, 0xFBFBFB]);
    }
}
function OGCNiceFun(player) { // !OGC
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ogc/titular/red | ogc/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OGCNiceTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFD2725, 0x0C0D11, 0xFD2725]);
    }
}
function OGCNiceTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFD2725, 0x0C0D11, 0xFD2725]);
    }
}
function OlympiqueMarsellaFun(player) { // !OM
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('om/titular/red | om/titular/blue | om/alternativa/red | om/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OlympiqueMarsellaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0a93d6, [0xFAFAFA]);
    }
}
function OlympiqueMarsellaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0a93d6, [0xFAFAFA]);
    }
}
function OlympiqueMarsellaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 61, 0xFFFFFF, [0x24ADEA, 0x1473E5]);
    }
}
function OlympiqueMarsellaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 61, 0xFFFFFF, [0x24ADEA, 0x1473E5]);
    }
}
function ASRomaFun(player) { // !ROM
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rom/titular/red | rom/titular/blue | rom/alternativa/red | rom/alternativa/blue | rom/tercera/red | rom/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ASRomaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffc500, [0xA8001A]);
    }
}
function ASRomaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffc500, [0xA8001A]);
    }
}
function ASRomaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x6e0f19, [0xF6F7FA]);
    }
}
function ASRomaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x6e0f19, [0xF6F7FA]);
    }
}
function ASRomaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf9b105, [0x172952, 0x1C2446]);
    }
}
function ASRomaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf9b105, [0x172952, 0x1C2446]);
    }
}
function FiorentinaFun(player) { // !FIO
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fio/titular/red | fio/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FiorentinaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x4C2A77]);
    }
}
function FiorentinaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x4C2A77]);
    }
}
function LazioFun(player) { // !LAZ
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('laz/titular/red | laz/titular/blue | laz/alternativa/red | laz/alternativa/blue | laz/tercera/red | laz/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LazioTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x194174, [0xFFFFFF, 0x9EDFFF]);
    }
}
function LazioTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x194174, [0xFFFFFF, 0x9EDFFF]);
    }
}
function LazioAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1e2e50, [0xFFFFFF, 0x86BBEF, 0xFFFFFF]);
    }
}
function LazioAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1e2e50, [0xFFFFFF, 0x86BBEF, 0xFFFFFF]);
    }
}
function LazioTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xc3e9fe, [0x0F1217]);
    }
}
function LazioTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xc3e9fe, [0x0F1217]);
    }
}
function SMSanJuanFun(player) { // !SMSJ
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('smsj/titular/red | smsj/titular/blue | smsj/alternativa/red | smsj/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SMSanJuanTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x131311, 0x4EA280, 0x131311]);
    }
}
function SMSanJuanTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x131311, 0x4EA280, 0x131311]);
    }
}
function SMSanJuanAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x030303, [0xFFFFFF, 0x48C079, 0xFFFFFF]);
    }
}
function SMSanJuanAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x030303, [0xFFFFFF, 0x48C079, 0xFFFFFF]);
    }
}
function GodoyCruzFun(player) { // !GOD
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('god/titular/red | god/titular/blue | god/alternativa/red | god/alternativa/blue | god/tercera/red | god/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GodoyCruzTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x8A8B91, [0x1A469D, 0xFFFFFF, 0x1A469D]);
    }
}
function GodoyCruzTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x8A8B91, [0x1A469D, 0xFFFFFF, 0x1A469D]);
    }
}
function GodoyCruzAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 237, 0x16439c, [0xDCDFDC, 0xEDEDEC]);
    }
}
function GodoyCruzAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 237, 0x16439c, [0xDCDFDC, 0xEDEDEC]);
    }
}
function GodoyCruzTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x881325, 0x5F0D1A, 0x881325]);
    }
}
function GodoyCruzTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x881325, 0x5F0D1A, 0x881325]);
    }
}
function VelezFun(player) { // !VEL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('vel/titular/red | vel/titular/blue', player.id, 0x6BFFB5, "normal", 0);

}
function VelezTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x273dce, [0xFFFFFF]);
    room.sendAnnouncement('𝘗𝘢𝘳𝘢 𝘦𝘮𝘶𝘭𝘢𝘳 𝘭𝘢 𝘤𝘢𝘮𝘪𝘴𝘦𝘵𝘢 𝘥𝘦 𝘝𝘦́𝘭𝘦𝘻 𝘱𝘶𝘦𝘥𝘦𝘴 𝘶𝘴𝘢𝘳 𝘥𝘦 𝘢𝘷𝘢𝘵𝘢𝘳 "/avatar ᐯ"', player.id, 0x6BFFB5, "normal", 0); 
    }
}
function VelezTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x273dce, [0xFFFFFF]);
    room.sendAnnouncement('𝘗𝘢𝘳𝘢 𝘦𝘮𝘶𝘭𝘢𝘳 𝘭𝘢 𝘤𝘢𝘮𝘪𝘴𝘦𝘵𝘢 𝘥𝘦 𝘝𝘦́𝘭𝘦𝘻 𝘱𝘶𝘦𝘥𝘦𝘴 𝘶𝘴𝘢𝘳 𝘥𝘦 𝘢𝘷𝘢𝘵𝘢𝘳 "/avatar ᐯ"', player.id, 0x6BFFB5, "normal", 0); 
    }
}
function FlamengoFun(player) { // !FLA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fla/titular/red | fla/titular/blue | fla/alternativa/red | fla/alternativa/blue | fla/tercera/red | fla/tercera/blue | fla/titular/red/2018 | fla/titular/blue/2018 | fla/alternativa/red/2018 | fla/alternativa/blue/2018 | fla/tercera/red/2018 | fla/tercera/blue/2018', player.id, 0x6BFFB5, "normal", 0);
}
function FlamengoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf5f5f5, [0x872C32, 0x1B1F1F, 0x872C32]);
    }
}
function FlamengoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf5f5f5, [0x872C32, 0x1B1F1F, 0x872C32]);
    }
}
function FlamengoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xde111e, [0xEEEFF1, 0x1B1F1F, 0x872C32]);
    }
}
function FlamengoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xde111e, [0xEEEFF1, 0x1B1F1F, 0x872C32]);
    }
}
function FlamengoTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xc1e23f, [0x36363C]);
    }
}
function FlamengoTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xc1e23f, [0x36363C]);
    }
}
function FlamengoTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf5f5f5, [0xF70610, 0x131517, 0xF70610]);
    }
}
function FlamengoTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf5f5f5, [0xF70610, 0x131517, 0xF70610]);
    }
}
function FlamengoAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 67, 0x1a1a1a, [0xD82C23, 0xE4E8DF, 0xE4E8DF]);
    }
}
function FlamengoAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 67, 0x1a1a1a, [0xD82C23, 0xE4E8DF, 0xE4E8DF]);
    }
}
function FlamengoTercera2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf5f5f5, [0x71A5D4, 0x4477A7, 0x71A5D4]);
    }
}
function FlamengoTercera2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf5f5f5, [0x71A5D4, 0x4477A7, 0x71A5D4]);
    }
}
function SCInternacionalFun(player) { // !SCI
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sci/titular/red | sci/titular/blue | sci/alternativa/red | sci/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SCInternacionalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0xD40D12]);
    }
}
function SCInternacionalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0xD40D12]);
    }
}
function SCInternacionalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 64, 0x66020A, [0xF9F9FA, 0xC71B20, 0xF9F9FA]);
    }
}
function SCInternacionalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 64, 0x66020A, [0xF9F9FA, 0xC71B20, 0xF9F9FA]);
    }
}
function SantosFun(player) { // !SAN
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('san/titular/red | san/titular/blue | san/alternativa/red | san/alternativa/blue | san/tercera/red | san/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SantosTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xE8E8E8]);
    }
}
function SantosTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xE8E8E8]);
    }
}
function SantosAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xb0b0b0, [0x1F2026, 0xFFFFFF, 0x1F2026]);
    }
}
function SantosAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xb0b0b0, [0x1F2026, 0xFFFFFF, 0x1F2026]);
    }
}
function SantosTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 225, 0xa7adb1, [0x282A35, 0x282A35, 0x393C45]);
    }
}
function SantosTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 225, 0xa7adb1, [0x282A35, 0x282A35, 0x393C45]);
    }
}
function SaoPauloFun(player) { // !SAO
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sao/titular/red | sao/titular/blue | sao/alternativa/red | sao/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SaoPauloTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xB51212, [0xFF2537, 0xF7F7F7, 0x191820]);
    }
}
function SaoPauloTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xB51212, [0xFF2537, 0xF7F7F7, 0x191820]);
    }
}
function SaoPauloAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0x9F9AA6, [0xFF0928, 0xF7F7F7, 0x241F20]);
    }
}
function SaoPauloAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0x9F9AA6, [0xFF0928, 0xF7F7F7, 0x241F20]);
    }
}
function CorinthiansFun(player) { // !COR
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cor/titular/red | cor/titular/blue | cor/alternativa/red | cor/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CorinthiansTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xF4F4F6]);
    }
}
function CorinthiansTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xF4F4F6]);
    }
}
function CorinthiansAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0xFFFFFF, [0x1F1E20]);
    }
}
function CorinthiansAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0xFFFFFF, [0x1F1E20]);
    }
}
function VascoDaGamaFun(player) { // !VAS
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('vas/titular/red | vas/titular/blue | vas/alternativa/red | vas/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function VascoDaGamaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 29, 0xd42a2a, [0x19181B, 0xE6E6E4, 0x19181B]);
    }
}
function VascoDaGamaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 29, 0xd42a2a, [0x19181B, 0xE6E6E4, 0x19181B]);
    }
}
function VascoDaGamaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 29, 0xd42a2a, [0xFEFEFE, 0x1C1C1C, 0xFEFEFE]);
    }
}
function VascoDaGamaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 29, 0xd42a2a, [0xFEFEFE, 0x1C1C1C, 0xFEFEFE]);
    }
}
function BotafogoFun(player) { // !BOT
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bot/titular/red | bot/titular/blue | bot/alternativa/red | bot/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BotafogoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x777B87, [0x1C1F26, 0xFFFFFF, 0x1C1F26]);
    }
}
function BotafogoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x777B87, [0x1C1F26, 0xFFFFFF, 0x1C1F26]);
    }
}
function BotafogoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x161719]);
    }
}
function BotafogoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x161719]);
    }
}
function FluminenseFun(player) { // !FLU
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('flu/titular/red | flu/titular/blue | flu/alternativa/red | flu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FluminenseTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0xF9F9F9, [0x326851, 0xA0002B, 0x326851]);
    }
}
function FluminenseTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0xF9F9F9, [0x326851, 0xA0002B, 0x326851]);
    }
}
function MineiroFun(player) { // !CAM
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cam/titular/red | cam/titular/blue | cam/alternativa/red | cam/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MineiroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x75798F, [0xFFFFFF, 0x231F20, 0xFFFFFF]);
    }
}
function MineiroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x75798F, [0xFFFFFF, 0x231F20, 0xFFFFFF]);
    }
}
function MineiroAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x1D1E24, [0xFFFFFF]);
    }
}
function MineiroAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x1D1E24, [0xFFFFFF]);
    }
}
function AtlNacionalFun(player) { // !ATN
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atn/titular/red | atn/titular/blue | atn/alternativa/red | atn/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtlNacionalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xB2C9BB, [0x178B36, 0xFCFCFC, 0x178B36]);
    }
}
function AtlNacionalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xB2C9BB, [0x178B36, 0xFCFCFC, 0x178B36]);
    }
}
function AtlNacionalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -136, 0x008a26, [0xF6F6F8, 0xE6E8EA]);
    }
}
function AtlNacionalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -136, 0x008a26, [0xF6F6F8, 0xE6E8EA]);
    }
}
    function MillonariosFun(player) { // !MIL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mil/titular/red | mil/titular/blue | mil/alternativa/red | mil/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MillonariosTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0846AD]);
    }
}
function MillonariosTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x0846AD]);
    }
}
function MillonariosAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x093794, [0xF7F7F7]);
    }
}
function MillonariosAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x093794, [0xF7F7F7]);
    }
}
function AmericaDeCaliFun(player) { // !AME
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ame/titular/red | ame/titular/blue | ame/alternativa/red | ame/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AmericaDeCaliTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xE81B1D]);
    }
}
function AmericaDeCaliTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xE81B1D]);
    }
}
function AmericaDeCaliAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xc91212, [0xF8F8F8]);
    }
}
function AmericaDeCaliAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xc91212, [0xF8F8F8]);
    }
}
    function SantaFeFun(player) { // !SFE
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sfe/titular/red | sfe/titular/blue | sfe/alternativa/red | sfe/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SantaFeTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xE0E0E0, [0xF6F6F8, 0xEB0505, 0xEB0505]);
    }
}
function SantaFeTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xE0E0E0, [0xF6F6F8, 0xEB0505, 0xEB0505]);
    }
}
function SantaFeAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xEB0505, [0xEB0505, 0xFFFFFF, 0xFFFFFF]);
    }
}
function SantaFeAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xEB0505, [0xEB0505, 0xFFFFFF, 0xFFFFFF]);
    }
}
    function DeportivoCaliFun(player) { // !CAL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cal/titular/red | cal/titular/blue | cal/alternativa/red | cal/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DeportivoCaliTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xBCC4D6, [0xFFFFFF, 0x1D5A48, 0x1D5A48]);
    }
}
function DeportivoCaliTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xBCC4D6, [0xFFFFFF, 0x1D5A48, 0x1D5A48]);
    }
}
function DeportivoCaliAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0x2D6E3A, [0xFFFFFF]);
    }
}
function DeportivoCaliAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0x2D6E3A, [0xFFFFFF]);
    }
}
    function OnceCaldasFun(player) { // !ONC
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('onc/titular/red | onc/titular/blue | onc/alternativa/red | onc/alternativa/blue | onc/tercera/red | onc/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OnceCaldasTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x171717, [0xFFFFFF]);
    }
}
function OnceCaldasTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x171717, [0xFFFFFF]);
    }
}
function OnceCaldasAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x171717]);
    }
}
function OnceCaldasAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x171717]);
    }
}
function OnceCaldasTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x1C69BB]);
    }
}
function OnceCaldasTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x1C69BB]);
    }
}
function CerroFun(player) { // !CCP
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ccp/titular/red | ccp/titular/blue | ccp/alternativa/red | ccp/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CerroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xCD2B38, 0x1F2F7C, 0xCD2B38]);
    }
}
function CerroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xCD2B38, 0x1F2F7C, 0xCD2B38]);
    }
}
function CerroAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x1a3e7a, [0xFFFFFF]);
    }
}
function CerroAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x1a3e7a, [0xFFFFFF]);
    }
}
function OlimpiaFun(player) { // !OLI
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('oli/titular/red | oli/titular/blue | oli/alternativa/red | oli/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OlimpiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x9290A3, [0xFFFFFF, 0x181818, 0xFFFFFF]);
    }
}
function OlimpiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x9290A3, [0xFFFFFF, 0x181818, 0xFFFFFF]);
    }
}
function OlimpiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x48424C]);
    }
}
function OlimpiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x48424C]);
    }
}
function GuaraniFun(player) { // !GUA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gua/titular/red | gua/titular/blue | gua/alternativa/red | gua/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GuaraniTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFDD537, 0x1C1B16, 0xFDD537]);
    }
}
function GuaraniTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFDD537, 0x1C1B16, 0xFDD537]);
    }
}
function GuaraniAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x504B48, 0x201F1B, 0x504B48]);
    }
}
function GuaraniAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x504B48, 0x201F1B, 0x504B48]);
    }
}
function LibertadFun(player) { // !LIB
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lib/titular/red | lib/titular/blue | lib/alternativa/red | lib/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LibertadTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x5D636E, [0xFFFFFF, 0x16161E, 0xFFFFFF]);
    }
}
function LibertadTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x5D636E, [0xFFFFFF, 0x16161E, 0xFFFFFF]);
    }
}
function LibertadAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x171B1E]);
    }
}
function LibertadAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x171B1E]);
    }
}
function SouthamptonFun(player) { // !SOU
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sou/titular/red | sou/titular/blue | sou/alternativa/red | sou/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SouthamptonTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x191B1F, [0xFF0028, 0xFFFFFF, 0xFF0028]);
    }
}
function SouthamptonTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x191B1F, [0xFF0028, 0xFFFFFF, 0xFF0028]);
    }
}
function SouthamptonAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xe2fb40, [0xFDFE4B, 0x283639, 0x283639]);
    }
}
function SouthamptonAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xe2fb40, [0xFDFE4B, 0x283639, 0x283639]);
    }
}
function WatfordFun(player) { // !WAT
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('wat/titular/red | wat/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function WatfordTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf53117, [0xFADF09, 0x161616]);
    }
}
function WatfordTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf53117, [0xFADF09, 0x161616]);
    }
}
function WillemIIFun(player) { // !WIL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('wil/titular/red | wil/titular/blue | wil/alternativa/red | wil/alternativa/blue | wil/tercera/red | wil/tercera/blue  ', player.id, 0x6BFFB5, "normal", 0);
}
function WillemIITitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0A0A0A, [0x223263, 0xFFFFFF, 0xF7014C]);
    }
}
function WillemIITitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0A0A0A, [0x223263, 0xFFFFFF, 0xF7014C]);
    }
}
function WillemIIAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xA42F62, 0x6B436F, 0xA42F62]);
    }
}
function WillemIIAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xA42F62, 0x6B436F, 0xA42F62]);
    }
}
function WillemIITerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xc09926, [0xC72C27, 0xFFFFFF, 0x0A2245]);
    }
}
function WillemIITerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xc09926, [0xC72C27, 0xFFFFFF, 0x0A2245]);
    }
}
function AlvaradoFun(player) { // !ALV
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('alv/titular/red | alv/titular/blue | alv/alternativa/red | alv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlvaradoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 44, 0x091021, [0x1E2F55, 0xFFFFFF, 0x1E2F55]);
    }
}
function AlvaradoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 44, 0x091021, [0x1E2F55, 0xFFFFFF, 0x1E2F55]);
    }
}
function AlvaradoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x091021, [0xFFFFFF, 0x022C77, 0xFFFFFF]);
    }
}
function AlvaradoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x091021, [0xFFFFFF, 0x022C77, 0xFFFFFF]);
    }
}
function AgropecuarioFun(player) { // !AGR
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('agr/titular/red | agr/titular/blue | agr/alternativa/red | agr/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AgropecuarioTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFCFCFC, [0x168C4B, 0xBA2C24, 0x168C4B]);
    }
}
function AgropecuarioTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFCFCFC, [0x168C4B, 0xBA2C24, 0x168C4B]);
    }
}
function AgropecuarioAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x151515, [0x1C5F3A, 0xFFFFFF, 0xBA2C24]);
    }
}
function AgropecuarioAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x151515, [0x1C5F3A, 0xFFFFFF, 0xBA2C24]);
    }
}
function RiverURUFun(player) { // !RIU
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('riu/titular/red | riu/titular/blue | riu/alternativa/red | riu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RiverURUTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0x000000, [0xFFFFFF, 0xD20502, 0xFFFFFF]);
    }
}
function RiverURUTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0x000000, [0xFFFFFF, 0xD20502, 0xFFFFFF]);
    }
}
function RiverURUAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFE0002]);
    }
}
function RiverURUAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFE0002]);
    }
}
function GalatasarayFun(player) { // !GS
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gs/titular/red | gs/titular/blue | gs/alternativa/red | gs/alternativa/blue | gs/tercera/red | gs/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GalatasarayTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xFFB840, 0xBE2736]);
    }
}
function GalatasarayTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xFFB840, 0xBE2736]);
    }
}
function GalatasarayAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x8d1d1d, [0xE3CFB3]);
    }
}
function GalatasarayAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x8d1d1d, [0xE3CFB3]);
    }
}
function GalatasarayTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xab1d28, [0xC9C5C9]);
    }
}
function GalatasarayTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xab1d28, [0xC9C5C9]);
    }
}
function FenerbahceFun(player) { // !FB
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fb/titular/red | fb/titular/blue | fb/alternativa/red | fb/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FenerbahceTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF7F41B, 0x212854, 0xF7F41B]);
    }
}
function FenerbahceTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF7F41B, 0x212854, 0xF7F41B]);
    }
}
function FenerbahceAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x2f3a67, [0xF4E800]);
    }
}
function FenerbahceAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x2f3a67, [0xF4E800]);
    }
}
function BesiktasFun(player) { // !BJK
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bjk/titular/red | bjk/titular/blue | bjk/alternativa/red | bjk/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BesiktasTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFFFFFF]);
    }
}
function BesiktasTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFFFFFF]);
    }
}
function BesiktasAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFB3333]);
    }
}
function BesiktasAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFB3333]);
    }
}
function AmericaMXFun(player) { // !AMC
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('amc/titular/red | amc/titular/blue | amc/alternativa/red | amc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AmericaMXTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x153647, [0xF2EB9A]);
    }
}
function AmericaMXTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x153647, [0xF2EB9A]);
    }
}
function AmericaMXAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xF2F2F2, [0x1A2C38]);
    }
}
function AmericaMXAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xF2F2F2, [0x1A2C38]);
    }
}
function CruzAzulFun(player) { // !CRUZ
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cruz/titular/red | cruz/titular/blue | cruz/alternativa/red | cruz/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CruzAzulTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x263D9A]);
    }
}
function CruzAzulTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x263D9A]);
    }
}
function CruzAzulAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x31357e, [0xFFFFFF]);
    }
}
function CruzAzulAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x31357e, [0xFFFFFF]);
    }
}
function MonterreyFun(player) { // !MTY
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mty/titular/red | mty/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MonterreyTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x7C8AA1, [0xFFFFFF, 0x272B44, 0xFFFFFF]);
    }
}
function MonterreyTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x7C8AA1, [0xFFFFFF, 0x272B44, 0xFFFFFF]);
    }
}
function ChivasFun(player) { // !CHV
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('chv/titular/red | chv/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChivasTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x052e4e, [0xFFFFFF, 0xFE3548, 0xFFFFFF]);
    }
}
function ChivasTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x052e4e, [0xFFFFFF, 0xFE3548, 0xFFFFFF]);
    }
}
function TigresFun(player) { // !TGS
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('chv/titular/red | chv/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function TigresTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x20428c, [0xEEC036, 0xF1B61C]);
    }
}
function TigresTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x20428c, [0xEEC036, 0xF1B61C]);
    }
}
function LigaDeQuitoFun(player) { // !GS
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ldu/titular/red | ldu/titular/blue | ldu/alternativa/red | ldu/alternativa/blue | ldu/tercera/red | ldu/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LigaDeQuitoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0x060541, [0xFFFFFF]);
    }
}
function LigaDeQuitoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0x060541, [0xFFFFFF]);
    }
}
function LigaDeQuitoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd1bf58, [0xD8060E]);
    }
}
function LigaDeQuitoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd1bf58, [0xD8060E]);
    }
}
function LigaDeQuitoTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf53315, [0x111832]);
    }
}
function LigaDeQuitoTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf53315, [0x111832]);
    }
}
function BarcelonaSCFun(player) { // !BSC
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bsc/titular/red | bsc/titular/blue | bsc/alternativa/red | bsc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BarcelonaSCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xc90613, [0xF9D532]);
    }
}
function BarcelonaSCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xc90613, [0xF9D532]);
    }
}
function BarcelonaSCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xfd6600, [0x67020F]);
    }
}
function BarcelonaSCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xfd6600, [0x67020F]);
    }
}
function EmelecFun(player) { // !EME
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('eme/titular/red | eme/titular/blue | eme/alternativa/red | eme/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EmelecTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 148, 0xFFFFFF, [0x025CCC, 0x004390, 0x025CCC]);
    }
}
function EmelecTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 148, 0xFFFFFF, [0x025CCC, 0x004390, 0x025CCC]);
    }
}
function EmelecAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0151c2, [0xFFFFFF]);
    }
}
function EmelecAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0151c2, [0xFFFFFF]);
    }
}
function IndependienteDelValleFun(player) { // !IDV
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('idv/titular/red | idv/titular/blue | idv/alternativa/red | idv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function IndependienteDelValleTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x00245E, 0x000000, 0x00245E]);
    }
}
function IndependienteDelValleTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x00245E, 0x000000, 0x00245E]);
    }
}
function IndependienteDelValleAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFF81AA]);
    }
}
function IndependienteDelValleAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFF81AA]);
    }
}

function OlympiqueLyonFun(player) { // !OL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ol/titular/red | ol/titular/blue | ol/alternativa/red | ol/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OlympiqueLyonTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x113a80, [0xFBFDFC]);
    }
}
function OlympiqueLyonTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x113a80, [0xFBFDFC]);
    }
}
function OlympiqueLyonAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xe8e9ea, [0x212C52, 0x1D3C7F, 0x212C52]);
    }
}
function OlympiqueLyonAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xe8e9ea, [0x222C52, 0x1D3C7F, 0x222C52]);
    }
}

function SanTelmoFun(player) { // !STE
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('stel/titular/red | stel/titular/blue | stel/alternativa/red | stel/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SanTelmoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffffff, [0x3CADFE, 0x24364C, 0x3CADFE]);
    }
}
function SanTelmoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffffff, [0x3CADFE, 0x24364C, 0x3CADFE]);
    }
}
function SanTelmoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0D2B43, 0x39A2FE, 0xFFFFFF]);
    }
}
function SanTelmoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0D2B43, 0x39A2FE, 0xFFFFFF]);
    }
}
function DeportivoMerloFun(player) { // !MER
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mer/titular/red | mer/titular/blue | mer/alternativa/red | mer/alternativa/blue | mer/tercera/red | mer/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DeportivoMerloTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x666A78, [0xFFFFFF, 0x050C40, 0xFFFFFF]);
    }
}
function DeportivoMerloTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x666A78, [0xFFFFFF, 0x050C40, 0xFFFFFF]);
    }
}
function DeportivoMerloAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0xFFFFFF, [0x050505, 0x04113D, 0x050505]);
    }
}
function DeportivoMerloAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0xFFFFFF, [0x050505, 0x04113D, 0x050505]);
    }
}
function DeportivoMerloTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x660B0A]);
    }
}
function DeportivoMerloTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x660B0A]);
    }
}
function ArgentinoDeQuilmesFun(player) { // !AdQ
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('adq/titular/red | adq/titular/blue | adq/alternativa/red | adq/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ArgentinoDeQuilmesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0A0A0A, [0xFFFFFF, 0x76C4F0, 0xFFFFFF]);
    }
}
function ArgentinoDeQuilmesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0A0A0A, [0xFFFFFF, 0x76C4F0, 0xFFFFFF]);
    }
}
function ArgentinoDeQuilmesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x777A89, 0x000000, 0x777A89]);
    }
}
function ArgentinoDeQuilmesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x777A89, 0x000000, 0x777A89]);
    }
}
function ValenciaFun(player) { // !RIV
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('val/titular/red | val/titular/blue | val/alternativa/red | val/alternativa/blue | val/tercera/red | val/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ValenciaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x141205, [0xFE7103, 0xF8F7F8, 0xF8F7F8]);
    }
}
function ValenciaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x141205, [0xFE7103, 0xF8F7F8, 0xF8F7F8]);
    }
}
function ValenciaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xff671e, [0xE55C19, 0x161419, 0x161419]);
    }
}
function ValenciaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xff671e, [0xE55C19, 0x161419, 0x161419]);
    }
}
function ValenciaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 123, 0xf0fdfe, [0x0C83D5, 0x21BCF4]);
    }
}
function ValenciaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 123, 0xf0fdfe, [0x0C83D5, 0x21BCF4]);
    }
}
function BetisFun(player) { // !BET
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bet/titular/red | bet/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BetisTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0x2CB764, 0xFFFFFF, 0x2CB764]);
    }
}
function BetisTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0x2CB764, 0xFFFFFF, 0x2CB764]);
    }
}
function CrystalPalaceFun(player) { // !CRY
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cry/titular/red | cry/titular/blue | cry/alternativa/red | cry/alternativa/blue | cry/tercera/red | cry/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CrystalPalaceTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xC11930, 0x01449B, 0xC11930]);
    }
}
function CrystalPalaceTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xC11930, 0x01449B, 0xC11930]);
    }
}
function CrystalPalaceAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x242227, 0x01449B, 0x242227]);
    }
}
function CrystalPalaceAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x242227, 0x01449B, 0x242227]);
    }
}
function CrystalPalaceTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x0731c3, [0xFFFFFF, 0xED1628, 0xFFFFFF]);
    }
}
function CrystalPalaceTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x0731c3, [0xFFFFFF, 0xED1628, 0xFFFFFF]);
    }
}
function JuventudAntonianaFun(player) { // !CJA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cja/titular/red | cja/titular/blue | cja/alternativa/red | cja/alternativa/blue | cja/tercera/red | cja/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function JuventudAntonianaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x8892A6, [0xFFFFFF, 0x304268, 0xFFFFFF]);
    }
}
function JuventudAntonianaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x8892A6, [0xFFFFFF, 0x304268, 0xFFFFFF]);
    }
}
function JuventudAntonianaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x17286E, 0x304268, 0x17286E]);
    }
}
function JuventudAntonianaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x17286E, 0x304268, 0x17286E]);
    }
}
function JuventudAntonianaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x0F1014, [0x113653, 0xFFFFFF, 0x3D2813]);
    }
}
function JuventudAntonianaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x0F1014, [0x113653, 0xFFFFFF, 0x3D2813]);
    }
}
function GimnasiaYTiroFun(player) { // !GyT
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gyt/titular/red | gyt/titular/blue | gyt/alternativa/red | gyt/alternativa/blue | gyt/tercera/red | gyt/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GimnasiaYTiroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xA8E0F9, 0xFFFFFF, 0xA8E0F9]);
    }
}
function GimnasiaYTiroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xA8E0F9, 0xFFFFFF, 0xA8E0F9]);
    }
}
function GimnasiaYTiroAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x141657, 0x181965, 0x141657]);
    }
}
function GimnasiaYTiroAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x141657, 0x181965, 0x141657]);
    }
}
function GimnasiaYTiroTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0xFFFFFF, [0x0A0A0A]);
    }
}
function GimnasiaYTiroTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0xFFFFFF, [0x0A0A0A]);
    }
}
function PatronatoFun(player) { // !PAT
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pat/titular/red | pat/titular/blue | pat/alternativa/red | pat/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PatronatoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF51A21, 0x1A1B1E, 0xF51A21]);
    }
}
function PatronatoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF51A21, 0x1A1B1E, 0xF51A21]);
    }
}
function PatronatoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xE8171F , 0xFFFFFF , 0xFFFFFF]);
    }
}
function PatronatoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xE8171F , 0xFFFFFF , 0xFFFFFF]);
    }
}
function RayoVallecanoFun(player) { // !RAY
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ray/titular/red | ray/titular/blue | ray/alternativa/red | ray/alternativa/blue | ray/tercera/red | ray/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RayoVallecanoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 28, 0x000000, [0xFFFFFF, 0xFF2E29, 0xFFFFFF]);
    }
}
function RayoVallecanoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 28, 0x000000, [0xFFFFFF, 0xFF2E29, 0xFFFFFF]);
    }
}
function RayoVallecanoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 28, 0xFFFFFF, [0xFE322B , 0x130F10 , 0xFE322B]);
    }
}
function RayoVallecanoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 28, 0xFFFFFF, [0xFE322B , 0x130F10 , 0xFE322B]);
    }
}
function RayoVallecanoTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 28, 0xFFFFFF, [0x130F10 , 0x00A4D2 , 0x130F10]);
    }
}
function RayoVallecanoTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 28, 0xFFFFFF, [0x130F10 , 0x00A4D2 , 0x130F10]);
    }
}
function LevanteFun(player) { // !LEV
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lev/titular/red | lev/titular/blue | lev/alternativa/red | lev/alternativa/blue | lev/tercera/red | lev/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LevanteTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0A1E97, 0xA60727, 0x0A1E97]);
    }
}
function LevanteTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x0A1E97, 0xA60727, 0x0A1E97]);
    }
}
function LevanteAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x191717, [0xFFFFFF , 0x000DD8 , 0xFFFFFF]);
    }
}
function LevanteAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x191717, [0xFFFFFF , 0x000DD8 , 0xFFFFFF]);
    }
}
function LevanteTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x191717, [0xE2E2E2]);
    }
}
function LevanteTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x191717, [0xE2E2E2]);
    }
}
function GetafeFun(player) { // !GET
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('get/titular/red | get/titular/blue | get/alternativa/red | get/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GetafeTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x086BD3]);
    }
}
function GetafeTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x086BD3]);
    }
}
function GetafeAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF34C28]);
    }
}
function GetafeAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF34C28]);
    }
}
function ZenitFun(player) { // !ZEN
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('zen/titular/red | zen/titular/blue | zen/alternativa/red | zen/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ZenitTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 146, 0xFFFFFF, [0x1BB1E3, 0x0E8BC1, 0x0F649A]);
    }
}
function ZenitTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 146, 0xFFFFFF, [0x1BB1E3, 0x0E8BC1, 0x0F649A]);
    }
}
function ZenitAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0099c3, [0xFFFFFF]);
    }
}
function ZenitAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0099c3, [0xFFFFFF]);
    }
}
function CSKAMoscuFun(player) { // !CSK
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('csk/titular/red | csk/titular/blue | csk/alternativa/red | csk/alternativa/blue | csk/tercera/red | csk/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CSKAMoscuTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFF2039, 0x016AD7, 0xFF2039]);
    }
}
function CSKAMoscuTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFF2039, 0x016AD7, 0xFF2039]);
    }
}
function CSKAMoscuAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x024fbb, [0xFFFFFF, 0xFF2039, 0xFFFFFF]);
    }
}
function CSKAMoscuAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x024fbb, [0xFFFFFF, 0xFF2039, 0xFFFFFF]);
    }
}
function CSKAMoscuTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 134, 0x082957, [0xFEAC48, 0xFEAC48, 0x01438F]);
    }
}
function CSKAMoscuTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 134, 0x082957, [0xFEAC48, 0xFEAC48, 0x01438F]);
    }
}
function LokomotivFun(player) { // !LOK
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lok/titular/red | lok/titular/blue | lok/alternativa/red | lok/alternativa/blue | lok/tercera/red | lok/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LokomotivTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 236, 0xFFFFFF, [0x025948, 0x025948, 0xC70B24]);
    }
}
function LokomotivTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 236, 0xFFFFFF, [0x025948, 0x025948, 0xC70B24]);
    }
}
function LokomotivAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xe71218, [0x026052, 0xFFFFFF, 0xFFFFFF]);
    }
}
function LokomotivAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xe71218, [0x026052, 0xFFFFFF, 0xFFFFFF]);
    }
}
function LokomotivTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xe0e2e1, [0xCD090A, 0x525157, 0x525157]);
    }
}
function LokomotivTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xe0e2e1, [0xCD090A, 0x525157, 0x525157]);
    }
}
function SpartakFun(player) { // !SPM
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('spm/titular/red | spm/titular/blue | spm/alternativa/red | spm/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SpartakTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x8A939E, [0xD4001D, 0xFBFEFD, 0xD4001D]);
    }
}
function SpartakTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x8A939E, [0xD4001D, 0xFBFEFD, 0xD4001D]);
    }
}
function SpartakAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x4F0000, [0xFFFFFF, 0xCE1D31, 0xFFFFFF]);
    }
}
function SpartakAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x4F0000, [0xFFFFFF, 0xCE1D31, 0xFFFFFF]);
    }
}
function DynamoMoscowFun(player) { // !DIN
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('din/titular/red | din/titular/blue | din/alternativa/red | din/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DynamoMoscowTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFDFFFE, [0x0066CD]);
    }
}
function DynamoMoscowTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFDFFFE, [0x0066CD]);
    }
}
function DynamoMoscowAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1f71d7, [0xFFFFFF]);
    }
}
function DynamoMoscowAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1f71d7, [0xFFFFFF]);
    }
}
function DynamoKievFun(player) { // !DYK
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('dyk/titular/red | dyk/titular/blue | dyk/alternativa/red | dyk/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DynamoKievTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x146dd3, [0xFFFFFF]);
    }
}
function DynamoKievTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x146dd3, [0xFFFFFF]);
    }
}
function DynamoKievAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0167B2]);
    }
}
function DynamoKievAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0167B2]);
    }
}
function ShakhtarFun(player) { // !DYK
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sha/titular/red | sha/titular/blue | sha/alternativa/red | sha/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ShakhtarTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 1, 0x000000, [0xF39C4D, 0xEF3B24]);
    }
}
function ShakhtarTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 1, 0x000000, [0xF39C4D, 0xEF3B24]);
    }
}
function ShakhtarAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 1, 0x000000, [0xAC9E9B, 0xDAD0CF, 0xAC9E9B]);
    }
}
function ShakhtarAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 1, 0x000000, [0xAC9E9B, 0xDAD0CF, 0xAC9E9B]);
    }
}

function JaponFun(player) { // !JAP
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('jap/titular/red | jap/titular/blue | jap/alternativa/red | jap/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function JaponTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0x2C396C]);
    }
}
function JaponTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0x2C396C]);
    }
}
function JaponAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xb52024, [0xF7FDFF]);
    }
}
function JaponAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xb52024, [0xF7FDFF]);
    }
}
function CoreaDelSurFun(player) { // !CSU
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('csu/titular/red | csu/titular/blue | csu/alternativa/red | csu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CoreaDelSurTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xE4221C]);
    }
}
function CoreaDelSurTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xE4221C]);
    }
}
function CoreaDelSurAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x040404, [0xF1F2F1]);
    }
}
function CoreaDelSurAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x040404, [0xF1F2F1]);
    }
}
function NuevaZelandaFun(player) { // !NZE
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nze/titular/red | nze/titular/blue | nze/alternativa/red | nze/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NuevaZelandaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x191e22, [0xFFFFFF]);
    }
}
function NuevaZelandaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x191e22, [0xFFFFFF]);
    }
}
function NuevaZelandaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xF5F5F5, [0x232323, 0x232323, 0x2E2F33]);
    }
}
function NuevaZelandaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xF5F5F5, [0x232323, 0x232323, 0x2E2F33]);
    }
}
function CoreaDelNorteFun(player) { // !CNO
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cno/titular/red | cno/titular/blue | cno/alternativa/red | cno/alternativa/blue | cno/bandera/red | cno/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CoreaDelNorteTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xFF0000]);
    }
}
function CoreaDelNorteTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xFF0000]);
    }
}
function CoreaDelNorteAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xff0000, [0xF5F9FF]);
    }
}
function CoreaDelNorteAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xff0000, [0xF5F9FF]);
    }
}
function CoreaDelNorteBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x024FA2, 0xED1C27, 0x024FA2]);
    }
}
function CoreaDelNorteBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x024FA2, 0xED1C27, 0x024FA2]);
    }
}
function AustriaFun(player) { // !AUT
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('aut/titular/red | aut/titular/blue | aut/alternativa/red | aut/alternativa/blue | aut/bandera/red | aut/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AustriaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xD80B2A]);
    }
}
function AustriaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xD80B2A]);
    }
}
function AustriaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x000000, [0xFFFFFF]);
    }
}
function AustriaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x000000, [0xFFFFFF]);
    }
}
function AustriaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xED2939, 0xFFFFFF, 0xED2939]);
    }
}
function AustriaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xED2939, 0xFFFFFF, 0xED2939]);
    }
}
function AtlantaUnitedFun(player) { // !ATLU
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atlu/titular/red | atlu/titular/blue | atlu/alternativa/red | atlu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtlantaUnitedTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xc2b28e, [0x222021, 0xC70C41, 0x222021]);
    }
}
function AtlantaUnitedTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xc2b28e, [0x222021, 0xC70C41, 0x222021]);
    }
}
function AtlantaUnitedAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xff774d, [0xE1E5E6]);
    }
}
function AtlantaUnitedAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xff774d, [0xE1E5E6]);
    }
}
function LAGalaxyFun(player) { // !LA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('la/titular/red | la/titular/blue | la/alternativa/red | la/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LAGalaxyTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 35, 0xfdc904, [0xFFFFFF, 0x232941, 0xFFFFFF]);
    }
}
function LAGalaxyTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 35, 0xfdc904, [0xFFFFFF, 0x232941, 0xFFFFFF]);
    }
}
function LAGalaxyAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x294A73, 0x1E2037, 0x294A73]);
    }
}
function LAGalaxyAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x294A73, 0x1E2037, 0x294A73]);
    }
}
function TorontoFCFun(player) { // !NZE
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tofc/titular/red | tofc/titular/blue | tofc/alternativa/red | tofc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function TorontoFCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xE50126]);
    }
}
function TorontoFCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xE50126]);
    }
}
function TorontoFCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x1d1c21, [0xE6EBEF]);
    }
}
function TorontoFCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x1d1c21, [0xE6EBEF]);
    }
}
function NewYorkCityFun(player) { // !NYC
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nyc/titular/red | nyc/titular/blue | nyc/alternativa/red | nyc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NewYorkCityTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x102a5b, [0x82BCEC]);
    }
}
function NewYorkCityTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x102a5b, [0x82BCEC]);
    }
}
function NewYorkCityAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x7cbfea, [0x4D5361]);
    }
}
function NewYorkCityAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x7cbfea, [0x4D5361]);
    }
}
function LosAngelesFCFun(player) { // !NYC
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lafc/titular/red | lafc/titular/blue | lafc/alternativa/red | lafc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LosAngelesFCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xcbad6f, [0x322E2B]);
    }
}
function LosAngelesFCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xcbad6f, [0x322E2B]);
    }
}
function LosAngelesFCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xaeafb1, [0xEFEEF3]);
    }
}
function LosAngelesFCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xaeafb1, [0xEFEEF3]);
    }
}
function SeattleSoundersFun(player) { // !SEA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sea/titular/red | sea/titular/blue | sea/alternativa/red | sea/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SeattleSoundersTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0x98C067]);
    }
}
function SeattleSoundersTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0x98C067]);
    }
}
function SeattleSoundersAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xFFFFFF, [0x2C2A2F, 0x2C2A2F, 0xE18298]);
    }
}
function SeattleSoundersAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xFFFFFF, [0x2C2A2F, 0x2C2A2F, 0xE18298]);
    }
}
function NewYorkRedBullFun(player) { // !NRB
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nyrb/titular/red | nyrb/titular/blue | nyrb/alternativa/red | nyrb/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NewYorkRedBullTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x8c0c2d, [0xD0D0D2]);
    }
}
function NewYorkRedBullTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x8c0c2d, [0xD0D0D2]);
    }
}
function NewYorkRedBullAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xFFFFFF, [0xF1273D]);
    }
}
function NewYorkRedBullAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xFFFFFF, [0xF1273D]);
    }
}
function PortlandTimbersFun(player) { // !NRB
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ptim/titular/red | ptim/titular/blue | ptim/alternativa/red | ptim/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PortlandTimbersTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xdfb231, [0x293728, 0x31492F, 0x293728]);
    }
}
function PortlandTimbersTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xdfb231, [0x293728, 0x31492F, 0x293728]);
    }
}
function PortlandTimbersAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x486551, [0xFFFFFF]);
    }
}
function PortlandTimbersAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x486551, [0xFFFFFF]);
    }
}
function ColoColoFun(player) { // !CCO
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cco/titular/red | cco/titular/blue | cco/alternativa/red | cco/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ColoColoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x000000, [0xF6F6F7]);
    }
}
function ColoColoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x000000, [0xF6F6F7]);
    }
}
function ColoColoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xCFCFCF, [0x212223, 0x212223, 0xFFFFFF]);
    }
}
function ColoColoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xCFCFCF, [0x212223, 0x212223, 0xFFFFFF]);
    }
}
function UdeChileFun(player) { // !UDC
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('udc/titular/red | udc/titular/blue | udc/alternativa/red | udc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function UdeChileTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xf4f4f4, [0x1C2445]);
    }
}
function UdeChileTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xf4f4f4, [0x1C2445]);
    }
}
function UdeChileAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf7f7f7, [0xF33134, 0x611C1C, 0xF33134]);
    }
}
function UdeChileAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf7f7f7, [0xF33134, 0x611C1C, 0xF33134]);
    }
}
function StrongestFun(player) { // !STG
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('stg/titular/red | stg/titular/blue | stg/alternativa/red | stg/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function StrongestTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFECE2D, 0x1D1B1E, 0xFECE2D]);
    }
}
function StrongestTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFECE2D, 0x1D1B1E, 0xFECE2D]);
    }
}
function StrongestAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x030303, [0xFFFFFF, 0xEDAE00, 0xFFFFFF]);
    }
}
function StrongestAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x030303, [0xFFFFFF, 0xEDAE00, 0xFFFFFF]);
    }
}
function WilstermannFun(player) { // !WTM
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('wtm/titular/red | wtm/titular/blue | wtm/alternativa/red | wtm/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function WilstermannTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xED1E3C]);
    }
}
function WilstermannTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xED1E3C]);
    }
}
function WilstermannAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x1F3E70, 0x16304C, 0x1F3E70]);
    }
}
function WilstermannAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x1F3E70, 0x16304C, 0x1F3E70]);
    }
}
function BolivarFun(player) { // !BLV
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('blv/titular/red | blv/titular/blue | blv/alternativa/red | blv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BolivarTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x21406b, [0x92E2FF]);
    }
}
function BolivarTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x21406b, [0x92E2FF]);
    }
}
function BolivarAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd8ddee, [0x333B45]);
    }
}
function BolivarAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd8ddee, [0x333B45]);
    }
}
function EvertonFCFun(player) { // !ING
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('eve/titular/red | eve/titular/blue | eve/alternativa/red | eve/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EvertonFCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9f9f9, [0x15428A]);
    }
}
function EvertonFCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9f9f9, [0x15428A]);
    }
}
function EvertonFCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0c1448, [0xFA6754]);
    }
}
function EvertonFCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0c1448, [0xFA6754]);
    }
}
function ASMonacoFun(player) { // !ING
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('asm/titular/red | asm/titular/blue | asm/alternativa/red | asm/alternativa/blue | asm/tercera/red | asm/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ASMonacoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 61, 0xfeb60a, [0xB8242E, 0xAD232E, 0xFEFEFE]);
    }
}
function ASMonacoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 61, 0xfeb60a, [0xB8242E, 0xAD232E, 0xFEFEFE]);
    }
}
function ASMonacoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd5a651, [0x1F2023]);
    }
}
function ASMonacoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd5a651, [0x1F2023]);
    }
}
function ASMonacoTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x255e9a, [0x93D9F5]);
    }
}
function ASMonacoTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x255e9a, [0x93D9F5]);
    }
}
function AtalantaFun(player) { // !OL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ata/titular/red | ata/titular/blue | ata/alternativa/red | ata/alternativa/blue | ata/tercera/red | ata/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtalantaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0056BB, 0x15141C, 0x0056BB]);
    }
}
function AtalantaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x0056BB, 0x15141C, 0x0056BB]);
    }
}
function AtalantaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x2b51ef, [0x0051AD, 0x19171A, 0xFFFFFF]);
    }
}
function AtalantaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x2b51ef, [0x0051AD, 0x19171A, 0xFFFFFF]);
    }
}
function AtalantaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x874834]);
    }
}
function AtalantaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x874834]);
    }
}
function FCBaselFun(player) { // !OL
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bas/titular/red | bas/titular/blue | bas/alternativa/red | bas/alternativa/blue | bas/tercera/red | bas/tercera/blue | bas/clasica/red | bas/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FCBaselTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xBC051F, 0xBC051F, 0x1B3F86]);
    }
}
function FCBaselTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xBC051F, 0xBC051F, 0x1B3F86]);
    }
}
function FCBaselAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x1a1a1a, [0xE1E1E1]);
    }
}
function FCBaselAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x1a1a1a, [0xE1E1E1]);
    }
}
function FCBaselTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x222222]);
    }
}
function FCBaselTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x222222]);
    }
}
function FCBaselClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xffe500, [0xE40327, 0x0E3B85]);
    }
}
function FCBaselClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0, 0xffe500, [0xE40327, 0x0E3B85]);
    }
}
function UCatolicaFun(player) { // !UCA
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('uca/titular/red | uca/titular/blue | uca/alternativa/red | uca/alternativa/blue | uca/tercera/red | uca/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function UCatolicaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFE0000, [0xFFFFFF, 0x2148A0, 0xFFFFFF]);
    }
}
function UCatolicaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFE0000, [0xFFFFFF, 0x2148A0, 0xFFFFFF]);
    }
}
function UCatolicaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xD22F1E]);
    }
}
function UCatolicaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xD22F1E]);
    }
}
function UCatolicaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xff0000, [0x2148A0, 0xFFFFFF, 0x2148A0]);
    }
}
function UCatolicaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xff0000, [0x2148A0, 0xFFFFFF, 0x2148A0]);
    }
}
function CobreloaFun(player) { // !Cob
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cob/titular/red | cob/titular/blue | cob/alternativa/red | cob/alternativa/blue | cob/tercera/red | cob/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CobreloaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 30, 0xffffff, [0xFF4B15, 0xCC3900]);
    }
}
function CobreloaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 30, 0xffffff, [0xFF4B15, 0xCC3900]);
    }
}
function CobreloaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 30, 0x000000, [0xFFFFFF, 0xCFCFCF]);
    }
}
function CobreloaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 30, 0x000000, [0xFFFFFF, 0xCFCFCF]);
    }
}
function CobreloaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 30, 0xffffff, [0x45485B, 0x1A1A1A]);
    }
}
function CobreloaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 30, 0xffffff, [0x45485B, 0x1A1A1A]);
    }
}
function PalestinoFun(player) { // !Cob
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cdp/titular/red | cdp/titular/blue | cdp/alternativa/red | cdp/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PalestinoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x000000, [0xFFFFFF, 0x047B4E, 0xE30000]);
    }
}
function PalestinoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x000000, [0xFFFFFF, 0x047B4E, 0xE30000]);
    }
}
function PalestinoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFAFAFA, [0xE30000, 0x000503, 0x047B4E]);
    }
}
function PalestinoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFAFAFA, [0xE30000, 0x000503, 0x047B4E]);
    }
}
function MelgarFun(player) { // !IND
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mel/titular/red | mel/titular/blue | mel/alternativa/red | mel/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MelgarTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xEC1B30, 0x2A2A2A]);
    }
}
function MelgarTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xEC1B30, 0x2A2A2A]);
    }
}
function MelgarAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x2a2a2a, [0xECEFF4, 0xEC1B31, 0xECEFF4]);
    }
}
function MelgarAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x2a2a2a, [0xECEFF4, 0xEC1B31, 0xECEFF4]);
    }
}
function UniversitarioFun(player) { // !IND
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('unv/titular/red | unv/titular/blue | unv/alternativa/red | unv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function UniversitarioTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x812124, [0xE1DCC5]);
    }
}
function UniversitarioTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x812124, [0xE1DCC5]);
    }
}
function UniversitarioAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x902C38]);
    }
}
function UniversitarioAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x902C38]);
    }
}
function AlianzaLimaFun(player) { // !IND
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ali/titular/red | ali/titular/blue | ali/alternativa/red | ali/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlianzaLimaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0e2c4c, [0x091C35, 0xFFFFFF, 0x091C35]);
    }
}
function AlianzaLimaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0e2c4c, [0x091C35, 0xFFFFFF, 0x091C35]);
    }
}
function AlianzaLimaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xf4f4f4, [0x1A2639, 0x253143, 0x253143]);
    }
}
function AlianzaLimaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xf4f4f4, [0x1A2639, 0x253143, 0x253143]);
    }
}
function SportingCristalFun(player) { // !IND
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cri/titular/red | cri/titular/blue | cri/alternativa/red | cri/alternativa/blue | cri/tercera/red | cri/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SportingCristalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x032543, [0x61C5ED]);
    }
}
function SportingCristalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x032543, [0x61C5ED]);
    }
}
function SportingCristalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -90, 0xFFFFFF, [0x212C4B, 0x334A7F]);
    }
}
function SportingCristalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -90, 0xFFFFFF, [0x212C4B, 0x334A7F]);
    }
}
function SportingCristalTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 41, 0x1C1C1C, [0xFFFFFF, 0x3CBEEF, 0xFFFFFF]);
    }
}
function SportingCristalTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 41, 0x1C1C1C, [0xFFFFFF, 0x3CBEEF, 0xFFFFFF]);
    }
}
function RusiaFun(player) { // !IND
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rus/titular/red | rus/titular/blue | rus/alternativa/red | rus/alternativa/blue | rus/bandera/red | rus/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RusiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xf7f7f7, [0xF01F21]);
    }
}
function RusiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xf7f7f7, [0xF01F21]);
    }
}
function RusiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -90, 0x114577, [0xEFEFF0]);
    }
}
function RusiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -90, 0x114577, [0xEFEFF0]);
    }
}
function RusiaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xCCCCCC, [0xFFFFFF, 0x0039A6, 0xD52B1E]);
    }
}
function RusiaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xCCCCCC, [0xFFFFFF, 0x0039A6, 0xD52B1E]);
    }
}
function EstadosUnidosFun(player) { // !IND
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('usa/titular/red | usa/titular/blue | usa/alternativa/red | usa/alternativa/blue | usa/tercera/red | usa/tercera/blue | usa/clasica/red | usa/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EstadosUnidosTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 22, 0x0087DE, [0xFFFFFF, 0x105395, 0xD9272D]);
    }
}
function EstadosUnidosTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 22, 0x0087DE, [0xFFFFFF, 0x105395, 0xD9272D]);
    }
}
function EstadosUnidosAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x005092, [0xD8062B, 0xB4011E, 0xD8062B]);
    }
}
function EstadosUnidosAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x005092, [0xD8062B, 0xB4011E, 0xD8062B]);
    }
}
function EstadosUnidosTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -90, 0xfbfbfa, [0x013354]);
    }
}
function EstadosUnidosTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -90, 0xfbfbfa, [0x013354]);
    }
}
function EstadosUnidosClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -90, 0x101085, [0xFF2E2E, 0xFFFFFF, 0x1C59FF]);
    }
}
function EstadosUnidosClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -90, 0x101085, [0xFF2E2E, 0xFFFFFF, 0x1C59FF]);
    }
}
function AlmagroFun(player) { // !IND
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('alm/titular/red | alm/titular/blue | alm/alternativa/red | alm/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlmagroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x0137D5, 0x18181A, 0x0137D5]);
    }
}
function AlmagroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x0137D5, 0x18181A, 0x0137D5]);
    }
}
function AlmagroAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1783FF, [0x003CDB, 0x1F1F21, 0xFDFDFD]);
    }
}
function AlmagroAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1783FF, [0x003CDB, 0x1F1F21, 0xFDFDFD]);
    }
}
function NigeriaFun(player) { // !nga
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nga/titular/red | nga/titular/blue | nga/alternativa/red |nga/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NigeriaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x221C1F, [0xFCFCFC, 0x72E39C, 0x72E39C]);
    }
}
function NigeriaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x221C1F, [0xFCFCFC, 0x72E39C, 0x72E39C]);
    }
}
function NigeriaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x97fd2f, [0x145541]);
    }
}
function NigeriaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x97fd2f, [0x145541]);
    }
}
function EcuadorFun(player) { // !ecu
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ecu/titular/red | ecu/titular/blue | ecu/alternativa/red |ecu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EcuadorTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x182332, [0xF9DD2F]);
    }
}
function EcuadorTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x182332, [0xF9DD2F]);
    }
}
function EcuadorAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x183D5E]);
    }
}
function EcuadorAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x183D5E]);
    }
}
function CADUFun(player) { // !CADU
    room.sendAnnouncement('Club Atlético Defensores Unidos 🇦🇷', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cadu/titular/red | cadu/titular/blue | cadu/alternativa/red | cadu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CADUTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0F0F0F, [0x0A94DC, 0x2CCAF8, 0x0A94DC]);
    }
}
function CADUTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0F0F0F, [0x0A94DC, 0x2CCAF8, 0x0A94DC]);
    }
}
function CADUAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 135, 0x007EFC, [0xFFFFFF, 0x47C4FB, 0xFFFFFF]);
    }
}
function CADUAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 135, 0x007EFC, [0xFFFFFF, 0x47C4FB, 0xFFFFFF]);
    }
}
function URSSFun(player) { // !urss
    room.sendAnnouncement('Unión Soviética - URSS - ☭', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('urss/titular/red | urss/titular/blue | urss/alternativa/red |urss/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function URSSTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xffffff, [0xB00819]);
    }
}
function URSSTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xffffff, [0xB00819]);
    }
}
function URSSAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xab0818, [0xFAFAFA]);
    }
}
function URSSAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xab0818, [0xFAFAFA]);
    }
}
function YugoslaviaFun(player) { // !yug
    room.sendAnnouncement('Yugoslavia 🇷🇸', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('yug/titular/red/1990 | yug/titular/blue/1990 | yug/alternativa/red/1990 |yug/alternativa/blue/1990 | yug/titular/red/1984 | yug/titular/blue/1984 | yug/alternativa/red/1984 |yug/alternativa/blue/1984 | yug/bandera/red | yug/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function YugoslaviaTitular1990RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 153, 0xFFFFFF, [0x0F4BA1, 0x0F4BA1, 0xDE0000]);
    }
}
function YugoslaviaTitular1990BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 153, 0xFFFFFF, [0x0F4BA1, 0x0F4BA1, 0xDE0000]);
    }
}
function YugoslaviaAlternativa1990RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 153, 0x0d4bb2, [0xFFFFFF, 0xFFFFFF, 0xDD251D]);
    }
}
function YugoslaviaAlternativa1990BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 153, 0x0d4bb2, [0xFFFFFF, 0xFFFFFF, 0xDD251D]);
    }
}
function YugoslaviaTitular1984RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x18529D]);
    }
}
function YugoslaviaTitular1984BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x18529D]);
    }
}
function YugoslaviaAlternativa1984RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x00388e, [0xFFFFFF]);
    }
}
function YugoslaviaAlternativa1984BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x00388e, [0xFFFFFF]);
    }
}
function YugoslaviaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xde0000, [0x003893, 0xFFFFFF, 0xDE0000]);
    }
}
function YugoslaviaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xde0000, [0x003893, 0xFFFFFF, 0xDE0000]);
    }
}
function AlumniFun(player) { // !alu
    room.sendAnnouncement('Alumni 🇦🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('alu/titular/red | alu/titular/blue | alu/alternativa/red | alu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlumniTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFF0000, 0xFFFFFF, 0xFF0000]);
    }
}
function AlumniTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFF0000, 0xFFFFFF, 0xFF0000]);
    }
}
function AlumniAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xE30F10, 0xFFFFFF, 0xE30F10]);
    }
}
function AlumniAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xE30F10, 0xFFFFFF, 0xE30F10]);
    }
}
function VillaSanCarlosFun(player) { // !vsc
    room.sendAnnouncement('Villa San Carlos 🇦🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('vsc/titular/red | vsc/titular/blue | vsc/alternativa/red | vsc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function VillaSanCarlosTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 42, 0x131b2a, [0x48B8E5, 0xFFFFFF, 0x48B8E5]);
    }
}
function VillaSanCarlosTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 42, 0x131b2a, [0x48B8E5, 0xFFFFFF, 0x48B8E5]);
    }
}
function VillaSanCarlosAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 56, 0xF0F0F0, [0x01C8FF, 0x292C34, 0x292C34]);
    }
}
function VillaSanCarlosAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 56, 0xF0F0F0, [0x01C8FF, 0x292C34, 0x292C34]);
    }
}
function LomasAthleticFun(player) { // !loa
    room.sendAnnouncement('Lomas Athletic 🇦🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('loa/titular/red | loa/titular/blue | loa/escudo/red | loa/escudo/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LomasAthleticTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf5dc00, [0x336633, 0xD90000, 0x336633]);
    }
}
function LomasAthleticTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf5dc00, [0x336633, 0xD90000, 0x336633]);
    }
}
function LomasAthleticEscudoRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xfcc916, [0x015440, 0xDD191A, 0x015440]);
    }
}
function LomasAthleticEscudoBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xfcc916, [0x015440, 0xDD191A, 0x015440]);
    }
}
function ChecoslovaquiaFun(player) { // !cze
    room.sendAnnouncement('Checoslovaquia 🇨🇿 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cze/titular/red | cze/titular/blue | cze/alternativa/red | cze/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChecoslovaquiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffffff, [0xBE2620]);
    }
}
function ChecoslovaquiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffffff, [0xBE2620]);
    }
}
function ChecoslovaquiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xac1013, [0xFFFFFF]);
    }
}
function ChecoslovaquiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xac1013, [0xFFFFFF]);
    }
}
function NantesFun(player) { // !fcn
    room.sendAnnouncement('FC Nantes 🇫🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fcn/titular/red | fcn/titular/blue | fcn/alternativa/red | fcn/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NantesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x007037, [0xFEE030, 0x1AAD67, 0xFEE030]);
    }
}
function NantesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x007037, [0xFEE030, 0x1AAD67, 0xFEE030]);
    }
}
function NantesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xffff00, [0x228B67, 0x167554, 0x167554]);
    }
}
function NantesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xffff00, [0x228B67, 0x167554, 0x167554]);
    }
}
function SaintEtienneFun(player) { // !ste
    room.sendAnnouncement('Saint Etienne 🇫🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ste/titular/red | ste/titular/blue | ste/alternativa/red | ste/alternativa/blue | ste/tercera/red | ste/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SaintEtienneTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xffffff, [0x0F6B46, 0x1B9365, 0x1B9365]);
    }
}
function SaintEtienneTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xffffff, [0x0F6B46, 0x1B9365, 0x1B9365]);
    }
}
function SaintEtienneAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x4c6e5d, [0x147858, 0xFFFFFF, 0xFFFFFF]);
    }
}
function SaintEtienneAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x4c6e5d, [0x147858, 0xFFFFFF, 0xFFFFFF]);
    }
}
function SaintEtienneTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x727085, 0x8E909D, 0x8E909D]);
    }
}
function SaintEtienneTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x727085, 0x8E909D, 0x8E909D]);
    }
}
function RennesFun(player) { // !ren
    room.sendAnnouncement('Rennes 🇫🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ren/titular/red | ren/titular/blue | ren/alternativa/red | ren/alternativa/blue | ren/tercera/red | ren/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RennesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xF0F0F0, [0x000000, 0xDC0D15]);
    }
}
function RennesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xF0F0F0, [0x000000, 0xDC0D15]);
    }
}
function RennesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x276DD6, 0x1B50B5, 0x276DD6]);
    }
}
function RennesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x276DD6, 0x1B50B5, 0x276DD6]);
    }
}
function RennesTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFFDF00]);
    }
}
function RennesTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFFDF00]);
    }
}
function FCNyvaVinnytsiaFun(player) { // !nyv
    room.sendAnnouncement('FC Nyva Vinnytsia (Нива Винница) | 🇺🇦 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Puedes elegir entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nyv/titular/red | nyv/titular/blue | nyv/alternativa/red | nyv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FCNyvaVinnytsiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x42A161]);
    }
}
function FCNyvaVinnytsiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x42A161]);
    }
}
function FCNyvaVinnytsiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x439b73, [0x3AA070, 0xFFFFFF, 0xFFFFFF]);
    }
}
function FCNyvaVinnytsiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x439b73, [0x3AA070, 0xFFFFFF, 0xFFFFFF]);
    }
}


function ReglasFun(player) { // !regras
    room.sendAnnouncement("📜 Regra dos penalts", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒈ Só pode ter um goleiro", player.id, 0x00FFBB, "normal", 1);
    room.sendAnnouncement("⒉ Os jogadores devem respeitar a ordem", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒊ O jogador não pode atrapalhar ou parar no penalt", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("👨‍⚖️ Se descomprir deverá bater denovo OK? ⚖​", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒋ Se a equipe estiver com -1, deve pegar um spec", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒌ Não invada o bagulho", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒍ Se houver empate depois dos penal tem que:", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("Os goleiros terão que bater alternadas, máximo 5 chutes.", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("Se empatar, todos jogadores terão que bater o penalt denovo", player.id, 0x00FFBB, "normal", 0);
}

function helpFun(player) { // !help
    room.sendAnnouncement('💬  Comandos: "!afk", "!afks"', player.id, 0xFF003C, "normal", 0);
    room.sendAnnouncement('💬  "!pergunta", "!poss", "!adminhelp", "!gkhelp", "!avatars" "!rankhelp", "!nv", "!adormir", "!acomer", "!mapas" e "!uniformes".', player.id, 0xFF003C, "normal", 0);
}
    colors = {
        "red": 15729691,
        "green": 10812739,
        "black": 0,
        "transparent": -1,
        "blue": 367351,
        "yellow": 16771089,
        "orange": 16737796,
        "purple": 14886893,
        "white": 16777215,
        "gold": 14140044
    };
function bosshaftColor (player, message) {
    if (player.admin == true){
    let e = message.split(/ +/).slice(1);
    return room.setDiscProperties(0, {
        color: e[0]
    }), !1
}}
function bosshaftColorString (player, message) {
    if (player.admin == true){
    let e = message.split(/ +/).slice(1);
    return (colors.hasOwnProperty(e[0].toLowerCase()) ? room.setDiscProperties(0, {
        color: colors[e[0].toLowerCase()]
    }) : room.sendAnnouncement("Essa cor é inválida!", player.id)), !1
}}

function PelotaFun(player) { // !pelota
    if (player.admin == true){
    room.sendAnnouncement('!ball + red/blue/green/yellow/orange/black/white/purple/gold/transparent (sin el + ni el slash)', player.id, 0xFF003C, "normal", 0);
    room.sendAnnouncement('!customball + color (En decimal) | Página para transformar colores: https://convertingcolors.com/', player.id, 0xFF003C, "normal", 0);
}
}
function NumeroUnoFun(player) { // !1
    room.sendChat('🔢  𝟭𝟏𝟷𝟣１ߗ1𐰯¹₁⥠↿˥⒈𝟏𝟷𐰯 ІΙӀᅵ𝗹। ⅂𐐑⓵①➀➊❶ para mais ve a https://tell.wtf');
}
function NumeroDosFun(player) { // !1
    room.sendChat('🔢  𝟮𝟐２2ᒿ𝟤ᒾ²₂շ𝟸ᘖ𝟚Ձ⒉ƻՉԶϩ⓶②➁➋❷㈃⒛ para mais ve a https://tell.wtf');
}
function NumeroTresFun(player) { // !1
    room.sendChat('🔢  ƷʒӡӠᴣᶾэЭ℈ぅうㄋȝȜ𝟯𝟥зɜᴈᢃ౩⓷③➂➌❸੩૩३ para mais ve a https://tell.wtf');
}
function NumeroCuatroFun(player) { // !1
    room.sendChat('🔢  𝟰𝟒４𝟺𝟦4₄⁴ϤկԿЧчɥ౺⒋ para mais ve a https://tell.wtf');
}
function NumeroCincoFun(player) { // !1
    room.sendChat('🔢  Ƽƽ𐐠𐑈𝟱𝟓５𝟧𝟻5₅⁵⒌ para mais ve a https://tell.wtf');
}
function NumeroSeisFun(player) { // !1
    room.sendChat('🔢  𝟲𝟔６𝟼6𝟨₆⁶𝟞⒍⑥⓺➅➏❻ɓꕃ para mais ve a https://tell.wtf');
}
function NumeroSieteFun(player) { // !1
    room.sendChat('🔢  ⅂𐐑ヿ⏋⌉𝟳𝟕𝟟7𝟽７⁊₇⁷𝟩⒎ꔔ para mais ve a https://tell.wtf');
}
function NumeroOchoFun(player) { // !1
    room.sendChat('🔢  𝟴𝟖8𝟪৪⁸₈８𐌚𝟾ꖉ⊟𝛉⒏ para mais ve a https://tell.wtf');
}
function NumeroNueveFun(player) { // !1
    room.sendChat('🔢  𝟵𝟗9𝟿９𝟫⁹₉୨ցɡᕤ⒐ para mais ve a https://tell.wtf');
}
function NumeroDiezFun() { // !1
    room.sendChat('🔢  ⒑🔟⑩➉➓❿юЮ para mais ve a https://tell.wtf');
}
function RegistrarmeFun(player) { // !registrarme
    playerName = player.name.replace(/ /g,"_");
    room.sendAnnouncement("[💻] @" + playerName + " ➡ Registre agora em ? para poder ver os status. 📊", player.id, 0xFFE600, "normal", 0);
    room.sendAnnouncement("Só registramos nos Fim de Semana", player.id, 0xEB172D, "bold", 0);
}
function EstadiosFun(player) { // !estadios
    room.sendAnnouncement('🏟 Pode selecionar: !bombonera | !monumental', player.id, 0xFF003C, "normal", 0);

}
function ScriptsDisponiblesFun(player) { // !scripts
    playerName = player.name.replace(/ /g,"_");
    room.sendAnnouncement("[💻] @" + playerName + " Scripts em ? ⬅", player.id, 0xFFE600, "normal", 0);
}
function AvataresDisponiblesFun(player) { // !avatar
    playerName = player.name.replace(/ /g,"_");
    room.sendChat("[🔢🔤] @" + playerName + " Simbolos pro avatar em:  ➡ https://tell.wtf ⬅");
    room.sendChat("@" + playerName + " e para ver números para teu avatar, pode colocar !1, !2, !3, etc (basta !10)");
}

function MapasFun(player) { // !mapas
    room.sendAnnouncement(' Os mapas são !rs, !pensred, !pensblue', player.id, 0x00FF77, "normal", 0);
}

function adminHelpFun(player) {
    if (player.admin == true){
    room.sendAnnouncement('💬  Comandos: "!mute Player", "!unmute Player", "!clearbans", "!rr", "!kickafks", "!resign", "!bola" e "!swap" (Para mudar de equipe).', player.id, 0xFF6600, "normal", 0);
}}
 
 
function gkHelpFun() { // !gkhelp
    room.sendChat('💬 O jogador mais atrás virará gk (Escreva "!gk" se o bot ta errado).')
}
function rankHelpFun() { // !gkhelp
    room.sendChat("💬 Consegue postos no host! Gol: 2 pts, Assistencia: 1 pts, Vitoria: 3 pts, Invicto: 3 pts, Derrota: -3 pts, Gol contra: -2 pts.")
}
function eloHelpFun() {
    room.sendChat("💬 ¡Consegue pontos para ganhar elo.")
}
 
function statsFun(player, message){
    if (stats.hasOwnProperty(message.substr(7))){
        sendStats(message.substr(7));
    } else{     room.sendAnnouncement("Para ver os status escreve: !stats NickConElQueTeRegistraste", player.id, 0x63EBE2, "bold", 0);
room.sendAnnouncement("Se não está registrado, escreva !registrarme para se registrar nos fins de semana ", player.id, 0xEB172D, "bold", 0);}
}
 
function resetStatsAdminFun (player, message){ // !reset876
    playername = message.substr(10);
    stats[playername] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"];
    return false;
}
 
function clearbansFun(player){ // !clear
    if (player.admin == true){ room.clearBans(); room.sendChat("💎 Os bans foram limpos");}
}
function MinirsFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(MiniRS);        
        room.startGame() ;
    }
}
function PenalesRedHandballFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PensRedHandball);        
        room.startGame() ;
    }
}

function PenalesBlueHandballFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PensBlueHandball);        
        room.startGame() ;
    }
}
function PenalesRedFutsalx3Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PensRedFutsalx3x4);        
        room.startGame() ;
    }
}

function PenalesBlueFutsalx3Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PensBlueFutsalx3x4);        
        room.startGame() ;
    }
}

function RealSoccerSinRedFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(RSGLH);        
        room.startGame() ;
    }
}

function RealSoccerGLH2Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(RSGLH2);        
        room.startGame() ;
    }
}

function RealSoccerGLH3Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(RSGLH3);        
        room.startGame() ;
    }
}

function RealSoccerGLH4Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(RSGLH4);        
        room.startGame() ;
    }
}

function Futsalx4Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Futsalx4);        
        room.startGame() ;
    }
}

function Futsalx3Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Futsalx3);        
        room.startGame() ;
    }
}

function BigGLHFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(BigGLH);        
        room.startGame() ;
    }
}

function BomboneraFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Bombonera);        
        room.startGame() ;
    }
}

function MonumentalFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Monumental);        
        room.startGame() ;
    }
}

function SkateFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(SkateGLH);        
        room.startGame() ;
    }
}


function Futsalx1yx2Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Futsalx1yx2);        
        room.startGame() ;
    }
}


function HandballFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Handball);        
        room.startGame() ;
    }
}

function EntrenamientoFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Entrenamiento);        
        room.startGame() ;
    }
}

function TenisFun(player){
    room.sendAnnouncement('Pode virar', player.id, 0xE5FF00, "normal", 0);
    room.sendAnnouncement('tenis/ladrillo', player.id, 0xFFAA00, "normal", 0);
    room.sendAnnouncement('tenis/cemento', player.id, 0x0088FF, "normal", 0);
    room.sendAnnouncement('tenis/pasto', player.id, 0x6FFF00, "normal", 0);

}

function TenisLadrilloFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(TenisLadrillos);        
        room.startGame() ;
    }
}
function TenisCementoFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(TenisCemento);        
        room.startGame() ;
    }
}
function TenisPastoFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(TenisPasto);        
        room.startGame() ;
    }
}



function VolleyballFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Volleyball);        
        room.startGame() ;
    }
}


function PenaltyBlueFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(pensblue);        
        room.startGame() ;
    room.sendChat( "Para ver as regras, escreva:  !𝚛𝚎𝚐r𝚊𝚜"  );
    }
}

function PenaltyRedFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(pensred);        
        room.startGame() ;
    room.sendChat( "Para ver as regras, escreva:  !𝚛𝚎𝚐r𝚊𝚜"  );

    }
}
 
function resetFun(player){
    if (player.admin == true){
        room.stopGame();
        room.startGame();
    }
}
 
function gkFun(player){ // !gk
 
    if (room.getScores() != null && room.getScores().time < 60){
        if (player.team == 1) {
            gk[0] = player;
        }
        else if (player.team == 2){
            gk[1] = player;
        }
    }
    return;
}
 
 
function closeFun(player){
    if (player.name == "Pajero"){ // artificially generate an error in order to close the room
        stats.crash();
    }
}


function leaveFun(player, message) {
if (message == "!nv")
room.kickPlayer(player.id, "Tchau bro 👋", false);
else if (message == "!adormir")
room.kickPlayer(player.id, "💤 Boa noite!! <3", false);
else if (message == "!bb")
room.kickPlayer(player.id, "Bye! 👋 😉", false);
else if (message == "!acomer")
room.kickPlayer(player.id, "😋 Come gostoso rsrs ! 🍽", false);
}
 
 
/*
    For ranking
*/
 
function rankingCalc(player){
    var name = player;
    players = Object.keys(stats);
    account = players.find(a => a === name)
    if (account !== undefined){
    return stats[name][0] * 2 + stats[name][1] * 1 +
            stats[name][2] * 3 + stats[name][5] * 3 -
            stats[name][3] * 3 - stats[name][4] * 2;
    }
    else {return 0;}
}
 
function ranking(player, message){
 
    var overall = [];
    players = Object.keys(stats);
    for (var i = 0; i < players.length; i++) {
        score = rankingCalc(players[i])
        // Gol: 2 pts, Assistencia: 1 pts, Vitoria: 3 pts, Invicto: 3 pts, Derrota: -3 pts, Gol Contra: -2 pts
        overall.push({name: players[i], value: score});
    }
    overall.sort(function(a,b){
        return b.value - a.value;
    })
    let top30 = overall.splice(0, 30);
    let pos = 1;
    if (top30.length) {
    room.sendAnnouncement("💎 Ranking [top30] 💎: ", player.id, 0xFFE121, "normal", 0);
    }
    while (top30.length) {
    let tmp = top30.splice(0, 5);
    let message = tmp.map(e => `${pos++}) ${e.name}: ${e.value}`).join(", ");
    room.sendAnnouncement(message, player.id, 0xFFE121, "normal", 0);
    }
}
 
function eloCalc(player){
    var name = player;
    return stats[name][6];
}
 
function eloranking(){
 
    var overall = [];
    players = Object.keys(stats);
    for (var i = 0; i < players.length; i++) {
        score = eloCalc(players[i])
        // Gol: 2 pts, Assistencia: 1 pts, Vitoria: 3 pts, Invicto: 3 pts, Derrota: -3 pts, Gol contra: -2 pts
        overall.push({name: players[i], value: score});
    }
    overall.sort(function(a,b){
        return b.value - a.value;
    })
    let top15 = overall.splice(0, 15);
    let pos = 1;
    if (top15.length) {
    room.sendChat("💎 Elo ranking [top15]: ");
    }
    while (top15.length) {
    let tmp = top15.splice(0, 5);
    let message = tmp.map(e => `${pos++}) ${e.name}: ${e.value}`).join(", ");
    room.sendChat(message);
    }
}
 
 
function sendStats(player, message){
    var name = player;
    ps = stats[name]; // stands for playerstats
    var Goles = ps[0] * 2
    var Assistencias = ps[1] * 1
    var Derrotas = ps[3] * -3
    var Vitorias = ps[2] * 3
    var Assistencias = ps[1] * 1
    var GolsContra = ps[4] * -2
    var Invicto = ps[5] * 3
    var PontosTotais = Gols + Assistencias + Derrotas + Vitorias + Assistencias + GolsContra + VallasInvictas
/*  if (ps[7] == parseInt(0)) {ps[7] = "L"} else {ps[7] = "W"}
    if (ps[8] == parseInt(0)) {ps[8] = "L"} else {ps[8] = "W"}
    if (ps[9] == parseInt(0)) {ps[9] = "L"} else {ps[9] = "W"}
    if (ps[10] == parseInt(0)) {ps[10] = "L"} else {ps[10] = "W"}
    if (ps[11] == parseInt(0)) {ps[11] = "L"} else {ps[11] = "W"} */
    room.sendAnnouncement(name + ": ⚽ Gols: " + ps[0] + ", 👟 Assistencias: " + ps[1]
    + ",  ❌ Gols contra: " + ps[4] + ", ✔️ Invicto: " + ps[5] + ",  🏆 Vitorias: " + ps[2] + ", 👎 Derrotas: " + ps[3] + ", 💎 ELO: " + ps[6] + " , 🌟 Pontos: " + PontosTotais, player.id, 0xFFE121, "normal", 0);
    if (ps[7] !== "D" &&  ps[8] !== "D" && ps[9] !== "D" && ps[10] !== "D" && ps[11] !== "D"){room.sendChat(name + ": 🥇 Last 5 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9] + " - " + ps[10] + " - " + ps[11]);}
    if (ps[7] !== "D" &&  ps[8] !== "D" && ps[9] !== "D" && ps[10] !== "D" && ps[11] == "D"){room.sendChat(name + ": 🥇 Last 4 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9] + " - " + ps[10]);}
    if (ps[7] !== "D" &&  ps[8] !== "D" && ps[9] !== "D" && ps[10] == "D" && ps[11] == "D"){room.sendChat(name + ": 🥇 Last 3 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9]);}
    if (ps[7] !== "D" &&  ps[8] !== "D" && ps[9] == "D" && ps[10] == "D" && ps[11] == "D"){room.sendChat(name + ": 🥇 Last 2 W/L: " + ps[7] + " - " + ps[8]);}
    if (ps[7] !== "D" &&  ps[8] == "D" && ps[9] == "D" && ps[10] == "D" && ps[11] == "D"){room.sendChat(name + ": 🥇 Last W/L: " + ps[7]);}
}


 
 
function whichTeam(){ // gives the players in the red or blue team
    var players = room.getPlayerList();
    var redTeam = players.filter(player => player.team == 1);
    var blueTeam = players.filter(player => player.team == 2);
    return [redTeam, blueTeam]
}
function afkFun(player, message){ // !classic
    if (afkPlayerIDs.has(player.id)){
        afkPlayerIDs.delete(player.id);
        room.sendChat("💎 " + player.name + " voltou e pode ser humilhado");}
    else {afkPlayerIDs.add(player.id); room.setPlayerTeam(player.id, 0);room.sendChat("💎 " + player.name + " se encuentra actualmente AFK!");}
}
 
function afksFun(player, message){ // !huge
    afkPlayers_list = room.getPlayerList().filter((x) => afkPlayerIDs.has(x.id));
    afkPlayers_list_string = afkPlayers_list.map(x => x.name).join(", ");
    if (afkPlayers_list == "") {
        room.sendChat("💎 Sem afk");
    }
    else {
        room.sendChat("💎 Jogadores afk: " + afkPlayers_list_string);
    }
}
 
function kickafksFun(player, message){ // !huge
    if (player.admin == true){
        afksPlayers = room.getPlayerList().filter((x) => afkPlayerIDs.has(x.id));
        for(var i=0;i<afksPlayers.length;i++){room.kickPlayer(afksPlayers[i].id,"AFK!",false);}
    }
}
 
function saveStatsFun(){
    var val = JSON.stringify(stats);
    window.localStorage.setItem("stats", val);
    return false;
}
 
function getAverageRank(team){
    average = 0;
    for (var i = 0; i < team.length; i++) {
        if (team[i].name !== undefined){
        average += rankingCalc(team[i].name);}
    }
    return average / team.length;
}
 
 
 
function getRatingDelta(redTeam, blueTeam, redGameResult, blueGameResult) {
 
    redAverage = getAverageRank(redTeam);
    blueAverage = getAverageRank(blueTeam);
 
  var redChanceToWin = 1 / ( 1 + Math.pow(10, (blueAverage - redAverage) / 400));
    var blueChanceToWin = 1 - redChanceToWin;
 
  return [Math.round(32 * (redGameResult - redChanceToWin)), Math.round(32 * (blueGameResult - blueChanceToWin))];
}
 
function updateElo(redTeam, blueTeam, redGameResult, blueGameResult){
    if (redTeam.length == blueTeam.length && redTeam.length == '4' && blueTeam.length == '4'){
        [redDelta, blueDelta] = getRatingDelta(redTeam, blueTeam, redGameResult, blueGameResult)
        for (var i = 0; i < redTeam.length; i++) {
            let account3 = accounts.find(a => a.playerId === redTeam[i].id);
            if (account3 !== undefined) {stats[account3.username][6] += redDelta;} else{};
            let account4 = accounts.find(a => a.playerId === blueTeam[i].id);
            if (account4 !== undefined) {stats[account4.username][6] += blueDelta;} else{};
        }
        return redDelta;
    }
    return 0;
}
 
 
function confirmedPlayersFun(player, message){ // !huge
    confirmedPlayers_list = room.getPlayerList().filter((x) => confirmedPlayers.has(x.id));
    confirmedPlayers_list_string = confirmedPlayers_list.map(x => x.name).join(", ");
    if (confirmedPlayers_list == "") {
        room.sendChat("💎 Sem galera registrada!");
    }
    else {
        room.sendChat("💎 Jogadores registrados: " + confirmedPlayers_list_string);
    }
}
 
 
function eightballFun(player, message){
    var myArray = ['Por supuesto que no.', 'Tal vez.', 'Pfft.', 'El futuro es incierto.', 'Honestamente no.', 'xdxdxd! Es enserio?!?', 'Quizás en el futuro.', 'WTF.', 'Espero que no.', 'Nunca!', 'Que flasheas? ( ͡ʘ ͜ʖ ͡ʘ)', 'Ni en pedo.', 'Ni en tus sueños.', 'seeee! (╭☞ ͡ ͡° ͜ ʖ ͡ ͡°)╭☞', 'Que dices? Ni se te ocurra.', 'Probablemente no', 'Probablemente si', 'Esa te la debo', 'Si', 'Mmmmm, enserio quieres que responda eso?', 'Pero que clase de pregunta es esa?', 'Ya quisieras', 'Que buena pregunta xdxd', 'Lo importante es que tenemos salud ಥ_ಥ', 'Me das asco >:v', 'Soñar no cuesta nada (ง︡'-'︠)ง', 'Me chupa un huevo ¯\_(ツ)_/¯', 'Esa es una excelente pregunta', 'Si me dieran [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅] por cada pregunta boluda como esta... sería millonario'];
    var rand = myArray[(Math.random() * myArray.length) | 0]
    var myArray2 = ['😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😏','😣','😥','😮','😯','😪','😫','😴','😌','😛','😜','😝'];
    var randimage = myArray2[(Math.random() * myArray2.length) | 0]
    room.sendChat(randimage + " " + rand);
}

function setpasswordFun(player, message){  //!set_password  !confirm
    if (player.admin == true){
    code = message.substr(14)
    room.setPassword(code);
    room.sendChat("💎 Host bloqueado.");
    return false;
    }
}
 
function clearpasswordFun(player, message){  //!clear_password
    if (player.admin == true){
    room.setPassword();
    room.sendChat("💎 Host desbloqueado.");
    return false;
    }
}
 
 
function backaccountFun(player, message){  //!back876 waffle 10 2 3 2 1 1 1000
    if (player.admin == true){
    var playername = message.substring(message.lastIndexOf(":") + 1,message.lastIndexOf(";"));
    var index = message.substr( message.lastIndexOf(";") + 1 ).split(" ");
    var goals = index[1]
    var assists = index[2]
    var wins = index[3]
    var losses = index[4]
    var og = index[5]
    var cs = index[6]
    var elo = index[7]
    var ws1 = index[8]
    var ws2 = index[9]
    var ws3 = index[10]
    var ws4 = index[11]
    var ws5 = index[12]
    stats[playername] = [parseInt(goals), parseInt(assists), parseInt(wins), parseInt(losses), parseInt(og), parseInt(cs), parseInt(elo), ws1, ws2, ws3, ws4, ws5];  // goals, assists, wins, losses, og, cs, elo
    saveStatsFun();
    return false;
    }
}
 
function addaccountFun(player, message){ //!addaccount Waffle aaa
    var playername = message.substring(message.lastIndexOf(":") + 1,message.lastIndexOf(";"));
    var index = message.substr( message.lastIndexOf(";") + 1 ).split(" ");
    var password = index[index.length - 1]
    accounts.push({username: playername,password: password});
    if (stats.hasOwnProperty(playername)){}
    else {stats[playername] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"];}
    saveStatsFun();
    return false;
}
 
/* function pmFun(player, message){ //!pm
    var pm = message.substr(4);
    var index = message.split(" ").slice(1);
    var playerID = index[0]
    var message2 = message.substr(4).substr(playerID);
    var message3 = "[PM FROM " + player.name + "(ID:" + player.id + ")]: " + message2;
    console.log(playerID);
    console.log(index);
    console.log(message);
    console.log(message2);
    console.log(message3);
    room.sendChat(message3, parseInt(playerID))
    var players = room.getPlayerList().filter((player) => player.id != 0 );
    if ( players.find((player => player.id === playerID))) {room.sendChat("User ID is not found!, Check # for getting ID.", player.id)}
    else {room.sendChat("PM Sent!", player.id)};
    return false;
} */
 
 
function isGk(){ // gives the mosts backward players before the first kickOff
    var players = room.getPlayerList();
    var min = players[0];
    min.position = {x: room.getBallPosition().x + 60}
    var max = min;
 
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null){
            if (min.position.x > players[i].position.x) min = players[i];
            if (max.position.x < players[i].position.x) max = players[i];
        }
    }
    return [min, max]
}
 
 
 
 
 
function updateWinLoseStats(winners, losers){
    for (var i = 0; i < winners.length; i++) {
        let account = accounts.find(a => a.playerId === winners[i].id);
        if (account !== undefined) {stats[account.username][2] += 1;} else{};
    }
    for (var i = 0; i < losers.length; i++) {
        let account1 = accounts.find(a => a.playerId === losers[i].id);
        if (account1 !== undefined) {stats[account1.username][3] += 1;} else{};
    }
}
 
function updateWinLoseStreakStats(winners, losers){
    if (redTeam.length == blueTeam.length && redTeam.length == '4' && blueTeam.length == '4'){
    for (var i = 0; i < winners.length; i++) {
        let account = accounts.find(a => a.playerId === winners[i].id);
        if (account !== undefined) {
            if (stats[account.username][10] == "W"){ stats[account.username][11] = "W"; } else if (stats[account.username][10] == "L"){ stats[account.username][11] = "L"; } else{};
            if (stats[account.username][9] == "W"){ stats[account.username][10] = "W"; } else if (stats[account.username][9] == "L"){ stats[account.username][10] = "L"; } else{};
            if (stats[account.username][8] == "W"){ stats[account.username][9] = "W"; } else if (stats[account.username][8] == "L"){ stats[account.username][9] = "L"; } else{};
            if (stats[account.username][7] == "W"){ stats[account.username][8] = "W"; } else if (stats[account.username][7] == "L"){ stats[account.username][8] = "L"; } else{};
            stats[account.username][7] = "W";} else{};
    }
    for (var i = 0; i < losers.length; i++) {
        let account1 = accounts.find(a => a.playerId === losers[i].id);
        if (account1 !== undefined) {
            if (stats[account1.username][10] == "W"){ stats[account1.username][11] = "W"; } else if (stats[account1.username][10] == "L"){ stats[account1.username][11] = "L"; } else{};
            if (stats[account1.username][9] == "W"){ stats[account1.username][10] = "W"; } else if (stats[account1.username][9] == "L"){ stats[account1.username][10] = "L"; } else{};
            if (stats[account1.username][8] == "W"){ stats[account1.username][9] = "W"; } else if (stats[account1.username][8] == "L"){ stats[account1.username][9] = "L"; } else{};
            if (stats[account1.username][7] == "W"){ stats[account1.username][8] = "W"; } else if (stats[account1.username][7] == "L"){ stats[account1.username][8] = "L"; } else{};
            stats[account1.username][7] = "L";} else{};
    }
    }
}
 
function initBallCarrying(redTeam, blueTeam){
    var ballCarrying = new Map();
    var playing = redTeam.concat(blueTeam);
    for (var i = 0; i < playing.length; i++) {
        ballCarrying.set(playing[i].name, [0, playing[i].team]); // secs, team, %
    }
    return ballCarrying;
}
 
 
 
function updateTeamPoss(value){
    if (value[1] == 1) redPoss += value[0];
    if (value[1] == 2) bluePoss += value[0];
}
 
var bluePoss;
var redPoss;
var timeOnHalves;
function PosesionBalonFun(player, message){
    if (room.getScores() == null) return false;
    bluePoss = 0;
    redPoss = 0
    ballCarrying.forEach(updateTeamPoss);
    var redPossPercent = Math.round((redPoss / (redPoss + bluePoss + 0.000001)) * 100);
    var bluePossPercent = Math.round((bluePoss / (redPoss + bluePoss + 0.000001)) * 100);
    room.sendAnnouncement("⛹ Bola do red 🔴 " + boldedNumber(redPossPercent) + "% - " + boldedNumber(bluePossPercent) + "% Time azul 🔵 " , player.id, 0x33FFB4, "normal", 0);
   
    var timeOnRedHalf = Math.round((timeOnHalves[0] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    var timeOnBlueHalf = Math.round((timeOnHalves[1] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    room.sendAnnouncement("◧ Bola no campo do red 🔴 " + boldedNumber(timeOnRedHalf) + "% - " + boldedNumber(timeOnBlueHalf) + "% Time azul 🔵 " , player.id, 0x33FFB4, "normal", 0);
}
 
function teamPossFun(player, message){
    if (room.getScores() == null) return false;
    bluePoss = 0;
    redPoss = 0
    ballCarrying.forEach(updateTeamPoss);
    var redPossPercent = Math.round((redPoss / (redPoss + bluePoss + 0.000001)) * 100);
    var bluePossPercent = Math.round((bluePoss / (redPoss + bluePoss + 0.000001)) * 100);
    room.sendChat("⛹ Bola pro red 🔴 " + boldedNumber(redPossPercent) + "% - " + boldedNumber(bluePossPercent) + "% Time azul 🔵 ");
   
    var timeOnRedHalf = Math.round((timeOnHalves[0] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    var timeOnBlueHalf = Math.round((timeOnHalves[1] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    room.sendChat("◧ Bola no campo do red 🔴 " + boldedNumber(timeOnRedHalf) + "% - " + boldedNumber(timeOnBlueHalf) + "% Time azul 🔵 ");
} 
 
/*
For the game
*/
 
// Gives the last player who touched the ball, works only if the ball has the same
// size than in classics maps.
var radiusBall = 10;
function getLastTouchTheBall(lastPlayerTouched, time) {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for(var i = 0; i < players.length; i++) {
        if(players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if(distanceToBall < triggerDistance) {
                lastPlayerTouched = players[i];
                return lastPlayerTouched;
            }
        }
    }
    return lastPlayerTouched;
 
}
 
 
 
// Calculate the distance between 2 points
function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}
 
function isOvertime(){
    scores = room.getScores();
    if (scores != null){
        if (scores.timeLimit != 0){
            if (scores.time > scores.timeLimit){
                if (scores.red == 0 && hasFinished == false){
                    let account = accounts.find(a => a.playerId === gk[0].id);
                    if (account !== undefined) {
                    stats[account.username][5] += 1;}else{};
                    let account1 = accounts.find(a => a.playerId === gk[1].id);
                    if (account1 !== undefined) {
                    stats[account1.username][5] += 1;}else{};
                    hasFinished = true;
                }
            }
        }
    }
}
// return: the name of the team who took a goal
var team_name = team => team == 1 ? "Red 🔴" : "Blue 🔵";
 
var team_color = team => team == 1 ? "Red 🔴" : "Blue 🔵";
 
// return: whether it's an OG
var isOwnGoal = (team, player) => team != player.team ? " [Gol contra]" : "";
 
// return: a better display of the second when a goal is scored
var floor = s => s < 10 ? "0" + s : s;
 
// return: whether there's an assist
//var playerTouchedTwice = playerList => playerList[0].team == playerList[1].team ? " (" + playerList[1].name + ")" : "";
 
playerTouchedTwice = function(playerList){
    let account = accounts.find(a => a.playerId === playerList[1].id);
    if (playerList[0].team == playerList[1].team && account !== undefined){ return " (" + playerList[1].name + "[" + account.username + "]" + ")"; }
    else if (playerList[0].team == playerList[1].team && account == undefined){ return " (" + playerList[1].name + ")"; }
    else{ return "";};
 
}
 
 
 
var stats;
if (!(localStorage.getItem("stats"))){
 stats = {};
} else {stats = JSON.parse(localStorage.getItem("stats"));}
window.setInterval(saveStatsFun, 240);
/* window.setInterval(saveStatsFun, 240); */
var mutedPlayers = []; // Array where will be added muted players
const confirmedPlayers = new Set()
const afkPlayerIDs = new Set()
var init = "init"; // Smth to initialize smth
init.id = 0; // Faster than getting host's id with the method
init.name = "init";
var temp2 = false;
var scorers ; // Map where will be set all scorers in the current game (undefined if reset or end)
var whoTouchedLast; // var representing the last player who touched the ball
var whoTouchedBall = [init, init]; // Array where will be set the 2 last players who touched the ball
var gk = [init, init];
var goalScored = false;
let accounts = [];
 
accounts.push({username: "jogadorregistrado1",password: "colocarsenha"});
accounts.push({username: "jogadoregistrado2",password: "colocarsenha2"});


var commands = {
    // Command that doesnt need to know players attributes.
    "!help": helpFun,
    "!bola": PelotaFun,
    "!customball": bosshaftColor,
    "!ball" : bosshaftColorString,
    "!regras": ReglasFun,
    "!uniformes": CamisetasFun,
    "!estadios": EstadiosFun,
    "!superliga": SuperligaFun,
    "!fantasmas": FantasmasFun,
    "!ascenso": AscensoFun,
    "!ligaboliviana": LigaBolivianaFun,
    "!campeonatochileno": CampeonatoChilenoFun,
    "!mls": MLSFun,
    "!campeonatouruguayo": LigaUruguayaFun,
    "!campeonatoruso": CampeonatoRusoFun,
    "!premierucrania": PremierUcranianaFun,
    "!laliga": LaLigaFun,
    "!seriea": SerieATIMFun,
    "!brasileirao": BrasilLeagueFun,
    "!premierleague": PremierLeagueFun,
    "!superlig": SuperLigFun,
    "!paises": PaisesFun,
    "!bundesliga": BundesligaFun,
    "!eredivisie": EredivisieFun,
    "!ligaaguila": LigaAguilaFun,
    "!ligaparaguaya": LigaParaguayaFun,
    "!ligue1": Ligue1Fun,
    "!ligamx": LigaMXFun,
    "!ligapro": LigaProFun,
    "!superligasuiza": RaiffeisenSuperLeagueFun,
    "!liga1peru": Liga1PeruFun,

    "!RIV": RiverFun,
    "!BOC": BocaFun,
    "!SLO": SanLorenzoFun,
    "!RAC": RacingFun,
    "!IND": IndependienteFun,
    "!ALD": AldosiviFun,
    "!GIM": GimnasiaFun,
    "!NOB": NewellsFun,
    "!CEN": CentralFun,
    "!DYJ": DefensaFun,
    "!ATM": AtleticoMadridFun,
    "!BAR": BarcelonaFun,
    "!RMA": RealMadridFun,
    "!INT": InterMilanFun,
    "!MIL": MilanFun,
    "!CRU": CruzeiroFun,
    "!PAL": PalmeirasFun,
    "!GRE": GremioFun,
    "!TOT": TottenhamFun,
    "!LIV": LiverpoolFun,
    "!ARG": ArgentinaFun,
    "!BELG": BelgicaFun,
    "!BRA": BrasilFun,
    "!CHI": ChileFun,
    "!URU": UruguayFun,
    "!FRA": FranciaFun,
    "!CRO": CroaciaFun,
    "!NAP": NapoliFun,
    "!FCB": BayernFun,
    "!BVB": BorussiaFun,
    "!JUV": JuventusFun,
    "!EST": EstudiantesFun,
    "!BAND": BanfieldFun,
    "!LAN": LanusFun,
    "!MUN": ManUnitedFun,
    "!MCI": ManCityFun,
    "!ARS": ArsenalFun,
    "!CHE": ChelseaFun,
    "!PAR": ParanaenseFun,
    "!HUR": HuracanFun,
    "!TIG": TigreFun,
    "!ALE": AlemaniaFun,
    "!ESP": EspanaFun,
    "!POR": PortugalFun,
    "!AAAJ": ArgentinosJrsFun,
    "!ALB": AllBoysFun,
    "!ATL": AtlantaFun,
    "!BEL": BelgranoFun,
    "!CHA": ChacaritaFun,
    "!TAL": TalleresFun,
    "!PLA": PlatenseFun,
    "!OLI": OlimpoFun,
    "!SMT": SanMartinTucumanFun,
    "!ATU": AtlTucumanFun,
    "!FCO": FerroFun,
    "!NAC": NacionalFun,
    "!PEN": PenarolFun,
    "!QUI": QuilmesFun,
    "!NCH": ChicagoFun,
    "!MOR": MoronFun,
    "!UNI": UnionFun,
    "!CSF": ColonFun,
    "!ARSE": SarandiFun,
    "!DOC": DocksudFun,
    "!COL": ColombiaFun,
    "!PER": PeruFun,
    "!QAT": QatarFun,
    "!PGY": ParaguayFun,
    "!VEN": VenezuelaFun,
    "!WBA": WestBromFun,
    "!AVL": AstonVillaFun,
    "!FUL": FulhamFun,
    "!LEI": LeicesterFun,
    "!DAN": DanubioFun,
    "!RAM": RamplaJrsFun,
    "!SCH": SacachispasFun,
    "!HOL": HolandaFun,
    "!BOL": BoliviaFun,
    "!ITA": ItaliaFun,
    "!ING": InglaterraFun,
    "!AJA": AjaxFun,
    "!FEY": FeyenoordFun,
    "!PSV": PSVFun,
    "!PSG": ParisFun,
    "!CCS": CentralCordobaSdEFun,
    "!RIE": RiestraFun,
    "!OGC": OGCNiceFun,
    "!OM": OlympiqueMarsellaFun,
    "!ROM": ASRomaFun,
    "!FIO": FiorentinaFun,
    "!LAZ": LazioFun,
    "!SMSJ": SMSanJuanFun,
    "!GOD": GodoyCruzFun,
    "!VEL": VelezFun,
    "!FLA": FlamengoFun,
    "!FLU": FluminenseFun,
    "!SAN": SantosFun,
    "!SAO": SaoPauloFun,
    "!BOT": BotafogoFun,
    "!SCI": SCInternacionalFun,
    "!COR": CorinthiansFun,
    "!VAS": VascoDaGamaFun,
    "!CAM": MineiroFun,
    "!ATN": AtlNacionalFun,
    "!MIL": MillonariosFun,
    "!AME": AmericaDeCaliFun,
    "!SFE": SantaFeFun,
    "!CAL": DeportivoCaliFun,
    "!ONC": OnceCaldasFun,
    "!CCP": CerroFun,
    "!OLI": OlimpiaFun,
    "!GUA": GuaraniFun,
    "!LIB": LibertadFun,
    "!SOU": SouthamptonFun,
    "!WAT": WatfordFun,
    "!WIL": WillemIIFun,
    "!ALV": AlvaradoFun,
    "!AGR": AgropecuarioFun,
    "!GS": GalatasarayFun,
    "!BJK": BesiktasFun,
    "!FB": FenerbahceFun,
    "!RIU": RiverURUFun,
    "!MTY": MonterreyFun,
    "!TGS": TigresFun,
    "!CHV": ChivasFun,
    "!CRUZ": CruzAzulFun,
    "!AMC": AmericaMXFun,
    "!LDU": LigaDeQuitoFun,
    "!BSC": BarcelonaSCFun,
    "!EME": EmelecFun,
    "!IDV": IndependienteDelValleFun,
    "!OL": OlympiqueLyonFun,
    "!STEL": SanTelmoFun,
    "!MER": DeportivoMerloFun,
    "!AdQ": ArgentinoDeQuilmesFun,
    "!VAL": ValenciaFun,
    "!BET": BetisFun,
    "!CRY": CrystalPalaceFun,
    "!CJA": JuventudAntonianaFun,
    "!GyT": GimnasiaYTiroFun,
    "!GET": GetafeFun,
    "!LEV": LevanteFun,
    "!RAY": RayoVallecanoFun,
    "!PAT": PatronatoFun,
    "!ZEN": ZenitFun,
    "!CSK": CSKAMoscuFun,
    "!LOK": LokomotivFun,
    "!SPM": SpartakFun,
    "!DIN": DynamoMoscowFun,
    "!DYK": DynamoKievFun,
    "!SHA": ShakhtarFun,
    "!JAP": JaponFun,
    "!NZE": NuevaZelandaFun,
    "!CSU": CoreaDelSurFun,
    "!AUT": AustriaFun,
    "!CNO": CoreaDelNorteFun,
    "!LA": LAGalaxyFun,
    "!LAFC": LosAngelesFCFun,
    "!PTIM": PortlandTimbersFun,
    "!SEA": SeattleSoundersFun,
    "!NYRB": NewYorkRedBullFun,
    "!NYC": NewYorkCityFun,
    "!TOFC": TorontoFCFun,
    "!ATLU": AtlantaUnitedFun,
    "!CCO": ColoColoFun,
    "!UDC": UdeChileFun,
    "!STG": StrongestFun,
    "!BLV": BolivarFun,
    "!WTM": WilstermannFun,
    "!EVE": EvertonFCFun,
    "!ASM": ASMonacoFun,
    "!COB": CobreloaFun,
    "!CDP": PalestinoFun,
    "!UCA": UCatolicaFun,
    "!BAS": FCBaselFun,
    "!ATA": AtalantaFun,
    "!MEL": MelgarFun,
    "!UNV": UniversitarioFun,
    "!ALI": AlianzaLimaFun,
    "!CRI": SportingCristalFun,
    "!RUS": RusiaFun,
    "!USA": EstadosUnidosFun,
    "!ALM": AlmagroFun,
    "!NGA": NigeriaFun,
    "!ECU": EcuadorFun,
    "!CADU": CADUFun,
    "!ALU": AlumniFun,
    "!URSS": URSSFun,
    "!YUG": YugoslaviaFun,
    "!VSC": VillaSanCarlosFun,
    "!LOA": LomasAthleticFun,
    "!CZE": ChecoslovaquiaFun,
    "!FCN": NantesFun,
    "!STE": SaintEtienneFun,
    "!REN": RennesFun,
    "!NYV": FCNyvaVinnytsiaFun,

    "!mapas": MapasFun,
    "!gkhelp": gkHelpFun,
    "!adminhelp": adminHelpFun,
    "!rankhelp": rankHelpFun,
    "!ranking": ranking,
    "!poss": PosesionBalonFun,
    "!elohelp": eloHelpFun,
    "!1": NumeroUnoFun,
    "!2": NumeroDosFun,
    "!3": NumeroTresFun,
    "!4": NumeroCuatroFun,
    "!5": NumeroCincoFun,
    "!6": NumeroSeisFun,
    "!7": NumeroSieteFun,
    "!8": NumeroOchoFun,
    "!9": NumeroNueveFun,
    "!10": NumeroDiezFun,
    "!eloranking": eloranking,
    "!reset824": resetStatsAdminFun,
    "!gk": gkFun,
 
    // Puedes poner la clave que tu quieras. Sólo debes reemplazar el contenido que está
    // dentro de las comillas.

    "!palabraclave": adminFun,
 
    // Command that need to know if a player is admin.
    "riv/titular/red": RIVTitularRedFun,
    "riv/titular/blue": RIVTitularBlueFun,
    "riv/alternativa/red": RIVAlternativaRedFun,
    "riv/alternativa/blue": RIVAlternativaBlueFun,
    "riv/tercera/red": RIVTerceraRedFun,
    "riv/tercera/blue": RIVTerceraBlueFun,
    "riv/titular/red/2018": RIVTitular2018RedFun,
    "riv/titular/blue/2018": RIVTitular2018BlueFun,
    "riv/alternativa/red/2018": RIVAlternativa2018RedFun,
    "riv/alternativa/blue/2018": RIVAlternativa2018BlueFun,
    "riv/titular/red/2017": RIVTitular2017RedFun,
    "riv/titular/blue/2017": RIVTitular2017BlueFun,
    "riv/alternativa/red/2017": RIVAlternativa2017RedFun,
    "riv/alternativa/blue/2017": RIVAlternativa2017BlueFun,
    "boc/titular/red": BOCTitularRedFun,
    "boc/titular/blue": BOCTitularBlueFun,
    "boc/alternativa/red": BOCAlternativaRedFun,
    "boc/alternativa/blue": BOCAlternativaBlueFun,
    "boc/titular/red/2018": BOCTitular2018RedFun,
    "boc/titular/blue/2018": BOCTitular2018BlueFun,
    "boc/alternativa/red/2018": BOCAlternativa2018RedFun,
    "boc/alternativa/blue/2018": BOCAlternativa2018BlueFun,
    "boc/titular/red/2017": BOCTitular2017RedFun,
    "boc/titular/blue/2017": BOCTitular2017BlueFun,
    "boc/alternativa/red/2017": BOCAlternativa2017RedFun,
    "boc/alternativa/blue/2017": BOCAlternativa2017BlueFun,
    "boc/tercera/red/2017": BOCTercera2017RedFun,
    "boc/tercera/blue/2017": BOCTercera2017BlueFun,
    "boc/titular/red/2016": BOCTitular2016RedFun,
    "boc/titular/blue/2016": BOCTitular2016BlueFun,
    "boc/alternativa/red/2016": BOCAlternativa2016RedFun,
    "boc/alternativa/blue/2016": BOCAlternativa2016BlueFun,
    "slo/titular/red": SLOTitularRedFun,
    "slo/titular/blue": SLOTitularBlueFun,
    "slo/alternativa/red": SLOAlternativaRedFun,
    "slo/alternativa/blue": SLOAlternativaBlueFun,
    "rac/titular/red": RACTitularRedFun,
    "rac/titular/blue": RACTitularBlueFun,
    "rac/alternativa/red": RACAlternativaRedFun,
    "rac/alternativa/blue": RACAlternativaBlueFun,
    "rac/tercera/red": RACTerceraRedFun,
    "rac/tercera/blue": RACTerceraBlueFun,
    "rac/alternativa2/red": RACAlternativa2RedFun,
    "rac/alternativa2/blue": RACAlternativa2BlueFun,
    "ind/titular/red": CAITitularRedFun,
    "ind/titular/blue": CAITitularBlueFun,
    "ind/alternativa/red": CAIAlternativaRedFun,
    "ind/alternativa/blue": CAIAlternativaBlueFun,
    "ald/titular/red": ALDTitularRedFun,
    "ald/titular/blue": ALDTitularBlueFun,
    "ald/alternativa/red": ALDAlternativaRedFun,
    "ald/alternativa/blue": ALDAlternativaBlueFun,
    "gim/titular/red": GIMTitularRedFun,
    "gim/titular/blue": GIMTitularBlueFun,
    "gim/alternativa/red": GIMAlternativaRedFun,
    "gim/alternativa/blue": GIMAlternativaBlueFun,
    "gim/tercera/red": GIMTerceraRedFun,
    "gim/tercera/blue": GIMTerceraBlueFun,
    "gim/alternativa/clasica/red": GIMAlternativaClasicaRedFun,
    "gim/alternativa/clasica/blue": GIMAlternativaClasicaBlueFun,
    "nob/titular/red": NOBTitularRedFun,
    "nob/titular/blue": NOBTitularBlueFun,
    "nob/alternativa/red": NOBAlternativaRedFun,
    "nob/alternativa/blue": NOBAlternativaBlueFun,
    "nob/tercera/red": NOBTerceraRedFun,
    "nob/tercera/blue": NOBTerceraBlueFun,
    "nob/rosa/red": NOBRosaRedFun,
    "nob/rosa/blue": NOBRosaBlueFun,
    "cen/titular/red": CENTitularRedFun,
    "cen/titular/blue": CENTitularBlueFun,
    "cen/alternativa/red": CENAlternativaRedFun,
    "cen/alternativa/blue": CENAlternativaBlueFun,
    "dyj/titular/red": DYJTitularRedFun,
    "dyj/titular/blue": DYJTitularBlueFun,
    "atm/titular/red": ATMTitularRedFun,
    "atm/titular/blue": ATMTitularBlueFun,
    "atm/alternativa/red": ATMAlternativaRedFun,
    "atm/alternativa/blue": ATMAlternativaBlueFun,
    "atm/tercera/red": ATMTerceraRedFun,
    "atm/tercera/blue": ATMTerceraBlueFun,
    "bar/titular/red": BARTitularRedFun,
    "bar/titular/blue": BARTitularBlueFun,
    "bar/alternativa/red": BARAlternativaRedFun,
    "bar/alternativa/blue": BARAlternativaBlueFun,
    "bar/tercera/red": BARTerceraRedFun,
    "bar/tercera/blue": BARTerceraBlueFun,
    "rma/titular/red": RMATitularRedFun,
    "rma/titular/blue": RMATitularBlueFun,
    "rma/alternativa/red": RMAAlternativaRedFun,
    "rma/alternativa/blue": RMAAlternativaBlueFun,
    "rma/tercera/red": RMATerceraRedFun,
    "rma/tercera/blue": RMATerceraBlueFun,
    "int/titular/red": INTTitularRedFun,
    "int/titular/blue": INTTitularBlueFun,
    "int/alternativa/red": INTAlternativaRedFun,
    "int/alternativa/blue": INTAlternativaBlueFun,
    "int/tercera/red": INTTerceraRedFun,
    "int/tercera/blue": INTTerceraBlueFun,
    "acm/titular/red": MILTitularRedFun,
    "acm/titular/blue": MILTitularBlueFun,
    "acm/alternativa/red": MILAlternativaRedFun,
    "acm/alternativa/blue": MILAlternativaBlueFun,
    "acm/tercera/red": MILTerceraRedFun,
    "acm/tercera/blue": MILTerceraBlueFun,
    "cru/titular/red": CRUTitularRedFun,
    "cru/titular/blue": CRUTitularBlueFun,
    "cru/alternativa/red": CRUAlternativaRedFun,
    "cru/alternativa/blue": CRUAlternativaBlueFun,
    "pal/titular/red": PALTitularRedFun,
    "pal/titular/blue": PALTitularBlueFun,
    "pal/alternativa/red": PALAlternativaRedFun,
    "pal/alternativa/blue": PALAlternativaBlueFun,
    "pal/tercera/red": PALTerceraRedFun,
    "pal/tercera/blue": PALTerceraBlueFun,
    "gre/titular/red": GRETitularRedFun,
    "gre/titular/blue": GRETitularBlueFun,
    "gre/alternativa/red": GREAlternativaRedFun,
    "gre/alternativa/blue": GREAlternativaBlueFun,
    "tot/titular/red": TOTTitularRedFun,
    "tot/titular/blue": TOTTitularBlueFun,
    "tot/alternativa/red": TOTAlternativaRedFun,
    "tot/alternativa/blue": TOTAlternativaBlueFun,
    "tot/tercera/red": TOTTerceraRedFun,
    "tot/tercera/blue": TOTTerceraBlueFun,
    "tot/titular/red/2018": TOTTitular2018RedFun,
    "tot/titular/blue/2018": TOTTitular2018BlueFun,
    "tot/alternativa/red/2018": TOTAlternativa2018RedFun,
    "tot/alternativa/blue/2018": TOTAlternativa2018BlueFun,
    "liv/titular/red": LIVTitularRedFun,
    "liv/titular/blue": LIVTitularBlueFun,
    "liv/alternativa/red": LIVAlternativaRedFun,
    "liv/alternativa/blue": LIVAlternativaBlueFun,
    "liv/tercera/red": LIVTerceraRedFun,
    "liv/tercera/blue": LIVTerceraBlueFun,
    "liv/titular/red/2018": LIVTitular2018RedFun,
    "liv/titular/blue/2018": LIVTitular2018BlueFun,
    "liv/alternativa/red/2018": LIVAlternativa2018RedFun,
    "liv/alternativa/blue/2018": LIVAlternativa2018BlueFun,
    "arg/titular/red": ARGTitularRedFun,
    "arg/titular/blue": ARGTitularBlueFun,
    "arg/alternativa/red": ARGAlternativaRedFun,
    "arg/alternativa/blue": ARGAlternativaBlueFun,
    "arg/titular/red/2018": ARGTitular2018RedFun,
    "arg/titular/blue/2018": ARGTitular2018BlueFun,
    "arg/titular/red/2016": ARGTitular2016RedFun,
    "arg/titular/blue/2016": ARGTitular2016BlueFun,
    "arg/alternativa/red/2016": ARGAlternativa2016RedFun,
    "arg/alternativa/blue/2016": ARGAlternativa2016BlueFun,
    "arg/bandera/red": ARGBanderaRedFun,
    "arg/bandera/blue": ARGBanderaBlueFun,
    "belg/titular/red": BelgicaTitularRedFun,
    "belg/titular/blue": BelgicaTitularBlueFun,
    "belg/alternativa/red": BelgicaAlternativaRedFun,
    "belg/alternativa/blue": BelgicaAlternativaBlueFun,
    "belg/bandera/red": BelgicaBanderaRedFun,
    "belg/bandera/blue": BelgicaBanderaBlueFun,
    "bra/titular/red": BRATitularRedFun,
    "bra/titular/blue": BRATitularBlueFun,
    "bra/alternativa/red": BRAAlternativaRedFun,
    "bra/alternativa/blue": BRAAlternativaBlueFun,
    "bra/tercera/red": BRATerceraRedFun,
    "bra/tercera/blue": BRATerceraBlueFun,
    "bra/retro/red": BRARetroRedFun,
    "bra/retro/blue": BRARetroBlueFun,
    "chi/titular/red": CHITitularRedFun,
    "chi/titular/blue": CHITitularBlueFun,
    "uru/titular/red": URUTitularRedFun,
    "uru/titular/blue": URUTitularBlueFun,
    "uru/alternativa/red": URUAlternativaRedFun,
    "uru/alternativa/blue": URUAlternativaBlueFun,
    "fra/titular/red": FRATitularRedFun,
    "fra/titular/blue": FRATitularBlueFun,
    "fra/alternativa/red": FRAAlternativaRedFun,
    "fra/alternativa/blue": FRAAlternativaBlueFun,
    "fra/bandera/red": FRABanderaRedFun,
    "fra/bandera/blue": FRABanderaBlueFun,
    "cro/titular/red": CROTitularRedFun,
    "cro/titular/blue": CROTitularBlueFun,
    "nap/titular/red": NAPTitularRedFun,
    "nap/titular/blue": NAPTitularBlueFun,
    "nap/alternativa/red": NAPAlternativaRedFun,
    "nap/alternativa/blue": NAPAlternativaBlueFun,
    "nap/titular/red/ucl": NAPTitularUCLRedFun,
    "nap/titular/blue/ucl": NAPTitularUCLBlueFun,
    "fcb/titular/red": FCBTitularRedFun,
    "fcb/titular/blue": FCBTitularBlueFun,
    "fcb/alternativa/red": FCBAlternativaRedFun,
    "fcb/alternativa/blue": FCBAlternativaBlueFun,
    "fcb/tercera/red": FCBTerceraRedFun,
    "fcb/tercera/blue": FCBTerceraBlueFun,
    "bvb/titular/red": BorussiaTitularRedFun,
    "bvb/titular/blue": BorussiaTitularBlueFun,
    "bvb/alternativa/red": BorussiaAlternativaRedFun,
    "bvb/alternativa/blue": BorussiaAlternativaBlueFun,
    "bvb/titular/red/ucl": BorussiaTitularChampionsRedFun,
    "bvb/titular/blue/ucl": BorussiaTitularChampionsBlueFun,
    "juv/titular/red": JuventusTitularRedFun,
    "juv/titular/blue": JuventusTitularBlueFun,
    "juv/alternativa/red": JuventusAlternativaRedFun,
    "juv/alternativa/blue": JuventusAlternativaBlueFun,
    "juv/tercera/red": JuventusTerceraRedFun,
    "juv/tercera/blue": JuventusTerceraBlueFun,
    "juv/cuarta/red": JuventusCuartaRedFun,
    "juv/cuarta/blue": JuventusCuartaBlueFun,
    "est/titular/red": EstudiantesTitularRedFun,
    "est/titular/blue": EstudiantesTitularBlueFun,
    "est/alternativa/red": EstudiantesAlternativaRedFun,
    "est/alternativa/blue": EstudiantesAlternativaBlueFun,
    "band/titular/red": BanfieldTitularRedFun,
    "band/titular/blue": BanfieldTitularBlueFun,
    "band/alternativa/red": BanfieldAlternativaRedFun,
    "band/alternativa/blue": BanfieldAlternativaBlueFun,
    "band/clasica/red": BanfieldClasicaRedFun,
    "band/clasica/blue": BanfieldClasicaBlueFun,
    "lan/titular/red": LanusTitularRedFun,
    "lan/titular/blue": LanusTitularBlueFun,
    "lan/alternativa/red": LanusAlternativaRedFun,
    "lan/alternativa/blue": LanusAlternativaBlueFun,
    "mun/titular/red": ManUnitedTitularRedFun,
    "mun/titular/blue": ManUnitedTitularBlueFun,
    "mun/alternativa/red": ManUnitedAlternativaRedFun,
    "mun/alternativa/blue": ManUnitedAlternativaBlueFun,
    "mun/tercera/red": ManUnitedTerceraRedFun,
    "mun/tercera/blue": ManUnitedTerceraBlueFun,
    "mci/titular/red": ManCityTitularRedFun,
    "mci/titular/blue": ManCityTitularBlueFun,
    "mci/titular/red/ucl": ManCityTitularChampionsRedFun,
    "mci/titular/blue/ucl": ManCityTitularChampionsBlueFun,
    "mci/alternativa/red": ManCityAlternativaRedFun,
    "mci/alternativa/blue": ManCityAlternativaBlueFun,
    "mci/tercera/red": ManCityTerceraRedFun,
    "mci/tercera/blue": ManCityTerceraBlueFun,
    "ars/titular/red": ArsenalTitularRedFun,
    "ars/titular/blue": ArsenalTitularBlueFun,
    "ars/alternativa/red": ArsenalAlternativaRedFun,
    "ars/alternativa/blue": ArsenalAlternativaBlueFun,
    "ars/tercera/red": ArsenalTerceraRedFun,
    "ars/tercera/blue": ArsenalTerceraBlueFun,
    "che/titular/red": ChelseaTitularRedFun,
    "che/titular/blue": ChelseaTitularBlueFun,
    "che/alternativa/red": ChelseaAlternativaRedFun,
    "che/alternativa/blue": ChelseaAlternativaBlueFun,
    "che/tercera/red": ChelseaTerceraRedFun,
    "che/tercera/blue": ChelseaTerceraBlueFun,
    "par/titular/red": ParanaenseTitularRedFun,
    "par/titular/blue": ParanaenseTitularBlueFun,
    "par/alternativa/red": ParanaenseAlternativaRedFun,
    "par/alternativa/blue": ParanaenseAlternativaBlueFun,
    "hur/titular/red": HuracanTitularRedFun,
    "hur/titular/blue": HuracanTitularBlueFun,
    "tig/titular/red": TigreTitularRedFun,
    "tig/titular/blue": TigreTitularBlueFun,
    "tig/alternativa/red": TigreAlternativaRedFun,
    "tig/alternativa/blue": TigreAlternativaBlueFun,
    "ale/titular/red": AlemaniaTitularRedFun,
    "ale/titular/blue": AlemaniaTitularBlueFun,
    "ale/bandera/red": AlemaniaBanderaRedFun,
    "ale/bandera/blue": AlemaniaBanderaBlueFun,
    "esp/titular/red": EspanaTitularRedFun,
    "esp/titular/blue": EspanaTitularBlueFun,
    "esp/alternativa/red": EspanaAlternativaRedFun,
    "esp/alternativa/blue": EspanaAlternativaBlueFun,
    "esp/bandera/red": EspanaBanderaRedFun,
    "esp/bandera/blue": EspanaBanderaBlueFun,
    "por/titular/red": PortugalTitularRedFun,
    "por/titular/blue": PortugalTitularBlueFun,
    "por/alternativa/red": PortugalAlternativaRedFun,
    "por/alternativa/blue": PortugalAlternativaBlueFun,
    "aaaj/titular/red": ArgentinosJrsTitularRedFun,
    "aaaj/titular/blue": ArgentinosJrsTitularBlueFun,
    "alb/titular/red": AllBoysTitularRedFun,
    "alb/titular/blue": AllBoysTitularBlueFun,
    "alb/alternativa/red": AllBoysAlternativaRedFun,
    "alb/alternativa/blue": AllBoysAlternativaBlueFun,
    "atl/titular/red": AtlantaTitularRedFun,
    "atl/titular/blue": AtlantaTitularBlueFun,
    "bel/titular/red": BelgranoTitularRedFun,
    "bel/titular/blue": BelgranoTitularBlueFun,
    "cha/titular/red": ChacaritaTitularRedFun,
    "cha/titular/blue": ChacaritaTitularBlueFun,
    "tal/titular/red": TalleresTitularRedFun,
    "tal/titular/blue": TalleresTitularBlueFun,
    "tal/alternativa/red": TalleresAlternativaRedFun,
    "tal/alternativa/blue": TalleresAlternativaBlueFun,
    "pla/titular/red": PlatenseTitularRedFun,
    "pla/titular/blue": PlatenseTitularBlueFun,
    "olp/titular/red": OlimpoTitularRedFun,
    "olp/titular/blue": OlimpoTitularBlueFun,
    "smt/titular/red": SanMartinTucumanTitularRedFun,
    "smt/titular/blue": SanMartinTucumanTitularBlueFun,
    "atu/titular/red": AtlTucumanTitularRedFun,
    "atu/titular/blue": AtlTucumanTitularBlueFun,
    "atu/alternativa/red": AtlTucumanAlternativaRedFun,
    "atu/alternativa/blue": AtlTucumanAlternativaBlueFun,
    "fco/titular/red": FerroTitularRedFun,
    "fco/titular/blue": FerroTitularBlueFun,
    "nac/titular/red": NacionalTitularRedFun,
    "nac/titular/blue": NacionalTitularBlueFun,
    "nac/alternativa/red": NacionalAlternativaRedFun,
    "nac/alternativa/blue": NacionalAlternativaBlueFun,
    "pen/titular/red": PenarolTitularRedFun,
    "pen/titular/blue": PenarolTitularBlueFun,
    "qui/titular/red": QuilmesTitularRedFun,
    "qui/titular/blue": QuilmesTitularBlueFun,
    "qui/alternativa/red": QuilmesAlternativaRedFun,
    "qui/alternativa/blue": QuilmesAlternativaBlueFun,
    "nch/titular/red": ChicagoTitularRedFun,
    "nch/titular/blue": ChicagoTitularBlueFun,
    "mor/titular/red": MoronTitularRedFun,
    "mor/titular/blue": MoronTitularBlueFun,
    "uni/titular/red": UnionTitularRedFun,
    "uni/titular/blue": UnionTitularBlueFun,
    "uni/alternativa/red": UnionAlternativaRedFun,
    "uni/alternativa/blue": UnionAlternativaBlueFun,
    "csf/titular/red": ColonTitularRedFun,
    "csf/titular/blue": ColonTitularBlueFun,
    "csf/alternativa/red": ColonAlternativaRedFun,
    "csf/alternativa/blue": ColonAlternativaBlueFun,
    "csf/tercera/red": ColonTerceraRedFun,
    "csf/tercera/blue": ColonTerceraBlueFun,
    "arse/titular/red": SarandiTitularRedFun,
    "arse/titular/blue": SarandiTitularBlueFun,
    "arse/alternativa/red": SarandiAlternativaRedFun,
    "arse/alternativa/blue": SarandiAlternativaBlueFun,
    "arse/tercera/red": SarandiTerceraRedFun,
    "arse/tercera/blue": SarandiTerceraBlueFun,
    "doc/titular/red": DocksudTitularRedFun,
    "doc/titular/blue": DocksudTitularBlueFun,
    "col/titular/red": ColombiaTitularRedFun,
    "col/titular/blue": ColombiaTitularBlueFun,
    "col/alternativa/red": ColombiaAlternativaRedFun,
    "col/alternativa/blue": ColombiaAlternativaBlueFun,
    "col/bandera/red": ColombiaBanderaRedFun,
    "col/bandera/blue": ColombiaBanderaBlueFun,
    "per/titular/red": PeruTitularRedFun,
    "per/titular/blue": PeruTitularBlueFun,
    "qat/titular/red": QatarTitularRedFun,
    "qat/titular/blue": QatarTitularBlueFun,
    "pgy/titular/red": ParaguayTitularRedFun,
    "pgy/titular/blue": ParaguayTitularBlueFun,
    "pgy/alternativa/red": ParaguayAlternativaRedFun,
    "pgy/alternativa/blue": ParaguayAlternativaBlueFun,
    "ven/titular/red": VenezuelaTitularRedFun,
    "ven/titular/blue": VenezuelaTitularBlueFun,
    "ven/alternativa/red": VenezuelaAlternativaRedFun,
    "ven/alternativa/blue": VenezuelaAlternativaBlueFun,
    "wba/titular/red": WestBromTitularRedFun,
    "wba/titular/blue": WestBromTitularBlueFun,
    "avl/titular/red": AstonVillaTitularRedFun,
    "avl/titular/blue": AstonVillaTitularBlueFun,
    "ful/titular/red": FulhamTitularRedFun,
    "ful/titular/blue": FulhamTitularBlueFun,
    "ful/alternativa/red": FulhamAlternativaRedFun,
    "ful/alternativa/blue": FulhamAlternativaBlueFun,
    "ful/clasica/red": FulhamClasicaRedFun,
    "ful/clasica/blue": FulhamClasicaBlueFun,
    "lei/titular/red": LeicesterTitularRedFun,
    "lei/titular/blue": LeicesterTitularBlueFun,
    "dan/titular/red": DanubioTitularRedFun,
    "dan/titular/blue": DanubioTitularBlueFun,
    "ram/titular/red": RamplaJrsTitularRedFun,
    "ram/titular/blue": RamplaJrsTitularBlueFun,
    "sch/titular/red": SacachispasTitularRedFun,
    "sch/titular/blue": SacachispasTitularBlueFun,
    "hol/titular/red": HolandaTitularRedFun,
    "hol/titular/blue": HolandaTitularBlueFun,
    "hol/bandera/red": HolandaBanderaRedFun,
    "hol/bandera/blue": HolandaBanderaBlueFun,
    "hol/alternativa/red": HolandaAlternativaRedFun,
    "hol/alternativa/blue": HolandaAlternativaBlueFun,
    "hol/retro/red": HolandaRetroRedFun,
    "hol/retro/blue": HolandaRetroBlueFun,
    "bol/titular/red": BoliviaTitularRedFun,
    "bol/titular/blue": BoliviaTitularBlueFun,
    "ita/titular/red": ItaliaTitularRedFun,
    "ita/titular/blue": ItaliaTitularBlueFun,
    "ita/alternativa/red": ItaliaAlternativaRedFun,
    "ita/alternativa/blue": ItaliaAlternativaBlueFun,
    "ita/bandera/red": ItaliaBanderaRedFun,
    "ita/bandera/blue": ItaliaBanderaBlueFun,
    "ita/retro/red": ItaliaRetroRedFun,
    "ita/retro/blue": ItaliaRetroBlueFun,
    "ing/titular/red": InglaterraTitularRedFun,
    "ing/titular/blue": InglaterraTitularBlueFun,
    "ing/alternativa/red": InglaterraAlternativaRedFun,
    "ing/alternativa/blue": InglaterraAlternativaBlueFun,
    "aja/titular/red": AjaxTitularRedFun,
    "aja/titular/blue": AjaxTitularBlueFun,
    "aja/alternativa/red": AjaxAlternativaRedFun,
    "aja/alternativa/blue": AjaxAlternativaBlueFun,
    "aja/alternativa/red/2018": AjaxAlternativa2018RedFun,
    "aja/alternativa/blue/2018": AjaxAlternativa2018BlueFun,
    "psv/titular/red": PSVTitularRedFun,
    "psv/titular/blue": PSVTitularBlueFun,
    "fey/titular/red": FEYTitularRedFun,
    "fey/titular/blue": FEYTitularBlueFun,
    "psg/titular/red": PSGTitularRedFun,
    "psg/titular/blue": PSGTitularBlueFun,
    "psg/alternativa/red": PSGAlternativaRedFun,
    "psg/alternativa/blue": PSGAlternativaBlueFun,
    "psg/tercera/red": PSGTerceraRedFun,
    "psg/tercera/blue": PSGTerceraBlueFun,
    "psg/entrenamiento/red": PSGEntrenamientoRedFun,
    "psg/entrenamiento/blue": PSGEntrenamientoBlueFun,
    "ccs/titular/red": CentralCordobaSdETitularRedFun,
    "ccs/titular/blue": CentralCordobaSdETitularBlueFun,
    "ccs/alternativa/red": CentralCordobaSdEAlternativaRedFun,
    "ccs/alternativa/blue": CentralCordobaSdEAlternativaBlueFun,
    "ccs/tercera/red": CentralCordobaSdETerceraRedFun,
    "ccs/tercera/blue": CentralCordobaSdETerceraBlueFun,
    "rie/titular/red": RiestraTitularRedFun,
    "rie/titular/blue": RiestraTitularBlueFun,
    "rie/alternativa/red": RiestraAlternativaRedFun,
    "rie/alternativa/blue": RiestraAlternativaBlueFun,
    "om/titular/red": OlympiqueMarsellaTitularRedFun,
    "om/titular/blue": OlympiqueMarsellaTitularBlueFun,
    "om/alternativa/red": OlympiqueMarsellaAlternativaRedFun,
    "om/alternativa/blue": OlympiqueMarsellaAlternativaBlueFun,
    "ogc/titular/red": OGCNiceTitularRedFun,
    "ogc/titular/blue": OGCNiceTitularBlueFun,
    "rom/titular/red": ASRomaTitularRedFun,
    "rom/titular/blue": ASRomaTitularBlueFun,
    "rom/alternativa/red": ASRomaAlternativaRedFun,
    "rom/alternativa/blue": ASRomaAlternativaBlueFun,
    "rom/tercera/red": ASRomaTerceraRedFun,
    "rom/tercera/blue": ASRomaTerceraBlueFun,
    "fio/titular/red": FiorentinaTitularRedFun,
    "fio/titular/blue": FiorentinaTitularBlueFun,
    "laz/titular/red": LazioTitularRedFun,
    "laz/titular/blue": LazioTitularBlueFun,
    "laz/alternativa/red": LazioAlternativaRedFun,
    "laz/alternativa/blue": LazioAlternativaBlueFun,
    "laz/tercera/red": LazioTerceraRedFun,
    "laz/tercera/blue": LazioTerceraBlueFun,
    "smsj/titular/red": SMSanJuanTitularRedFun,
    "smsj/titular/blue": SMSanJuanTitularBlueFun,
    "smsj/alternativa/red": SMSanJuanAlternativaRedFun,
    "smsj/alternativa/blue": SMSanJuanAlternativaBlueFun,
    "god/titular/red": GodoyCruzTitularRedFun,
    "god/titular/blue": GodoyCruzTitularBlueFun,
    "god/alternativa/red": GodoyCruzAlternativaRedFun,
    "god/alternativa/blue": GodoyCruzAlternativaBlueFun,
    "god/tercera/red": GodoyCruzTerceraRedFun,
    "god/tercera/blue": GodoyCruzTerceraBlueFun,
    "vel/titular/red": VelezTitularRedFun,
    "vel/titular/blue": VelezTitularBlueFun,
    "san/titular/red": SantosTitularRedFun,
    "san/titular/blue": SantosTitularBlueFun,
    "san/alternativa/red": SantosAlternativaRedFun,
    "san/alternativa/blue": SantosAlternativaBlueFun,
    "san/tercera/red": SantosTerceraRedFun,
    "san/tercera/blue": SantosTerceraBlueFun,
    "fla/titular/red": FlamengoTitularRedFun,
    "fla/titular/blue": FlamengoTitularBlueFun,
    "fla/alternativa/red": FlamengoAlternativaRedFun,
    "fla/alternativa/blue": FlamengoAlternativaBlueFun,
    "fla/tercera/red": FlamengoTerceraRedFun,
    "fla/tercera/blue": FlamengoTerceraBlueFun,
    "fla/titular/red/2018": FlamengoTitular2018RedFun,
    "fla/titular/blue/2018": FlamengoTitular2018BlueFun,
    "fla/alternativa/red/2018": FlamengoAlternativa2018RedFun,
    "fla/alternativa/blue/2018": FlamengoAlternativa2018BlueFun,
    "fla/tercera/red/2018": FlamengoTercera2018RedFun,
    "fla/tercera/blue/2018": FlamengoTercera2018BlueFun,
    "sao/titular/red": SaoPauloTitularRedFun,
    "sao/titular/blue": SaoPauloTitularBlueFun,
    "sao/alternativa/red": SaoPauloAlternativaRedFun,
    "sao/alternativa/blue": SaoPauloAlternativaBlueFun,
    "cor/titular/red": CorinthiansTitularRedFun,
    "cor/titular/blue": CorinthiansTitularBlueFun,
    "cor/alternativa/red": CorinthiansAlternativaRedFun,
    "cor/alternativa/blue": CorinthiansAlternativaBlueFun,
    "cam/titular/red": MineiroTitularRedFun,
    "cam/titular/blue": MineiroTitularBlueFun,
    "cam/alternativa/red": MineiroAlternativaRedFun,
    "cam/alternativa/blue": MineiroAlternativaBlueFun,
    "sci/titular/red": SCInternacionalTitularRedFun,
    "sci/titular/blue": SCInternacionalTitularBlueFun,
    "sci/alternativa/red": SCInternacionalAlternativaRedFun,
    "sci/alternativa/blue": SCInternacionalAlternativaBlueFun,
    "vas/titular/red": VascoDaGamaTitularRedFun,
    "vas/titular/blue": VascoDaGamaTitularBlueFun,
    "vas/alternativa/red": VascoDaGamaAlternativaRedFun,
    "vas/alternativa/blue": VascoDaGamaAlternativaBlueFun,
    "bot/titular/red": BotafogoTitularRedFun,
    "bot/titular/blue": BotafogoTitularBlueFun,
    "bot/alternativa/red": BotafogoAlternativaRedFun,
    "bot/alternativa/blue": BotafogoAlternativaBlueFun,
    "flu/titular/red": FluminenseTitularRedFun,
    "flu/titular/blue": FluminenseTitularBlueFun,
    "atn/titular/red": AtlNacionalTitularRedFun,
    "atn/titular/blue": AtlNacionalTitularBlueFun,
    "atn/alternativa/red": AtlNacionalAlternativaRedFun,
    "atn/alternativa/blue": AtlNacionalAlternativaBlueFun,
    "mil/titular/red": MillonariosTitularRedFun,
    "mil/titular/blue": MillonariosTitularBlueFun,
    "mil/alternativa/red": MillonariosAlternativaRedFun,
    "mil/alternativa/blue": MillonariosAlternativaBlueFun,
    "ame/titular/red": AmericaDeCaliTitularRedFun,
    "ame/titular/blue": AmericaDeCaliTitularBlueFun,
    "ame/alternativa/red": AmericaDeCaliAlternativaRedFun,
    "ame/alternativa/blue": AmericaDeCaliAlternativaBlueFun,
    "sfe/titular/red": SantaFeTitularRedFun,
    "sfe/titular/blue": SantaFeTitularBlueFun,
    "sfe/alternativa/red": SantaFeAlternativaRedFun,
    "sfe/alternativa/blue": SantaFeAlternativaBlueFun,
    "cal/titular/red": DeportivoCaliTitularRedFun,
    "cal/titular/blue": DeportivoCaliTitularBlueFun,
    "cal/alternativa/red": DeportivoCaliAlternativaRedFun,
    "cal/alternativa/blue": DeportivoCaliAlternativaBlueFun,
    "onc/titular/red": OnceCaldasTitularRedFun,
    "onc/titular/blue": OnceCaldasTitularBlueFun,
    "onc/alternativa/red": OnceCaldasAlternativaRedFun,
    "onc/alternativa/blue": OnceCaldasAlternativaBlueFun,
    "onc/tercera/red": OnceCaldasTerceraRedFun,
    "onc/tercera/blue": OnceCaldasTerceraBlueFun,
    "ccp/titular/red": CerroTitularRedFun,
    "ccp/titular/blue": CerroTitularBlueFun,
    "ccp/alternativa/red": CerroAlternativaRedFun,
    "ccp/alternativa/blue": CerroAlternativaBlueFun,
    "oli/titular/red": OlimpiaTitularRedFun,
    "oli/titular/blue": OlimpiaTitularBlueFun,
    "oli/alternativa/red": OlimpiaAlternativaRedFun,
    "oli/alternativa/blue": OlimpiaAlternativaBlueFun,
    "gua/titular/red": GuaraniTitularRedFun,
    "gua/titular/blue": GuaraniTitularBlueFun,
    "gua/alternativa/red": GuaraniAlternativaRedFun,
    "gua/alternativa/blue": GuaraniAlternativaBlueFun,
    "lib/titular/red": LibertadTitularRedFun,
    "lib/titular/blue": LibertadTitularBlueFun,
    "lib/alternativa/red": LibertadAlternativaRedFun,
    "lib/alternativa/blue": LibertadAlternativaBlueFun,
    "sou/titular/red": SouthamptonTitularRedFun,
    "sou/titular/blue": SouthamptonTitularBlueFun,
    "sou/alternativa/red": SouthamptonAlternativaRedFun,
    "sou/alternativa/blue": SouthamptonAlternativaBlueFun,
    "wat/titular/red": WatfordTitularRedFun,
    "wat/titular/blue": WatfordTitularBlueFun,
    "wil/titular/red": WillemIITitularRedFun,
    "wil/titular/blue": WillemIITitularBlueFun,
    "wil/alternativa/red": WillemIIAlternativaRedFun,
    "wil/alternativa/blue": WillemIIAlternativaBlueFun,
    "wil/tercera/red": WillemIITerceraRedFun,
    "wil/tercera/blue": WillemIITerceraBlueFun,
    "alv/titular/red": AlvaradoTitularRedFun,
    "alv/titular/blue": AlvaradoTitularBlueFun,
    "alv/alternativa/red": AlvaradoAlternativaRedFun,
    "alv/alternativa/blue": AlvaradoAlternativaBlueFun,
    "agr/titular/red": AgropecuarioTitularRedFun,
    "agr/titular/blue": AgropecuarioTitularBlueFun,
    "agr/alternativa/red": AgropecuarioAlternativaRedFun,
    "agr/alternativa/blue": AgropecuarioAlternativaBlueFun,
    "riu/titular/red": RiverURUTitularRedFun,
    "riu/titular/blue": RiverURUTitularBlueFun,
    "riu/alternativa/red": RiverURUAlternativaRedFun,
    "riu/alternativa/blue": RiverURUAlternativaBlueFun,
    "gs/titular/red": GalatasarayTitularRedFun,
    "gs/titular/blue": GalatasarayTitularBlueFun,
    "gs/alternativa/red": GalatasarayAlternativaRedFun,
    "gs/alternativa/blue": GalatasarayAlternativaBlueFun,
    "gs/tercera/red": GalatasarayTerceraRedFun,
    "gs/tercera/blue": GalatasarayTerceraBlueFun,
    "fb/titular/red": FenerbahceTitularRedFun,
    "fb/titular/blue": FenerbahceTitularBlueFun,
    "fb/alternativa/red": FenerbahceAlternativaRedFun,
    "fb/alternativa/blue": FenerbahceAlternativaBlueFun,
    "bjk/titular/red": BesiktasTitularRedFun,
    "bjk/titular/blue": BesiktasTitularBlueFun,
    "bjk/alternativa/red": BesiktasAlternativaRedFun,
    "bjk/alternativa/blue": BesiktasAlternativaBlueFun,
    "amc/titular/red": AmericaMXTitularRedFun,
    "amc/titular/blue": AmericaMXTitularBlueFun,
    "amc/alternativa/red": AmericaMXAlternativaRedFun,
    "amc/alternativa/blue": AmericaMXAlternativaBlueFun,
    "cruz/titular/red": CruzAzulTitularRedFun,
    "cruz/titular/blue": CruzAzulTitularBlueFun,
    "cruz/alternativa/red": CruzAzulAlternativaRedFun,
    "cruz/alternativa/blue": CruzAzulAlternativaBlueFun,
    "mty/titular/red": MonterreyTitularRedFun,
    "mty/titular/blue": MonterreyTitularBlueFun,
    "chv/titular/red": ChivasTitularRedFun,
    "chv/titular/blue": ChivasTitularBlueFun,
    "tgs/titular/red": TigresTitularRedFun,
    "tgs/titular/blue": TigresTitularBlueFun,
    "ldu/titular/red": LigaDeQuitoTitularRedFun,
    "ldu/titular/blue": LigaDeQuitoTitularBlueFun,
    "ldu/alternativa/red": LigaDeQuitoAlternativaRedFun,
    "ldu/alternativa/blue": LigaDeQuitoAlternativaBlueFun,
    "ldu/tercera/red": LigaDeQuitoTerceraRedFun,
    "ldu/tercera/blue": LigaDeQuitoTerceraBlueFun,
    "bsc/titular/red": BarcelonaSCTitularRedFun,
    "bsc/titular/blue": BarcelonaSCTitularBlueFun,
    "bsc/alternativa/red": BarcelonaSCAlternativaRedFun,
    "bsc/alternativa/blue": BarcelonaSCAlternativaBlueFun,
    "eme/titular/red": EmelecTitularRedFun,
    "eme/titular/blue": EmelecTitularBlueFun,
    "eme/alternativa/red": EmelecAlternativaRedFun,
    "eme/alternativa/blue": EmelecAlternativaBlueFun,
    "idv/titular/red": IndependienteDelValleTitularRedFun,
    "idv/titular/blue": IndependienteDelValleTitularBlueFun,
    "idv/alternativa/red": IndependienteDelValleAlternativaRedFun,
    "idv/alternativa/blue": IndependienteDelValleAlternativaBlueFun,
    "ol/titular/red": OlympiqueLyonTitularRedFun,
    "ol/titular/blue": OlympiqueLyonTitularBlueFun,
    "ol/alternativa/red": OlympiqueLyonAlternativaRedFun,
    "ol/alternativa/blue": OlympiqueLyonAlternativaBlueFun,
    "stel/titular/red": SanTelmoTitularRedFun,
    "stel/titular/blue": SanTelmoTitularBlueFun,
    "stel/alternativa/red": SanTelmoAlternativaRedFun,
    "stel/alternativa/blue": SanTelmoAlternativaBlueFun,
    "adq/titular/red": ArgentinoDeQuilmesTitularRedFun,
    "adq/titular/blue": ArgentinoDeQuilmesTitularBlueFun,
    "adq/alternativa/red": ArgentinoDeQuilmesAlternativaRedFun,
    "adq/alternativa/blue": ArgentinoDeQuilmesAlternativaBlueFun,
    "mer/titular/red": DeportivoMerloTitularRedFun,
    "mer/titular/blue": DeportivoMerloTitularBlueFun,
    "mer/alternativa/red": DeportivoMerloAlternativaRedFun,
    "mer/alternativa/blue": DeportivoMerloAlternativaBlueFun,
    "mer/tercera/red": DeportivoMerloTerceraRedFun,
    "mer/tercera/blue": DeportivoMerloTerceraBlueFun,
    "val/titular/red": ValenciaTitularRedFun,
    "val/titular/blue": ValenciaTitularBlueFun,
    "val/alternativa/red": ValenciaAlternativaRedFun,
    "val/alternativa/blue": ValenciaAlternativaBlueFun,
    "val/tercera/red": ValenciaTerceraRedFun,
    "val/tercera/blue": ValenciaTerceraBlueFun,
    "cry/titular/red": CrystalPalaceTitularRedFun,
    "cry/titular/blue": CrystalPalaceTitularBlueFun,
    "cry/alternativa/red": CrystalPalaceAlternativaRedFun,
    "cry/alternativa/blue": CrystalPalaceAlternativaBlueFun,
    "cry/tercera/red": CrystalPalaceTerceraRedFun,
    "cry/tercera/blue": CrystalPalaceTerceraBlueFun,
    "bet/titular/red": BetisTitularRedFun,
    "bet/titular/blue": BetisTitularBlueFun,
    "cja/titular/red": JuventudAntonianaTitularRedFun,
    "cja/titular/blue": JuventudAntonianaTitularBlueFun,
    "cja/alternativa/red": JuventudAntonianaAlternativaRedFun,
    "cja/alternativa/blue": JuventudAntonianaAlternativaBlueFun,
    "cja/tercera/red": JuventudAntonianaTerceraRedFun,
    "cja/tercera/blue": JuventudAntonianaTerceraBlueFun,
    "gyt/titular/red": GimnasiaYTiroTitularRedFun,
    "gyt/titular/blue": GimnasiaYTiroTitularBlueFun,
    "gyt/alternativa/red": GimnasiaYTiroAlternativaRedFun,
    "gyt/alternativa/blue": GimnasiaYTiroAlternativaBlueFun,
    "gyt/tercera/red": GimnasiaYTiroTerceraRedFun,
    "gyt/tercera/blue": GimnasiaYTiroTerceraBlueFun,
    "ray/titular/red": RayoVallecanoTitularRedFun,
    "ray/titular/blue": RayoVallecanoTitularBlueFun,
    "ray/alternativa/red": RayoVallecanoAlternativaRedFun,
    "ray/alternativa/blue": RayoVallecanoAlternativaBlueFun,
    "ray/tercera/red": RayoVallecanoTerceraRedFun,
    "ray/tercera/blue": RayoVallecanoTerceraBlueFun,
    "lev/titular/red": LevanteTitularRedFun,
    "lev/titular/blue": LevanteTitularBlueFun,
    "lev/alternativa/red": LevanteAlternativaRedFun,
    "lev/alternativa/blue": LevanteAlternativaBlueFun,
    "lev/tercera/red": LevanteTerceraRedFun,
    "lev/tercera/blue": LevanteTerceraBlueFun,
    "pat/titular/red": PatronatoTitularRedFun,
    "pat/titular/blue": PatronatoTitularBlueFun,
    "pat/alternativa/red": PatronatoAlternativaRedFun,
    "pat/alternativa/blue": PatronatoAlternativaBlueFun,
    "get/titular/red": GetafeTitularRedFun,
    "get/titular/blue": GetafeTitularBlueFun,
    "get/alternativa/red": GetafeAlternativaRedFun,
    "get/alternativa/blue": GetafeAlternativaBlueFun,
    "zen/titular/red": ZenitTitularRedFun,
    "zen/titular/blue": ZenitTitularBlueFun,
    "zen/alternativa/red": ZenitAlternativaRedFun,
    "zen/alternativa/blue": ZenitAlternativaBlueFun,
    "csk/titular/red": CSKAMoscuTitularRedFun,
    "csk/titular/blue": CSKAMoscuTitularBlueFun,
    "csk/alternativa/red": CSKAMoscuAlternativaRedFun,
    "csk/alternativa/blue": CSKAMoscuAlternativaBlueFun,
    "csk/tercera/red": CSKAMoscuTerceraRedFun,
    "csk/tercera/blue": CSKAMoscuTerceraBlueFun,
    "lok/titular/red": LokomotivTitularRedFun,
    "lok/titular/blue": LokomotivTitularBlueFun,
    "lok/alternativa/red": LokomotivAlternativaRedFun,
    "lok/alternativa/blue": LokomotivAlternativaBlueFun,
    "lok/tercera/red": LokomotivTerceraRedFun,
    "lok/tercera/blue": LokomotivTerceraBlueFun,
    "spm/titular/red": SpartakTitularRedFun,
    "spm/titular/blue": SpartakTitularBlueFun,
    "spm/alternativa/red": SpartakAlternativaRedFun,
    "spm/alternativa/blue": SpartakAlternativaBlueFun,
    "din/titular/red": DynamoMoscowTitularRedFun,
    "din/titular/blue": DynamoMoscowTitularBlueFun,
    "din/alternativa/red": DynamoMoscowAlternativaRedFun,
    "din/alternativa/blue": DynamoMoscowAlternativaBlueFun,
    "dyk/titular/red": DynamoKievTitularRedFun,
    "dyk/titular/blue": DynamoKievTitularBlueFun,
    "dyk/alternativa/red": DynamoKievAlternativaRedFun,
    "dyk/alternativa/blue": DynamoKievAlternativaBlueFun,
    "sha/titular/red": ShakhtarTitularRedFun,
    "sha/titular/blue": ShakhtarTitularBlueFun,
    "sha/alternativa/red": ShakhtarAlternativaRedFun,
    "sha/alternativa/blue": ShakhtarAlternativaBlueFun,
    "jap/titular/red": JaponTitularRedFun,
    "jap/titular/blue": JaponTitularBlueFun,
    "jap/alternativa/red": JaponAlternativaRedFun,
    "jap/alternativa/blue": JaponAlternativaBlueFun,
    "nze/titular/red": NuevaZelandaTitularRedFun,
    "nze/titular/blue": NuevaZelandaTitularBlueFun,
    "nze/alternativa/red": NuevaZelandaAlternativaRedFun,
    "nze/alternativa/blue": NuevaZelandaAlternativaBlueFun,
    "csu/titular/red": CoreaDelSurTitularRedFun,
    "csu/titular/blue": CoreaDelSurTitularBlueFun,
    "csu/alternativa/red": CoreaDelSurAlternativaRedFun,
    "csu/alternativa/blue": CoreaDelSurAlternativaBlueFun,
    "aut/titular/red": AustriaTitularRedFun,
    "aut/titular/blue": AustriaTitularBlueFun,
    "aut/alternativa/red": AustriaAlternativaRedFun,
    "aut/alternativa/blue": AustriaAlternativaBlueFun,
    "aut/bandera/red": AustriaBanderaRedFun,
    "aut/bandera/blue": AustriaBanderaBlueFun,
    "cno/titular/red": CoreaDelNorteTitularRedFun,
    "cno/titular/blue": CoreaDelNorteTitularBlueFun,
    "cno/alternativa/red": CoreaDelNorteAlternativaRedFun,
    "cno/alternativa/blue": CoreaDelNorteAlternativaBlueFun,
    "cno/bandera/red": CoreaDelNorteBanderaRedFun,
    "cno/bandera/blue": CoreaDelNorteBanderaBlueFun,
    "la/titular/red": LAGalaxyTitularRedFun,
    "la/titular/blue": LAGalaxyTitularBlueFun,
    "la/alternativa/red": LAGalaxyAlternativaRedFun,
    "la/alternativa/blue": LAGalaxyAlternativaBlueFun,
    "lafc/titular/red": LosAngelesFCTitularRedFun,
    "lafc/titular/blue": LosAngelesFCTitularBlueFun,
    "lafc/alternativa/red": LosAngelesFCAlternativaRedFun,
    "lafc/alternativa/blue": LosAngelesFCAlternativaBlueFun,
    "ptim/titular/red": PortlandTimbersTitularRedFun,
    "ptim/titular/blue": PortlandTimbersTitularBlueFun,
    "ptim/alternativa/red": PortlandTimbersAlternativaRedFun,
    "ptim/alternativa/blue": PortlandTimbersAlternativaBlueFun,
    "sea/titular/red": SeattleSoundersTitularRedFun,
    "sea/titular/blue": SeattleSoundersTitularBlueFun,
    "sea/alternativa/red": SeattleSoundersAlternativaRedFun,
    "sea/alternativa/blue": SeattleSoundersAlternativaBlueFun,
    "nyrb/titular/red": NewYorkRedBullTitularRedFun,
    "nyrb/titular/blue": NewYorkRedBullTitularBlueFun,
    "nyrb/alternativa/red": NewYorkRedBullAlternativaRedFun,
    "nyrb/alternativa/blue": NewYorkRedBullAlternativaBlueFun,
    "nyc/titular/red": NewYorkCityTitularRedFun,
    "nyc/titular/blue": NewYorkCityTitularBlueFun,
    "nyc/alternativa/red": NewYorkCityAlternativaRedFun,
    "nyc/alternativa/blue": NewYorkCityAlternativaBlueFun,
    "tofc/titular/red": TorontoFCTitularRedFun,
    "tofc/titular/blue": TorontoFCTitularBlueFun,
    "tofc/alternativa/red": TorontoFCAlternativaRedFun,
    "tofc/alternativa/blue": TorontoFCAlternativaBlueFun,
    "atlu/titular/red": AtlantaUnitedTitularRedFun,
    "atlu/titular/blue": AtlantaUnitedTitularBlueFun,
    "atlu/alternativa/red": AtlantaUnitedAlternativaRedFun,
    "atlu/alternativa/blue": AtlantaUnitedAlternativaBlueFun,
    "blv/titular/red": BolivarTitularRedFun,
    "blv/titular/blue": BolivarTitularBlueFun,
    "blv/alternativa/red": BolivarAlternativaRedFun,
    "blv/alternativa/blue": BolivarAlternativaBlueFun,
    "stg/titular/red": StrongestTitularRedFun,
    "stg/titular/blue": StrongestTitularBlueFun,
    "stg/alternativa/red": StrongestAlternativaRedFun,
    "stg/alternativa/blue": StrongestAlternativaBlueFun,
    "wtm/titular/red": WilstermannTitularRedFun,
    "wtm/titular/blue": WilstermannTitularBlueFun,
    "wtm/alternativa/red": WilstermannAlternativaRedFun,
    "wtm/alternativa/blue": WilstermannAlternativaBlueFun,
    "cco/titular/red": ColoColoTitularRedFun,
    "cco/titular/blue": ColoColoTitularBlueFun,
    "cco/alternativa/red": ColoColoAlternativaRedFun,
    "cco/alternativa/blue": ColoColoAlternativaBlueFun,
    "udc/titular/red": UdeChileTitularRedFun,
    "udc/titular/blue": UdeChileTitularBlueFun,
    "udc/alternativa/red": UdeChileAlternativaRedFun,
    "udc/alternativa/blue": UdeChileAlternativaBlueFun,
    "eve/titular/red": EvertonFCTitularRedFun,
    "eve/titular/blue": EvertonFCTitularBlueFun,
    "eve/alternativa/red": EvertonFCAlternativaRedFun,
    "eve/alternativa/blue": EvertonFCAlternativaBlueFun,
    "asm/titular/red": ASMonacoTitularRedFun,
    "asm/titular/blue": ASMonacoTitularBlueFun,
    "asm/alternativa/red": ASMonacoAlternativaRedFun,
    "asm/alternativa/blue": ASMonacoAlternativaBlueFun,
    "asm/tercera/red": ASMonacoTerceraRedFun,
    "asm/tercera/blue": ASMonacoTerceraBlueFun,
    "ata/titular/red": AtalantaTitularRedFun,
    "ata/titular/blue": AtalantaTitularBlueFun,
    "ata/alternativa/red": AtalantaAlternativaRedFun,
    "ata/alternativa/blue": AtalantaAlternativaBlueFun,
    "ata/tercera/red": AtalantaTerceraRedFun,
    "ata/tercera/blue": AtalantaTerceraBlueFun,
    "bas/titular/red": FCBaselTitularRedFun,
    "bas/titular/blue": FCBaselTitularBlueFun,
    "bas/alternativa/red": FCBaselAlternativaRedFun,
    "bas/alternativa/blue": FCBaselAlternativaBlueFun,
    "bas/tercera/red": FCBaselTerceraRedFun,
    "bas/tercera/blue": FCBaselTerceraBlueFun,
    "bas/clasica/red": FCBaselClasicaRedFun,
    "bas/clasica/blue": FCBaselClasicaBlueFun,
    "uca/titular/red": UCatolicaTitularRedFun,
    "uca/titular/blue": UCatolicaTitularBlueFun,
    "uca/alternativa/red": UCatolicaAlternativaRedFun,
    "uca/alternativa/blue": UCatolicaAlternativaBlueFun,
    "uca/tercera/red": UCatolicaTerceraRedFun,
    "uca/tercera/blue": UCatolicaTerceraBlueFun,
    "cob/titular/red": CobreloaTitularRedFun,
    "cob/titular/blue": CobreloaTitularBlueFun,
    "cob/alternativa/red": CobreloaAlternativaRedFun,
    "cob/alternativa/blue": CobreloaAlternativaBlueFun,
    "cob/tercera/red": CobreloaTerceraRedFun,
    "cob/tercera/blue": CobreloaTerceraBlueFun,
    "cdp/titular/red": PalestinoTitularRedFun,
    "cdp/titular/blue": PalestinoTitularBlueFun,
    "cdp/alternativa/red": PalestinoAlternativaRedFun,
    "cdp/alternativa/blue": PalestinoAlternativaBlueFun,
    "mel/titular/red": MelgarTitularRedFun,
    "mel/titular/blue": MelgarTitularBlueFun,
    "mel/alternativa/red": MelgarAlternativaRedFun,
    "mel/alternativa/blue": MelgarAlternativaBlueFun,
    "unv/titular/red": UniversitarioTitularRedFun,
    "unv/titular/blue": UniversitarioTitularBlueFun,
    "unv/alternativa/red": UniversitarioAlternativaRedFun,
    "unv/alternativa/blue": UniversitarioAlternativaBlueFun,
    "ali/titular/red": AlianzaLimaTitularRedFun,
    "ali/titular/blue": AlianzaLimaTitularBlueFun,
    "ali/alternativa/red": AlianzaLimaAlternativaRedFun,
    "ali/alternativa/blue": AlianzaLimaAlternativaBlueFun,
    "cri/titular/red": SportingCristalTitularRedFun,
    "cri/titular/blue": SportingCristalTitularBlueFun,
    "cri/alternativa/red": SportingCristalAlternativaRedFun,
    "cri/alternativa/blue": SportingCristalAlternativaBlueFun,
    "cri/tercera/red": SportingCristalTerceraRedFun,
    "cri/tercera/blue": SportingCristalTerceraBlueFun,
    "rus/titular/red": RusiaTitularRedFun,
    "rus/titular/blue": RusiaTitularBlueFun,
    "rus/alternativa/red": RusiaAlternativaRedFun,
    "rus/alternativa/blue": RusiaAlternativaBlueFun,
    "rus/bandera/red": RusiaBanderaRedFun,
    "rus/bandera/blue": RusiaBanderaBlueFun,
    "usa/titular/red": EstadosUnidosTitularRedFun,
    "usa/titular/blue": EstadosUnidosTitularBlueFun,
    "usa/alternativa/red": EstadosUnidosAlternativaRedFun,
    "usa/alternativa/blue": EstadosUnidosAlternativaBlueFun,
    "usa/tercera/red": EstadosUnidosTerceraRedFun,
    "usa/tercera/blue": EstadosUnidosTerceraBlueFun,
    "usa/clasica/red": EstadosUnidosClasicaRedFun,
    "usa/clasica/blue": EstadosUnidosClasicaBlueFun,
    "alm/titular/red": AlmagroTitularRedFun,
    "alm/titular/blue": AlmagroTitularBlueFun,
    "alm/alternativa/red": AlmagroAlternativaRedFun,
    "alm/alternativa/blue": AlmagroAlternativaBlueFun,
    "nga/titular/red": NigeriaTitularRedFun,
    "nga/titular/blue": NigeriaTitularBlueFun,
    "nga/alternativa/red": NigeriaAlternativaRedFun,
    "nga/alternativa/blue": NigeriaAlternativaBlueFun,
    "ecu/titular/red": EcuadorTitularRedFun,
    "ecu/titular/blue": EcuadorTitularBlueFun,
    "ecu/alternativa/red": EcuadorAlternativaRedFun,
    "ecu/alternativa/blue": EcuadorAlternativaBlueFun,
    "cadu/titular/red": CADUTitularRedFun,
    "cadu/titular/blue": CADUTitularBlueFun,
    "cadu/alternativa/red": CADUAlternativaRedFun,
    "cadu/alternativa/blue": CADUAlternativaBlueFun,
    "alu/titular/red": AlumniTitularRedFun,
    "alu/titular/blue": AlumniTitularBlueFun,
    "alu/alternativa/red": AlumniAlternativaRedFun,
    "alu/alternativa/blue": AlumniAlternativaBlueFun,
    "urss/titular/red": URSSTitularRedFun,
    "urss/titular/blue": URSSTitularBlueFun,
    "urss/alternativa/red": URSSAlternativaRedFun,
    "urss/alternativa/blue": URSSAlternativaBlueFun,
    "yug/titular/red/1984": YugoslaviaTitular1984RedFun,
    "yug/titular/blue/1984": YugoslaviaTitular1984BlueFun,
    "yug/alternativa/redv": YugoslaviaAlternativa1984RedFun,
    "yug/alternativa/blue/1984": YugoslaviaAlternativa1984BlueFun,
    "yug/titular/red/1990": YugoslaviaTitular1990RedFun,
    "yug/titular/blue/1990": YugoslaviaTitular1990BlueFun,
    "yug/alternativa/red/1990": YugoslaviaAlternativa1990RedFun,
    "yug/alternativa/blue/1990": YugoslaviaAlternativa1990BlueFun,
    "vsc/titular/red": VillaSanCarlosTitularRedFun,
    "vsc/titular/blue": VillaSanCarlosTitularBlueFun,
    "vsc/alternativa/red": VillaSanCarlosAlternativaRedFun,
    "vsc/alternativa/blue": VillaSanCarlosAlternativaBlueFun,
    "loa/titular/red": LomasAthleticTitularRedFun,
    "loa/titular/blue": LomasAthleticTitularBlueFun,
    "loa/escudo/red": LomasAthleticEscudoRedFun,
    "loa/escudo/blue": LomasAthleticEscudoBlueFun,
    "cze/titular/red": ChecoslovaquiaTitularRedFun,
    "cze/titular/blue": ChecoslovaquiaTitularBlueFun,
    "cze/alternativa/red": ChecoslovaquiaAlternativaRedFun,
    "cze/alternativa/blue": ChecoslovaquiaAlternativaBlueFun,
    "fcn/titular/red": NantesTitularRedFun,
    "fcn/titular/blue": NantesTitularBlueFun,
    "fcn/alternativa/red": NantesAlternativaRedFun,
    "fcn/alternativa/blue": NantesAlternativaBlueFun,
    "ste/titular/red": SaintEtienneTitularRedFun,
    "ste/titular/blue": SaintEtienneTitularBlueFun,
    "ste/alternativa/red": SaintEtienneAlternativaRedFun,
    "ste/alternativa/blue": SaintEtienneAlternativaBlueFun,
    "ste/tercera/red": SaintEtienneTerceraRedFun,
    "ste/tercera/blue": SaintEtienneTerceraBlueFun,
    "ren/titular/red": RennesTitularRedFun,
    "ren/titular/blue": RennesTitularBlueFun,
    "ren/alternativa/red": RennesAlternativaRedFun,
    "ren/alternativa/blue": RennesAlternativaBlueFun,
    "ren/tercera/red": RennesTerceraRedFun,
    "ren/tercera/blue": RennesTerceraBlueFun,
    "nyv/titular/red": FCNyvaVinnytsiaTitularRedFun,
    "nyv/titular/blue": FCNyvaVinnytsiaTitularBlueFun,
    "nyv/alternativa/red": FCNyvaVinnytsiaAlternativaRedFun,
    "nyv/alternativa/blue": FCNyvaVinnytsiaAlternativaBlueFun,



    "!swap": swapFun,
    "!futx4": Futsalx4Fun,
    "!registrarme": RegistrarmeFun,
    "!scripts": ScriptsDisponiblesFun,
    "!avatars": AvataresDisponiblesFun,
    "!minirs": MinirsFun,
    "!pensredhandball": PenalesRedHandballFun,
    "!pensbluehandball": PenalesBlueHandballFun,
    "!pensredfutsalx3": PenalesRedFutsalx3Fun,
    "!pensbluefutsalx3": PenalesBlueFutsalx3Fun,
    "!rs": RealSoccerSinRedFun,
    "!rs2": RealSoccerGLH2Fun,
    "!rs3": RealSoccerGLH3Fun,
    "!rs4": RealSoccerGLH4Fun,
    "!futx3": Futsalx3Fun,
    "!big": BigGLHFun,
    "!skate": SkateFun,
    "!bombonera": BomboneraFun,
    "!monumental": MonumentalFun,
    "!futx1": Futsalx1yx2Fun,
    "!handball": HandballFun,
    "!entrenamiento": EntrenamientoFun,
    "!tenis": TenisFun,
    "tenis/ladrillo": TenisLadrilloFun,
    "tenis/cemento": TenisCementoFun,
    "tenis/pasto": TenisPastoFun,
    "!voley": VolleyballFun,
    "!pensblue": PenaltyBlueFun,
    "!pensred": PenaltyRedFun,
    "!rr": resetFun,
    "!clearbans": clearbansFun,
    "!close876": closeFun,
    "!save876": saveStatsFun,  
 
    // Command that need to know what's the message.
    "!stats": statsFun,
    "!addaccount": addaccountFun,
    "!nv" : leaveFun,
    "!bb" : leaveFun,
    "!adormir" : leaveFun,
    "!acomer" : leaveFun,
    "!confirm" : confirmFun,
    "!afk" : afkFun,
    "!afks" : afksFun,
    "!kickafks" : kickafksFun,
    "!resign" : resignFun, 
    "!chatasbot" : chatasbotFun,
    "!mute" : pushMuteFun,
    "!pergunta" : eightballFun,
    "!unmute": unmuteFun,
    "!thepasswordis": setpasswordFun,
    "!clear_password": clearpasswordFun,
/*  "!pm": pmFun,
 */ "!back876": backaccountFun
}
 
initPlayerStats(room.getPlayerList()[0]) // lazy lol, i'll fix it later
initPlayerStats(init);
 
 
 
 
 
room.onGameStart = function(player) {
    lineCrossedPlayers = [{name: "temp", times: 0}];
    lastScores = room.getScores().red + room.getScores().blue;
    timeOutside = 0;
    isTimeAddedShown = false;
    isTimeAddedShowndos = false;
    isTimeAddedShowntres = false;
    isTimeAddedShowncuatro = false;
    isTimeAddedShowncinco = false;
    isTimeAddedShownseis = false;
    isTimeAddedShownquince = false;
    isTimeAddedShownsiete = false;
    tookASize = {};
    lineBallPosition = 0;
    [redTeam,blueTeam] = whichTeam();
    ballCarrying = initBallCarrying(redTeam, blueTeam);
    timeOnHalves = [0,0];
}
 
 
room.onPlayerTeamChange = function(player){
    if (room.getScores() != null){
        if (1 <= player.team <= 2) ballCarrying.set(player.name, [0, player.team]);
    }
    if (player.team !== 0 && afkPlayerIDs.has(player.id))
    {room.setPlayerTeam(player.id, 0)
    room.sendChat("💎 " + player.name + " Ta afk!")}
    if (player.id <= 0){
    room.setPlayerTeam(player.id, 0)}
}

 
var superAdmins2 = ["Beager"]; 
room.onPlayerChat = function(player, message) {spamFilter(player, message);
spammerosFilter(player, message);
    if(filter(message)) return false;
    if (mutedPlayers.includes(player.name)) return false;
    let spacePos = message.search(" ");
    let command = message.substr(0, spacePos !== -1 ? spacePos : message.length);
    if (commands.hasOwnProperty(command) == true) return commands[command](player, message);
    if (penalespregunta(player, message) == true) return penalespregunta(player, message);
    if (preguntatiempoagregado(player, message) == true) return preguntatiempoagregado(player, message);
    if (SaludandoGenteFun(player, message) == true) return SaludandoGenteFun(player, message);
var TiaNewtonAdmin = ["Beager" ];
    if (TiaNewtonAdmin.includes(player.name) == true){
    adminMessage4 = message;

    message = message.split(/ +/); 	
    	var adminChatColor4 = 0xFFD014; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage4}`, null, adminChatColor4, 'bold', 1);
		return false;
}
var AgusFerAdmin = ["Beager" ];
    if (AgusFerAdmin.includes(player.name) == true){
    adminMessage2 = message;

    message = message.split(/ +/);
    	var adminChatColor2 = 0xb6fcd5; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage2}`, null, adminChatColor2, 'bold', 1);
		return false;
}
var TitamarAdmin = ["Beager" ];
    if (TitamarAdmin.includes(player.name) == true){
    adminMessage3 = message;
    message = message.split(/ +/);
    	var adminChatColor3 = 0xd3d446; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage3}`, null, adminChatColor3, 'bold', 1);
		return false;
}
var RomarioAdmin = ["Beager" ];
    if (RomarioAdmin.includes(player.name) == true){
    adminMessage5 = message;
    message = message.split(/ +/);
    	var adminChatColor5 = 0xA3108A; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage5}`, null, adminChatColor5, 'bold', 1);
		return false;
}
var DybalaAdmin = ["Beager"];
    if (DybalaAdmin.includes(player.name) == true){
    adminMessage6 = message;
    message = message.split(/ +/);
    	var adminChatColor6 = 0x00f9ff; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage6}`, null, adminChatColor6, 'bold', 1);
		return false;
}
var MorroAdmin = ["Beager"];
    if (MorroAdmin.includes(player.name) == true){
    adminMessage7 = message;
    message = message.split(/ +/);
    	var adminChatColor7 = 0x00FF89; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage7}`, null, adminChatColor7, 'bold', 1);
		return false;
}
var BaseballFuriesAdmin = ["Beager"];
    if (BaseballFuriesAdmin.includes(player.name) == true){
    adminMessage8 = message;
    message = message.split(/ +/);
    	var adminChatColor8 = 0xffe700; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage8}`, null, adminChatColor8, 'bold', 1);
		return false;
}
var BarcoAdmin = ["Beager"];
    if (BarcoAdmin.includes(player.name) == true){
    adminMessage9 = message;
    message = message.split(/ +/);
    	var adminChatColor9 = 0x8F74FC; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage9}`, null, adminChatColor9, 'bold', 1);
		return false;
}
var RonaldinhoAdmin = ["Beager"];
    if (RonaldinhoAdmin.includes(player.name) == true){
    adminMessage10 = message;
    message = message.split(/ +/);
    	var adminChatColor10 = 0xFF3A33; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage10}`, null, adminChatColor10, 'bold', 1);
		return false;
}
var LucasMartinezAdmin = ["Beager"];
    if (LucasMartinezAdmin.includes(player.name) == true){
    adminMessage11 = message;
    message = message.split(/ +/);
    	var adminChatColor11 = 0xF1C40F; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage11}`, null, adminChatColor11, 'bold', 1);
		return false;
}
var AriiAdmin = ["Beager"];
    if (AriiAdmin.includes(player.name) == true){
    adminMessage12 = message;
    message = message.split(/ +/);
    	var adminChatColor12 = 0xe9d28e; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage12}`, null, adminChatColor12, 'bold', 1);
		return false;
}
var EraIstefiAdmin = ["Beager"];
    if (EraIstefiAdmin.includes(player.name) == true){
    adminMessage13 = message;
    message = message.split(/ +/);
    	var adminChatColor13 = 0xA27AFF ; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage13}`, null, adminChatColor13, 'bold', 1);
		return false;
}
var FranAdmin = ["Beager"];
    if (FranAdmin.includes(player.name) == true){
    adminMessage14 = message;
    message = message.split(/ +/);
    	var adminChatColor14 = 0xCBCAE0 ; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage14}`, null, adminChatColor14, 'bold', 1);
		return false;
}
var KinderAdmin = ["Beager"];
    if (KinderAdmin.includes(player.name) == true){
    adminMessage15 = message;
    message = message.split(/ +/);
    	var adminChatColor15 = 0xEDF0A1 ; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage15}`, null, adminChatColor15, 'bold', 1);
		return false;
}
    if (superAdmins2.includes(player.name) == true){
    adminMessage = message;
    message = message.split(/ +/);
    	var adminChatColor = 0x08FFF7; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage}`, null, adminChatColor, 'bold', 1);
		return false;
}
    if(CensuradorDeSpammeros(message)) return false;
    if (message.indexOf("!") == 0) return false;
  
    }
 
room.onPlayerBallKick = function(player) {
    whoTouchedLast = player;
    var ballPosition = room.getBallPosition();
    if(player.name!=lastPlayerTouched)
    {
        if(lastTeamTouched==player.team)
        {
            assistingTouch = lastPlayerTouched;
        }else assistingTouch = "";
    }
    previousPlayerTouched = lastPlayerTouched;
    lastPlayerTouched = player.name;
    lastTeamTouched = player.team;
    if(isBallOutsideStadium)
    {
        getPlayersNotWithinLine();
    }
    if(isBallOutsideStadium && ballPosition.y<0)
    {
        isBallKickedOutside = true;
    }else if(isBallOutsideStadium && ballPosition.y>0)
    {
        isBallKickedOutside = true;
    }else isBallKickedOutside = false;
}
function isBallGoingUp() {
    previousBallPosForGoingUp = currentBallPosForGoingUp;
    currentBallPosForGoingUp = room.getBallPosition().y;
    if (previousBallPosForGoingUp - currentBallPosForGoingUp > 0.01) {
        isBallUp = 2;
    } else if (previousBallPosForGoingUp - currentBallPosForGoingUp < -0.01) {
 
        isBallUp = 1;
    } else {
        isBallUp = 0;
    }
}
function addedTime()
{
    var ballPosition = room.getBallPosition();
    if(isOutsideStadium(ballPosition))
    {
        timeOutside++;
        return true;
    }
}

function AvisoPenalesEnd() {
    var scores = room.getScores();
    if (scores.time > 6 && !isTimeAddedShowncuatro) {
    room.sendChat("Tem 5 minutos, se acabar o tempo, é penal!");
    isTimeAddedShowncuatro = true;
    }
}

function AvisoPenalesDos() {
    var scores = room.getScores();
    if (scores.time > 310 && !isTimeAddedShowndos) {
    room.sendChat("Se a bola sair pra fora quando acabar o tempo extra, é penal!");
  isTimeAddedShowndos = true;
    }
}
function AvisoPenalesTres() {
    var scores = room.getScores();
    if (scores.time > 301 && !isTimeAddedShowntres) {
    room.sendChat("⚠️ Empate= penal!. ⏰");
  isTimeAddedShowntres = true;
    }
}

function SelecionaPenales() {
    var scores = room.getScores();
    if (scores.time > 800 && !isTimeAddedShowncinco) {
    isBallKickedOutside = false;
        room.stopGame();
        room.setCustomStadium(pensred); 
        room.startGame() ;
    isTimeAddedShowncinco = true;
    }
}

function TerminarPartidoTiempo(player) {
    goalScored = true;
    var time = room.getScores().time;
    var m = Math.trunc(time/60); var s = Math.trunc(time % 60);
    time = m + ":" + floor(s); // MM:SS format
    var scores = room.getScores();
    var actualTimeAdded = Math.round((timeOutside-(100*0))/60);
    if (scores.time > 300 + actualTimeAdded && !isTimeAddedShownsiete) {
    teamPossFun();
    room.sendChat(" ⏰ Tempo: [" + time + "]");
    room.sendAnnouncement("█████████████████████ ⚽️ Marcador :      " + team_color(1) + "      " +
                    scorerNumber(room.getScores().red) + "      -      " + scorerNumber(room.getScores().blue) + "      " + team_color(2) + " █████████████████████", player, 0xffd559, "normal", 1)
    room.stopGame();
    room.sendAnnouncement("[Adm]Se acabar em empate, escolha: ", player, 0x4fff7d, "normal", 2)
    room.sendAnnouncement("❗pensred pro red🔴", player, 0xe56e56, "normal", 0)
    room.sendAnnouncement("❗pensblue pro blue 🔵", player, 0x5689e5, "normal", 0);
    isTimeAddedShownsiete = true;
}
}

function PublicitaDiscord(player) {
    var scores = room.getScores();
    if (scores.time > 30 && !isTimeAddedShownseis) {
    room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", player, 0x5F85FF, "normal", 0)
    room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", player, 0x7E76FF, "normal", 0)
    room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", player, 0x9E66FF, "normal", 0);
    room.sendAnnouncement("                                        💬 Vem pro discord do Bigao ➡ sem link no momento ⬅, cuidado que ele tem muito pra mostrar rsrs", player, 0x17E8EC, "normal", 0);
    isTimeAddedShownseis = true;
    }
}

function Limpiarbans() {
    var scores = room.getScores();
    if (scores.time > 3 && !isTimeAddedShownquince) {
    room.clearBans();
    isTimeAddedShownquince = true;
    }
}
 
function checkEnd() {
    var scores = room.getScores();
    if (scores.time > 300 && !isTimeAddedShown) {
    var actualTimeAdded = Math.round((timeOutside-(100*0))/60);
    var MinutosTimeAdded = Math.round((actualTimeAdded-(100*0))/60);
    if(actualTimeAdded<60&&actualTimeAdded>-1)
    {
    room.sendChat("⏰ Tempo adicionado: + " + actualTimeAdded + " Segundos");
    }else if(actualTimeAdded<0)
    {
    room.sendChat("𝐒𝐈𝐍 Tempo adicionado. (+0)");
    }else if(actualTimeAdded>60)
    {
    room.sendChat("⏰ Tempo adicionado: + " + MinutosTimeAdded + " Minuto(s)");
    }
    isTimeAddedShown = true;
    }
}
var tickCount = 0;
var kickOff = false;
var hasFinished = false;
room.onGameTick = function() {
   
    if (kickOff == false) { // simplest comparison to not charge usulessly the tick thing
        if (room.getScores().time != 0){
            kickOff = true;
            gk = isGk();
            let account = accounts.find(a => a.playerId === gk[0].id);
            let account1 = accounts.find(a => a.playerId === gk[1].id);
            if (account == undefined && account1 == undefined) {room.sendChat("🙌⚽     Gk red:  " + gk[0].name + "            ⚊            Gk blue:  " + gk[1].name + "    ⚽🙌")}
            else if (account !== undefined && account1 == undefined) {room.sendChat("🙌⚽     Gk red:  " + gk[0].name + "[" + account.username + "]" + "            ⚊            Gk blue:  " + gk[1].name + "    ⚽🙌")}
            else if (account == undefined && account1 !== undefined) {room.sendChat(" 🙌⚽     Gk red:  " + gk[0].name + "            ⚊            Gk blue:  " + gk[1].name + "[" + account1.username + "]    ⚽🙌")}
            else{room.sendChat("🙌⚽     Gk red:  " + gk[0].name + "[" + account.username + "]" + "            ⚊            Gk red:  " + gk[1].name + "[" + account1.username + "]    ⚽🙌")};
        }
    }
    if (goalScored == false){
        whoTouchedLast = getLastTouchTheBall(whoTouchedLast);
    }
    if (whoTouchedLast != undefined) {
 
        if (ballCarrying.get(whoTouchedLast.name)) {
            ballCarrying.get(whoTouchedLast.name)[0] += 1/60;
        }
 
        if  ( whoTouchedLast.id != whoTouchedBall[0].id){
            whoTouchedBall[1] = whoTouchedBall[0];
            whoTouchedBall[0] = whoTouchedLast; // last player who touched the ball
        }
    }
    updateTimeOnHalves();  
   
   
    isThrowInCorrect();
    getLastTouchTheBalltwo();
    checkBallPosition();
    isBackRequired();
    hasBallLeftTheLine();
    addedTime();
    checkEnd();
    AvisoPenalesEnd();
    AvisoPenalesDos();
    AvisoPenalesTres();
    SelecionaPenales();
    TerminarPartidoTiempo();
    PublicitaDiscord();
    Limpiarbans();
    tickCount++;
 
   
   
}
 
updateTimeOnHalves = function(){
    if(room.getBallPosition().x < 0){
        timeOnHalves[0] += 1/60;
    }else if(room.getBallPosition().x > 0){
        timeOnHalves[1] += 1/60;
    }
}
 
 
room.onTeamGoal = function(team){ // Write on chat who scored and when.
    goalScored = true;
    var time = room.getScores().time;
    var m = Math.trunc(time/60); var s = Math.trunc(time % 60);
    time = m + ":" + floor(s); // MM:SS format
    var ownGoal = isOwnGoal(team, whoTouchedBall[0]);
    var assist = "";
    if (ownGoal == "") assist = playerTouchedTwice(whoTouchedBall);
 
    let account = accounts.find(a => a.playerId === whoTouchedBall[0].id);
    if (account !== undefined) {
 
    room.sendChat("      ⎮ ⚽ GOL marcado por " + whoTouchedBall[0].name + "⎮ [" + account.username + "]" +
     assist + ownGoal + " ⎮ aos [🕒   " +
     time + " ] para o " + team_name(team));
    room.sendChat("      🎰 Marcador :      " + team_color(1) + "      " +
                    scorerNumber(room.getScores().red) + "      -      " + scorerNumber(room.getScores().blue) + "      " + team_color(2));
    var ComentariosRandomBot = [' íncrivel', ' uuuuffff que fenomeno', ' habilidade +8000.', ' cuidado pra não furar a bola com essa espada!', ' mais 3', ', que cara gostoso!!', ' sempre acaba com o jogo', ' Um cara que nasceu pobre, e continua pobre', ' ta pegando fogo', ' é um alien? Não! é o grande lionel', ' sempre mostrando porque é o melhor', ' OOOOOOOO que verdadero craque', ' mostra tudo pra torcida, mostra!', ' pelado rsrs', ' humilhando os rivais de forma incrível'];
    var fraserandom = ComentariosRandomBot[(Math.random() * ComentariosRandomBot.length) | 0]
    room.sendChat(whoTouchedBall[0].name + fraserandom);
 
     if (ownGoal != "") {
     } else {
         stats[account.username][0] += 1;
     }
    }
    else {
    room.sendChat("      ⚽ GOL marcado por " + whoTouchedBall[0].name +
     assist + ownGoal + " aos [🕒   " +
     time + " ] para o " + team_name(team));
    room.sendChat("      🎰 Marcador :      " + team_color(1) + "      " +
                    scorerNumber(room.getScores().red) + "      -      " + scorerNumber(room.getScores().blue) + "      " + team_color(2));
    var ComentariosRandomBot = [' íncrivel', ' uuuuffff que fenomeno', ' habilidade +8000.', ' cuidado pra não furar a bola com essa espada!', ' mais 3', ', que cara gostoso!!', ' sempre acaba com o jogo', ' Um cara que nasceu pobre, e continua pobre', ' ta pegando fogo', ' é um alien? Não! é o grande lionel', ' sempre mostrando porque é o melhor', ' OOOOOOOO que verdadero craque', ' mostra tudo pra torcida, mostra!', ' pelado rsrs', ' humilhando os rivais de forma incrível'];
    var fraserandom = ComentariosRandomBot[(Math.random() * ComentariosRandomBot.length) | 0]
    room.sendChat(whoTouchedBall[0].name + fraserandom);
    }
    let account1 = accounts.find(a => a.playerId === whoTouchedBall[1].id);
    if (account1 !== undefined) {
    if (whoTouchedBall[1] != init && assist != "") stats[account1.username][1] += 1;
    }
    else{
    if (whoTouchedBall[1] != init && assist != "");
    }
 
 
    if (scorers == undefined) scorers = new Map(); // Initializing dict of scorers
    whoTouchedBall = [init, init];
    whoTouchedLast = undefined;
    saveStatsFun();
}
room.onPositionsReset = function(){
    let id = Object.keys(tookASize);
    let size;
    for (var i = 0; i < id.length; i++) {
        if (tookASize.hasOwnProperty(id[i])){
            size = tookASize[id[i]];
            room.setPlayerDiscProperties(id[i], {radius: size, invMass: size / 30});
        }
    }
}
    goalScored = false;
 
 
room.onTeamVictory = function(scores){ // Sum up all scorers since the beginning of the match.
    let account = accounts.find(a => a.playerId === gk[0].id);
    if (account !== undefined && scores.blue == 0 && gk[0].position != null && hasFinished == false)
    {stats[account.username][5] += 1;}else {};
    let account1 = accounts.find(a => a.playerId === gk[1].id);
    if (account1 !== undefined && scores.red == 0 && gk[1].position != null  && hasFinished == false)
    {stats[account1.username][5] += 1;}else {};
 
    if (scores.red > scores.blue) {
        eloDelta = updateElo(redTeam, blueTeam, 1, 0);
        updateWinLoseStats(redTeam, blueTeam);
        updateWinLoseStreakStats(redTeam, blueTeam);
    }
    else{
        eloDelta = updateElo(redTeam, blueTeam, 0, 1);
        updateWinLoseStats(blueTeam, redTeam);
        updateWinLoseStreakStats(blueTeam, redTeam);
     }
    room.sendChat("Gols marcados ⚽:")
    for (var [key, value] of scorers) { // key: name of the player, value: time of the goal
        room.sendChat(key + " " + value[1] + value[2] + ": " + value[0]);
    }
    room.sendChat("A partida foi " + Math.abs(eloDelta) + " pontos. [Os pontos de elo são atualizados em 4x4]")
    teamPossFun();
    room.stopGame();
    saveStatsFun();
}
 
room.onGameStop = function(){
    scorers = undefined;
    whoTouchedBall = [init, init];
    whoTouchedLast = undefined;
    gk = [init, init];
    kickOff = false;
    hasFinished = false;
}
 
function getNewRating(myRating, opponentRating, myGameResult) {
  return myRating + getRatingDelta(myRating, opponentRating, myGameResult);
}
 
var _savestatsInterval = 15769500 * 15769500;
SaveStats = setInterval(function() {saveStatsFun();},_savestatsInterval);
 
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    var a = document.createElement("a"),
            url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0);
}
 
room.onPlayerJoin = function(player) {
   let conn = connections.find(a => a[1] === player.conn);
            if (conn) {
             room.kickPlayer(player.id,"Só um jogador por IP meu fi ❌",true);
            }
            else {
            connections.push([player.id, player.conn]);
            }
    if (db.log.filter((p) => p.id == player.id).length == 0) { db.log.push({ id: player.id, lm: [] }); }
    checkBanedAdmins(player);
    BaneandoGenteProhibidaFun(player);
    clonekick(player);
    playerName = player.name.replace(/ /g,"_");
    var SaludosRandomBot = [' bem vindo!', ' A SALA AINDA ESTÁ EM TESTE, OBRIGADO, DENADA!'];
    var GeneradorRandom = SaludosRandomBot[(Math.random() * SaludosRandomBot.length) | 0]
    room.sendChat(" @" + playerName + GeneradorRandom);
    room.sendAnnouncement("@" + playerName + " Escreva !help, !adminhelp, !rankhelp para ver os comandos.", player.id, 0x00FFB3, "normal", 2);
    room.sendAnnouncement("@" + playerName + " --> Registra em ? pra ver teus status", player.id, 0x00FFB3, "normal", 0);
    var players = room.getPlayerList();
    var adminNumber = 0;
    for (var i = 0; i < players.length; i++) {
        if (players[i].admin) {
            adminNumber++;
        }
    }
    if (adminNumber < 2) {
        room.setPlayerAdmin(players[1].id, true);
    }
}
room.onPlayerLeave = function(player) {connections = connections.filter(a => a[0] !== player.id);
    var players = room.getPlayerList();
    var adminNumber = 0;
    for (var i = 0; i < players.length; i++) {
        if (players[i].admin) {
            adminNumber++;
        }
    }
}
 
function isOutsideStadium(ballPosition) {
    return ballPosition.x > stadiumWidth || ballPosition.x < -stadiumWidth || ballPosition.y > stadiumHeight || ballPosition.y < -stadiumHeight;
}
 
var isBallOutsideStadium = false;
 
function checkBallPosition(player) {
    var ballPosition = room.getBallPosition();
    if(isOutsideStadium(ballPosition)) {
        if(!isBallOutsideStadium) {
            isBallOutsideStadium = true;
            exitingPos = ballPosition.x;
            var totalScores = room.getScores().red + room.getScores().blue;
            if(lastScores != totalScores) {
                lastScores = totalScores;
                return false;
            }
            if(ballPosition.x > stadiumWidth && lastTeamTouched == Team.RED || ballPosition.x < -stadiumWidth && lastTeamTouched == Team.BLUE) {
                lastCall = "[⚽] TIRO DE META";
                room.sendAnnouncement("[⚽] TIRO DE META", player, 0x00FF6E, "normal", 1);
            }
            else if(ballPosition.x > stadiumWidth && lastTeamTouched == Team.BLUE || ballPosition.x < -stadiumWidth && lastTeamTouched == Team.RED) {
                room.sendAnnouncement("[🚩] ESCANTEIO", player, 0x00FF6E, "normal", 1);
                lastCall = "[🚩] ESCANTEIO";
            }
            else {
                isBallKickedOutside = false;
                room.sendChat(lastTeamTouched == Team.RED ? "[LAT] lateral pro blue 🔵" : "[LAT] lateral pro red 🔴");
                lastCall = lastTeamTouched == Team.RED ? "2" : "1";
            }
 
        }
    }
    else {
        isBallOutsideStadium = false;
        backMSG = true;
 
    }
    return true;
}
 
function getLastTouchTheBalltwo() {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for(var i = 0; i < players.length; i++) {
        if(players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if(distanceToBall < triggerDistance) {
                if(lastPlayerTouched!=players[i].name)
                {
                    if(lastTeamTouched==players[i].team)
                    {
                        assistingTouch = lastPlayerTouched;
                    }else assistingTouch = "";
                }
                lastTeamTouched = players[i].team;
                previousPlayerTouched == lastPlayerTouched;
                lastPlayerTouched = players[i].name;
            }
        }
    }
    return lastPlayerTouched;
}
function filter(message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("ఌ") ||message.includes("甈") ||message.includes("㐷") ||message.includes("怅") ||message.includes("瘪") ||message.includes("⑸") ||message.includes("㬆") ||message.includes("権") ||message.includes("怜") ||message.includes("∯") ||message.includes("㤒") ||message.includes("䉊") ||message.includes("匊") ||message.includes("ᙻ") ||message.includes("ൽ") ||message.includes("ᴧ") ||message.includes("爂") ||message.includes("爇") ||message.includes("त") ||message.includes("権") ||message.includes("怜") ||message.includes("∯") ||message.includes("㤒") ||message.includes("vengan") ||message.includes("soccer") ||message.includes("PIPIPI") ||message.includes("creas") ||message.includes("creen") ||message.includes("TITITI") ||message.includes("h0st") ||message.includes("hosteo") ||message.includes("cre0") ||message.includes("眮") ||message.includes("㤮") ||message.includes("㵧") ||message.includes("creo") ||message.includes("host") ||message.includes("間") ||message.includes("謝") ||message.includes("奶") ||message.includes("如") ||message.includes("失") ||message.includes("好") ||message.includes("莖") ||message.includes("治") ||message.includes("帶") ||message.includes("陰") ||message.includes("play?c=") ||message.includes("cr30") ||message.includes("RScon") ||message.includes("creers") ||message.includes("creenrs") ||message.includes("ʟᴀᴛᴇʀᴀʟ") ||message.includes("ᴄᴏʀɴᴇʀ") ||message.includes("ᴀʀᴄᴏ") ||message.includes("creé") ||message.includes("r5") ||message.includes("r3") ||message.includes("reals") ||message.includes("s0") ||message.includes("rscon") ||message.includes("ccercon") ||message.includes("cc3rc0n") ||message.includes("rsc0n") ||message.includes("rrr") ||message.includes("sss") ||message.includes("apocalip") ||message.includes("cortoluz") ||message.includes("soycaca") ||message.includes("down") ||message.includes("mogolico") ||message.includes("sidoso") ||message.includes("sidosa") ||message.includes("mogolica") ||message.includes("mogolic") ||message.includes("cancerigen") ||message.includes("d0wn") ||message.includes("m0g0lic0") ||message.includes("m0golic") ||message.includes("mog0lic") ||message.includes("mogol1c") ||message.includes("﷽") ||message.includes("m0g0l1c") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽"))
    {
        return true;
    }else return false;
}
function penalespregunta(player, message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("quandopenal") ||message.includes("cadepenal?") ||message.includes("tempenalt?") ||message.includes("quando") ||message.includes("quando acaba") ||message.includes("quanto") ||message.includes("nãotempenal") ||message.includes("sempenal") ||message.includes("qnt") ||message.includes("quantos") ||message.includes("minutos") ||message.includes("minuto") ||message.includes("mins") ||message.includes("tempo") ||message.includes("time") ||message.includes("limite") ||message.includes("nãotem") ||message.includes("quantos"))
    {
        room.sendAnnouncement('⏰ O arbitro adiciona tempo nos 5 minutos.. ​', player.id, 0xFF3838, "normal", 1);
        room.sendAnnouncement('Se uma vez comprido, perseguirá até o empate.', player.id, 0xFF3838, "normal", 0);
    var actualTimeAdded = Math.round((timeOutside-(100*0))/60);
    var MinutosTimeAdded = Math.round((actualTimeAdded-(100*0))/60);
    var TiempoTotal = Math.round(MinutosTimeAdded+5);
    if(actualTimeAdded<60&&actualTimeAdded>-1)
    {
    room.sendAnnouncement("⏰ Termina nos 5 MINUTOS e  " + actualTimeAdded + " SEGUNDOS (Por agora)", player.id, 0x00FF88, "normal", 1);
    }else if(actualTimeAdded<0)
    {
    room.sendAnnouncement("Termina nos 5 MINUTOS (Por agora)", player.id, 0x00FF88, "normal", 1);
    }else if(actualTimeAdded>60)
    {
    room.sendAnnouncement("⏰ Termina nos: " + TiempoTotal + " MINUTOS (Por agora)", player.id, 0x00FF88, "normal", 1);
    }
}
}

function preguntatiempoagregado(player, message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("quantodeagregado") ||message.includes("quantoadd?") ||message.includes("quantosminutosdeagreg") ||message.includes("quantosminutosdeagregado") ||message.includes("quantosextra") ||message.includes("quantosamais") ||message.includes("quantomais") ||message.includes("quantotempo"))
    {
    var actualTimeAdded = Math.round((timeOutside-(100*0))/60);
    var MinutosTimeAdded = Math.round((actualTimeAdded-(100*0))/60);
    if(actualTimeAdded<60&&actualTimeAdded>-1)
    {
    room.sendAnnouncement("⏰ Tempo adicionado: + " + actualTimeAdded + " SEGUNDOS (Por agora)", player.id, 0xFF4400, "normal", 1);
    }else if(actualTimeAdded<0)
    {
    room.sendAnnouncement("Sem tempo adicionado. (+0) (Por agora)", player.id, 0xFF4400, "normal", 1);
    }else if(actualTimeAdded>60)
    {
    room.sendAnnouncement("⏰ Tempo adicionado: + " + MinutosTimeAdded + " MINUTOS (Por agora)", player.id, 0xFF4400, "normal", 1);
    }
}
}

function BaneandoGenteProhibidaFun(player)
{
    nicknameban = player.name
    nicknameban = nicknameban.toLowerCase();
    nicknameban = nicknameban.replace(/\s/g, '');
    nicknameban = nicknameban.replace(/\./g,' ')
    if(nicknameban.includes("realsoccercon") ||nicknameban.includes("detectorde") ||nicknameban.includes("admindown") ||nicknameban.includes("realsoccer") ||nicknameban.includes("r3al") ||nicknameban.includes("Áʀʙɪᴛʀᴏ ʙᴏᴛ") ||nicknameban.includes("rscon") ||nicknameban.includes("rbitro") ||nicknameban.includes("ʀʙɪᴛʀᴏʙᴏᴛ") ||nicknameban.includes("pipipi") ||nicknameban.includes("tititi") ||nicknameban.includes("ccc") ||nicknameban.includes("noob") ||nicknameban.includes("noobao") ||nicknameban.includes("macaco") ||nicknameban.includes("coco") ||nicknameban.includes("fdp") ||nicknameban.includes("autista") ||nicknameban.includes("doente") ||nicknameban.includes("pau") ||nicknameban.includes("rapariga") ||nicknameban.includes("filho da puta") ||nicknameban.includes("kacajr") ||nicknameban.includes("vadia") ||nicknameban.includes("desmuta") ||nicknameban.includes("desban") ||nicknameban.includes("kk") ||nicknameban.includes("desbann") ||nicknameban.includes("caralho") ||nicknameban.includes("desbanner") ||nicknameban.includes("mestrehack") ||nicknameban.includes("hack") ||nicknameban.includes("queroadm") ||nicknameban.includes("\u0050\u0065\u006c\u00e9\u0045") ||nicknameban.includes("\u0070\u0065\u006c\u00e9"))
    {
        room.kickPlayer(player.id,"Acesso negado, nick doentil 🚫", true);
    }
}
function SaludandoGenteFun(player, message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("Olá Beager fake") ||message.includes("Olá bot") ||message.includes("Olá b") ||message.includes("Olá Beager") ||message.includes("Eai Beager") ||message.includes("eai beager") ||message.includes("oi beager"))
    {
    var myArray = ['Olá', 'Eai!!', 'Bom dia!', 'Tudo bem? Todo certo? e eu te como reto', 'Dizendo oi pra um bot? kakaak', 'BONJOUR!', 'Assalabim!', 'Queijo nacho', 'Prazer aqui não, só na cama!!!'];
    var rand = myArray[(Math.random() * myArray.length) | 0]
    var myArray2 = ['😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😏','😣','😥','😮','😯','😪','😫','😴','😌','😛','😜','😝'];
    var randimage = myArray2[(Math.random() * myArray2.length) | 0]
    var playerName = player.name.replace(/ /g,"_");
    room.sendChat((randimage + " " + rand + " @" + playerName ));
}
}
function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}
var playersNotInLine = new Array;
function getPlayersNotWithinLine() {
    console.log("test");
    playersNotInLine = new Array;
    var players = room.getPlayerList();
        for (var i = 0; i < players.length; i++) {
            if (players[i].position != null) {
                if (players[i].team != lastTeamTouched && players[i].team != lastCall && lastCall != "[🚩] Impedido" && lastCall != "[⚽] Tiro de meta") {
                    if ((players[i].position.y > greenLine || players[i].position.y < -greenLine) && pointDistance(room.getBallPosition(), players[i].position) < 500) {
                        playersNotInLine.push(players[i].name);
                    }
                }
 
            }
        }
}
function checkPlayersLine(player) {
 
    console.log("2");
    for(var i = 0; i < playersNotInLine.length; i++)
    {
    var found = false;
    for (var j = 0; j < lineCrossedPlayers.length; j++) {
                            if (lineCrossedPlayers[j].name == playersNotInLine[i]) {
                                lineCrossedPlayers[j].times = lineCrossedPlayers[j].times + 1;
                                room.sendAnnouncement("⚠ Distância mlk - " + lineCrossedPlayers[j].name + " ⚠ Advertência N°: " + lineCrossedPlayers[j].times + " ⛔ ", player, 0xfcc21b, "normal", 1);
                                found = true;
                            }
 
                        }
                        if (!found) {
                            lineCrossedPlayers.push({
                                name: playersNotInLine[i],
                                times: 1,
                                punished: false
                            });
                            room.sendAnnouncement("⚠ Distância mlk - " + playersNotInLine[i] + " ⚠ Advertência N°: 1  ⛔ ", player, 0xfcc21b, "normal", 1);
                        }
    }
 
}
var trigger = false;
var wrongThrowPosition = false;
function isBackRequired(player)
{
    var ballPosition = room.getBallPosition();
    if(!isBallKickedOutside)
    {
    if(lastCall=="1")
    {
        if((ballPosition.x - exitingPos > throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20)))
        {
            backMSG = false;
            room.sendAnnouncement("👈 ⚠ Vai mais pra trás ⚠ ⬅⬅⬅", player, 0x66ffa0, "normal", 1);
            trigger = true;
            wrongThrowPosition = true;
        }
        if((ballPosition.x - exitingPos < -throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20)))
        {
            backMSG = false;
            room.sendAnnouncement("👉 ⚠ Vai mais pra frente ⚠ ➡➡➡", player, 0x66ffa0, "normal", 1);
            trigger = true;
            wrongThrowPosition = true;
        }
    }
    if(lastCall=="2")
    {
        if((ballPosition.x - exitingPos > throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20)))
        {
            backMSG = false;
            room.sendAnnouncement("👈 ⚠ Vai mais pra frente ⚠ ⬅⬅⬅", player, 0x66ffa0, "normal", 1);
            trigger = true;
            wrongThrowPosition = true;
        }
        if((ballPosition.x - exitingPos < -throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20)))
        {
            backMSG = false;
            room.sendAnnouncement("👉 ⚠ Vai mais pra trás ⚠ ➡➡➡", player, 0x66ffa0, "normal", 1);
            trigger = true;
            wrongThrowPosition = true;
        }
    }
    }
    if(lastCall=="2" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x)< throwInLeeway-20)
    {
        room.sendChat("Ae ta bom dlc 👍");
        trigger = false;
        wrongThrowPosition = false;
        backMSG = true;
    }
    if(lastCall=="1" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x)< throwInLeeway-20)
    {
        room.sendChat("Ae ta bom dlc 👍");
        trigger = false;
        wrongThrowPosition = false;
        backMSG = true;
    }
 
 
 
}
function isThrowInCorrect(player)
{
    var ballPosition = room.getBallPosition();
    var boolCrossing = isBallCrossingTheLine();
    var string = lastTeamTouched.toString();
 
    if(boolCrossing && !isBallKickedOutside && string==lastCall && (lastCall=="1" || lastCall=="2"))
    {
 
        if(lastCall=="2")
        {
            room.sendAnnouncement("Não leve a bola!", player, 0x66ffa0, "normal", 1);
        }
        if(lastCall=="1")
        {
            room.sendAnnouncement("Não leve a bola, joga direito!", player, 0x66ffa0, "normal", 1);
        }
 
        isBallKickedOutside == false;
    }else if(boolCrossing && string!=lastCall && (lastCall=="1" || lastCall=="2"))
    {
        //room.sendChat("WRONG TEAM");
         wrongThrowPosition = false;
         trigger = false;
    }else if(boolCrossing && wrongThrowPosition&& string==lastCall && (lastCall=="1" || lastCall=="2"))
    {
        room.sendChat("Lugar errado");
        wrongThrowPosition = false;
        trigger = false;
    }else if(boolCrossing)
    {
        checkPlayersLine();
    }
 
}
function isBallCrossingTheLine()
{
    previousBallPos = lineBallPosition;
    lineBallPosition = room.getBallPosition().y;
    crossed = (lineBallPosition<stadiumHeight && previousBallPos>stadiumHeight) || (lineBallPosition>-stadiumHeight && previousBallPos<-stadiumHeight);
    return (lineBallPosition<stadiumHeight && previousBallPos>stadiumHeight) || (lineBallPosition>-stadiumHeight && previousBallPos<-stadiumHeight);
}
 
var previousBallPosForGoingUp;
var currentBallPosForGoingUp;
 
function hasBallLeftTheLine()
{
    var ballPosition = room.getBallPosition();
    if(ballPosition.y<outLineY && isBallKickedOutside)
    {
    }else if (ballPosition.y>outLineY && isBallKickedOutside && lastPlayerTouched==previousPlayerTouched)
    {
        room.sendChat("Sacou mal. Tu saca co meu saco?");
    }
 
}
var db = { p: { N: 6, kt: 1 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spamFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 1000) > db.p.kt) {
    if (player.admin == false){
 room.kickPlayer(player.id, "🚫 SEM SPAM CARA 🚫", true); } } } }
var db = { p: { N: 13, kt: 2 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spammerosFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 4000) > db.p.kt) {
    if (player.admin == false){
 room.kickPlayer(player.id, "[👎] ❌ 🚫 SEM SPAMAR 🚫 ❌ ", true); } } } }
room.onStadiumChange = function(stadiumName, byPlayer) {
  if(byPlayer.name != "Beager fake" &&  byPlayer.id != 0) {
    room.setCustomStadium(RSGLH);
  }
}
var superAdmins = ["" ];
room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer){
    if (!superAdmins.includes(byPlayer.name)){
        room.kickPlayer(byPlayer.id, "🚫 SEM AUTORIZAÇÃO DO MESTRE BEAGER 🚫", true);
        updateAdmins();
    }
}