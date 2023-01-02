// Projeto para um BOT definitivo, com ranking de diversas modalidades

var room = HBInit({
    roomName: "Futsal Império Beager",
    maxPlayers: 14,
    noPlayer: true,
    public: true,
    geo: {code: 'BR', lat: -23.46463, lon: -46.46835}
          })






// variáveis
{

//discord
var playermutado = ""
var playerdesmutado = ""


// cores
var amarelo = 0xFFC766
var vermelho = 0xC94C40
var azul = 0x0066CC
var verde = 0x29A329
var corceo = 0xd24dff
var dantcor = 0x3AC6C6
var pvcor = 0x5cd65c
var pvcor2 = 0x248f24
var princor = 0x1E7FFF
var infacor = 0x815E18
var baracor = 0x000000
var cavacor = 0xFFFFFF
        

//stats
var maiorID = 0


var admafk1

var whileGame = 0
var jogoPausado = 0


// ranking
var top1cor = 0xFFD700
var top2cor = 0xBFBFBF
var top3cor = 0xCD7F32


// gametick
var ativo = 0;
var trancada = 0;
var placarred = 0
var placarblue = 0
var comandoafk = 0



var duplicatePlayer = []
var namePlayer = []


// ranking
var top1aut, top2aut, top3aut
var top1cor = 0xFFD700
var top2cor = 0xBFBFBF //D5D5D5
var top3cor = 0xCD7F32


//senhas


// cargos
var principes = []
var infantes = []
var baroes = []
var cavaleiros = []


var usuariosativos2
var usuariosafk = []
var playerAfk = []
var autentica = []
var gameStarted

chatplayer = []
pvplayer = []


}

var last_toucher;
var second_toucher;
var team_name = team => team == 1 ? "Blue" : "Red";
var isOwnGoal = (team, player) => team != player.team ? " (gol contra)" : "";
var floor = s => s < 10 ? "0" + s : s;
var playerTouchedTwice = playerList => playerList[0].team == playerList[1].team ? " (assistência de " + playerList[1].name + ")" : "";
var init = "init";
init.id = 0;
var scorers;
var whoTouchedLast;
var whoTouchedBall = [init, init];
var radiusBall = 10;
var triggerDistance = radiusBall + 15 + 0.1;

// configuração da sala
{
room.setTimeLimit(3);
room.setScoreLimit(3);
room.setTeamsLock(true);
}



// funções room.on
{
room.onPlayerJoin = function(player)
{
updateAdmins()
msg = ""

room.sendAnnouncement("Seja bem vindo ao Império Beager!", player.id, verde, "bold", 0);

chatplayer[player.id] = 0
pvplayer[player.id] = [{name:0,id:0},{name:0,id:0},{name:0,id:0}]

var found5 = principes.find(element => element == player.auth);
var found6 = baroes.find(element => element == player.auth);
var found7 = infantes.find(element => element == player.auth);
var found8 = cavaleiros.find(element => element == player.auth);


if(found5 != undefined)
{
    msg += "👑 O príncipe "
    room.setPlayerAdmin(player.id, true)
    msg += player.name
    room.sendAnnouncement(msg + " entrou na sala.", null, princor, "bold", 2);
}
    
else if(found6 != undefined)
{
    msg += "👑 O barão "
    room.setPlayerAdmin(player.id, true)
    msg += player.name
    room.sendAnnouncement(msg + " entrou na sala.", null, baracor, "bold", 2);
}

else if(found7 != undefined)
{
    msg += "👑 O infante "
    room.setPlayerAdmin(player.id, true)
    msg += player.name
    room.sendAnnouncement(msg + " entrou na sala.", null, infacor, "bold", 2);
}

else if(found8 != undefined)
{
    msg += "👑 O cavaleiro "
    room.setPlayerAdmin(player.id, true)
    msg += player.name
    room.sendAnnouncement(msg + " entrou na sala.", null, cavacor, "bold", 2);
}

autentica[player.id] = player.auth

//maiorID = player.id
maiorID++

playerAfk[player.id] = 0

if(duplicatePlayer[autentica[player.id]] != undefined)
    duplicatePlayer[autentica[player.id]]++

else
    duplicatePlayer[autentica[player.id]] = 1

if(duplicatePlayer[autentica[player.id]] == 2)
{
    for(i=0; i<room.getPlayerList().length; i++)
    {
        if((autentica[room.getPlayerList()[i].id] == autentica[player.id]) && (room.getPlayerList()[i].id != player.id))
            room.kickPlayer(room.getPlayerList()[i].id, "Você reentrou na sala.", false);

    }

}

}

room.onPlayerChat = function(player,message)
{

if(chatplayer[player.id] == 1 && message.slice(0,1) != "!")
{
    if(pvplayer[player.id][0].id != 0)
        room.sendAnnouncement("[Time] " + player.name + ": " + message, pvplayer[player.id][0].id, pvcor, "bold", 0);

    if(pvplayer[player.id][1].id != 0)
        room.sendAnnouncement("[Time] " + player.name + ": " + message, pvplayer[player.id][1].id, pvcor, "bold", 0);

    if(pvplayer[player.id][2].id != 0)
        room.sendAnnouncement("[Time] " + player.name + ": " + message, pvplayer[player.id][2].id, pvcor, "bold", 0);

    return false
}


var mod = 0

var prin = principes.find(element => element == autentica[player.id]);
var infa = infantes.find(element => element == autentica[player.id]);
var bara = baroes.find(element => element == autentica[player.id]);
var cava = cavaleiros.find(element => element == autentica[player.id]);


if(prin != undefined || infa != undefined || bara != undefined || cava != undefined)
    mod = 1

    // chat
{
    if(message == "!time")
    {
        if(player.team != 0)
        {
            var usuario = room.getPlayerList()

            for(i=0; i<usuario.length; i++)
            {
                if(usuario[i].team == player.team)
                {
                    chatplayer[player.id] = 1
                    
                    if(pvplayer[player.id][0].id == 0)
                        pvplayer[player.id][0] = {name:usuario[i].name, id:usuario[i].id}

                    else if(pvplayer[player.id][1].id == 0)
                        pvplayer[player.id][1] = {name:usuario[i].name, id:usuario[i].id}

                    else if(pvplayer[player.id][2].id == 0)
                        pvplayer[player.id][2] = {name:usuario[i].name, id:usuario[i].id}
                }
            }

            if(chatplayer[player.id] == 1)
            {
                room.sendAnnouncement("🔒 Você entrou no modo Chat de Time. Suas mensagens serão repassadas para o seu time.", player.id, corceo, "bold", 2);
                room.sendAnnouncement("Para voltar ao modo Chat Geral, digite !geral", player.id, verde, "bold", 0);
            }

            else
            {
                room.sendAnnouncement("❌ Esse jogador não existe.", player.id, vermelho, "bold", 0);
            }
        }

        else
        {
            room.sendAnnouncement("❌ Você não está jogando.", player.id, vermelho, "bold", 2);

        }

        return false
    }

    if(message == "!geral")
    {
        if(chatplayer[player.id] == 1)
        {
            chatplayer[player.id] = 0
            pvplayer[player.id] = [{name:0,id:0},{name:0,id:0},{name:0,id:0}]

            room.sendAnnouncement("✔️ Você entrou no modo Chat Geral.", player.id, verde, "bold", 0);
        }

        else
        {
            room.sendAnnouncement("❌ Você já está no modo Chat Geral.", player.id, vermelho, "bold", 0);
        }

        return false
    }
        
    if(message == "!pri")
    {
        principes.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " agora é um príncipe do Império Beager!", null, princor, "bold", 2);

        return false
    }

    if(message == "!inf")
    {
        infantes.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " agora é um infante do Império Beager!", null, infacor, "bold", 2);

        return false
    }

    if(message == "!bar")
    {
        baroes.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " agora é um barão do Império Beager!", null, baracor, "bold", 2);

        return false
    }

    if(message == "!cav")
    {
        cavaleiros.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " agora é um cavaleiro do Império Beager!", null, cavacor, "bold", 2);

        return false
    }

    if(message == "!rr")
    {
        if(mod == 1)
        {
            room.stopGame()
            room.startGame()
            room.pauseGame(1)
            room.pauseGame(0)

            room.sendAnnouncement("⌛️ O moderador " + player.name + " reiniciou a partida.", null, amarelo, "bold", 1);
        }

        return false
    }


        if(message == "!bb")
        {
            room.kickPlayer(player.id, "Volte sempre!", false);
            return false
        }
        
        
        if(message == "!clear")
        {
            if(mod == 1)
            {
                room.clearBans();
                room.sendAnnouncement("✔️ " + player.name + " desbaniu todos os jogadores.", null, verde, "bold", 2);
            }

            return false
        }

        if(message == "!help")
        {
            room.sendAnnouncement("!afk > fica ausente e não pode ser escolhido para jogar", player.id, amarelo, "bold", 0);
            room.sendAnnouncement("!bb > é kickado da sala", player.id, amarelo, "bold", 0);

            return false
        }
        
        if(message == "!afk")
        {
            if(player.team == 0)
            {
                if(playerAfk[player.id] == 0)
                {
                    playerAfk[player.id] = 1;
                    room.sendAnnouncement("💤 " + player.name + " agora está ausente.", null, vermelho, "bold", 1);
                }

                else if(playerAfk[player.id] == 1)
                {
                    playerAfk[player.id] = 0;
                    room.sendAnnouncement("✔️ " + player.name + " não está mais ausente.", null, verde, "bold", 1);
                }
            }

            else
            {
                room.sendAnnouncement("💤 " + player.name + " agora está ausente.", null, vermelho, "bold", 1);
                room.setPlayerTeam(player.id, 0)
                playerAfk[player.id] = 1;
                room.pauseGame(1)



                //if()
            }

            return false
        }

        if(message.substr(0,3) == "!pw")
        {
            if(mod == 1)
            {
                if(message.length > 4)
                {
                    trancada = 1
                    room.sendAnnouncement("🔐 A sala foi trancada.", null, vermelho, "bold", 2);
                    room.sendAnnouncement("Senha: " + message.substr(4), player.id, amarelo, "normal", 2);
                    room.setPassword(message.substr(4));
                }

                else
                {
                    trancada = 0
                    room.sendAnnouncement("🔓 A sala foi reaberta.", null, verde, "bold", 2);
                    room.setPassword(null);
                }
            }

            return false
        }
}

if(message.slice(0,1) == "!")
    return false

if(prin != undefined)
{
    room.sendAnnouncement(player.name + ": " + message, null, princor, "bold", 1);

    return false
}

else if(infa != undefined)
{
    room.sendAnnouncement(player.name + ": " + message, null, infacor, "bold", 1);

    return false
}

else if(bara != undefined)
{
    room.sendAnnouncement(player.name + ": " + message, null, baracor, "bold", 1);

    return false
}

else if(cava != undefined)
{
    room.sendAnnouncement(player.name + ": " + message, null, cavacor, "bold", 1);

    return false
}

}



room.onGamePause = function()
{
jogoPausado = 1
}

room.onGameUnpause = function()
{
jogoPausado = 0
}


room.onGameStart = function()
{
whileGame = 1
room.pauseGame(1)
room.pauseGame(0)

room.sendAnnouncement("O jogo está prestes a começar!", null, verde, "bold", 2);
}

room.onGameStop = function()
{
whileGame = 0
jogoPausado = 0
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer)
{
    var prin = principes.find(element => element == autentica[kickedPlayer.id]);
    var infa = infantes.find(element => element == autentica[kickedPlayer.id]);
    var bara = baroes.find(element => element == autentica[kickedPlayer.id]);
    var cava = cavaleiros.find(element => element == autentica[kickedPlayer.id]);

    var mod2 = 0
    var mod3 = 0


    if(prin != undefined || infa != undefined || bara != undefined || cava != undefined)
        mod2 = 1

    if(byPlayer != null)
    {
        var prin2 = principes.find(element => element == autentica[byPlayer.id]);
        var infa2 = infantes.find(element => element == autentica[byPlayer.id]);
        var bara2 = baroes.find(element => element == autentica[byPlayer.id]);
        var cava2 = cavaleiros.find(element => element == autentica[byPlayer.id]);


        if(prin2 != undefined || infa2 != undefined || bara2 != undefined || cava2 != undefined)
            mod3 = 1

        if(mod2 == 1 && mod3 == 0)
        {
            room.kickPlayer(byPlayer.id, "Você não pode expulsar ou banir membros da moderação.", 0)

            if(ban)
            {
                room.clearBan(kickedPlayer.id)
            }
        }
    }
}

room.onGameTick = function()
{

whoTouchedLast = getLastTouchTheBall(whoTouchedLast);

if (whoTouchedLast != undefined && whoTouchedLast.id != whoTouchedBall[0].id)
{
    whoTouchedBall[1] = whoTouchedBall[0];
    whoTouchedBall[0] = whoTouchedLast; // last player who touched the ball
}

room.onTeamGoal = function(team)
{
    updatePlayerList();

    var ownGoal = isOwnGoal(team, whoTouchedBall[0]);
    var assist = "";

    var autor = whoTouchedBall[0].name


    if(ownGoal == "")
        assist = playerTouchedTwice(whoTouchedBall);

    if(team == 1)
    {
        team_name = "Constitucionalistas"
    }

    else
    {
        team_name = "Absolutistas"
    }

    room.sendAnnouncement("⚽ GOOOOOL! " + autor + ownGoal + " marcou"
    + assist + " contra os " + team_name + "!", null, verde, "bold", 1);
    
    assist = ""

    whoTouchedBall = [init, init];
    whoTouchedLast = undefined;

    
}

}

function updateAdmins()
{
    var players = room.getPlayerList().filter((player) => player.id != 0 );
    if ( players.length == 0 ) return;
    if ( players.find((player) => player.admin) != null ) return;
    room.setPlayerAdmin(players[0].id, true);
}



room.onPlayerLeave = function(player)
{
updateAdmins()
playerAfk[player.id] = 0

duplicatePlayer[autentica[player.id]]--

if(player.team != 0)
{
    room.pauseGame(1)
}

updateAdmins()

}


room.onStadiumChange = function(newStadiumName)
{
if(newStadiumName != "Futsal Império Beager" && newStadiumName != "Classic")
{
    room.setDefaultStadium("Classic");
    room.sendAnnouncement("O mapa não pode ser alterado!", null, vermelho, "normal", 2);
}
}


room.onPlayerTeamChange = function(player)
{

room.pauseGame(1)

if(player.team != 0)
{
    if(playerAfk[player.id] == 1)
    {
        room.setPlayerTeam(player.id, 0)
        room.sendAnnouncement(player.name + " está ausente, portanto não pode jogar!", null, vermelho, "bold", 2);
    }
}
}


}

// funções artificiais
{


function avisopv()
{
    room.sendAnnouncement("Para abrir o chat de time, digite !time. Se quiser sair desse modo, digite !geral", null, pvcor, "bold", 2);
}

setInterval(avisopv, 180000)


function updatePlayerList()
{
    usuariosativos = room.getPlayerList()

    function testando(x,y)
    {
        if(x.team > y.team)
            return -1;
            
        else if(x.team < y.team) 
            return 1;
    }

    usuariosativos.sort(testando);
}

}


function pointDistance(p1, p2)
{
var d1 = p1.x - p2.x;
var d2 = p1.y - p2.y;
return Math.sqrt(d1 * d1 + d2 * d2);
}

function getLastTouchTheBall(lastPlayerTouched)
{
var ballPosition = room.getBallPosition();
var players = room.getPlayerList();

for(var i = 0; i < players.length; i++)
    if(players[i].position != null)
    {
        var distanceToBall = pointDistance(players[i].position, ballPosition);

        if(distanceToBall < triggerDistance)
            lastPlayerTouched = players[i];
    }

return lastPlayerTouched;
}