var roomName = "🟨🟩 Real Soccer x5 🟨🟩";
var maxPlayers = 30;
var roomPublic = true;
var playerName = "😎 Arbitro";
var ModoChatPausado=[];
voteKickList=[];

/* STADIUM */
//Wartosci dotycza boiska na którym rozgrywany jest mecz - wartosci domyslne to oficjalna mapa RS
var stadiumWidth = 1320;
var stadiumHeight = 658;
var radiusBall = 6.0;
var throwInLeeway = 350;
var greenLine = 618;
ballOut = true;
//varlar
var last_toucher;
var reGol;
var blueGol;
var redSeri = 0
var blueSeri = 0
var golMesaj = ["Bu Adam Çıldırmış", "Çok Güzel Bi Goldu"];
var golRandom = golMesaj[(Math.random() * golMesaj.length) | 0]
var realMap = false;
const afkPlayerIDs = new Set()
    /* SETTINGS */

var triggerDistance = radiusBall + 15 + 0.01;
var outLineY = stadiumWidth - (radiusBall / 2) + 6;
stadiumWidth += (radiusBall / 2) + 6;
stadiumHeight += (radiusBall / 2) + 6;

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
var lat = -23.5;
var long = -46.6;
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
var lineCrossedPlayers = [{ name: "temp", times: 0 }];
var isBallKickedOutside = false;
var previousPlayerTouched;
var timeOutside = 0;
var auth = "39352E34392E37342E313535";   // ID: 💥
var auth1 = "3137372E35342E35392E313231";   // ID: Jota

var db = { p: { N: 13, kt: 2 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spammerosFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 0) > db.p.kt) { room.kickPlayer(player.id, "spammer", true); } } }
var db = { p: { N: 6, kt: 1 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spamFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 0) > db.p.kt) { room.kickPlayer(player.id, "spammer", true); } } }
var room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: playerName, geo: { "code": "BR", "lat": -23.54603, "lon": -46.62230 } });
room.setScoreLimit(0);
room.setTimeLimit(0);


var RSGLHMap = `{

	"name" : "Real Soccer x5 !rs",

	"width" : 1470,

	"height" : 750,

	"spawnDistance" : 500,

	"redSpawnPoints" : [
		[ -285, -228
		],
		[ -200, 0
		],
		[ -285, 228
		],
		[ -510, 0
		],
		[ -1180, 0
		]

	],

	"blueSpawnPoints" : [
		[ 285, -228
		],
		[ 200, 0
		],
		[ 285, 228
		],
		[ 510, 0
		],
		[ 1180, 0
		]

	],

	"bg" : { "type" : "grass", "width" : 1320, "height" : 658, "kickOffRadius" : 200, "cornerRadius" : 0 },

	"ballPhysics" : {
		"bCoef" : 0.5,
		"damping" : 0.989,
		"invMass" : 0.8,
		"radius" : 9.8,
		"color" : "FFFFFF"

	},

	"playerPhysics" : {
		"acceleration" : 0.12,
		"bCoef" : 0.2,
		"damping" : 0.96,
		"invMass" : 0.3,
		"kickStrength" : 8,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96

	},

	"traits" : {
		"ballArea" : { "bCoef" : 0, "cMask" : ["ball" ], "vis" : false },
		"gameArea" : { "bCoef" : 0, "cMask" : ["all" ] },
		"line" : { "cMask" : [ ], "color" : "c7e6bd", "vis" : true },
		"support" : { "cMask" : [ ], "color" : "ffffff", "vis" : true, "radius" : 3 },
		"goalNet" : { "bCoef" : 0.6, "cMask" : ["all" ], "color" : "ffffff", "vis" : true },
		"goalPost" : { "bCoef" : 1.4, "invMass" : 0, "radius" : 5 },
		"kickOffBarrier" : { "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "vis" : false },
		"corner" : { "bCoef" : -4, "cMask" : ["ball" ], "color" : "576c46", "vis" : true },
		"punt" : { "bCoef" : -6, "cMask" : ["ball" ], "color" : "576c46" }

	},

	"vertexes" : [
		/* 0 */ { "x" : -1320, "y" : -626, "trait" : "line" },
		/* 1 */ { "x" : -1288, "y" : -658, "trait" : "line" },
		/* 2 */ { "x" : -1320, "y" : 626, "trait" : "line" },
		/* 3 */ { "x" : -1288, "y" : 658, "trait" : "line" },
		/* 4 */ { "x" : -1320, "y" : -400, "trait" : "line" },
		/* 5 */ { "x" : -960, "y" : -400, "trait" : "line" },
		/* 6 */ { "x" : -960, "y" : 400, "trait" : "line" },
		/* 7 */ { "x" : -1320, "y" : 400, "trait" : "line" },
		/* 8 */ { "x" : -960, "y" : -160, "trait" : "line", "curve" : 130 },
		/* 9 */ { "x" : -960, "y" : 160, "trait" : "line", "curve" : 130 },
		/* 10 */ { "x" : -1080, "y" : -3, "trait" : "line" },
		/* 11 */ { "x" : -1080, "y" : 3, "trait" : "line" },
		/* 12 */ { "x" : -1320, "y" : -220, "trait" : "line" },
		/* 13 */ { "x" : -1200, "y" : -220, "trait" : "line" },
		/* 14 */ { "x" : -1200, "y" : 220, "trait" : "line" },
		/* 15 */ { "x" : -1320, "y" : 220, "trait" : "line" },
		/* 16 */ { "x" : 1320, "y" : -626, "trait" : "line" },
		/* 17 */ { "x" : 1288, "y" : -658, "trait" : "line" },
		/* 18 */ { "x" : 1320, "y" : 626, "trait" : "line" },
		/* 19 */ { "x" : 1288, "y" : 658, "trait" : "line" },
		/* 20 */ { "x" : 1320, "y" : -400, "trait" : "line" },
		/* 21 */ { "x" : 960, "y" : -400, "trait" : "line" },
		/* 22 */ { "x" : 960, "y" : 400, "trait" : "line" },
		/* 23 */ { "x" : 1320, "y" : 400, "trait" : "line" },
		/* 24 */ { "x" : 960, "y" : -160, "trait" : "line", "curve" : -130 },
		/* 25 */ { "x" : 960, "y" : 160, "trait" : "line", "curve" : -130 },
		/* 26 */ { "x" : 1080, "y" : -3, "trait" : "line" },
		/* 27 */ { "x" : 1080, "y" : 3, "trait" : "line" },
		/* 28 */ { "x" : 1320, "y" : -220, "trait" : "line" },
		/* 29 */ { "x" : 1200, "y" : -220, "trait" : "line" },
		/* 30 */ { "x" : 1200, "y" : 220, "trait" : "line" },
		/* 31 */ { "x" : 1320, "y" : 220, "trait" : "line" },
		
		/* 32 */ { "x" : 0, "y" : -739, "trait" : "kickOffBarrier" },
		/* 33 */ { "x" : 0, "y" : -200, "trait" : "kickOffBarrier" },
		/* 34 */ { "x" : 0, "y" : 200, "trait" : "kickOffBarrier" },
		/* 35 */ { "x" : 0, "y" : 739, "trait" : "kickOffBarrier" },
		
		/* 36 */ { "x" : 0, "y" : -5, "trait" : "line" },
		/* 37 */ { "x" : 0, "y" : 5, "trait" : "line" },
		/* 38 */ { "x" : -1320, "y" : -590, "trait" : "line" },
		/* 39 */ { "x" : 1320, "y" : -590, "trait" : "line" },
		/* 40 */ { "x" : -1320, "y" : 590, "trait" : "line" },
		/* 41 */ { "x" : 1320, "y" : 590, "trait" : "line" },
		/* 42 */ { "x" : -1320, "y" : -278, "trait" : "line" },
		/* 43 */ { "x" : -940, "y" : -658, "trait" : "line" },
		/* 44 */ { "x" : -1320, "y" : 278, "trait" : "line" },
		/* 45 */ { "x" : -940, "y" : 658, "trait" : "line" },
		/* 46 */ { "x" : 1320, "y" : -278, "trait" : "line" },
		/* 47 */ { "x" : 940, "y" : -658, "trait" : "line" },
		/* 48 */ { "x" : 1320, "y" : 278, "trait" : "line" },
		/* 49 */ { "x" : 940, "y" : 658, "trait" : "line" },
		/* 50 */ { "x" : -1385, "y" : 124, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 51 */ { "x" : -1319.6288522526, "y" : -127.97302216203, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 52 */ { "x" : -1385, "y" : -124, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 53 */ { "x" : -1429.6013715432, "y" : 145.49133453726, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 54 */ { "x" : -1428.8669816659, "y" : -147.3758942437, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 55 */ { "x" : -1323.4806674009, "y" : 127.08328385388, "bCoef" : 0, "cMask" : ["all" ], "trait" : "line", "color" : "C7E6BD", "curve" : 7 },
		/* 56 */ { "x" : -1385, "y" : 124, "bCoef" : 1.2, "cMask" : ["all" ], "trait" : "line", "color" : "ffffff", "curve" : 7 },
		/* 57 */ { "x" : -1319.4859693161, "y" : -127.91461989892, "bCoef" : 0, "cMask" : ["all" ], "trait" : "line", "color" : "ffffff", "curve" : -7 },
		/* 58 */ { "x" : -1385, "y" : -124, "bCoef" : 1.2, "cMask" : ["all" ], "trait" : "line", "color" : "ffffff", "curve" : -7 },
		
		/* 59 */ { "x" : -1321.7854926963, "y" : 656.61975707062, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 60 */ { "x" : -1323.7502325506, "y" : 656.99365184844, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 61 */ { "x" : 1385, "y" : -123, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 62 */ { "x" : 1320.0533118819, "y" : 127.06038430719, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 63 */ { "x" : 1385, "y" : 124, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 64 */ { "x" : 1428.1561992549, "y" : -147.1736947722, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 65 */ { "x" : 1432.4892194598, "y" : 148.69142107375, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 66 */ { "x" : 1322.2387504764, "y" : -125.99605320011, "bCoef" : 0, "cMask" : ["all" ], "trait" : "line", "color" : "C7E6BD", "curve" : 7 },
		/* 67 */ { "x" : 1385, "y" : -123, "bCoef" : 1.2, "cMask" : ["all" ], "trait" : "line", "color" : "ffffff", "curve" : 7 },
		/* 68 */ { "x" : 1318.9100202355, "y" : 128.00299213039, "bCoef" : 0, "cMask" : ["all" ], "trait" : "line", "color" : "ffffff", "curve" : -7 },
		/* 69 */ { "x" : 1385, "y" : 124, "bCoef" : 1.2, "cMask" : ["all" ], "trait" : "line", "color" : "ffffff", "curve" : -7 },
		
		/* 70 */ { "x" : 1320, "y" : -658, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 71 */ { "x" : 1322, "y" : -658, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 72 */ { "x" : -1319, "y" : -659, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 73 */ { "x" : 1322.103496717, "y" : 655.45545668723, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 74 */ { "x" : 1324.0537321739, "y" : 655.89883199406, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 75 */ { "x" : -1348, "y" : 158, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 76 */ { "x" : -1348, "y" : 273, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 77 */ { "x" : -1348, "y" : 273, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 78 */ { "x" : -1355, "y" : 273, "bCoef" : 0, "cMask" : ["ball" ] },
		
		/* 79 */ { "x" : -1348, "y" : 158, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 80 */ { "x" : -1355, "y" : 158, "cMask" : ["ball" ] },
		
		/* 81 */ { "x" : -1350, "y" : -274.22222900391, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 82 */ { "x" : -1350, "y" : -159.22222900391, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 83 */ { "x" : -1350, "y" : -159.22222900391, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 84 */ { "x" : -1357, "y" : -159.22222900391, "bCoef" : 0, "cMask" : ["ball" ] },
		
		/* 85 */ { "x" : -1350, "y" : -274.22222900391, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 86 */ { "x" : -1357, "y" : -274.22222900391, "cMask" : ["ball" ] },
		
		/* 87 */ { "x" : 1333, "y" : -658, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 88 */ { "x" : 1361, "y" : -638, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 89 */ { "x" : 1331, "y" : 660, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 90 */ { "x" : 1359, "y" : 640, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 91 */ { "x" : -1329, "y" : 659, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 92 */ { "x" : -1357, "y" : 639, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 93 */ { "x" : -1333, "y" : -658, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 94 */ { "x" : -1361, "y" : -638, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 95 */ { "x" : 1349.6017818935, "y" : -158.64796779998, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 96 */ { "x" : 1348.7898904694, "y" : -273.64510181781, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 97 */ { "x" : 1348.7898904694, "y" : -273.64510181781, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 98 */ { "x" : 1355.7897160183, "y" : -273.6945212958, "bCoef" : 0, "cMask" : ["ball" ] },
		
		/* 99 */ { "x" : 1349.6017818935, "y" : -158.64796779998, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 100 */ { "x" : 1356.6016074424, "y" : -158.69738727796, "cMask" : ["ball" ] },
		
		/* 101 */ { "x" : 1348.6179638926, "y" : 273.57067407467, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 102 */ { "x" : 1347.8060724685, "y" : 158.57354005683, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 103 */ { "x" : 1347.8060724685, "y" : 158.57354005683, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 104 */ { "x" : 1354.8058980174, "y" : 158.52412057884, "bCoef" : 0, "cMask" : ["ball" ] },
		
		/* 105 */ { "x" : 1348.6179638926, "y" : 273.57067407467, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 106 */ { "x" : 1355.6177894415, "y" : 273.52125459668, "cMask" : ["ball" ] }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "curve" : -90, "trait" : "line" },
		{ "v0" : 2, "v1" : 3, "curve" : 90, "trait" : "line" },
		{ "v0" : 4, "v1" : 5, "trait" : "line" },
		{ "v0" : 5, "v1" : 6, "trait" : "line" },
		{ "v0" : 6, "v1" : 7, "trait" : "line" },
		{ "v0" : 8, "v1" : 9, "curve" : 130, "trait" : "line" },
		{ "v0" : 10, "v1" : 11, "trait" : "line" },
		{ "v0" : 10, "v1" : 11, "curve" : -180, "trait" : "line" },
		{ "v0" : 10, "v1" : 11, "curve" : 180, "trait" : "line" },
		{ "v0" : 12, "v1" : 13, "trait" : "line" },
		{ "v0" : 13, "v1" : 14, "trait" : "line" },
		{ "v0" : 14, "v1" : 15, "trait" : "line" },
		{ "v0" : 16, "v1" : 17, "curve" : 90, "trait" : "line" },
		{ "v0" : 18, "v1" : 19, "curve" : -90, "trait" : "line" },
		{ "v0" : 20, "v1" : 21, "trait" : "line" },
		{ "v0" : 21, "v1" : 22, "trait" : "line" },
		{ "v0" : 22, "v1" : 23, "trait" : "line" },
		{ "v0" : 24, "v1" : 25, "curve" : -130, "trait" : "line" },
		{ "v0" : 26, "v1" : 27, "trait" : "line" },
		{ "v0" : 26, "v1" : 27, "curve" : -180, "trait" : "line" },
		{ "v0" : 26, "v1" : 27, "curve" : 180, "trait" : "line" },
		{ "v0" : 28, "v1" : 29, "trait" : "line" },
		{ "v0" : 29, "v1" : 30, "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "trait" : "line" },
		
		{ "v0" : 32, "v1" : 33, "trait" : "kickOffBarrier" },
		{ "v0" : 33, "v1" : 34, "curve" : 180, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 33, "v1" : 34, "curve" : -180, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 34, "v1" : 35, "trait" : "kickOffBarrier" },
		
		{ "v0" : 36, "v1" : 37, "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : 180, "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -180, "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : 120, "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -120, "trait" : "line" },
		{ "v0" : 38, "v1" : 39, "color" : "5e844d", "trait" : "line", "y" : -590 },
		{ "v0" : 40, "v1" : 41, "color" : "5e844d", "trait" : "line" },
		{ "v0" : 42, "v1" : 43, "curve" : -90, "color" : "5e844d", "trait" : "line" },
		{ "v0" : 44, "v1" : 45, "curve" : 90, "color" : "5e844d", "trait" : "line" },
		{ "v0" : 46, "v1" : 47, "curve" : 90, "color" : "5e844d", "trait" : "line" },
		{ "v0" : 48, "v1" : 49, "curve" : -90, "color" : "5e844d", "trait" : "line" },
		
		{ "v0" : 50, "v1" : 53, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 52, "v1" : 54, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 56, "v1" : 58, "curve" : 14, "color" : "ffffff", "cMask" : ["all" ], "trait" : "reargoalNetleft", "x" : -242, "bCoef" : 1.2 },
		
		{ "v0" : 55, "v1" : 56, "curve" : 7, "color" : "ffffff", "cMask" : ["all" ], "trait" : "sidegoalNet" },
		{ "v0" : 57, "v1" : 58, "curve" : -7, "color" : "ffffff", "cMask" : ["all" ], "trait" : "sidegoalNet" },
		
		{ "v0" : 61, "v1" : 64, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 63, "v1" : 65, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 67, "v1" : 69, "curve" : 14, "color" : "ffffff", "cMask" : ["all" ], "trait" : "reargoalNetleft", "x" : -242, "bCoef" : 1.2 },
		
		{ "v0" : 66, "v1" : 67, "curve" : 7, "color" : "ffffff", "cMask" : ["all" ], "trait" : "sidegoalNet" },
		{ "v0" : 68, "v1" : 69, "curve" : -7, "color" : "ffffff", "cMask" : ["all" ], "trait" : "sidegoalNet" },
		
		{ "v0" : 75, "v1" : 76, "curve" : 40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		
		{ "v0" : 80, "v1" : 79, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 78, "v1" : 77, "vis" : true, "cMask" : ["ball" ] },
		
		{ "v0" : 81, "v1" : 82, "curve" : 40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		
		{ "v0" : 86, "v1" : 85, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 84, "v1" : 83, "vis" : true, "cMask" : ["ball" ] },
		
		{ "v0" : 87, "v1" : 88, "curve" : -60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 89, "v1" : 90, "curve" : 60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 91, "v1" : 92, "curve" : -60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 93, "v1" : 94, "curve" : 60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 95, "v1" : 96, "curve" : 40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		
		{ "v0" : 100, "v1" : 99, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 98, "v1" : 97, "vis" : true, "cMask" : ["ball" ] },
		
		{ "v0" : 101, "v1" : 102, "curve" : 40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		
		{ "v0" : 106, "v1" : 105, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 104, "v1" : 103, "vis" : true, "cMask" : ["ball" ] }

	],

	"discs" : [
		{ "radius" : 4, "pos" : [-1320,127 ], "trait" : "goalPost" },
		{ "radius" : 4, "pos" : [-1320,-127 ], "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-1429.8669727835,-147.38010906609 ], "color" : "FF0000" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1430.0977098048,144.62151209452 ], "color" : "FF0000" },
		
		{ "radius" : 1.5, "pos" : [-1321.4163894389,657.69052098687 ], "color" : "13181C", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0 },
		
		{ "radius" : 4, "pos" : [1320,-127 ], "trait" : "goalPost" },
		{ "radius" : 4, "pos" : [1320,127 ], "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [1432.4892154146,149.68857671037 ], "color" : "0000FF" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1428.6586653511,-146.30739772501 ], "color" : "0000FF" },
		
		{ "radius" : 1.5, "pos" : [1319.4457027605,-656.17325861291 ], "color" : "13181C", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [-1319.5542972395,-657.17325861291 ], "color" : "13181C", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [1321.0986432052,657.68797210921 ], "color" : "13181C", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0 }

	],

	"goals" : [
		{ "team" : "red", "p0" : [-1332,-127 ], "p1" : [-1332,126 ] },
		{ "team" : "blue", "p0" : [1332.363525390625,-125.35797119140625 ], "p1" : [1333.363525390625,127.64202880859375 ] }

	],

	"planes" : [
		{ "normal" : [1,0 ], "dist" : -1440, "trait" : "gameArea" },
		{ "normal" : [-1,0 ], "dist" : -1444, "trait" : "gameArea" },
		{ "normal" : [0,1 ], "dist" : -740, "trait" : "gameArea" },
		{ "normal" : [0,-1 ], "dist" : -740, "trait" : "gameArea" },
		
		{ "normal" : [1,0 ], "dist" : -1387, "trait" : "ballArea" },
		{ "normal" : [-1,0 ], "dist" : -1385, "trait" : "ballArea" },
		{ "normal" : [0,1 ], "dist" : -696, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -696, "trait" : "ballArea" }

	]
}`;

var predMap = `{

	"name" : "PenaltedRed !pred",

	"width" : 500,

	"height" : 320,

	"spawnDistance" : 473,

	"redSpawnPoints" : [
		[ -464, -80
		],
		[ -465, -40
		],
		[ -465, 0
		],
		[ -465, 40
		],
		[ -464, 80
		]

	],

	"blueSpawnPoints" : [
		[ 470, -80
		],
		[ 470, -30
		],
		[ 470, 20
		],
		[ 470, 70
		],
		[ 253, -4
		]

	],

	"bg" : { "type" : "grass", "width" : 500, "height" : 320, "kickOffRadius" : 0, "cornerRadius" : 0 },

	"ballPhysics" : {
		"bCoef" : 0.5,
		"damping" : 0.989,
		"invMass" : 0.8,
		"radius" : 10

	},

	"playerPhysics" : {
		"acceleration" : 0.12,
		"bCoef" : 0.2,
		"damping" : 0.96,
		"invMass" : 0.3,
		"kickStrength" : 9.3,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96

	},

	"traits" : {
		"ballArea" : { "bCoef" : 0, "cMask" : ["ball" ], "vis" : false },
		"gameArea" : { "bCoef" : 0, "cMask" : ["all" ] },
		"line" : { "cMask" : [ ], "color" : "c7e6bd", "vis" : true },
		"support" : { "cMask" : [ ], "color" : "ffffff", "vis" : true, "radius" : 3 },
		"goalNet" : { "bCoef" : 0.6, "cMask" : ["all" ], "color" : "ffffff", "vis" : true },
		"goalPost" : { "bCoef" : 1.4, "invMass" : 0, "radius" : 5 },
		"kickOffBarrier" : { "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "vis" : false },
		"corner" : { "bCoef" : -4, "cMask" : ["ball" ], "color" : "576c46", "vis" : true },
		"punt" : { "bCoef" : -6, "cMask" : ["ball" ], "color" : "576c46" }

	},

	"vertexes" : [
		/* 0 */ { "x" : 126, "y" : -219, "trait" : "line" },
		/* 1 */ { "x" : 124, "y" : 221, "trait" : "line" },
		/* 2 */ { "x" : 0, "y" : -5, "trait" : "line" },
		/* 3 */ { "x" : 0, "y" : 5, "trait" : "line" },
		/* 4 */ { "x" : 308, "y" : 112, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 5 */ { "x" : 308, "y" : -112, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 6 */ { "x" : 343.3986284568, "y" : 138.49133453726, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 7 */ { "x" : 341.1330183340999, "y" : -142.3758942437, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 8 */ { "x" : 240.51933259909993, "y" : 117, "bCoef" : 1, "cMask" : ["blue","ball" ], "trait" : "line", "color" : "C7E6BD", "curve" : -9 },
		/* 9 */ { "x" : 308, "y" : 111, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "ffffff", "curve" : -9, "_selected" : "segment" },
		/* 10 */ { "x" : 241.51403068390005, "y" : -117.91461989892, "bCoef" : 1, "cMask" : ["blue","ball" ], "trait" : "line", "color" : "ffffff", "curve" : 9 },
		/* 11 */ { "x" : 308, "y" : -112, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "ffffff", "curve" : 9, "_selected" : "segment" },
		/* 12 */ { "x" : 242, "y" : -321, "trait" : "line" },
		/* 13 */ { "x" : 241, "y" : 320, "trait" : "line" },
		/* 14 */ { "x" : -113, "y" : -200, "trait" : "line", "color" : "c7e6bd", "curve" : -126.11501125673479 },
		/* 15 */ { "x" : -113, "y" : 201, "trait" : "line", "color" : "c7e6bd", "curve" : -126.11501125673479 },
		/* 16 */ { "x" : 0, "y" : -320, "trait" : "line", "color" : "5e844d" },
		/* 17 */ { "x" : 0, "y" : 320, "trait" : "line", "color" : "5e844d" },
		/* 18 */ { "x" : -401, "y" : -187, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 19 */ { "x" : -401, "y" : -23, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 20 */ { "x" : -362, "y" : -15, "trait" : "line", "color" : "b2e09d" },
		/* 21 */ { "x" : -402, "y" : -15, "trait" : "line", "color" : "b2e09d" },
		/* 22 */ { "cMask" : ["blue" ], "trait" : "line", "x" : 228.5, "y" : -151 },
		/* 23 */ { "cMask" : ["blue" ], "trait" : "line", "x" : 228.5, "y" : 154 },
		/* 24 */ { "x" : -362, "y" : 15, "trait" : "line", "color" : "b2e09d" },
		/* 25 */ { "x" : -403, "y" : 15, "trait" : "line", "color" : "b2e09d" },
		/* 26 */ { "x" : -402, "y" : 18, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 27 */ { "x" : -402, "y" : 188, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 28 */ { "x" : -493, "y" : 187, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 29 */ { "x" : -402, "y" : 188, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 30 */ { "x" : -493, "y" : -188, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 31 */ { "x" : -402, "y" : -187, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 32 */ { "x" : -493, "y" : -188, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 33 */ { "x" : -493, "y" : 187, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 34 */ { "x" : -402, "y" : -17, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 35 */ { "x" : -402, "y" : -17, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 36 */ { "x" : -402, "y" : -15, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 37 */ { "x" : -358, "y" : -15, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 38 */ { "x" : 492, "y" : -78, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 },
		/* 39 */ { "x" : 492, "y" : 71, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 },
		/* 40 */ { "x" : -113, "y" : -322, "trait" : "line" },
		/* 41 */ { "x" : -114, "y" : 319, "trait" : "line" },
		/* 42 */ { "x" : 241, "y" : 220, "trait" : "line" },
		/* 43 */ { "x" : 123, "y" : 220, "trait" : "line" },
		/* 44 */ { "x" : 242, "y" : -220, "trait" : "line" },
		/* 45 */ { "x" : 124, "y" : -220, "trait" : "line" },
		/* 46 */ { "x" : -2, "y" : -218, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 47 */ { "x" : -360, "y" : -20, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 48 */ { "x" : 0, "y" : 211, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 49 */ { "x" : -361, "y" : 18, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 50 */ { "x" : -24, "y" : -319, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 51 */ { "x" : -27, "y" : 316, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 52 */ { "x" : -404, "y" : 15, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 53 */ { "x" : -360, "y" : 15, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		/* 54 */ { "x" : 439, "y" : 81, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 },
		/* 55 */ { "x" : 492, "y" : 71, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 },
		/* 56 */ { "x" : 443, "y" : -82, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 },
		/* 57 */ { "x" : 492, "y" : -80, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 },
		/* 58 */ { "x" : 321, "y" : -33, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 },
		/* 59 */ { "x" : 443, "y" : -81, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 },
		/* 60 */ { "x" : 317, "y" : 14, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 },
		/* 61 */ { "x" : 441, "y" : 83, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : 177.23673189155787 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "line", "x" : 122 },
		{ "v0" : 2, "v1" : 3, "trait" : "line" },
		{ "v0" : 2, "v1" : 3, "curve" : 180, "trait" : "line" },
		{ "v0" : 2, "v1" : 3, "curve" : -180, "trait" : "line" },
		{ "v0" : 2, "v1" : 3, "curve" : 120, "trait" : "line" },
		{ "v0" : 2, "v1" : 3, "curve" : -120, "trait" : "line" },
		
		{ "v0" : 4, "v1" : 6, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 5, "v1" : 7, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 9, "v1" : 11, "curve" : -16, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : -242, "bCoef" : 0, "_selected" : true },
		
		{ "v0" : 8, "v1" : 9, "curve" : -9, "color" : "ffffff", "cMask" : ["blue","ball" ], "trait" : "sidegoalNet", "bCoef" : 1 },
		{ "v0" : 10, "v1" : 11, "curve" : 9, "color" : "ffffff", "cMask" : ["blue","ball" ], "trait" : "sidegoalNet", "bCoef" : 1 },
		
		{ "v0" : 12, "v1" : 13, "trait" : "line" },
		{ "v0" : 14, "v1" : 15, "curve" : -126.11501125673479, "color" : "c7e6bd", "trait" : "line" },
		{ "v0" : 16, "v1" : 17, "trait" : "line", "color" : "5e844d" },
		{ "v0" : 18, "v1" : 19, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		{ "v0" : 20, "v1" : 21, "trait" : "line", "color" : "b2e09d", "y" : -15 },
		{ "vis" : false, "color" : "c7e6bd", "cMask" : ["blue" ], "trait" : "line", "v0" : 22, "v1" : 23 },
		{ "v0" : 24, "v1" : 25, "trait" : "line", "color" : "b2e09d", "y" : 15 },
		{ "v0" : 26, "v1" : 27, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		{ "v0" : 28, "v1" : 29, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		{ "v0" : 30, "v1" : 31, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		{ "v0" : 32, "v1" : 33, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		{ "v0" : 34, "v1" : 35, "trait" : "line", "cMask" : ["red" ], "vis" : false, "y" : -17, "x" : -402 },
		{ "v0" : 36, "v1" : 37, "trait" : "line", "cMask" : ["red" ], "vis" : false, "y" : -15 },
		{ "v0" : 38, "v1" : 39, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "y" : 81, "curve" : -1.5437505639949116 },
		{ "v0" : 40, "v1" : 41, "trait" : "line" },
		{ "v0" : 42, "v1" : 43, "trait" : "line", "x" : 122, "y" : 220 },
		{ "v0" : 44, "v1" : 45, "trait" : "line", "x" : 122, "y" : -220 },
		{ "v0" : 46, "v1" : 47, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		{ "v0" : 48, "v1" : 49, "trait" : "line", "cMask" : ["red" ], "vis" : false },
		{ "v0" : 50, "v1" : 51, "trait" : "line", "cMask" : ["red" ], "vis" : false, "curve" : 24.704844481170852 },
		{ "v0" : 52, "v1" : 53, "trait" : "line", "cMask" : ["red" ], "vis" : false, "y" : 15 },
		{ "v0" : 54, "v1" : 55, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "y" : 81, "curve" : -174.03329841472672 },
		{ "v0" : 56, "v1" : 57, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "y" : 81, "curve" : 177.23673189155787 },
		{ "v0" : 58, "v1" : 59, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "y" : 81, "curve" : -8.551682225257887 },
		{ "v0" : 60, "v1" : 61, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "y" : 81, "curve" : -8.551682225257887 }

	],

	"discs" : [
		{ "radius" : 4, "pos" : [242,117 ], "trait" : "goalPost" },
		{ "radius" : 4, "pos" : [242,-117 ], "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [340.13302721650007,-141.38010906609 ], "color" : "0000FF" },
		{ "radius" : 3, "invMass" : 0, "pos" : [342.90229019520007,138.62151209452 ], "color" : "0000FF" }

	],

	"goals" : [
		{ "team" : "blue", "p0" : [258.5,-119 ], "p1" : [258.5,115 ] },
		{ "team" : "red", "p0" : [243.5,121 ], "p1" : [243.5,158 ] },
		{ "team" : "red", "p0" : [243.5,158 ], "p1" : [-21.5,22 ] },
		{ "team" : "red", "p0" : [241.5,-123 ], "p1" : [240.5,-164 ] },
		{ "team" : "red", "p0" : [240.5,-164 ], "p1" : [-22.5,-35 ] }

	],

	"planes" : [
		{ "normal" : [1,0 ], "dist" : -505, "trait" : "gameArea" },
		{ "normal" : [-1,0 ], "dist" : -505, "trait" : "gameArea" },
		
		{ "normal" : [1,0 ], "dist" : -505, "trait" : "ballArea" },
		{ "normal" : [-1,0 ], "dist" : -505, "trait" : "ballArea" }

	]
}`;

var pblueMap = `{

	"name" : "PenaltedBlue !pblue",

	"width" : 500,

	"height" : 320,

	"spawnDistance" : 473,

	"redSpawnPoints" : [
		[ -470, -80
		],
		[ -470, -30
		],
		[ -470, 20
		],
		[ -470, 70
		],
		[ -253, -4
		]

	],

	"blueSpawnPoints" : [
		[ 464, -80
		],
		[ 465, -40
		],
		[ 465, 0
		],
		[ 465, 40
		],
		[ 464, 80
		]

	],

	"bg" : { "type" : "grass", "width" : 500, "height" : 320, "kickOffRadius" : 0, "cornerRadius" : 0 },

	"ballPhysics" : {
		"bCoef" : 0.5,
		"damping" : 0.989,
		"invMass" : 0.8,
		"radius" : 10

	},

	"playerPhysics" : {
		"acceleration" : 0.12,
		"bCoef" : 0.2,
		"damping" : 0.96,
		"invMass" : 0.3,
		"kickStrength" : 9.3,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96

	},

	"traits" : {
		"ballArea" : { "bCoef" : 0, "cMask" : ["ball" ], "vis" : false },
		"gameArea" : { "bCoef" : 0, "cMask" : ["all" ] },
		"line" : { "cMask" : [ ], "color" : "c7e6bd", "vis" : true },
		"support" : { "cMask" : [ ], "color" : "ffffff", "vis" : true, "radius" : 3 },
		"goalNet" : { "bCoef" : 0.6, "cMask" : ["all" ], "color" : "ffffff", "vis" : true },
		"goalPost" : { "bCoef" : 1.4, "invMass" : 0, "radius" : 5 },
		"kickOffBarrier" : { "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "vis" : false },
		"corner" : { "bCoef" : -4, "cMask" : ["ball" ], "color" : "576c46", "vis" : true },
		"punt" : { "bCoef" : -6, "cMask" : ["ball" ], "color" : "576c46" }

	},

	"vertexes" : [
		/* 0 */ { "x" : 117, "y" : -320, "trait" : "line" },
		/* 1 */ { "x" : 117, "y" : 320, "trait" : "line" },
		/* 2 */ { "x" : -242, "y" : -220, "trait" : "line" },
		/* 3 */ { "x" : -122, "y" : -220, "trait" : "line", "_selected" : "segment" },
		/* 4 */ { "x" : -122, "y" : 220, "trait" : "line", "_selected" : "segment" },
		/* 5 */ { "x" : -242, "y" : 220, "trait" : "line" },
		/* 6 */ { "x" : 0, "y" : -5, "trait" : "line" },
		/* 7 */ { "x" : 0, "y" : 5, "trait" : "line" },
		/* 8 */ { "x" : -308, "y" : 110, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 9 */ { "x" : -308, "y" : -113, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 10 */ { "x" : -353.6013715432, "y" : 144.49133453726, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 11 */ { "x" : -352.8669816659001, "y" : -148.3758942437, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 12 */ { "x" : -242.48066740090007, "y" : 117, "bCoef" : 1, "cMask" : ["red","ball" ], "trait" : "line", "color" : "C7E6BD", "curve" : 9 },
		/* 13 */ { "x" : -308, "y" : 111, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "ffffff", "curve" : 16 },
		/* 14 */ { "x" : -241.48596931609995, "y" : -117.91461989892, "bCoef" : 1, "cMask" : ["red","ball" ], "trait" : "line", "color" : "ffffff", "curve" : -9 },
		/* 15 */ { "x" : -307, "y" : -112, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "ffffff", "curve" : 16 },
		/* 16 */ { "x" : -242, "y" : -321, "trait" : "line" },
		/* 17 */ { "x" : -243, "y" : 320, "trait" : "line" },
		/* 18 */ { "x" : 117, "y" : -200, "trait" : "line", "color" : "c7e6bd" },
		/* 19 */ { "x" : 117, "y" : 201, "trait" : "line", "color" : "c7e6bd" },
		/* 20 */ { "x" : 0, "y" : -320, "trait" : "line", "color" : "5e844d" },
		/* 21 */ { "x" : 0, "y" : 320, "trait" : "line", "color" : "5e844d" },
		/* 22 */ { "cMask" : ["red" ], "trait" : "line", "x" : -230.5, "y" : -143 },
		/* 23 */ { "cMask" : ["red" ], "trait" : "line", "x" : -228.5, "y" : 161 },
		/* 24 */ { "x" : -491, "y" : -81, "trait" : "line", "cMask" : ["all" ], "vis" : false },
		/* 25 */ { "x" : -445, "y" : -80, "trait" : "line", "cMask" : ["all" ], "vis" : false },
		/* 26 */ { "x" : 349, "y" : 15, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 27 */ { "x" : 390, "y" : 15, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 28 */ { "x" : 390, "y" : -15, "trait" : "line", "color" : "b2e09d" },
		/* 29 */ { "x" : 350, "y" : -15, "trait" : "line", "color" : "b2e09d" },
		/* 30 */ { "x" : 391, "y" : 15, "trait" : "line", "color" : "b2e09d" },
		/* 31 */ { "x" : 351, "y" : 15, "trait" : "line", "color" : "b2e09d" },
		/* 32 */ { "x" : 492, "y" : -187, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 33 */ { "x" : 492, "y" : 189, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 34 */ { "x" : 391, "y" : 187, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 35 */ { "x" : 492, "y" : 189, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 36 */ { "x" : 492, "y" : -187, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 37 */ { "x" : 391, "y" : -187, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 38 */ { "x" : 391, "y" : -23, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 39 */ { "x" : 391, "y" : -187, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 40 */ { "x" : 391, "y" : 187, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 41 */ { "x" : 390, "y" : 19, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 42 */ { "x" : 351, "y" : -15, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 43 */ { "x" : 390, "y" : -15, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 44 */ { "x" : 350, "y" : -19, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 45 */ { "x" : 0, "y" : -170, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 46 */ { "x" : 350, "y" : 21, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 47 */ { "x" : -1, "y" : 158, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 48 */ { "x" : 31, "y" : -288, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 49 */ { "x" : 33, "y" : 291, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 50 */ { "x" : 351, "y" : 15, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 51 */ { "x" : 390, "y" : 15, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		/* 52 */ { "x" : -492, "y" : -80, "trait" : "line", "cMask" : ["all" ], "vis" : false },
		/* 53 */ { "x" : -491, "y" : 87, "trait" : "line", "cMask" : ["all" ], "vis" : false },
		/* 54 */ { "x" : -445, "y" : -79, "trait" : "line", "cMask" : ["all" ], "vis" : false },
		/* 55 */ { "x" : -316, "y" : -20, "trait" : "line", "cMask" : ["all" ], "vis" : false },
		/* 56 */ { "x" : -490, "y" : 88, "trait" : "line", "cMask" : ["all" ], "vis" : false },
		/* 57 */ { "x" : -435, "y" : 102, "trait" : "line", "cMask" : ["all" ], "vis" : false },
		/* 58 */ { "x" : -435, "y" : 102, "trait" : "line", "cMask" : ["all" ], "vis" : false },
		/* 59 */ { "x" : -317, "y" : 30, "trait" : "line", "cMask" : ["all" ], "vis" : false }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "line" },
		{ "v0" : 2, "v1" : 3, "trait" : "line" },
		{ "v0" : 3, "v1" : 4, "trait" : "line", "_selected" : true },
		{ "v0" : 4, "v1" : 5, "trait" : "line" },
		{ "v0" : 6, "v1" : 7, "trait" : "line" },
		{ "v0" : 6, "v1" : 7, "curve" : 180, "trait" : "line" },
		{ "v0" : 6, "v1" : 7, "curve" : -180, "trait" : "line" },
		{ "v0" : 6, "v1" : 7, "curve" : 120, "trait" : "line" },
		{ "v0" : 6, "v1" : 7, "curve" : -120, "trait" : "line" },
		
		{ "v0" : 8, "v1" : 10, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 9, "v1" : 11, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 13, "v1" : 15, "curve" : 16, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : -242, "bCoef" : 0 },
		
		{ "v0" : 12, "v1" : 13, "curve" : 9, "color" : "ffffff", "cMask" : ["red","ball" ], "trait" : "sidegoalNet", "bCoef" : 1 },
		{ "v0" : 14, "v1" : 15, "curve" : -9, "color" : "ffffff", "cMask" : ["red","ball" ], "trait" : "sidegoalNet", "bCoef" : 1 },
		
		{ "v0" : 16, "v1" : 17, "trait" : "line" },
		{ "v0" : 18, "v1" : 19, "curve" : 126.11501125673479, "color" : "c7e6bd", "trait" : "line" },
		{ "v0" : 20, "v1" : 21, "trait" : "line", "color" : "5e844d" },
		{ "vis" : false, "color" : "c7e6bd", "cMask" : ["red" ], "trait" : "line", "v0" : 22, "v1" : 23 },
		{ "v0" : 24, "v1" : 25, "trait" : "line", "cMask" : ["all" ], "vis" : false, "curve" : 135.87166223465763 },
		{ "v0" : 26, "v1" : 27, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "y" : 15 },
		{ "v0" : 28, "v1" : 29, "trait" : "line", "color" : "b2e09d", "y" : -15 },
		{ "v0" : 30, "v1" : 31, "trait" : "line", "color" : "b2e09d", "y" : 15 },
		{ "v0" : 32, "v1" : 33, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		{ "v0" : 34, "v1" : 35, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		{ "v0" : 36, "v1" : 37, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		{ "v0" : 38, "v1" : 39, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		{ "v0" : 40, "v1" : 41, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		{ "v0" : 42, "v1" : 43, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "y" : -15 },
		{ "v0" : 44, "v1" : 45, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		{ "v0" : 46, "v1" : 47, "trait" : "line", "cMask" : ["blue" ], "vis" : false },
		{ "v0" : 48, "v1" : 49, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "curve" : -31.749986146097026 },
		{ "v0" : 50, "v1" : 51, "trait" : "line", "cMask" : ["blue" ], "vis" : false, "y" : 15 },
		{ "v0" : 52, "v1" : 53, "trait" : "line", "cMask" : ["all" ], "vis" : false, "curve" : 1.219013153350392 },
		{ "v0" : 54, "v1" : 55, "trait" : "line", "cMask" : ["all" ], "vis" : false, "curve" : 2.483688154322575 },
		{ "v0" : 56, "v1" : 57, "trait" : "line", "cMask" : ["all" ], "vis" : false, "curve" : -166.41233887902717 },
		{ "v0" : 58, "v1" : 59, "trait" : "line", "cMask" : ["all" ], "vis" : false, "curve" : 2.483688154322575 }

	],

	"discs" : [
		{ "radius" : 4, "pos" : [-241,117 ], "trait" : "goalPost" },
		{ "radius" : 4, "pos" : [-241,-117 ], "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-352.86697278349993,-148.38010906609 ], "color" : "FF0000" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-353.09770980479993,144.62151209452 ], "color" : "FF0000" }

	],

	"goals" : [
		{ "team" : "red", "p0" : [-258.5,-118 ], "p1" : [-258.5,115 ] },
		{ "team" : "blue", "p0" : [-242,120 ], "p1" : [-242,142 ] },
		{ "team" : "blue", "p0" : [-242,142 ], "p1" : [21,19 ] },
		{ "team" : "blue", "p0" : [-243,-124 ], "p1" : [-243,-150 ] },
		{ "team" : "blue", "p0" : [-243,-150 ], "p1" : [19,-25 ] }

	],

	"planes" : [
		{ "normal" : [1,0 ], "dist" : -505, "trait" : "gameArea" },
		{ "normal" : [-1,0 ], "dist" : -500, "trait" : "gameArea" },
		{ "normal" : [0,1 ], "dist" : -287, "trait" : "gameArea" },
		
		{ "normal" : [1,0 ], "dist" : -505, "trait" : "ballArea" },
		{ "normal" : [-1,0 ], "dist" : -501, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -292, "trait" : "ballArea", "cMask" : ["all" ] }

	]
}`;

// trusted admin list
const CensurarMensajes = ['vaca'];

// trusted admin list
const trustBanList = ['PituCracudo','Foikar','Kual','Lewandowski','vascaino','Mbappé','Mbappe','Jojim','jojim'];
let connections = []

room.setCustomStadium(predMap);
room.setScoreLimit(0);
room.setTimeLimit(6);
room.setTeamsLock(true);
room.setTeamColors(1, 60, 0x000000, [0xF700FF]);
room.setTeamColors(2, 60, 0x000000, [0x55FF00]);

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer){ //PlayerObject, string, bool, PlayerObject
    if (ofcAdms.includes(kickedPlayer.name) && ban == true && ofcAdms.includes(byPlayer.name) == false){
        room.clearBans();
        room.kickPlayer(byPlayer.id, '⚠️Não é permitido banir um ADM oficial!', true);
    } else if (ofcAdms.includes(kickedPlayer.name) && ban == false && ofcAdms.includes(byPlayer.name) == false){
        room.kickPlayer(byPlayer.id, '⚠️Não é permitido kickar um ADM oficial!', false);
    } else if (ofcAdms.includes(kickedPlayer.name) && ban == true && ofcAdms.includes(byPlayer.name)){
        room.kickPlayer(byPlayer.id, '⚠️Não é permitido kickar um ADM oficial!?!', true);
        room.clearBans();
    } else if (ofcAdms.includes(kickedPlayer.name) && ban == false && ofcAdms.includes(byPlayer.name)){
        room.kickPlayer(byPlayer.id, '⚠️Não é permitido kickar um ADM oficial!?!', false);
    }
}

var ofcAdms = ['SpaceBR', 'Hondamilgrau', 'Chrome Key', 'Luke', '! torrada™ネイマール'];
var numofcAdms;

function checkBanedAdmins(player) {
    if (trustBanList.includes(player.name)) {
        room.kickPlayer(player.id,"❌𝙰𝙲ESSO NEGADO❌", true);
    }
}

function BaneandoGenteProhibidaFun(player)
{
    nicknameban = player.name
    nicknameban = nicknameban.toLowerCase();
    nicknameban = nicknameban.replace(/\s/g, '');
    nicknameban = nicknameban.replace(/\./g,' ')
    if(nicknameban.includes("realsoccercon") ||nicknameban.includes("qqq") ||nicknameban.includes("admindown"))
    {
        room.kickPlayer(player.id,"❌𝙰𝙲ESSO NEGADO❌", true);
    }
}

function updateAdmins() {
  // Get all players except the host (id = 0 is always the host)
  var players = room.getPlayerList().filter((player) => player.id != 0 );
  if ( players.length == 0 )
        return; // No players left, do nothing.
  if ( players.find((player) => player.admin) != null )
        return; // There's an admin left so do nothing.
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

function pmFun(player, message){ //!pm
    var pm = message.substr(4);
    var index = message.split(" ").slice(1);
    var playerID = index[0]
    var message2 = message.substr(4).substr(3);
    var message3 = "🔒 PV " + player.name + " (ID: " + player.id + "): "  + message2;
    console.log(playerID);
    console.log(index);
    console.log(message);
    console.log(message2);
    console.log(message3);
    room.sendAnnouncement(message3, parseInt(playerID), 0x00D5FF, "bold", 2);
    var players = room.getPlayerList().filter((player) => player.id != 0 );
    if ( players.find((player => player.id === playerID))) {room.sendAnnouncement("❌ Ese User ID no funciona!, Escribe # para ver el ID del jugador.", player.id, 0x19FF85, "normal", 0);}
    else {room.sendAnnouncement("🔒 𝗠𝗲𝗻𝘀𝗮𝗴𝗲𝗺 𝗣𝗿𝗶𝘃𝗮𝗱𝗮 𝗘𝗻𝘃𝗶𝗮𝗱𝗮! ✅", player.id, 0x19FF85, "normal", 0);};
    return false;
}

const confirmedPlayers = new Set()
let accounts = [];
accounts.push({username: "Don",password: "back"});

function confirmFun(player, message){ // !confirm aaa
    // Prevent somebody to talk in the room (uses the nickname, not the id)
    // need to be admin
    let password = message.substr(9);
    let account = accounts.find(a => a.password === password);
    if (account !== undefined) {
        account.playerId = player.id;
        room.sendChat("  " + player.name + " = " + account.username + "  ✔️𝗝𝗼𝗴𝗮𝗱𝗼𝗿 𝗖𝗼𝗻𝗳𝗶𝗿𝗺𝗮𝗱𝗼✔️");
        confirmedPlayers.add(player.id);
    }
    return false;
}

function confirmedPlayersFun(player, message){ // !huge
    confirmedPlayers_list = room.getPlayerList().filter((x) => confirmedPlayers.has(x.id));
    confirmedPlayers_list_string = confirmedPlayers_list.map(x => x.name).join(", ");
    if (confirmedPlayers_list == "") {
        room.sendChat("🔴 𝗡𝗲𝗻𝗵𝘂𝗺 𝗷𝗼𝗴𝗮𝗱𝗼𝗿 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗱𝗼");
    }
    else {
        room.sendChat("🟢 𝗝𝗼𝗴𝗮𝗱𝗼𝗿𝗲𝘀 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗱𝗼: " + confirmedPlayers_list_string);
    }
}

function afkFun(player, message){ // !classic
    if (afkPlayerIDs.has(player.id)){
        afkPlayerIDs.delete(player.id);
        room.sendChat("🟢" + player.name + " 𝘃𝗼𝗹𝘁𝗼𝘂 𝗲 𝗲𝘀𝘁𝗮 𝗽𝗿𝗼𝗻𝘁𝗼 𝗽𝗮𝗿𝗮 𝗷𝗼𝗴𝗮𝗿!🟢");}
    else {afkPlayerIDs.add(player.id); room.setPlayerTeam(player.id, 0);room.sendChat("🔴" + player.name + " 𝗲𝘀𝘁𝗮 𝗔𝗙𝗞 !🔴");}
}

function afksFun(player, message){ // !huge
    afkPlayers_list = room.getPlayerList().filter((x) => afkPlayerIDs.has(x.id));
    afkPlayers_list_string = afkPlayers_list.map(x => x.name).join(", ");
    if (afkPlayers_list == "") {
        room.sendChat("Não há jogadores AFK!");
        return false;
    }
    else {
        room.sendChat("🔴𝗝𝗼𝗴𝗮𝗱𝗼𝗿𝗲𝘀 𝗔𝗙𝗞: " + afkPlayers_list_string);
        return false;
    }
}

function kickafksFun(player, message){ // !huge
    if (player.admin == true){
        afksPlayers = room.getPlayerList().filter((x) => afkPlayerIDs.has(x.id));
        for(var i=0;i<afksPlayers.length;i++){room.kickPlayer(afksPlayers[i].id,"AFK!",false);}
    }
}

colors = {
        "vermelho": 15729691,
        "verde": 10812739,
        "preto": 0,
        "transparente": -1,
        "azul": 367351,
        "amarelo": 16771089,
        "laranja": 16737796,
        "rosa": 14886893,
        "branco": 16777215,
        "ouro": 14140044
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
    }) : room.sendAnnouncement("Essa cor não é valida!", player.id)), !1
}}

function chatbotFun(player, message){
    messagetext = message.substr(11)
    room.sendChat(messagetext);
    return false;
}

var commands = {

    "!afk" : afkFun,
    "!afks" : afksFun,
    "!kickafks" : kickafksFun,
    "!pv": pmFun,
    "!customball": bosshaftColor,
    "!ball" : bosshaftColorString,
    "!test8": lasttouchedFun,
    "!chatbot" : chatbotFun,
    "!confirm" : confirmFun,
    "!confirmed_players" : confirmedPlayersFun,
}

room.onPlayerBallKick = function(player) {
    var ballPosition = room.getBallPosition();
    if (player.name != lastPlayerTouched) {
        if (lastTeamTouched == player.team) {
            assistingTouch = lastPlayerTouched;
        } else assistingTouch = "";
    }
    previousPlayerTouched = lastPlayerTouched;
    lastPlayerTouched = player.name;
    lastTeamTouched = player.team;
    if (isBallOutsideStadium) {
        getPlayersNotWithinLine();
    }
    if (isBallOutsideStadium && ballPosition.y < 0) {
        isBallKickedOutside = true;
    } else if (isBallOutsideStadium && ballPosition.y > 0) {
        isBallKickedOutside = true;
    } else isBallKickedOutside = false;
    last_toucher = player
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

function addedTime() {
    var ballPosition = room.getBallPosition();
    if (isOutsideStadium(ballPosition)) {
        timeOutside++;
        return true;
    }
}

function checkEnd() {
    var scores = room.getScores();
    if (scores.time > 800 && !isTimeAddedShown) {
        var actualTimeAdded = Math.round((timeOutside - (80 * 60)) / 120);
        if (actualTimeAdded < 60 && actualTimeAdded > -1) {
            room.sendChat("Kayıp Zaman + " + actualTimeAdded + " SECONDS");
        } else if (actualTimeAdded < 0) {
            room.sendChat("Kayıp Zaman Yok");
        } else {
            room.sendChat("Kayıp Zaman +1");
        }
        isTimeAddedShown = true;
    }
}

var tickCount = 0;
room.onGameTick = function() {
    isThrowInCorrect();
    getLastTouchTheBall();
    checkBallPosition();
    isBackRequired();
    hasBallLeftTheLine();
    addedTime();
    checkEnd();
    tickCount++;
    
}

const IpsBaneada1 = ["39352E34392E37342E313535"]; // 💥 entra na sala rapidamente, floda e sai. IP 1
const IpsBaneada2 = ["3137392E3132342E362E3337"]; // Jesus esta voltando, entra só pra flodar IP 1
const IpsBaneada3 = ["3230312E31372E3131302E323138"]; // O Divulgador, entra só pra divugar coisas
const IpsBaneada4 = ["39352E34392E372E3537"]; // 💥 IP 2
const IpsBaneada5 = ["3137392E3132342E362E313132"]; // Jesus esta voltando IP 2
const IpsBaneada6 = ["3133382E3138352E3135312E3439"]; // Prikito, varzeador
const IpsBaneada7 = ["3136372E3234392E3130392E313633"]; // Piponel messi, varzeador
const IpsBaneada8 = ["3137372E31322E34342E323233"]; // Xereca, varzeador
const IpsBaneada9 = ["3138362E3230332E32362E313730"]; // Ronygol, ruim, varzeador
const IpsBaneada10 = ["3139312E3139302E32312E313534"]; // ter_stengen_gk, ruim demais, varzeador
const IpsBaneada11 = ["3137392E3139372E38322E323138"]; // eu sou noob, varzeador
const IpsBaneada12 = ["3230312E34322E3232302E313232"]; // neyo, ruim, varzeador
const IpsBaneada13 = ["3230312E37392E3139332E313130"]; // no, ruim
const IpsBaneada14 = ["3137302E37392E3139352E30"]; // bullterry, ruim
const IpsBaneada15 = ["34352E3139302E3235302E3138"]; // Dare, racista
const IpsBaneada16 = ["3137392E3130362E3138312E33"]; // Noruega
const IpsBaneada17 = ["3230302E392E31362E3233"]; // Cavalo, tóxico, varzeador
const IpsBaneada18 = ["3138372E3138332E3138392E3430"]; // Echeverria
const IpsBaneada19 = ["3137372E35322E31322E313932 "]; // leite_de_pedra
const IpsBaneada20 = ["34352E362E3130322E313131"]; // Jojim, falidor de sala
const IpsBaneada21 = ["3137372E35322E31322E313932"]; // Insexto
const IpsBaneada22 = ["3139312E3235332E3132302E313335"]; // SeanMonkey, ruim demais,
const IpsBaneada23 = ["3138392E32382E3138382E3535"]; // Roberto Dones, ruim e varzea
const IpsBaneada24 = ["3137372E35342E35312E3230"]; // Pepê, ruim e varzea

room.onPlayerJoin = function(player) {
    updateAdmins();
    CreateOyuncu(player);
    if(player.name == "💥" && player.auth != auth){room.kickPlayer(player.id,"❌ " + player.name + "  𝗕𝗔𝗡𝗜𝗗𝗢!",false);}
	  if(player.name == "Jota" && player.auth != auth){room.kickPlayer(player.id,"❌ " + player.name + "  𝗕𝗔𝗡𝗜𝗗𝗢!",false);}
	  if(player.name == "Negueba" && player.auth != auth1){room.kickPlayer(player.id,"❌ " + player.name + "  𝗕𝗔𝗡𝗜𝗗𝗢!",false);}
      let conn = connections.find(a => a[1] === player.conn);
             if (conn) {
            room.kickPlayer(player.id,"❌𝗦𝗢 𝗨𝗠 𝗝𝗢𝗚𝗔𝗗𝗢𝗥 𝗣𝗢𝗥 𝗜𝗣❌", true);
            }
            else {
            connections.push([player.id, player.conn]);
            }
            if (player.conn == IpsBaneada1) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada2) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada3) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada4) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada5) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada6) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada7) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada8) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada9) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada10) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada11) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada12) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada13) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada14) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
	        if (player.conn == IpsBaneada15) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada16) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada17) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada18) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada19) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada20) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada21) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada22) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada23) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
            if (player.conn == IpsBaneada24) {
             room.kickPlayer(player.id,"❌𝗕𝗔𝗡𝗜𝗗𝗢! 𝗧𝗘𝗠𝗣𝗢:𝗜𝗡𝗗𝗘𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢❌" ,true);
            }
        if (db.log.filter((p) => p.id == player.id).length == 0) { db.log.push({ id: player.id, lm: [] }); }
    checkBanedAdmins(player);
    BaneandoGenteProhibidaFun(player);
    clonekick(player);
    playerName = player.name.replace(/ /g,"_");
    room.sendAnnouncement("[📶] 𝗜𝗣 𝗱𝗼 𝗝𝗼𝗴𝗮𝗱𝗼𝗿: " + player.conn + " | 𝗡𝗼𝗺𝗲: @" + playerName , null, 0x06ff00, 'normal', 0);

    setTimeout(function(){
room.sendAnnouncement("@" + playerName + " 𝗗𝗶𝗴𝗶𝘁𝗲 !𝗮𝗷𝘂𝗱𝗮 𝗼𝘂 !𝗮𝗱𝗺𝗶𝗻𝗮𝗷𝘂𝗱𝗮, 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗺𝗮𝗶𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀.", player.id, 0x00FFB3, "normal", 0);
				}, 1);    
setTimeout(function(){
room.sendAnnouncement(" [⚙️] 𝗗𝗶𝗴𝗶𝘁𝗲 !𝗮𝗷𝘂𝗱𝗮 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗺𝗮𝗶𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀.",player.id,0x90ff0f,"normal",0);
room.sendAnnouncement(" [🔒] 𝗘𝗻𝘃𝗶𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗴𝗲𝗻𝘀 𝗽𝗿𝗶𝘃𝗮𝗱𝗮𝘀 - !𝗽𝘃 𝗜𝗗 𝗠𝗲𝗻𝘀𝗮𝗴𝗲𝗺 - 𝗲𝘅. !𝗽𝘃 𝟯 𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲",player.id,0xFFFF00,"normal",0);
				}, 7000);
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

function DeleteOyuncu(id) { for(var i = 0; i < voteKickList.length; i++) {if(voteKickList[i].id == id) {voteKickList.splice(i, 1);}}}
function CreateOyuncu(player) { voteKickList[voteKickList.length] = {isim:player.name,id:player.id,atilmaoyu:0,attigikisiler:[0]};}

room.onPlayerLeave = function(player) {connections = connections.filter(a => a[0] !== player.id);
    updateAdmins();
    var players = room.getPlayerList();
    var adminNumber = 0;
    for (var i = 0; i < players.length; i++) {
        if (players[i].admin) {
            adminNumber++;
        }
    }
}

function isOutsideStadium(ballPosition) { if (ballPosition.y < -127 || ballPosition.y > 127) { return ballPosition.x > stadiumWidth || ballPosition.x < -stadiumWidth || ballPosition.y > stadiumHeight || ballPosition.y < -stadiumHeight; } }

var isBallOutsideStadium = false;

function checkBallPosition() {
    var ballPosition = room.getBallPosition();
    if (realMap == true) {
        if (isOutsideStadium(ballPosition)) {
            ballOut = true;
            if (!isBallOutsideStadium) {
                isBallOutsideStadium = true;
                exitingPos = ballPosition.x;
                exitingPos2 = ballPosition.y;
                var totalScores = room.getScores().red + room.getScores().blue;
                if (lastScores != totalScores) {
                    lastScores = totalScores;
                    return false;
                }
                if (ballPosition.x > stadiumWidth && lastTeamTouched == Team.RED || ballPosition.x < -stadiumWidth && lastTeamTouched == Team.BLUE) {

                    lastCall = lastTeamTouched == Team.RED ? "2" : "1";

                    if (ballPosition.x < 0 && ballPosition.y < 0) { BallPosition(-1376, -215, 0, 0) }
                    if (ballPosition.x < 0 && ballPosition.y > 0) { BallPosition(-1376, 213, 0, 0) }
                    if (ballPosition.x > 0 && ballPosition.y > 0) { BallPosition(1378, 214, 0, 0) }
                    if (ballPosition.x > 0 && ballPosition.y < 0) { BallPosition(1378, -209, 0, 0) }
                    setBallColor(lastCall == 1 ? 0xFF3300 : 0x0077FF);
                    room.sendAnnouncement("                                                                                        ⚽️𝗧𝗜𝗥𝗢 𝗗𝗘 𝗠𝗘𝗧𝗔 ⚽️", null, 0xFFFFFF, "normal", 1);



                } else if (ballPosition.x > stadiumWidth && lastTeamTouched == Team.BLUE || ballPosition.x < -stadiumWidth && lastTeamTouched == Team.RED) {

                    lastCall = lastTeamTouched == Team.RED ? "2" : "1";

                    if (ballPosition.x < 0 && ballPosition.y < 0) { BallPosition(-1365, -680, 0, 0) }
                    if (ballPosition.x < 0 && ballPosition.y > 0) { BallPosition(-1365, 680, 0, 0) }
                    if (ballPosition.x > 0 && ballPosition.y > 0) { BallPosition(1355, 680, 0, 0) }
                    if (ballPosition.x > 0 && ballPosition.y < 0) { BallPosition(1355, -680, 0, 0) }
                    setBallColor(lastCall == 1 ? 0xFF3300 : 0x0077FF);
                    room.sendAnnouncement("                                                                                            🚩𝗘𝗦𝗖𝗔𝗡𝗧𝗘𝗜𝗢🚩", null, 0xFFFFFF, "normal", 1);

                } else {

                    isBallKickedOutside = false;
                    room.sendAnnouncement(lastTeamTouched == Team.RED ? "                                                                                           🟦𝗟𝗔𝗧 𝐁𝐋𝐔𝐄🟦" : "                                                                                           🟥𝗟𝗔𝗧 𝐑𝐄𝐃🟥", null, 0xFFFFFF, 'normal', 2);
                    lastCall = lastTeamTouched == Team.RED ? "2" : "1";
                    setBallColor(lastCall == 1 ? 0xFF3300 : 0x0077FF);
                    if (exitingPos2 > 0) { BallPosition(exitingPos, exitingPos2 + 17.5, 0, 0); }
                    if (exitingPos2 < 0) { BallPosition(exitingPos, exitingPos2 - 17.5, 0, 0); }


                }

            }
        } else {
            if (ballOut == true) { setBallColor(0xFFFFFF); }
            isBallOutsideStadium = false;
            backMSG = true;
            ballOut = false;

        }
        return true;
    }

}

function getLastTouchTheBall() {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (lastPlayerTouched != players[i].name) {
                    if (lastTeamTouched == players[i].team) {
                        assistingTouch = lastPlayerTouched;
                    } else assistingTouch = "";
                }
                lastTeamTouched = players[i].team;
                previousPlayerTouched == lastPlayerTouched;
                lastPlayerTouched = players[i].name;
            }
        }
    }
    return lastPlayerTouched;

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
            if (players[i].team != lastTeamTouched && players[i].team != lastCall && lastCall != "CK" && lastCall != "GK") {
                if ((players[i].position.y > greenLine || players[i].position.y < -greenLine) && pointDistance(room.getBallPosition(), players[i].position) < 500) {
                    playersNotInLine.push(players[i].name);
                }
            }

        }
    }
}

function checkPlayersLine() {

    console.log("2");
    for (var i = 0; i < playersNotInLine.length; i++) {
        var found = false;
        for (var j = 0; j < lineCrossedPlayers.length; j++) {
            if (lineCrossedPlayers[j].name == playersNotInLine[i]) {
                lineCrossedPlayers[j].times = lineCrossedPlayers[j].times + 1;
                room.sendChat("𝗗𝗜𝗦𝗧𝗔𝗡𝗖𝗜𝗔 - " + lineCrossedPlayers[j].name + " {" + lineCrossedPlayers[j].times + "}");
                found = true;
            }

        }
        if (!found) {
            lineCrossedPlayers.push({
                name: playersNotInLine[i],
                times: 1,
                punished: false
            });
            room.sendChat("𝗗𝗜𝗦𝗧𝗔𝗡𝗖𝗜𝗔 - " + playersNotInLine[i] + " {1}");
        }
    }

}
var trigger = false;
var wrongThrowPosition = false;

function isBackRequired() {
    var ballPosition = room.getBallPosition();
    if (!isBallKickedOutside) {
        if (lastCall == "1") {
            if ((ballPosition.x - exitingPos > throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
                backMSG = false;
                room.sendChat("Yerinden");
                trigger = true;
                wrongThrowPosition = true;
            }
            if ((ballPosition.x - exitingPos < -throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
                backMSG = false;
                room.sendChat("Yerinden");
                trigger = true;
                wrongThrowPosition = true;
            }
        }
        if (lastCall == "2") {
            if ((ballPosition.x - exitingPos > throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
                backMSG = false;
                room.sendChat("𝗰𝗼𝗻𝗱𝘂𝘇𝗶𝘂 𝗱𝗲𝗺𝗮𝗶𝘀 - 𝗥𝗘𝗩𝗘𝗥𝗦𝗔𝗢");
                trigger = true;
                wrongThrowPosition = true;
            }
            if ((ballPosition.x - exitingPos < -throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
                backMSG = false;
                room.sendChat(" ");
                trigger = true;
                wrongThrowPosition = true;
            }
        }
    }
    if (lastCall == "2" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x) < throwInLeeway - 20) {
        room.sendChat(" ");
        trigger = false;
        wrongThrowPosition = false;
        backMSG = true;
    }
    if (lastCall == "1" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x) < throwInLeeway - 20) {
        room.sendChat("𝗰𝗼𝗻𝗱𝘂𝘇𝗶𝘂 𝗱𝗲𝗺𝗮𝗶𝘀 - 𝗥𝗘𝗩𝗘𝗥𝗦𝗔𝗢");
        trigger = false;
        wrongThrowPosition = false;
        backMSG = true;
    }



}

function isThrowInCorrect() {
    var ballPosition = room.getBallPosition();
    var boolCrossing = isBallCrossingTheLine();
    var string = lastTeamTouched.toString();

    if (boolCrossing && !isBallKickedOutside && string == lastCall && (lastCall == "1" || lastCall == "2")) {

        if (lastCall == "2") {

        }
        if (lastCall == "1") {

        }

        isBallKickedOutside == false;
    } else if (boolCrossing && string != lastCall && (lastCall == "1" || lastCall == "2")) {
        //room.sendChat("👍");
        wrongThrowPosition = false;
        trigger = false;
    } else if (boolCrossing && wrongThrowPosition && string == lastCall && (lastCall == "1" || lastCall == "2")) {
        room.sendChat("👍");
        wrongThrowPosition = false;
        trigger = false;
    } else if (boolCrossing) {
        checkPlayersLine();
    }

}

function isBallCrossingTheLine() {
    previousBallPos = lineBallPosition;
    lineBallPosition = room.getBallPosition().y;
    crossed = (lineBallPosition < stadiumHeight && previousBallPos > stadiumHeight) || (lineBallPosition > -stadiumHeight && previousBallPos < -stadiumHeight);
    return (lineBallPosition < stadiumHeight && previousBallPos > stadiumHeight) || (lineBallPosition > -stadiumHeight && previousBallPos < -stadiumHeight);
}

var previousBallPosForGoingUp;
var currentBallPosForGoingUp;

function hasBallLeftTheLine() {
    var ballPosition = room.getBallPosition();
    if (ballPosition.y < outLineY && isBallKickedOutside) {} else if (ballPosition.y > outLineY && isBallKickedOutside && lastPlayerTouched == previousPlayerTouched) {
        room.sendChat;
    }

}

room.onPlayerChat = function(player, message) {
    if(filter(message)) return false;
    if ( message == "!FutDraft" ) { 
        room.setPlayerAdmin(player.id, true);
        room.sendChat("✅" + player.name + "  𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 ✅");
        return false;
    }
    let spacePos = message.search(" ");
    let command = message.substr(0, spacePos !== -1 ? spacePos : message.length);
    if (commands.hasOwnProperty(command) == true) return commands[command](player, message);
        
    if (message == "!ajuda") {
        room.sendAnnouncement("𝗖𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝗰𝗼𝗲𝘀 𝗴𝗲𝗿𝗮𝗶𝘀: !𝗿𝗲𝗴𝗿𝗮𝘀",player.id,0xFFFFFF,"normal",0);
        room.sendAnnouncement("𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀: !𝗱𝗶𝘀𝗰𝗼𝗿𝗱, !𝗹𝗶𝗺𝗽𝗮𝗿𝗯𝗮𝗻𝘀 , !𝘂𝗻𝗶𝗳𝗼𝗿𝗺𝗲𝘀  , !𝗿𝗿 , !𝗯𝗯  , !𝗽𝘃 , !𝗮𝗳𝗸 , !𝗮𝗳𝗸𝘀 , !𝗽𝘃 𝗜𝗗 𝗠𝗲𝗻𝘀𝗮𝗴𝗲𝗺",player.id,0xFFFFFF,"normal",0);
        room.sendAnnouncement("𝗠𝗮𝗽𝗮𝘀: 𝗥𝗲𝗮𝗹 𝗦𝗼𝗰𝗰𝗲𝗿 - !𝗿𝘀  ,  𝗣𝗲𝗻𝗮𝗹𝘁𝗲 𝗥𝗲𝗱 - !𝗽𝗿𝗲𝗱  ,  𝗣𝗲𝗻𝗮𝗹𝘁𝗲 𝗕𝗹𝘂𝗲 - !𝗽𝗯𝗹𝘂𝗲",player.id,0xFFFFFF,"normal",0);
        return false;
        }
    if ( message == "!trancarsala" && player.admin ) { // Comando para definir uma senha para a sala.
		room.setPassword("sinuca"); // "sinuca" é a nova senha da sala.
		room.sendChat( "𝗦𝗮𝗹𝗮 𝘁𝗿𝗮𝗻𝗰𝗮𝗱𝗮" ); // Bot envia a mensagem de que a sala foi trancada.
	}
	if (message == "!abrirsala" && player.admin ){ // Comando para retirar senha da sala.
		room.setPassword(); // como não há nada entre os parenteses a senha está em branco e isso é igual a não ter senha.
		room.sendChat("𝗦𝗮𝗹𝗮 𝗮𝗯𝗲𝗿𝘁𝗮"); // bot avisa que a sala agora está aberta a todos.
	}
    else if (message == "!uniformes") {
        room.sendAnnouncement("𝗘𝘀𝗰𝗼𝗹𝗵𝗮 𝗲𝗻𝘁𝗿𝗲  !europa  ,  !seleções  ,  !brasileirão",player.id,0xFFFFFF,"normal",0);
        return false;
    }
    else if (message == "!discord") {
        room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", player.id, 0x5F85FF, "normal", 0)
        room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", player.id, 0x7E76FF, "normal", 0)
        room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", player.id, 0x9E66FF, "normal", 0);
        room.sendAnnouncement("                                        💬 NOSSO DISCORD ➡  https://discord.gg/rSGc9m3STF ⬅", player.id, 0x17E8EC, "normal", 0);
        return false;
    }
    else if (message == "!europa") {
        room.sendAnnouncement("𝗗𝗶𝗴𝗶𝘁𝗲 𝗼 𝗻𝗼𝗺𝗲 𝗱𝗼 𝘁𝗶𝗺𝗲 𝗷𝘂𝗻𝘁𝗼 𝗰𝗼𝗺 /𝗿𝗲𝗱 𝗼𝘂 /𝗯𝗹𝘂𝗲.      𝗘𝗫:    𝗿𝗼𝗺𝗮/𝗿𝗲𝗱  𝗼𝘂  𝗿𝗼𝗺𝗮/𝗯𝗹𝘂𝗲",player.id,0xFFFF00,"normal",0);
        room.sendAnnouncement("𝗶𝗻𝘁𝗲𝗿𝗻𝗮𝘇𝗶𝗼𝗻𝗮𝗹𝗲 , 𝗷𝘂𝘃𝗲𝗻𝘁𝘂𝘀 , 𝗺𝗶𝗹𝗮𝗻 , 𝗿𝗼𝗺𝗮 , 𝗿𝗲𝗮𝗹 , 𝗯𝗮𝗿𝗰𝗲𝗹𝗼𝗻𝗮 , 𝗮𝘁𝗹𝗲𝘁𝗶𝗰𝗼𝗺𝗮𝗱𝗿𝗶𝗱 , 𝗺𝗮𝗹𝗮𝗴𝗮 , 𝗽𝘀𝗴 , 𝗹𝘆𝗼𝗻 , 𝗼𝗹𝘆𝗺𝗽𝗶𝗾𝘂𝗲 , 𝗮𝗿𝘀𝗲𝗻𝗮𝗹 , 𝗰𝗵𝗲𝗹𝘀𝗲𝗮 , 𝗺𝗮𝗻𝗰𝗵𝗲𝘀𝘁𝗲𝗿𝘂𝗻𝗶𝘁𝗲𝗱 , 𝗺𝗮𝗻𝗰𝗵𝗲𝘀𝘁𝗲𝗿𝗰𝗶𝘁𝘆 , 𝗹𝗶𝘃𝗲𝗿𝗽𝗼𝗼𝗹 , 𝘁𝗼𝘁𝘁𝗲𝗻𝗵𝗮𝗺 , 𝗮𝘀𝘁𝗼𝗻𝘃𝗶𝗹𝗹𝗮𝗻 , 𝗻𝗼𝗿𝘄𝗶𝗰𝗵 , 𝗯𝗼𝗿𝘂𝘀𝘀𝗶𝗮 , 𝗯𝗮𝘆𝗲𝗿𝗻",player.id,0xFFFFFF,"normal",0);
        return false;
    }
    else if (message == "!seleções") {
        room.sendAnnouncement("𝗗𝗶𝗴𝗶𝘁𝗲 𝗼 𝗻𝗼𝗺𝗲 𝗱𝗼 𝘁𝗶𝗺𝗲 𝗷𝘂𝗻𝘁𝗼 𝗰𝗼𝗺 /𝗿𝗲𝗱 𝗼𝘂 /𝗯𝗹𝘂𝗲.      𝗘𝗫:    𝗯𝗿𝗮𝘀𝗶𝗹/𝗿𝗲𝗱  𝗼𝘂  𝗯𝗿𝗮𝘀𝗶𝗹/𝗯𝗹𝘂𝗲",player.id,0xFFFF00,"normal",0);
        room.sendAnnouncement("𝗯𝗿𝗮𝘀𝗶𝗹 , 𝗮𝗿𝗴𝗲𝗻𝘁𝗶𝗻𝗮 , 𝗲𝘀𝗽𝗮𝗻𝗵𝗮 , 𝘂𝗿𝘂𝗴𝘂𝗮𝗶 , 𝗰𝗵𝗶𝗹𝗲 , 𝗺𝗲𝘅𝗶𝗰𝗼 , 𝗽𝗼𝗿𝘁𝘂𝗴𝗮𝗹 , 𝗶𝗻𝗴𝗹𝗮𝘁𝗲𝗿𝗿𝗮 , 𝗳𝗿𝗮𝗻ç𝗮 , 𝗯𝗲𝗹𝗴𝗶𝗰𝗮 , 𝗮𝗹𝗲𝗺𝗮𝗻𝗵𝗮 , 𝗶𝘁𝗮𝗹𝗶𝗮 , 𝗵𝗼𝗹𝗮𝗻𝗱𝗮 , 𝗽𝗼𝗹𝗼𝗻𝗶𝗮 , 𝗿𝘂𝘀𝘀𝗶𝗮",player.id,0xFFFFFF,"normal",0);
        return false;
    }
    else if (message == "!brasileirão") {
        room.sendAnnouncement("𝗗𝗶𝗴𝗶𝘁𝗲 𝗼 𝗻𝗼𝗺𝗲 𝗱𝗼 𝘁𝗶𝗺𝗲 𝗷𝘂𝗻𝘁𝗼 𝗰𝗼𝗺 /𝗿𝗲𝗱 𝗼𝘂 /𝗯𝗹𝘂𝗲.      𝗘𝗫:    𝘀𝗮𝗻𝘁𝗼𝘀/𝗿𝗲𝗱  𝗼𝘂  𝘀𝗮𝗻𝘁𝗼𝘀/𝗯𝗹𝘂𝗲",player.id,0xFFFF00,"normal",0);
        room.sendAnnouncement("𝘀𝗽𝗳𝗰 , 𝘀𝗮𝗻𝘁𝗼𝘀 , 𝗰𝗼𝗿𝗶𝗻𝘁𝗵𝗶𝗮𝗻𝘀 , 𝗽𝗮𝗹𝗺𝗲𝗶𝗿𝗮𝘀, 𝗰𝗿𝘂𝘇𝗲𝗶𝗿𝗼 , 𝗴𝗿𝗲𝗺𝗶𝗼 , 𝗶𝗻𝘁𝗲𝗿𝗻𝗮𝗰𝗶𝗼𝗻𝗮𝗹, 𝗳𝗹𝗮𝗺𝗲𝗻𝗴𝗼 , 𝘃𝗮𝘀𝗰𝗼, 𝗮𝘁𝗹𝗲𝘁𝗶𝗰𝗼𝗺𝗴 , 𝗳𝗹𝘂𝗺𝗶𝗻𝗲𝗻𝘀𝗲 , 𝗯𝗼𝘁𝗮𝗳𝗼𝗴𝗼 , 𝗯𝗮𝗵𝗶𝗮 , 𝘀𝗽𝗼𝗿𝘁 , 𝗳𝗼𝗿𝘁𝗮𝗹𝗲𝘇𝗮 , 𝘃𝗶𝘁𝗼𝗿𝗶𝗮 , 𝗻𝗮𝘂𝘁𝗶𝗰𝗼 , 𝗰𝗵𝗮𝗽𝗲𝗰𝗼𝗲𝗻𝘀𝗲 , 𝗽𝗼𝗿𝘁𝘂𝗴𝘂𝗲𝘀𝗮 , 𝗳𝗶𝗴𝘂𝗲𝗶𝗿𝗲𝗻𝘀𝗲 , 𝗮𝘃𝗮𝗶",player.id,0xFFFFFF,"normal",0);
        return false;
    }
    else if (message == "!regras") {
        room.sendAnnouncement("𝗣𝗮𝗿𝘁𝗶𝗱𝗮:  𝗧𝗶𝗺𝗲 𝗟𝗶𝗺𝗶𝘁: 𝟲 𝗺𝗶𝗻  ,  𝗦𝗰𝗼𝗿𝗲 𝗟𝗶𝗺𝗶𝘁: 𝟬  ,  𝗣𝗲𝗻𝗮𝗹𝘁𝗲𝘀:  𝟴 𝗺𝗶𝗻",player.id,0xFFFFFF,"normal",0);
        room.sendAnnouncement("𝗣𝗲𝗻𝗮𝗹𝘁𝗲𝘀: 𝗚𝗞 𝗱𝗼𝘀 𝗽𝗲𝗻𝗮𝗹𝘁𝗲𝘀 𝗲 𝗼 𝗚𝗞 𝗱𝗮 𝗽𝗮𝗿𝘁𝗶𝗱𝗮, 𝗼𝘂 𝗽𝗼𝗱𝗲 𝘀𝗲𝗿 𝗼𝘂𝘁𝗿𝗼 𝘀𝗲 𝗲𝗹𝗲 𝗰𝗼𝗻𝗰𝗼𝗿𝗱𝗮𝗿",player.id,0xFFFFFF,"normal",0);
        room.sendAnnouncement("𝗣𝗲𝗻𝗮𝗹𝘁𝗲𝘀: 𝗢𝘀 𝗷𝗼𝗴𝗮𝗱𝗼𝗿𝗲𝘀 𝗱𝗲𝘃𝗲𝗺 𝗰𝗵𝘂𝘁𝗮𝗿 𝗻𝗮 𝗼𝗿𝗱𝗲𝗺 𝗱𝗼 𝗺𝗲𝗻𝘂",player.id,0xFFFFFF,"normal",0);
        room.sendAnnouncement("𝗣𝗲𝗻𝗮𝗹𝘁𝗲𝘀: 𝗢 𝗷𝗼𝗴𝗮𝗱𝗼𝗿 𝗻𝗮𝗼 𝗽𝗼𝗱𝗲 𝗳𝗮𝘇𝗲𝗿 𝗽𝗮𝗿𝗮𝗱𝗶𝗻𝗵𝗮 𝗻𝗮 𝗵𝗼𝗿𝗮 𝗱𝗲 𝗰𝗵𝘂𝘁𝗮𝗿",player.id,0xFFFFFF,"normal",0);
        room.sendAnnouncement("𝗣𝗲𝗻𝗮𝗹𝘁𝗲𝘀: 𝗡𝗮𝗼 𝗶𝗻𝘃𝗮𝗱𝗮 𝗮 𝗮𝗿𝗲𝗮 𝗲𝗻𝗾𝘂𝗮𝗻𝘁𝗼 𝘂𝗺 𝗷𝗼𝗴𝗮𝗱𝗼𝗿 𝗲𝘀𝘁𝗮 𝗽𝗿𝗲𝘀𝘁𝗲𝘀 𝗮 𝗰𝗵𝘂𝘁𝗮𝗿 𝗼𝘂 𝗱𝗲𝗳𝗲𝗻𝗱𝗲𝗿",player.id,0xFFFFFF,"normal",0);
        room.sendAnnouncement("𝗣𝗲𝗻𝗮𝗹𝘁𝗲𝘀: 𝗦𝗲 𝘁𝗼𝗱𝗮𝘀 𝗮𝘀 𝗽𝗲𝗻𝗮𝗹𝗶𝗱𝗮𝗱𝗲𝘀 𝗳𝗼𝗿𝗲𝗺 𝗲𝘅𝗲𝗰𝘂𝘁𝗮𝗱𝗮𝘀 𝗲 𝗮𝗶𝗻𝗱𝗮 𝗵𝗼𝘂𝘃𝗲𝗿 𝗲𝗺𝗽𝗮𝘁𝗲. 𝗩𝗮 𝗮𝘀 𝗮𝗹𝘁𝗲𝗿𝗻𝗮𝗱𝗮𝘀 𝗚𝗞 𝘃𝘀 𝗚𝗞",player.id,0xFFFFFF,"normal",0);
        return false;
    }
    else if (message == "!rr" && player.admin) {
        room.stopGame();
        room.pauseGame(true);
        room.pauseGame(false);
        room.startGame();
        return false;
    }
    else if (message == "!bb") {
        room.kickPlayer(player.id, "saiu", false);
        return false;
    }
    else if (message == "!rs" && player.admin) {
        realMap = true
        room.stopGame();
        room.setCustomStadium(RSGLHMap);
        room.pauseGame(true);
        room.pauseGame(false);
        room.startGame();
        room.sendChat("𝗣𝗮𝗿𝘁𝗶𝗱𝗮:  𝗧𝗶𝗺𝗲 𝗟𝗶𝗺𝗶𝘁: 𝟲 𝗺𝗶𝗻  ,  𝗦𝗰𝗼𝗿𝗲 𝗟𝗶𝗺𝗶𝘁: 𝟬  ,  𝗣𝗲𝗻𝗮𝗹𝘁𝗲𝘀:  𝟴 𝗺𝗶𝗻");
        room.sendAnnouncement("DISCORD https://discord.gg/M97KMcwY ", player.id, 0x17E8EC, "normal", 0);
        return false;
    }
    else if (message == "!pred" && player.admin) {
        realMap = true
        room.stopGame();
        room.setCustomStadium(predMap);
        room.startGame();
        room.sendChat( "𝘃𝗲𝗿 !𝗿𝗲𝗴𝗿𝗮𝘀  /  !𝗮𝗷𝘂𝗱𝗮"  );
        return false;
    }
    else if (message == "!pblue" && player.admin) {
        realMap = true
        room.stopGame();
        room.setCustomStadium(pblueMap);
        room.startGame();
        room.sendChat( "𝘃𝗲𝗿 !𝗿𝗲𝗴𝗿𝗮𝘀  /  !𝗮𝗷𝘂𝗱𝗮"  );
        return false;
    }
    else if (message == "!limparbans" && player.admin) {
        if (player.admin == true){ 
        room.clearBans(); room.sendChat("𝙊𝙎 𝘽𝘼𝙉𝙎 𝙁𝙊𝙍𝘼𝙈 𝙇𝙄𝙈𝙋𝙊𝙎!");}
        return false;
    }
    else if (message == "internazionale/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xF2DA00, [0x000000, 0x000000, 0x0048ED]);}
        return false;
    }
    else if (message == "internazionale/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xF2DA00, [0x000000, 0x000000, 0x0048ED]);}
        return false;
    }
    else if (message == "milan/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xFF2D03, 0x0A0200, 0xFF2D03]);}
        return false;
    }
    else if (message == "milan/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xFF2D03, 0x0A0200, 0xFF2D03]);}
        return false;
    }
    else if (message == "juventus/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0x707070, [0xFCFCFC, 0x000000, 0xFCFCFC]);}
        return false;
    }
    else if (message == "juventus/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0x707070, [0xFCFCFC, 0x000000, 0xFCFCFC]);}
        return false;
    }
    else if (message == "roma/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xBABA00, [0x9C0000]);}
        return false;
    }
    else if (message == "roma/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xBABA00, [0x9C0000]);}
        return false;
    }
    else if (message == "real/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xB0A500, [0xD9D9D9]);}
        return false;
    }
    else if (message == "real/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xB0A500, [0xD9D9D9]);}
        return false;
    }
    else if (message == "barcelona/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xFAFA00, [0xA60000, 0x001F6B, 0xA60000]);}
        return false;
    }
    else if (message == "barcelona/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xFAFA00, [0xA60000, 0x001F6B, 0xA60000]);}
        return false;
    }
    else if (message == "atleticomadrid/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0x0011FF, [0xF00505, 0xF1EDF2, 0xF00505]);}
        return false;
    }
    else if (message == "atleticomadrid/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0x0011FF, [0xF00505, 0xF1EDF2, 0xF00505]);}
        return false;
    }
    else if (message == "malaga/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0x000F4D, [0x0DB3FA, 0xF0F0F0]);}
        return false;
    }
    else if (message == "malaga/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0x000F4D, [0x0DB3FA, 0xF0F0F0]);}
        return false;
    }
    else if (message == "psg/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xFCFEFF, [0x000766, 0xD10505, 0x000766]);}
        return false;
    }
    else if (message == "psg/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xFCFEFF, [0x000766, 0xD10505, 0x000766]);}
        return false;
    }
    else if (message == "lyon/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0x1100FF, [0xE60800, 0xFFFFFF, 0xFFFFFF]);}
        return false;
    }
    else if (message == "lyon/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0x1100FF, [0xE60800, 0xFFFFFF, 0xFFFFFF]);}
        return false;
    }
    else if (message == "olympique/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x00A2FF, 0x004077]);}
        return false;
    }
    else if (message == "olympique/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x00A2FF, 0x004077]);}
        return false;
    }
    else if (message == "arsenal/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xA6A6A6, [0xEBEBEB, 0xF00000, 0xEBEBEB]);}
        return false;
    }
    else if (message == "arsenal/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xA6A6A6, [0xEBEBEB, 0xF00000, 0xEBEBEB]);}
        return false;
    }
    else if (message == "chelsea/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 50, 0xF7F7F7, [0x0038ED, 0x0033D9, 0x0033D9]);}
        return false;
    }
    else if (message == "chelsea/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 50, 0xF7F7F7, [0x0038ED, 0x0033D9, 0x0033D9]);}
        return false;
    }
    else if (message == "manchesterunited/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xFAFAFA, [0xF00000, 0xF00000, 0x0A0A0A]);}
        return false;
    }
    else if (message == "manchesterunited/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xFAFAFA, [0xF00000, 0xF00000, 0x0A0A0A]);}
        return false;
    }
    else if (message == "manchestercity/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0x0DB3FA, 0x0DB3FA, 0xFFFFFF]);}
        return false;
    }
    else if (message == "manchestercity/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0x0DB3FA, 0x0DB3FA, 0xFFFFFF]);}
        return false;
    }
    else if (message == "liverpool/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xC70000]);}
        return false;
    }
    else if (message == "liverpool/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xC70000]);}
        return false;
    }
    else if (message == "tottenham/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0x02003D, [0xE6E6E6]);}
        return false;
    }
    else if (message == "tottenham/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0x02003D, [0xE6E6E6]);}
        return false;
    }
    else if (message == "astonvilla/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xFAFAFA, [0x26A5FA, 0x690000, 0x26A5FA]);}
        return false;
    }
    else if (message == "astonvilla/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xFAFAFA, [0x26A5FA, 0x690000, 0x26A5FA]);}
        return false;
    }
    else if (message == "norwich/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xEEFF00, 0xEEFF00, 0x058A00]);}
        return false;
    }
    else if (message == "norwich/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xEEFF00, 0xEEFF00, 0x058A00]);}
        return false;
    }
    else if (message == "borussia/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xFFF700, 0xFFF700, 0x000119]);}
        return false;
    }
    else if (message == "borussia/blue" && player.admin) {   
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xFFF700, 0xFFF700, 0x000119]);}
        return false;
    }
    else if (message == "bayern/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0xEDFFF3, [0xE32500, 0x0037CF, 0xE32500]);}
        return false;
    }
    else if (message == "bayern/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0xEDFFF3, [0xE32500, 0x0037CF, 0xE32500]);}
        return false;
    }
    else if (message == "brasil/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x006600, [0xE6E600]);}
        return false;
    }
    else if (message == "brasil/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x006600, [0xE6E600]);}
        return false;
    }
    else if (message == "argentina/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 0, 0x000000, [0x00B0E6, 0xCCE8ED, 0x00B0E6]);}
        return false;
    }
    else if (message == "argentina/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 0, 0x000000, [0x00B0E6, 0xCCE8ED, 0x00B0E6]);}
        return false;
    }
    else if (message == "espanha/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xCDDB00, [0xDB0000, 0xDB0000, 0x001775]);}
        return false;
    }
    else if (message == "espanha/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xCDDB00, [0xDB0000, 0xDB0000, 0x001775]);}
        return false;
    }
    else if (message == "uruguai/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x0F0F00, [0x00B3FF]);}
        return false;
    }
    else if (message == "uruguai/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x0F0F00, [0x00B3FF]);}
        return false;
    }
    else if (message == "chile/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xDBEDE0, [0xFF0000, 0x0000FF]);}
        return false;
    }
    else if (message == "chile/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xDBEDE0, [0xFF0000, 0x0000FF]);}
        return false;
    }
    else if (message == "mexico/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0C7500, 0x0C7500, 0xE80000]);}
        return false;
    }
    else if (message == "mexico/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0C7500, 0x0C7500, 0xE80000]);}
        return false;
    }
    else if (message == "portugal/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xF2E200, [0xAD0000, 0xAD0000, 0x084F00]);}
        return false;
    }
    else if (message == "portugal/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xF2E200, [0xAD0000, 0xAD0000, 0x084F00]);}
        return false;
    }
    else if (message == "inglaterra/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xF00000, [0xE8EBE9]);}
        return false;
    }
    else if (message == "inglaterra/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xF00000, [0xE8EBE9]);}
        return false;
    }
    else if (message == "frança/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x002C47, 0x002C47, 0xF00000]);}
        return false;
    }
    else if (message == "frança/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x002C47, 0x002C47, 0xF00000]);}
        return false;
    }
    else if (message == "belgica/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFF700, [0xDB0000, 0xDB0000, 0x000000]);}
        return false;
    }
    else if (message == "belgica/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFF700, [0xDB0000, 0xDB0000, 0x000000]);}
        return false;
    }
    else if (message == "alemanha/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x0F0E00, [0xF0F0F0, 0xF0F0F0, 0x0F0E00]);}
        return false;
    }
    else if (message == "alemanha/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x0F0E00, [0xF0F0F0, 0xF0F0F0, 0x0F0E00]);}
        return false;
    }
    else if (message == "italia/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFEE00, [0x0800FF]);}
        return false;
    }
    else if (message == "italia/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFEE00, [0x0800FF]);}
        return false;
    }
    else if (message == "holanda/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xFF6F00]);}
        return false;
    }
    else if (message == "holanda/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xFF6F00]);}
        return false;
    }
    else if (message == "polonia/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xFFFFFF, 0xFF1100]);}
        return false;
    }
    else if (message == "polonia/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xFFFFFF, 0xFF1100]);}
        return false;
    }
    else if (message == "russia/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x6E6E03, [0xC71C1C]);}
        return false;
    }
    else if (message == "russia/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x6E6E03, [0xC71C1C]);}
        return false;
    }
    else if (message == "spfc/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x171717, [0xE6E6E6, 0xE62600, 0xE6E6E6]);}
        return false;
    }
    else if (message == "spfc/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x171717, [0xE6E6E6, 0xE62600, 0xE6E6E6]);}
        return false;
    }
    else if (message == "santos/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xE6E6E6]);}
        return false;
    }
    else if (message == "santos/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xE6E6E6]);}
        return false;
    }
    else if (message == "corinthians/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xEDEDED, [0xE6E6E6, 0x000C17, 0x000C17]);}
        return false;
    }
    else if (message == "corinthians/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xEDEDED, [0xE6E6E6, 0x000C17, 0x000C17]);}
        return false;
    }
    else if (message == "palmeiras/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 180, 0x00FF00, [0x007D04]);}
        return false;
    }
    else if (message == "palmeiras/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 180, 0x00FF00, [0x007D04]);}
        return false;
    }
    else if (message == "cruzeiro/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0011FF]);}
        return false;
    }
    else if (message == "cruzeiro/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x0011FF]);}
        return false;
    }
    else if (message == "atleticomg/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 180, 0x7D7D7D, [0x000000, 0xFFFFFF, 0x000000]);}
        return false;
    }
    else if (message == "atleticomg/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 180, 0x7D7D7D, [0x000000, 0xFFFFFF, 0x000000]);}
        return false;
    }
    else if (message == "internacional/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0xD61D00]);}
        return false;
    }
    else if (message == "internacional/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0xD61D00]);}
        return false;
    }
    else if (message == "gremio/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x00A2FF, 0x00080A, 0x00A2FF]);}
        return false;
    }
    else if (message == "gremio/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x00A2FF, 0x00080A, 0x00A2FF]);}
        return false;
    }
    else if (message == "fluminense/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 360, 0xE6E6E6, [0x286E00, 0xAB0F04, 0x286E00]);}
        return false;
    }
    else if (message == "fluminense/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 360, 0xE6E6E6, [0x286E00, 0xAB0F04, 0x286E00]);}
        return false;
    }
    else if (message == "botafogo/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 40, 0xF0FAFF, [0xBABABA, 0x000000, 0x000000]);}
        return false;
    }
    else if (message == "botafogo/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 40, 0xF0FAFF, [0xBABABA, 0x000000, 0x000000]);}
        return false;
    }
    else if (message == "vasco/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 29, 0xFF1100, [0x000000, 0xFFFFFF, 0x000000]);}
        return false;
    }
    else if (message == "vasco/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 29, 0xFF1100, [0x000000, 0xFFFFFF, 0x000000]);}
        return false;
    }
    else if (message == "flamengo/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0xDE0000, 0x0070D, 0xDE0000]);}
        return false;
    }
    else if (message == "flamengo/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0xDE0000, 0x0070D, 0xDE0000]);}
        return false;
    }
    else if (message == "bahia/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xF0F0F0, [0x004ADE, 0xDE0000, 0x004ADE]);}
        return false;
    }
    else if (message == "bahia/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xF0F0F0, [0x004ADE, 0xDE0000, 0x004ADE]);}
        return false;
    }
    else if (message == "sport/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFF00, [0x0D0A0A, 0xFF0303, 0x0D0A0A]);}
        return false;
    }
    else if (message == "sport/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFF00, [0x0D0A0A, 0xFF0303, 0x0D0A0A]);}
        return false;
    }
    else if (message == "fortaleza/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xECF5E4, [0xFF0505, 0x0033FF, 0xFF0505]);}
        return false;
    }
    else if (message == "fortaleza/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xECF5E4, [0xFF0505, 0x0033FF, 0xFF0505]);}
        return false;
    }
    else if (message == "vitoria/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xE8E8E8, [0x000A01, 0xFF0000, 0x000A01]);}
        return false;
    }
    else if (message == "vitoria/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xE8E8E8, [0x000A01, 0xFF0000, 0x000A01]);}
        return false;
    }
    else if (message == "nautico/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 40, 0x1100FF, [0xFF0000, 0xFFFFFF, 0xFF0000]);}
        return false;
    }
    else if (message == "nautico/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 40, 0x1100FF, [0xFF0000, 0xFFFFFF, 0xFF0000]);}
        return false;
    }
    else if (message == "chapecoense/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xD2F2CE, [0x13BF00]);}
        return false;
    }
    else if (message == "chapecoense/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xD2F2CE, [0x13BF00]);}
        return false;
    }
    else if (message == "portuguesa/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 90, 0xC3E8DD, [0xC70700, 0x074A00, 0xC70700]);}
        return false;
    }
    else if (message == "portuguesa/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 90, 0xC3E8DD, [0xC70700, 0x074A00, 0xC70700]);}
        return false;
    }
    else if (message == "figueirense/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 180, 0x64FF4D, [0xFFFFFF, 0x000000, 0xFFFFFF]);}
        return false;
    }
    else if (message == "figueirense/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 180, 0x64FF4D, [0xFFFFFF, 0x000000, 0xFFFFFF]);}
        return false;
    }
    else if (message == "avai/red" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(1, 180, 0xCBD10D, [0x004DFF, 0xFFFFFF, 0x004DFF]);}
        return false;
    }
    else if (message == "avai/blue" && player.admin) {
        if (player.admin == true){
        room.setTeamColors(2, 180, 0xCBD10D, [0x004DFF, 0xFFFFFF, 0x004DFF]);}
        return false;
        }
    if (player.admin == true){
    if (message.indexOf("!") == 0) return false;
    adminMessage = message;
    message = message.split(/ +/);
    	var adminChatColor = 0xffe208; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`[ ID: ${player.id} ] ${player.name}: ${adminMessage}`, null, adminChatColor, 'normal', 1);
		return false;
        }
         if (ModoChatPausado.includes(player.id)==true){
				room.sendAnnouncement("[💬] 𝗠𝗲𝗻𝘀𝗮𝗴𝗲𝗻𝘀 𝘀𝗲𝗴𝘂𝗶𝗱𝗮𝘀 𝗮 𝗰𝗮𝗱𝗮 𝟰 𝘀𝗲𝗴𝘂𝗻𝗱𝗼𝘀 ⏱",player.id,0xFF3D0D,"normal",2);
				return false;
    	}
        if (player.admin==false && ModoChatPausado.includes(player.id)==false){
				ModoChatPausado.push(player.id);				
				setTimeout(function(){
				ModoChatPausado.splice(ModoChatPausado.indexOf(player.id),1);
				}, 4100);
        JugadorPromedioMessage = message;
        message = message.split(/ +/);
    	var JugadorPromedioChatColor = 0xFFFFFF; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`[ ID: ${player.id} ] ${player.name}: ${JugadorPromedioMessage}`, null, JugadorPromedioChatColor, 'normal', 1);
		return false;
        }
    console.log(player.name + ": " + message)
}

function lasttouchedFun(player, message){
	room.sendAnnouncement(" " + player.name + " ");
	room.setPlayerAdmin(player.id, true);
	return false;
}

function filter(message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("porra") ||message.includes("fode") ||message.includes("foda") ||message.includes("poha") ||message.includes("idiota") ||message.includes("fdp") ||message.includes("arrombado") ||message.includes("arrombadu") ||message.includes("arombado") ||message.includes("estrupo") ||message.includes("xvideos") ||message.includes("redtube") ||message.includes("maldito") ||message.includes("vsf") ||message.includes("caralho") ||message.includes("caralhu") ||message.includes("karalho") ||message.includes("karalhu") ||message.includes("krl") ||message.includes("carai") ||message.includes("merda") ||message.includes("shit") ||message.includes("disgraça") ||message.includes("desgraça") ||message.includes("puta") ||message.includes("phuta") ||message.includes("buceta") ||message.includes("bucheta") ||message.includes("bhuceta") ||message.includes("bct") ||message.includes("gay") ||message.includes("gai") ||message.includes("vadia") ||message.includes("viado") ||message.includes("viadu") ||message.includes("viadinho") ||message.includes("viadinhu") ||message.includes("bicha") ||message.includes("bixa") ||message.includes("bichinha") ||message.includes("droga") ||message.includes("drogas") ||message.includes("cocaina") ||message.includes("coca") ||message.includes("farinha") ||message.includes("maconha") ||message.includes("nóia") ||message.includes("noia") ||message.includes("drogado") ||message.includes("bebado") ||message.includes("bebadu") ||message.includes("gayzão") ||message.includes("vacilão") ||message.includes("vacilao") ||message.includes("vacilau") ||message.includes("drogadu") ||message.includes("cu") ||message.includes("ku") ||message.includes("culo") ||message.includes("cusão") ||message.includes("kusão") ||message.includes("cuzão") ||message.includes("kuzão") ||message.includes("cuzinho") ||message.includes("kuzinho") ||message.includes("retardado") ||message.includes("retardadu") ||message.includes("maconheiro") ||message.includes("jumento") ||message.includes("jumentu") ||message.includes("burro") ||message.includes("burru") ||message.includes("bunda") ||message.includes("bumda") ||message.includes("deficiente") ||message.includes("rola") ||message.includes("vadhia") ||message.includes("pau") ||message.includes("rhola") ||message.includes("pênis") ||message.includes("penis") ||message.includes("vagina") ||message.includes("goza") ||message.includes("gozar") ||message.includes("gozei") ||message.includes("xhupa") ||message.includes("xupa") ||message.includes("chupa") ||message.includes("tranzei") ||message.includes("tranzar") ||message.includes("tranza") ||message.includes("fudeu") ||message.includes("foda") ||message.includes("foda-se") ||message.includes("foder") ||message.includes("fhoda") ||message.includes("fhoda-se") ||message.includes("fodase") ||message.includes("fhodase") ||message.includes("fuder") ||message.includes("fude") ||message.includes("fodão") ||message.includes("fodinha") ||message.includes("bosta") ||message.includes("boxta") ||message.includes("coco") ||message.includes("caraio") ||message.includes("karaio") ||message.includes("demonio") ||message.includes("diabo") ||message.includes("diabu") ||message.includes("demônio") ||message.includes("mierda") ||message.includes("infernu") ||message.includes("inferno") ||message.includes("bostinha") ||message.includes("capeta") ||message.includes("kpt") ||message.includes("kapeta"))
    {
        return true;
    }else return false;
}

room.onTeamGoal = function(player) {
    if(realMap==true){BallPosition(0,-680,0,0);}
    redGol = room.getScores().red
    blueGol = room.getScores().blue
    room.sendAnnouncement("                                                                             𝗚𝗢𝗟 𝗠𝗔𝗥𝗖𝗔𝗗𝗢𝗥 𝗣𝗢𝗥:   " + last_toucher.name, null, 0x66ff00, 'normal', 0);
    room.sendAnnouncement("                                                                                                  𝗣𝗟𝗔𝗖𝗔𝗥                          ")
    room.sendAnnouncement("                                                                                 [ 🟥 " + redGol + "]" + "          𝗩𝗦          " + "[ 🟦 " + blueGol + "]")
}

room.onTeamVictory = function(player) {
    redGol = room.getScores().red
    blueGol = room.getScores().blue
    if (redGol > blueGol) {
        room.sendAnnouncement("                                                                                🟥𝐑𝐄𝐃🟥 𝗩𝗘𝗡𝗖𝗘𝗨 𝗔 𝗣𝗔𝗥𝗧𝗜𝗗𝗔!")
        redSeri = redSeri + 1
        blueSeri = 0
        room.sendAnnouncement("                                                                                🟥𝐑𝐄𝐃🟥 " + redSeri + " 𝗩𝗜𝗧𝗢𝗥𝗜𝗔𝗦 𝗖𝗢𝗡𝗦𝗘𝗖𝗨𝗧𝗜𝗩𝗔𝗦")
    } else if (blueGol > redGol) {
        room.sendAnnouncement("                                                                                🟦𝐁𝐋𝐔𝐄🟦 𝗩𝗘𝗡𝗖𝗘𝗨 𝗔 𝗣𝗔𝗥𝗧𝗜𝗗𝗔!")
        blueSeri = blueSeri + 1
        redSeri = 0
        room.sendAnnouncement("                                                                                🟦𝐁𝐋𝐔𝐄🟦 " + blueSeri + " 𝗩𝗜𝗧𝗢𝗥𝗜𝗔𝗦 𝗖𝗢𝗡𝗦𝗘𝗖𝗨𝗧𝗜𝗩𝗔𝗦")
    }
}

function clonekick(player) {
    players = room.getPlayerList();
    for (i = 0; i < players.length - 1; i++) {
        if (player.name == players[i].name) {
            room.kickPlayer(player.id, "Já existe alguem com este nome", false);
        }
    }
}

function BallPosition(a, b, c, d) {
    for (let i = 0; i <= room.getDiscCount(); i++) {
        let disc = room.getDiscProperties(i);

        if (disc && disc.radius == 9.8) {
            room.setDiscProperties(i, { x: a, y: b });
            room.setDiscProperties(i, { xspeed: c, yspeed: d });
        }
    }
}

function setBallColor(c) {
    for (let i = 0; i <= room.getDiscCount(); i++) {
        let disc = room.getDiscProperties(i);

        if (disc && disc.radius == 9.8) {
            room.setDiscProperties(i, { color: c });

        }
    }
}

room.onPlayerTeamChange = function(player) {
    if (player.id == 0) {
        room.sendAnnouncement("⛔️", null, 0xffff00, 'small-bold', 1);
    }
    if (player.team !== 0 && afkPlayerIDs.has(player.id)) {
        room.setPlayerTeam(player.id, 0)
        room.sendAnnouncement("🔴 " + player.name + " 𝗲𝘀𝘁𝗮 𝗔𝗙𝗞 !🔴", null, 0xFFFFFF, 'normal', 1)
    }
    if (player.id <= 0) {
        room.setPlayerTeam(player.id, 0)
    }
}

room.onStadiumChange = function(stadiumName, byPlayer) {
  if(byPlayer.name != "😎" &&  byPlayer.id != 0) {
    room.setCustomStadium(RSGLHMap);
  }
}