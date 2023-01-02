var superAdminCode = "52264"; // !admin 52264
var allowPublicAdmin = true; // if true then !admin command is enabled

var TTPractice = false;
var TTplayersThatTouchedTheBall = new Set();

var roomName = "Table Tennis";
var roomPassword = null;
var maxPlayers = 20;
var roomPublic = true;
var token = "thr1.AAAAAGBcOA5PIBOLdOpmVQ.5wgH1xhOX44";
var roomLink = "";
var map = "TT";
var superAdmins = [];

var room = HBInit({
    roomName: roomName,
    password: roomPassword,
    maxPlayers: maxPlayers,
    public: roomPublic,
    //geo: {code: "DE", lat: 50.11, lon: 8.68},
    noPlayer: true,
    token: token
});


// -------------------------------------------------
// Classes
// -------------------------------------------------
class Game {
    constructor() {
        this.ticks = 0;
        this.redScore = 0;
        this.blueScore = 0;
        this.scoreLimit;
        this.time = 0;
        this.ballRadius;

        this.serve = "red";
        this.lastBounce = "null";
        this.pointScored = false;
        this.lastAction = "null";
        this.netTouch = false;
        this.dragBall = 0;
        this.draggerId = -1;

    }

    scorePoint(team) {
        if (TTPractice == true) {
            return false;
        }

        this.pointScored = true;
        if (team == "red") {
            room.setDiscProperties(1, {xspeed: 1});
        }
        else if (team == "blue") {
            room.setDiscProperties(1, {xspeed: -1});
        }
    }
}

room.setCustomStadium(getMap());
room.setScoreLimit(0);
room.setTimeLimit(0);

room.onRoomLink = function(url) {
    roomLink = url;
    console.log(roomLink);
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
    if (byPlayer != null) {
        map = "custom";
    }
    else {
        map = "TT";
    }
}

room.onPlayerJoin = function(player) {
    console.log(player.name + " joined the room");
    whisper("⚽      Wᴇʟᴄᴏᴍᴇ ᴛᴏ Table Tennis     ⚽", player.id, 0x61ddff, "bold", 0);
    whisper("⚽      Type !help for available commands     ⚽", player.id, 0x61e7ff, "bold", 0);

    displayAdminMessage();
}

room.onPlayerLeave = function(player) {
    displayAdminMessage();
    console.log(player.name + " left the room");

    let index = superAdmins.indexOf(player.id);
    if (index > -1) {
        sleep(100).then(() => {
            superAdmins.splice(index, 1);
        });
    }
}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
    if (byPlayer != null) {
        if (changedPlayer.id != byPlayer.id) {
            if (superAdmins.indexOf(changedPlayer.id) > -1) {
                room.kickPlayer(byPlayer.id, "You cannot remove a Super Admin", false);
                room.setPlayerAdmin(changedPlayer.id, true);
            }
        }
        else {
            if (changedPlayer.admin == false) {
                let index = superAdmins.indexOf(changedPlayer.id);
                if (index > -1) {
                    superAdmins.splice(index, 1);
                }
            }
        }
    }
}

room.onGameStart = function(byPlayer) {
    if (map == "TT") {
        game = new Game();
        var redPlayers = room.getPlayerList().filter((player) => player.team == 1);
        if (redPlayers[0] == undefined) {
            game.serve = "blue";
            room.setDiscProperties(0, {xspeed:0,yspeed:0,x:300,y:0});
            room.setDiscProperties(3, {xspeed:0,yspeed:0,x:300,y:6});
        }
    }
}

room.onGameStop = function(byPlayer) {

}



room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
    if (superAdmins.indexOf(kickedPlayer.id) > -1) {
        room.kickPlayer(byPlayer.id, "You cannot kick/ban a Super Admin", false);
        room.clearBans();
    }
}

room.onPlayerChat = function(player, message) {
    console.log(player.name + ": " + message);
    if (message.startsWith("!")) {
        message = message.substr(1);
        let args = message.split(" ");

        if (args[0] == "admin" && args.length == 1 && allowPublicAdmin == true) {
            if (isAdminPresent() == false) {
                room.setPlayerAdmin(player.id, true);
            }
            else {
                whisper("Admin is already present or !admin command is not allowed", player.id);
            }
        }
        else if (args[0] == "admin" && args.length == 2) {
            if (args[1] == superAdminCode) {
                room.setPlayerAdmin(player.id, true);
                if (superAdmins.indexOf(player.id) === -1) {
                    superAdmins.push(player.id);
                }
                announce(player.name + " has gained Super Admin");
            }
        }
        else if (args[0] == "clearbans") {
            if (player.admin) {
                room.clearBans();
                announce("Bans have been cleared by " + player.name);
            }
            else {
                whisper("Admin only command", player.id);
            }
        }
        else if (args[0] == "swap") {
            if (player.admin) {
                if (args.length == 1) {
                    var players = room.getPlayerList().filter((player) => player.id != 0 );
                    if ( players.length == 0 ) return false;
                    players.forEach(function(player) {
                        if (player.team == 1) {
                            room.setPlayerTeam(player.id, 2);
                        }
                        if (player.team == 2) {
                            room.setPlayerTeam(player.id, 1);
                        }
                    });
                    announce("🔄 Teams have been swapped");
                }
            }
            else {
                whisper("Admin only command", player.id);
            }
        }
        else if (args[0] == "setpassword" && player.admin) {
            if (superAdmins.indexOf(player.id) > -1) {
                room.setPassword(args[1]);
                roomPassword = args[1];
                announce("Password has been changed by " + player.name);
            }
            else {
                whisper("Only Super Admins can change password", player.id);
            }
        }
        else if (args[0] == "clearpassword" && player.admin) {
            if (superAdmins.indexOf(player.id) > -1) {
                room.setPassword(null);
                roomPassword = null;
                announce("Password has been cleared by " + player.name);
            }
            else {
                whisper("Only Super Admins can clear password", player.id);
            }
        }
        else if (args[0] == "tt" && player.admin) {
            if (room.getScores() == null) {
                room.setCustomStadium(getMap());
            }
            else {
                whisper("Cannot change map while game in progress", player.id);
            }
        }
        else if (args[0] == "practice" && player.admin) {
            if (TTPractice == true) {
                TTPractice = false;
                announce("Practice Mode Disabled by " + player.name);
            }
            else {
                TTPractice = true;
                announce("Practice Mode Enabled by " + player.name);
            }
        }
        else if (args[0] == "rr" && player.admin) {
            room.stopGame();
            room.startGame();
        }
        else if (args[0] == "bb") {
            room.kickPlayer(player.id, "Bye", false);
        }
        else if (args[0] == "help") {
            displayHelp(player.id, args[1]);
        }
        else if (args[0] == "super") {
            let superMsg = "Super Admins: ";
            superAdmins.forEach(function(id) {
                if (room.getPlayer(id) != null || room.getPlayer(id) != undefined) {
                    superMsg = superMsg + room.getPlayer(id).name + ", ";
                }
            });
            if (superAdmins.length > 0) {
                superMsg = superMsg.slice(0, -2);
            }
            else {
                superMsg = "There are no super admins present";
            }
            whisper(superMsg, player.id);
        }
        return false;
    }
    if (message.startsWith("t ")) {
        teamMsg = message.substring(1).trim();
        if (player.team == 1) {
            var players = room.getPlayerList().filter((player) => player.team == 1);
            players.forEach(function(teamPlayer) {
                room.sendAnnouncement("[Team] " + player.name + ": " + teamMsg, teamPlayer.id, 0xED6A5A, "normal", 1);
            });
        }
        if (player.team == 2) {
            var players = room.getPlayerList().filter((player) => player.team == 2);
            players.forEach(function(teamPlayer) {
                room.sendAnnouncement("[Team] " + player.name + ": " + teamMsg, teamPlayer.id, 0x5995ED, "normal", 1);
            });
        }
        if (player.team == 0) {
            var players = room.getPlayerList().filter((player) => player.team == 0);
            players.forEach(function(teamPlayer) {
                room.sendAnnouncement("[Spec] " + player.name + ": " + teamMsg, teamPlayer.id, 0xdee7fa, "normal", 1);
            });
        }
        return false;
    }
    if (message.startsWith("@")) {
        message = message.substr(1).trim();
        let args = message.split(/(?<=^\S+)\s/);

        if (args.length > 1) {
            var pmMsg = args[1];
            var players = room.getPlayerList();
            var pmSent = false;
            players.forEach(function(pmPlayer) {
                if (pmPlayer.name === args[0] || pmPlayer.name === args[0].replace(/_/g, ' ')) {
                    whisper("[PM > " + pmPlayer.name + "] " + player.name + ": " + pmMsg, player.id, 0xff20ff, "normal", 1);
                    whisper("[PM] " + player.name + ": " + pmMsg, pmPlayer.id, 0xff20ff, "normal", 1);
                    pmSent = true;
                }
            });
            if (pmSent == false) {
                whisper("Cannot find user '" + args[0] + "'", player.id, 0xff20ff, "normal", 1);
            }
            return false;
        }
    }
}

function displayHelp(id, selection) {
    if (selection == null) {
        whisper("Commands: !easyserve, !practice, !tt, !rr, !bb, !admin, !setpassword, !clearpassword, !super, !clearbans, !swap, @[player] [pm msg] , t [team chat msg]", id, null, "small");
    }
}


room.onTeamGoal = function(team) {
    if (map == "TT") {
        if (team == 1) { //red point
            if (game.serve != "null") {
                announce("🔴 Red Point! [Fault]");
            }
            else {
                announce("🔴 Red Point!");
            }
        }
        if (team == 2) { //blue point
            if (game.serve != "null") {
                announce("🔵 Blue Point! [Fault]");
            }
            else {
                announce("🔵 Blue Point!");
            }
        }
        if (room.getScores().blue === 11 && room.getScores().red < 10 || room.getScores().blue > 11 && room.getScores().blue - room.getScores().red === 2) {
            announce("Blue won the set " + room.getScores().blue + "-" + room.getScores().red)
            room.stopGame()
        } else if (room.getScores().red === 11 && room.getScores().blue < 10 || room.getScores().red > 11 && room.getScores().red - room.getScores().blue === 2) {
            announce("Red won the set " + room.getScores().red + "-" + room.getScores().blue)
            room.stopGame()
        }
    }
}

room.onPositionsReset = function() {
    if (map == "TT") {
        game.pointScored = false;
        game.lastBounce = "null";
        game.lastAction = "null";
        game.netTouch = false;

        if((room.getScores().red + room.getScores().blue < 20 && Math.floor((room.getScores().red + room.getScores().blue)/2) % 2 == 0) || (room.getScores().red + room.getScores().blue > 19 && (room.getScores().red + room.getScores().blue) % 2 == 0)) {
            game.serve = "red";
        }
        else {
            game.serve = "blue";
        }

        var redPlayers = room.getPlayerList().filter((player) => player.team == 1);
        if (redPlayers[0] == undefined) {
            game.serve = "blue";
        }
        var bluePlayers = room.getPlayerList().filter((player) => player.team == 2);
        if (bluePlayers[0] == undefined) {
            game.serve = "red";
        }

        if (game.serve == "blue") {
            room.setDiscProperties(0, {xspeed:0,yspeed:0,x:300,y:0});
            room.setDiscProperties(3, {xspeed:0,yspeed:0,x:300,y:6});
        }
    }
}

room.onGameTick = function() {
    if (map == "TT") {
        updateGameStatus();
        handleNetTouch();
        tableTennisRef();
    }
}

room.onPlayerBallKick = function(player) {
    if (map == "TT") {
        if (game.serve != null) {
            room.setDiscProperties(3, {x:0, y:250});
        }
        game.dragBall = 0;
        if (game.pointScored == false) {
            if (game.serve == "red") {
                if (player.team == 1) { //red player kick
                    game.lastAction = "redKick";
                }
                if (player.team == 2) { //blue player kick
                    game.scorePoint("red");
                    game.lastAction = "blueKick";
                }
            }
            else if (game.serve == "blue") {
                if (player.team == 1) { //red player kick
                    game.scorePoint("blue");
                    game.lastAction = "redKick";
                }
                if (player.team == 2) { //blue player kick
                    game.lastAction = "blueKick";
                }
            }
            else {
                if (player.team == 1) { //red player kick
                    if (game.lastAction == "redKick" || game.lastAction == "blueKick" || game.lastAction == "blueTouch" || game.lastAction == "redTouch") {
                        game.scorePoint("blue");
                    }
                    game.lastAction = "redKick";
                }
                if (player.team == 2) { //blue player kick
                    if (game.lastAction == "blueKick" || game.lastAction == "redKick" || game.lastAction == "blueTouch" || game.lastAction == "redTouch") {
                        game.scorePoint("red");
                    }
                    game.lastAction = "blueKick";
                }
            }
        }
    }
}

function tableTennisRef() {
    //smash detection
    if (game.serve == "null") {
        var closestDistance = 10000;
        var closestId = 0;
        if (room.getBallPosition().x < 0) { //redside
            var players = room.getPlayerList().filter((player) => player.team == 1);
            players.forEach(function(player) {
                var playerDistance = pointDistance({x: player.position.x, y: player.position.y}, room.getBallPosition());
                if (playerDistance < closestDistance) {
                    closestDistance = playerDistance;
                    closestId = player.id;
                }
            });
        }
        else { //blueside
            var players = room.getPlayerList().filter((player) => player.team == 2);
            players.forEach(function(player) {
                var playerDistance = pointDistance({x: player.position.x, y: player.position.y}, room.getBallPosition());
                if (playerDistance < closestDistance) {
                    closestDistance = playerDistance;
                    closestId = player.id;
                }
            });
        }
        if (room.getPlayer(closestId) != null) {
            if (room.getPlayer(closestId).position.y < room.getBallPosition().y - 6) {
                if (room.getDiscProperties(0).invMass < 11) {
                    room.setDiscProperties(0, {invMass: 11.5});
                }
            }
            else {
                if (room.getDiscProperties(0).invMass > 11) {
                    room.setDiscProperties(0, {invMass: 10});
                }
            }
        }
    }
    else {
        if (room.getDiscProperties(0).invMass > 11) {
            room.setDiscProperties(0, {invMass: 10});
        }
    }


    // dragging ball
    var TTplayers = room.getPlayerList();
    var TTballPosition = room.getBallPosition();
    var TTballRadius = game.ballRadius;
    var TTplayerRadius = 30;
    var TTtriggerDistance = TTballRadius + TTplayerRadius + 0.01;

    for (var i = 0; i < TTplayers.length; i++) { // Iterate over all the players
        var TTplayer = TTplayers[i];
        if ( TTplayer.position == null ) continue;

        var TTdistanceToBall = pointDistance(TTplayer.position, TTballPosition);
        var TThadTouchedTheBall = TTplayersThatTouchedTheBall.has(TTplayer.id);

        if ( TTdistanceToBall < TTtriggerDistance ) {
            if (game.pointScored == false) {
                if (game.serve == "null") {
                    game.dragBall++;
                    game.draggerId = TTplayer.id;
                }
                else {
                    room.setDiscProperties(3, {x:0, y:250});
                }
                if (TTplayer.team == 1) {
                    if (game.lastAction == "redBounce" && game.serve == "red") {
                        game.scorePoint("blue");
                    }
                    else if ((game.lastAction == "redKick") && room.getBallPosition().x > -250 && game.serve == "red") {
                        resetRedServe();
                    }
                    else if (game.lastAction == "blueBounce" && game.serve == "blue") {
                        if (room.getBallPosition().x > -260) {
                            game.scorePoint("blue");
                        }
                        else {
                            game.scorePoint("red");
                        }
                    }
                    else if ((game.lastAction == "redKick" || game.lastAction == "redTouch") && game.serve != "red") {
                        game.scorePoint("blue");
                    }
                    else if (((game.lastAction == "blueKick" || game.lastAction == "blueTouch") || game.serve == "blue") && game.serve != "red") {
                        if (room.getBallPosition().x > -260) {
                            game.scorePoint("blue");
                        }
                        else {
                            game.scorePoint("red");
                        }
                    }
                }
                if (TTplayer.team == 2) {
                    if (game.lastAction == "blueBounce" && game.serve == "blue") {
                        game.scorePoint("red");
                    }
                    else if ((game.lastAction == "blueKick") && room.getBallPosition().x < 250 && game.serve == "blue") {
                        resetBlueServe();
                    }
                    else if (game.lastAction == "redBounce" && game.serve == "red") {
                        if (room.getBallPosition().x < 260) {
                            game.scorePoint("red");
                        }
                        else {
                            game.scorePoint("blue");
                        }
                    }
                    else if ((game.lastAction == "blueKick" || game.lastAction == "blueTouch") && game.serve != "blue") {
                        game.scorePoint("red");
                    }
                    else if (((game.lastAction == "redKick" || game.lastAction == "redTouch") || game.serve == "red") && game.serve != "blue") {
                        if (room.getBallPosition().x < 260) {
                            game.scorePoint("red");
                        }
                        else {
                            game.scorePoint("blue");
                        }
                    }
                }
            }
        }
        if ( !TThadTouchedTheBall ) {
            if ( TTdistanceToBall < TTtriggerDistance ) {
                TTplayersThatTouchedTheBall.add(TTplayer.id);
            }
        }else{
            // If a player that had touched the ball moves away from the ball remove him from the set to allow the event to be notified again.
            if ( TTdistanceToBall > TTtriggerDistance + 4 ) {
                TTplayersThatTouchedTheBall.delete(TTplayer.id);
                if (TTplayer.team == 1 && game.serve == "null") {
                    game.lastAction = "redTouch";
                }
                if (TTplayer.team == 2 && game.serve == "null") {
                    game.lastAction = "blueTouch";
                }
            }
        }
    }
    // end dragging ball

    if (game.pointScored == false) {
        // BALL BOUNCE ON TABLE
        var TTdistanceToEdge = pointDistance({x: 250, y: 80}, room.getBallPosition());
        var TTEdgetriggerDistance = TTballRadius + 0.01;
        if (TTdistanceToEdge < TTEdgetriggerDistance) {
            var edgeBounce = true;
        }

        TTdistanceToEdge = pointDistance({x: -250, y: 80}, room.getBallPosition());
        if (TTdistanceToEdge < TTEdgetriggerDistance) {
            var edgeBounce = true;
        }

        if (room.getBallPosition().y == 74 || edgeBounce == true) {
            if (game.serve != "null") { // Serving
                if (game.serve == "red") {
                    if (room.getBallPosition().x > 0) {
                        if (game.lastAction == "redBounce") {
                            if (game.netTouch == true) {
                                announce("LET!");
                                resetRedServe();
                                return false;
                            }
                            else {
                                game.serve = "null"; //valid red serve
                            }
                        }
                        else {
                            game.scorePoint("blue");
                        }
                    }
                    if (room.getBallPosition().x < 0) {
                        if (game.lastAction == "null") {
                            resetRedServe();
                            return false;
                        }
                        else if (game.lastAction != "redKick") {
                            game.scorePoint("blue");
                        }
                    }
                }
                if (game.serve == "blue") {
                    if (room.getBallPosition().x < 0) {
                        if (game.lastAction == "blueBounce") {
                            if (game.netTouch == true) {
                                announce("LET!");
                                resetBlueServe();
                                return false;
                            }
                            else {
                                game.serve = "null"; //valid blue serve
                            }
                        }
                        else {
                            game.scorePoint("red");
                        }
                    }
                    if (room.getBallPosition().x > 0) {
                        if (game.lastAction == "null") {
                            resetBlueServe();
                            return false;
                        }
                        else if (game.lastAction != "blueKick") {
                            game.scorePoint("red");
                        }
                    }
                }
            }
            if (game.serve == "null") { // General Play

                if (room.getBallPosition().x > 0) {
                    if (game.lastAction == "blueKick" || game.lastAction == "blueTouch") {
                        game.scorePoint("red");
                    }
                }
                if (room.getBallPosition().x < 0) {
                    if (game.lastAction == "redKick" || game.lastAction == "redTouch") {
                        game.scorePoint("blue");
                    }
                }

            }


            if (room.getBallPosition().x < 0) {
                game.lastAction = "redBounce";
            }
            if (room.getBallPosition().x > 0) {
                game.lastAction = "blueBounce";
            }
            if (room.getBallPosition().x < 0) { //red side bounce
                if (game.lastBounce != "red") {
                    game.lastBounce = "red";
                }
                else {
                    game.scorePoint("blue");
                }
            }
            if (room.getBallPosition().x > 0) { //blue side bounce
                if (game.lastBounce != "blue") {
                    game.lastBounce = "blue";
                }
                else {
                    game.scorePoint("red");
                }
            }
        }
        // END BALL BOUNCE ON TABLE

        // BALL BOUNCE ON GROUND
        if (room.getBallPosition().y == 179) { // if ball touch the ground
            if (game.lastAction == "redKick" || game.lastAction == "redTouch" || game.lastAction == "redBounce") {
                game.scorePoint("blue");
            }
            if (game.lastAction == "blueKick" || game.lastAction == "blueTouch" || game.lastAction == "blueBounce") {
                game.scorePoint("red");
            }
            if (game.serve == "red" && game.lastAction == "null") {
                resetRedServe();
            }
            if (game.serve == "blue" && game.lastAction == "null") {
                resetBlueServe();
            }
        }
        // END BALL BOUNCE ON GROUND

        // DRAGGING BALL
        if (game.dragBall == 20 && game.serve == "null") {
            if (room.getPlayer(game.draggerId).team == 1) {
                game.scorePoint("blue");
            }
            if (room.getPlayer(game.draggerId).team == 2) {
                game.scorePoint("red");
            }
        }
    }
}

function resetRedServe() {
    if (TTPractice == true) {
        return false;
    }
    room.setDiscProperties(0, {xspeed:0,yspeed:0,x:-300,y:0});
    room.setDiscProperties(3, {xspeed:0,yspeed:0,x:-300,y:6});
    var players = room.getPlayerList().filter((player) => player.team == 1);
    if (players[0] != undefined) {
        room.setPlayerDiscProperties(players[0].id, {xspeed:0,yspeed:0,x:-300,y:50});
    }
    game.netTouch = false;
    game.lastAction = "null";
    game.lastBounce = "null";
    game.dragBall = 0;
}

function resetBlueServe() {
    if (TTPractice == true) {
        return false;
    }
    room.setDiscProperties(0, {xspeed:0,yspeed:0,x:300,y:0});
    room.setDiscProperties(3, {xspeed:0,yspeed:0,x:300,y:6});
    var players = room.getPlayerList().filter((player) => player.team == 2);
    if (players[0] != undefined) {
        room.setPlayerDiscProperties(players[0].id, {xspeed:0,yspeed:0,x:300,y:50});
    }
    game.netTouch = false;
    game.lastAction = "null";
    game.lastBounce = "null";
    game.dragBall = 0;
}


function handleNetTouch() {
    var netPosition = {x: room.getDiscProperties(2).x, y: room.getDiscProperties(2).y};
    var ballPosition = room.getBallPosition();
    var ballRadius = game.ballRadius;
    var triggerDistance = ballRadius + 1 + 0.01;


    var distanceToNet = pointDistance(netPosition, ballPosition);
    if ( distanceToNet < triggerDistance || (ballPosition.x >= -11 && ballPosition.x <= 11 && ballPosition.y >= 47)) {
        if (game.pointScored == false) {
            game.netTouch = true;
        }
    }
}

function updateGameStatus() {
    game.time = Math.floor(room.getScores().time);
    game.ballRadius = room.getDiscProperties(0).radius;
}


function announce(msg, targetId, color, style, sound) {
    if (color == null) {
        color = 0xFFFD82;
    }
    if (style == null) {
        style = "bold";
    }
    if (sound == null) {
        sound = 0;
    }
    room.sendAnnouncement(msg, targetId, color, style, sound);
    console.log("Announce: " + msg);
}

function whisper(msg, targetId, color, style, sound) {
    if (color == null) {
        color = 0x66C7FF;
    }
    if (style == null) {
        style = "normal";
    }
    if (sound == null) {
        sound = 0;
    }
    room.sendAnnouncement(msg, targetId, color, style, sound);
    if (room.getPlayer(targetId) != null) {
        console.log("Whisper -> " + room.getPlayer(targetId).name + ": " + msg);
    }
}

function isAdminPresent() {
    var players = room.getPlayerList();
    if (players.find((player) => player.admin) != null) {
        return true;
    }
    else {
        return false;
    }
}

function displayAdminMessage() {
    if (isAdminPresent() == false && allowPublicAdmin == true) {
        announce("No admin present: Type !admin to take control");
    }
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/*-------------------------------- STADIUMS ---------------------------------*/
function getMap() {
    var map = `{"name":"Table Tennis [ᴋᴜᴍᴀ]","width":480,"height":200,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":280,"redSpawnPoints":[[-300,50],[-420,50]],"blueSpawnPoints":[[300,50],[420,50]],"canBeStored":false,"kickOffReset":"full","bg":{"color":"454C5E","height":200,"width":480,"cornerRadius":0,"kickOffRadius":0},"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"vertexes":[{"x":-250,"y":82.5,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":82.5,"cMask":["ball"],"color":"000000","bias":0},{"x":-250,"y":84,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":84,"cMask":["ball"],"color":"000000","bias":0},{"x":-250,"y":80,"bCoef":1,"cMask":["ball"],"color":"2EA0E4","bias":10},{"x":250,"y":80,"bCoef":1,"cMask":["ball"],"color":"2EA0E4","bias":10},{"x":-250,"y":85.5,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":85.5,"cMask":["ball"],"color":"000000","bias":0},{"x":-250,"y":87,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":87,"cMask":["ball"],"color":"000000","bias":0},{"x":0,"y":50,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":0},{"x":0,"y":93,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":0},{"x":220,"y":85,"cMask":["c3"],"bias":0},{"x":220,"y":184,"cMask":["c3"],"bias":0},{"x":-220,"y":85,"cMask":["c3"],"bias":0},{"x":-220,"y":184,"cMask":["c3"],"bias":0},{"x":-218,"y":85,"cMask":["c3"]},{"x":-218,"y":184,"cMask":["c3"]},{"x":-216,"y":85,"cMask":["c3"]},{"x":-216,"y":184,"cMask":["c3"]},{"x":218,"y":85,"cMask":["c3"]},{"x":218,"y":184,"cMask":["c3"]},{"x":216,"y":85,"cMask":["c3"]},{"x":216,"y":184,"cMask":["c3"]},{"x":90,"y":85,"cMask":["ball"]},{"x":90,"y":160,"cMask":["c3"]},{"x":-90,"y":85,"cMask":["ball"]},{"x":-90,"y":160,"cMask":["c3"]},{"x":-92,"y":85,"cMask":["c3"]},{"x":-92,"y":160,"cMask":["c3"]},{"x":-88,"y":85,"cMask":["c3"]},{"x":-88,"y":160,"cMask":["c3"]},{"x":92,"y":85,"cMask":["c3"]},{"x":92,"y":160,"cMask":["c3"]},{"x":88,"y":85,"cMask":["c3"]},{"x":88,"y":160,"cMask":["c3"]},{"x":40,"y":160,"cMask":["c3"]},{"x":140,"y":160,"cMask":["c3"]},{"x":-40,"y":160,"cMask":["c3"]},{"x":-140,"y":160,"cMask":["c3"]},{"x":-40,"y":162,"cMask":["c3"]},{"x":-140,"y":162,"cMask":["c3"]},{"x":-40,"y":164,"cMask":["c3"]},{"x":-140,"y":164,"cMask":["c3"]},{"x":40,"y":162,"cMask":["c3"]},{"x":140,"y":162,"cMask":["c3"]},{"x":40,"y":164,"cMask":["c3"]},{"x":140,"y":164,"cMask":["c3"]},{"x":-135,"y":162,"cMask":["c3"]},{"x":-135,"y":174,"cMask":["c3"]},{"x":135,"y":162,"cMask":["c3"]},{"x":135,"y":174,"cMask":["c3"]},{"x":45,"y":162,"cMask":["c3"]},{"x":45,"y":174,"cMask":["c3"]},{"x":-45,"y":162,"cMask":["c3"]},{"x":-45,"y":174,"cMask":["c3"]},{"x":-580,"y":185,"cMask":["ball","red","blue"],"color":"ffffff","bias":20},{"x":580,"y":185,"cMask":["ball","red","blue"],"color":"ffffff","bias":20},{"x":-580,"y":187,"cMask":["ball","red","blue"],"color":"ffffff"},{"x":580,"y":187,"cMask":["ball","red","blue"],"color":"ffffff"},{"x":5,"y":53,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":5,"vis":false},{"x":5,"y":85,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":5,"vis":false},{"x":-5,"y":53,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":-5,"vis":false},{"x":-5,"y":85,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":-5,"vis":false},{"x":-250,"y":89,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":89,"cMask":["ball"],"color":"000000","bias":0},{"x":0,"y":220,"bCoef":0,"cMask":["red","blue"],"vis":false},{"x":0,"y":-200,"bCoef":0,"cMask":["red","blue"],"vis":false},{"x":250,"y":89,"bCoef":1,"cMask":["ball"],"bias":20},{"x":250,"y":110,"bCoef":1,"cMask":["ball"],"bias":20},{"x":220,"y":110,"bCoef":1,"cMask":["ball"]},{"x":-250,"y":110,"bCoef":1,"cMask":["ball"],"bias":20},{"x":-250,"y":89,"bCoef":1,"cMask":["ball"],"bias":20}],"segments":[{"v0":0,"v1":1,"color":"18181A","cMask":["ball"],"bias":0,"y":82.5},{"v0":2,"v1":3,"color":"18181A","cMask":["ball"],"bias":0,"y":84},{"v0":4,"v1":5,"color":"2EA0E4","bCoef":1,"cMask":["ball"],"bias":10},{"v0":6,"v1":7,"color":"18181A","cMask":["ball"],"bias":0,"y":85.5},{"v0":8,"v1":9,"color":"18181A","cMask":["ball"],"bias":0,"y":87},{"v0":10,"v1":11,"color":"18181A","bCoef":0.1,"cMask":["ball","red","blue"],"bias":0,"x":0},{"v0":12,"v1":13,"color":"18181A","cMask":["c3"],"bias":0,"x":220},{"v0":14,"v1":15,"color":"18181A","cMask":["c3"],"bias":0,"x":-220},{"v0":16,"v1":17,"color":"18181A","cMask":["c3"],"bias":0,"x":-218},{"v0":18,"v1":19,"color":"18181A","cMask":["c3"],"bias":0,"x":-216},{"v0":20,"v1":21,"color":"18181A","cMask":["c3"],"bias":0,"x":218},{"v0":22,"v1":23,"color":"18181A","cMask":["c3"],"bias":0,"x":216},{"v0":24,"v1":25,"color":"18181A","cMask":["c3"],"bias":0,"x":90},{"v0":26,"v1":27,"color":"18181A","cMask":["c3"],"bias":0,"x":-90},{"v0":28,"v1":29,"color":"18181A","cMask":["c3"],"bias":0,"x":-92},{"v0":30,"v1":31,"color":"18181A","cMask":["c3"],"bias":0,"x":-88},{"v0":32,"v1":33,"color":"18181A","cMask":["c3"],"bias":0,"x":92},{"v0":34,"v1":35,"color":"18181A","cMask":["c3"],"bias":0,"x":88},{"v0":36,"v1":37,"color":"18181A","cMask":["c3"],"bias":0},{"v0":39,"v1":38,"color":"18181A","cMask":["c3"],"bias":0},{"v0":41,"v1":40,"color":"18181A","cMask":["c3"],"bias":0,"y":162},{"v0":43,"v1":42,"color":"18181A","cMask":["c3"],"bias":0,"y":164},{"v0":44,"v1":45,"color":"18181A","cMask":["c3"],"bias":0,"y":162},{"v0":46,"v1":47,"color":"18181A","cMask":["c3"],"bias":0,"y":164},{"v0":48,"v1":49,"color":"18181A","cMask":["c3"],"bias":0,"x":-135},{"v0":50,"v1":51,"color":"18181A","cMask":["c3"],"bias":0,"x":135},{"v0":52,"v1":53,"color":"18181A","cMask":["c3"],"bias":0,"x":45},{"v0":54,"v1":55,"color":"18181A","cMask":["c3"],"bias":0,"x":-45},{"v0":56,"v1":57,"color":"ffffff","cMask":["ball","red","blue"],"bias":20,"y":185},{"v0":58,"v1":59,"color":"ffffff","cMask":["ball","red","blue"],"bias":0,"y":187},{"v0":60,"v1":61,"vis":false,"color":"18181A","bCoef":0.1,"cMask":["ball","red","blue"],"bias":5,"x":5},{"v0":62,"v1":63,"vis":false,"color":"18181A","bCoef":0.1,"cMask":["ball","red","blue"],"bias":-5,"x":-5},{"v0":64,"v1":65,"color":"18181A","cMask":["ball"],"bias":0,"y":89},{"v0":66,"v1":67,"vis":false,"bCoef":0,"cMask":["red","blue"]},{"v0":68,"v1":69,"vis":false,"color":"2EA0E4","bCoef":1,"cMask":["ball"],"bias":20},{"v0":71,"v1":72,"vis":false,"color":"2EA0E4","bCoef":1,"cMask":["ball"],"bias":20},{"v0":69,"v1":71,"vis":false,"color":"2EA0E4","bCoef":1,"cMask":["ball"],"bias":20}],"goals":[{"p0":[-5,300],"p1":[-5,320],"team":"red"},{"p0":[5,300],"p1":[5,320],"team":"blue"}],"discs":[{"radius":6,"invMass":10,"pos":[-300,0],"bCoef":0.95,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.985,"gravity":[0,0.18]},{"radius":0,"invMass":1,"pos":[0,310],"color":"000000","cMask":["c2"],"cGroup":["score"],"damping":0.99},{"radius":1,"invMass":0,"pos":[0,50],"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"]},{"radius":0,"invMass":0,"pos":[-300,6],"bCoef":0,"cMask":["ball"]},{"radius":6,"invMass":0,"pos":[-135,177],"color":"18181A","cMask":["c3"],"damping":0},{"radius":6,"invMass":0,"pos":[135,177],"color":"18181A","cMask":["c3"],"damping":0},{"radius":6,"invMass":0,"pos":[45,177],"color":"18181A","cMask":["c3"],"damping":0},{"radius":6,"invMass":0,"pos":[-45,177],"color":"18181A","cMask":["c3"],"damping":0}],"planes":[{"normal":[0,-1],"dist":-185,"cMask":["ball","red","blue"],"_data":{"extremes":{"normal":[0,-1],"dist":-185,"canvas_rect":[-971,-380,972,380],"a":[-971,185],"b":[972,185]}}},{"normal":[0,1],"dist":-200,"bCoef":0,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-971,-380,972,380],"a":[-971,-200],"b":[972,-200]}}},{"normal":[-1,0],"dist":-580,"bCoef":1,"cMask":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-580,"canvas_rect":[-971,-380,972,380],"a":[580,-380],"b":[580,380]}}},{"normal":[1,0],"dist":-580,"bCoef":1,"cMask":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-580,"canvas_rect":[-971,-380,972,380],"a":[-580,-380],"b":[-580,380]}}}],"joints":[],"playerPhysics":{"radius":30,"bCoef":0.1,"kickingAcceleration":0.4,"acceleration":0.3,"damping":0.9,"kickStrength":1.1,"invMass":0.001,"kickingDamping":0.9},"ballPhysics":"disc0"}`;

    return map;
}

/*------------------------------ END OF STADIUMS ----------------------------*/






