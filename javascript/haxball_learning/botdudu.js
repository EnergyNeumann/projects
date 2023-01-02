// Projeto para um BOT definitivo, com ranking de diversas modalidades

var room = HBInit({
    roomName: "Campeonato Brasileiro de x4",
    maxPlayers: 20,
    noPlayer: true,
    public: true,
    geo: {code: 'BR', lat: -23.756271656734253, lon: -46.660205696533936}
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
var corceo = 0x964b00
var cormod = 0x3AC6C6
var pvcor = 0x5cd65c
var pvcor2 = 0x248f24
var coradm = 0x03bb85
var corvip = 0xffff00
var corpro = 0xffcbdb
var coratl = 0x000000
var corbah = 0x0047ab
var corbra = 0xffff00
var corcha = 0x008000
var corsao = 0xf2f2f2
var corfor = 0xff0000
        
//stats
var maiorID = 0


var admafk1

var whileGame = 0
var jogoPausado = 0



// gametick
var ativo = 0;
var trancada = 0;
var placarred = 0
var placarblue = 0
var comandoafk = 0



var duplicatePlayer = []
var namePlayer = []



//senhas


// cargos
var ceos = []
var adms = []
var mods = []
var vips = []
var pros = []
var atls = []
var bahs = []
var bras = []
var chas = []
var saos = []
var fors = []


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
var isOwnGoal = (team, player) => team != player.team ? " (😂 GOOOOOL COONTRAAA!)" : "";
var floor = s => s < 10 ? "0" + s : s;
var playerTouchedTwice = playerList => playerList[0].team == playerList[1].team ? " (👨‍🍳 GARÇOM COM CODNOME DE " + playerList[1].name + ")" : "";
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

room.sendAnnouncement("ㅤㅤㅤㅤLink do discord > https://discord.gg/Be5PRpUa", player.id, verde, "bold", 0);

chatplayer[player.id] = 0
pvplayer[player.id] = [{name:0,id:0},{name:0,id:0},{name:0,id:0}]

var found5 = ceos.find(element => element == player.auth);
var found6 = mods.find(element => element == player.auth);
var found7 = adms.find(element => element == player.auth);
var found8 = vips.find(element => element == player.auth);
var found9 = pros.find(element => element == player.auth);
var found10 = atls.find(element => element == player.auth);
var found11 = bahs.find(element => element == player.auth);
var found12 = bras.find(element => element == player.auth);
var found13 = chas.find(element => element == player.auth);
var found14 = saos.find(element => element == player.auth);
var found15 = fors.find(element => element == player.auth);


if(found5 != undefined)
{
    msg += "👑 O Ceo "
    room.setPlayerAdmin(player.id, true)
    msg += player.name
    room.sendAnnouncement(msg + " Entrou sala", null, corceo, "bold", 2);
}
    
else if(found6 != undefined)
{
    msg += "👑 O Mod "
    room.setPlayerAdmin(player.id, true)
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, cormod, "bold", 2);
}

else if(found7 != undefined)
{
    msg += "👑 O Adm "
    room.setPlayerAdmin(player.id, true)
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, coradm, "bold", 2);
}

else if(found8 != undefined)
{
    msg += "👑 O Vip "
    room.setPlayerAdmin(player.id, true)
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, corvip, "bold", 2);
}

else if(found9 != undefined)
{
    msg += "👑 O Programador "
    room.setPlayerAdmin(player.id, true)
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, corpro, "bold", 2);
}

else if(found10 != undefined)
{
    msg += "O(a) jogador(a) do Atlético MG "
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, coratl, "bold", 2);
}

else if(found11 != undefined)
{
    msg += "O(a) jogador(a) do Bahia "
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, corbah, "bold", 2);
}

else if(found12 != undefined)
{
    msg += "O(a) jogador(a) do Bragantino "
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, corbra, "bold", 2);
}

else if(found13 != undefined)
{
    msg += "O(a) jogador(a) da Chapecoense "
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, corcha, "bold", 2);
}

else if(found14 != undefined)
{
    msg += "O(a) jogador(a) do Fortaleza "
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, corfor, "bold", 2);
}

else if(found15 != undefined)
{
    msg += "O(a) jogador(a) do São paulo "
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, corsao, "bold", 2);
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
            room.kickPlayer(room.getPlayerList()[i].id, "❌ Você reentrou na sala.", false);

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


var modss = 0

var ceoo = ceos.find(element => element == autentica[player.id]);
var admm = adms.find(element => element == autentica[player.id]);
var modd = mods.find(element => element == autentica[player.id]);
var vipp = vips.find(element => element == autentica[player.id]);
var proo = pros.find(element => element == autentica[player.id]);
var atll = atls.find(element => element == autentica[player.id]);
var braa = bras.find(element => element == autentica[player.id]);
var bahh = bahs.find(element => element == autentica[player.id]);
var saoo = saos.find(element => element == autentica[player.id]);
var forr = fors.find(element => element == autentica[player.id]);
var chaa = chas.find(element => element == autentica[player.id]);


if(ceoo != undefined || admm != undefined || modd != undefined || vipp != undefined || proo != undefined)
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
        
    if(message == "!dudumito")
    {
        ceos.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " Agora é um Ceo", null, corceo, "bold", 2);

        return false
    }

    if(message == "!admfake")
    {
        adms.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " Agora é um Adm", null, coradm, "bold", 2);

        return false
    }

    if(message == "!modlegal")
    {
        mods.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " Agora é um Mod!", null, cormod, "bold", 2);

        return false
    }

    if(message == "!vipbot")
    {
        vips.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " Agora é um Vip!", null, corvip, "bold", 2);

        return false
    }
    
    if(message == "!htmlecss")
    {
        pros.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " Agora é um Programador!", null, corpro, "bold", 2);

        return false
    }

    if(message == "!ruins")
    {
        atls.push(autentica[player.id])
        room.sendAnnouncement("👑 " + player.name + " Agora é do time do Atlético MG!", null, coratl, "bold", 2);

        return false
    }

    if(message == "!bons")
    {
        bahs.push(autentica[player.id])
        room.sendAnnouncement("👑 " + player.name + " Agora é do time do Bahia!", null, corbah, "bold", 2);

        return false
    }

    if(message == "!craques")
    {
        bras.push(autentica[player.id])
        room.sendAnnouncement("👑 " + player.name + " Agora é do time do Bragantino!", null, corbra, "bold", 2);

        return false
    }

    if(message == "!noobs")
    {
        chas.push(autentica[player.id])
        room.sendAnnouncement("👑 " + player.name + " Agora é do time da Chapecoense!", null, corcha, "bold", 2);

        return false
    }

    if(message == "!tops")
    {
        fors.push(autentica[player.id])
        room.sendAnnouncement("👑 " + player.name + " Agora é do time do Fortaleza!", null, corfor, "bold", 2);

        return false
    }

    if(message == "!kkk")
    {
        saos.push(autentica[player.id])
        room.sendAnnouncement("👑 " + player.name + " Agora é do time do São paulo!", null, corsao, "bold", 2);

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
            room.kickPlayer(player.id, "🏃‍♂️ Volte sempre!", false);
            return false
        }
        
        if(message == "!dormir")
        {
            room.kickPlayer(player.id, "💤 Foi dormir!", false);
            return false
        }
        
        if(message == "!discord")
        {
            room.sendAnnouncement("🔗 Link do discord > https://discord.gg/Be5PRpUa", player.id, pvcor, "bold", 2);
            return false
        }

        if(message == "!unis")
        {
            room.sendAnnouncement("!ATL !BAH !BRA !SAO !FOR !CHA", player.id, pvcor, "bold", 2)
            return false
        }
       
        if(message == "!clear")
        {
            if(mod == 1)
            {
                room.clearBans();
                room.sendAnnouncement("✔️ " + player.name + " Desbaniu todos os jogadores.", null, verde, "bold", 2);
            }

            return false
        }

        if(message == "!help")
        {
            room.sendAnnouncement("!afk > fica ausente e não pode ser escolhido para jogar", player.id, amarelo, "bold", 0);
            room.sendAnnouncement("!comer > foi comer e fica afk", player.id, amarelo, "bold", 0);
            room.sendAnnouncement("!bb > é kickado da sala", player.id, amarelo, "bold", 0);
            room.sendAnnouncement("!dormir > vai dormir (kikado da sala)", player.id, amarelo, "bold", 0);
            room.sendAnnouncement("!discord > obtenha o link do servidor", player.id, amarelo, "bold", 0);
            room.sendAnnouncement("!unis > uniformes dos times", player.id, amarelo, "bold", 0);

            return false
        }
        
        
        if(message == "!afk")
        {
            if(player.team == 0)
            {
                if(playerAfk[player.id] == 0)
                {
                    playerAfk[player.id] = 1;
                    room.sendAnnouncement("💤 " + player.name + " Agora está ausente.", null, vermelho, "bold", 1);
                }

                else if(playerAfk[player.id] == 1)
                {
                    playerAfk[player.id] = 0;
                    room.sendAnnouncement("✔️ " + player.name + " Não está mais ausente.", null, verde, "bold", 1);
                }
            }

            else
            {
                room.sendAnnouncement("💤 " + player.name + " Agora está ausente.", null, vermelho, "bold", 1);
                room.setPlayerTeam(player.id, 0)
                playerAfk[player.id] = 1;
                room.pauseGame(1)



                //if()
            }

            return false
        }
        
        
        if(message == "!comer")
        {
            if(player.team == 0)
            {
                if(playerAfk[player.id] == 0)
                {
                    playerAfk[player.id] = 1;
                    room.sendAnnouncement("🍔 " + player.name + " Foi comer", null, vermelho, "bold", 1);
                }

                else if(playerAfk[player.id] == 1)
                {
                    playerAfk[player.id] = 0;
                    room.sendAnnouncement("✔️ " + player.name + " Terminou de comer", null, verde, "bold", 1);
                }
            }

            else
            {
                room.sendAnnouncement("🍔 " + player.name + " Foi comer", null, vermelho, "bold", 1);
                room.setPlayerTeam(player.id, 0)
                playerAfk[player.id] = 1;
                room.pauseGame(1)



                //if()
            }

            return false
        }

        if(message == "!ATL") 
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('!atl1r | !atl1b | !atl2r | !atl2b', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "!atl1r")
        {
            room.setTeamColors(1, 0, 0xFFFFFF, [0xD9D9D9, 0x1F1F1F, 0xD9D9D9]);
            return false
        }
    
        if(message == "!atl1b")
        {
            room.setTeamColors(2, 0, 0xFFFFFF, [0xD9D9D9, 0x1F1F1F, 0xD9D9D9]);
            return false
        }
    
        if(message == "!atl2r")
        {
            room.setTeamColors(1, 60, 0xFFFFFF, [0xE6E6E6]);
            return false
        }

        if (message == "!atl2b")
        {
            room.setTeamColors(2, 60, 0xFFFFFF, [0xE6E6E6]);
            return false
        }

        if(message == "!SAO") 
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('!sao1r | !sao1b | !sao2r | !sao2b', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "!sao1r")
        {
            room.setTeamColors(1, 0, 0x000000, [0x000000, 0xF5F5F5, 0xB50000]);
            return false
        }
    
        if(message == "!sao1b")
        {
            room.setTeamColors(2, 0, 0xFFFFFF, [0x000000]);
            return false
        }
    
        if(message == "!sao2r")
        {
            room.setTeamColors(1, 90, 0x000000, [0x000000, 0xFFFFFF, 0xB50000]);
            return false
        }

        if (message == "!sao2b")
        {
            room.setTeamColors(2, 0, 0xFF0D0D, [0xFFFFFF]);
            return false
        }

        if(message == "!FOR") 
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('!for1r | !for1b | !for2r | !for2b', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "!for1r")
        {
            room.setTeamColors(1, 90, 0xFFFFFF, [0x002040, 0x770606, 0x002040]);
            return false
        }
    
        if(message == "!for1b")
        {
            room.setTeamColors(2, 90, 0xFFFFFF, [0x002040, 0x770606, 0x002040]);
            return false
        }
    
        if(message == "!for2r")
        {
            room.setTeamColors(1, 90, 0x000626, [0xFFFFFF, 0x002040, 0x910C0C]);
            return false
        }

        if (message == "!for2b")
        {
            room.setTeamColors(2, 90, 0x000626, [0xFFFFFF, 0x002040, 0x910C0C]);
            return false
        }

        if(message == "!CHA") 
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('!cha1r | !cha1b | !cha2r | !cha2b | !cha3b | !cha3r', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "!cha1r")
        {
            room.setTeamColors(1, 60, 0x26631D, [0x9AFF57]);
            return false
        }
    
        if(message == "!cha1b")
        {
            room.setTeamColors(2, 60, 0x26631D, [0x9AFF57]);
            return false
        }
    
        if(message == "!cha2r")
        {
            room.setTeamColors(1, 60, 0x1A4F00, [0xFFFFFF, 0xF7F7F7, 0xF0F0F0]);
            return false
        }

        if (message == "!cha2b")
        {
            room.setTeamColors(2, 60, 0x1A4F00, [0xFFFFFF, 0xF7F7F7, 0xF0F0F0]);
            return false
        }

        if (message == "!cha3r")
        {
            room.setTeamColors(1, 60, 0x217801, [0x000000, 0x0D0D0D, 0x000000]);
            return false
        }

        if (message == "!cha3b")
        {
            room.setTeamColors(2, 60, 0x217801, [0x000000, 0x0D0D0D, 0x000000]);
            return false
        }

        if(message == "!BRA") 
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('!bra1r | !bra1b | !bra2r | !bra2b', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "!bra1r")
        {
            room.setTeamColors(1, 60, 0xF7FF08, [0x110738]);
            return false
        }
    
        if(message == "!bra1b")
        {
            room.setTeamColors(2, 60, 0x001AFF, [0xFFFFFF]);
            return false
        }
    
        if(message == "!bra2r")
        {
            room.setTeamColors(1, 60, 0xF7FF08, [0x110738]);
            return false
        }

        if (message == "!bra2b")
        {
            room.setTeamColors(2, 60, 0x001AFF, [0xFFFFFF]);
            return false
        }

        if(message == "!BAH") 
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('!bah1r | !bah1b | !bah2r | !bah2b', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "!bah1r")
        {
            room.setTeamColors(1, 90, 0xFF0505, [0xED0800, 0xFFFFFF, 0x0634CC]);
            return false
        }
    
        if(message == "!bah1b")
        {
            room.setTeamColors(2, 90, 0xFF0505, [0xED0800, 0xFFFFFF, 0x0634CC]);
            return false
        }
    
        if(message == "!bah2r")
        {
            room.setTeamColors(1, 30, 0xFFFFFF, [0x031963, 0x04238A, 0x9C0000]);
            return false
        }

        if (message == "!bah2b")
        {
            room.setTeamColors(2, 30, 0xFFFFFF, [0x031963, 0x04238A, 0x9C0000]);
            return false
        }

}

if(message.slice(0,1) == "!")
    return false

if(ceoo != undefined)
{
    room.sendAnnouncement(player.name + ": " + message, null, corceo, "bold", 1);

    return false
}

else if(admm != undefined)
{
    room.sendAnnouncement(player.name + ": " + message, null, coradm, "bold", 1);

    return false
}

else if(modd != undefined)
{
    room.sendAnnouncement(player.name + ": " + message, null, cormod, "bold", 1);

    return false
}

else if(vipp != undefined)
{
    room.sendAnnouncement(player.name + ": " + message, null, corvip, "bold", 1);

    return false
}

else if(proo != undefined)
{
    room.sendAnnouncement(player.name + ": " + message, null, corpro, "bold", 1);

    return false
}

else if(atll != undefined)
{
    room.sendAnnouncement("⬛" + player.name + ": " + message, null, coratl, "bold", 1);

    return false
}

else if(bahh != undefined)
{
    room.sendAnnouncement("🟦" + player.name + ": " + message, null, corbah, "bold", 1);

    return false
}

else if(braa != undefined)
{
    room.sendAnnouncement("🟨" + player.name + ": " + message, null, corbra, "bold", 1);

    return false
}

else if(chaa != undefined)
{
    room.sendAnnouncement("🟩" + player.name + ": " + message, null, corcha, "bold", 1);

    return false
}

else if(forr != undefined)
{
    room.sendAnnouncement("🟥" + player.name + ": " + message, null, corfor, "bold", 1);

    return false
}

else if(saoo != undefined)
{
    room.sendAnnouncement("⬜" + player.name + ": " + message, null, corsao, "bold", 1);

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
    var ceoo = ceos.find(element => element == autentica[kickedPlayer.id]);
    var admm = adms.find(element => element == autentica[kickedPlayer.id]);
    var modd = mods.find(element => element == autentica[kickedPlayer.id]);
    var vipp = vips.find(element => element == autentica[kickedPlayer.id]);
    var proo = pros.find(element => element == autentica[kickedPlayer.id]);

    var mod2 = 0
    var mod3 = 0


    if(ceoo != undefined || admm != undefined || modd != undefined || vipp != undefined || proo != undefined)
        mod2 = 1

    if(byPlayer != null)
    {
        var ceos2 = ceos.find(element => element == autentica[byPlayer.id]);
        var adms2 = adms.find(element => element == autentica[byPlayer.id]);
        var mods2 = mods.find(element => element == autentica[byPlayer.id]);
        var vips2 = vips.find(element => element == autentica[byPlayer.id]);
        var pros2 = pros.find(element => element == autentica[byPlayer.id])
        ;


        if(ceos2 != undefined || adms2 != undefined || mods2 != undefined || vips2 != undefined || pros2 != undefined)
            mod3 = 1

        if(mod2 == 1 && mod3 == 0)
        {
            room.kickPlayer(byPlayer.id, "❌ Você não pode expulsar ou banir membros da moderação.", 0)

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
        team_name = "Casa"
    }

    else
    {
        team_name = "Visita"
    }

    room.sendAnnouncement("⚽ GOOOOOL! " + autor + ownGoal + " MARCOU"
    + assist + " CONTRA OS DA " + team_name + "!", null, verde, "bold", 1);
    
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


function avisoclear()
{
    room.clearBans();
    room.sendAnnouncement("ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤOs bans foram limpos!ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", null, pvcor, "bold", 2);
}
    
setInterval(avisoclear, 220000)


function avisohelp()
{
    room.sendAnnouncement("ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤDigite !help para ver os comandosㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", null, pvcor, "bold", 2);
}

setInterval(avisohelp, 250000)


function avisodc()
{
    room.sendAnnouncement("ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤhttps://discord.gg/Be5PRpUaㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",null, pvcor, "bold", 2);
}

setInterval(avisodc, 100000)


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