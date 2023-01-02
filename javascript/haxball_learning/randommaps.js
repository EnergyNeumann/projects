// Projeto para um BOT definitivo, com ranking de diversas modalidades

var room = HBInit({
    roomName: "🍞 MAPAS ALEATÓRIOS (TORRADA) 🍞",
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
var corceo = 0x964b00
var cormod = 0x3AC6C6
var pvcor = 0x5cd65c
var pvcor2 = 0x248f24
var coradm = 0x03bb85
var corvip = 0xffff00
var corpro = 0xffcbdb
var correg = 0xf2f2f2
        

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
var regi = []


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

room.sendAnnouncement("ㅤㅤㅤㅤLink do discord > https://discord.gg/8MJu7ZgCHg", player.id, verde, "bold", 0);
room.sendAnnouncement("ㅤㅤㅤㅤPara logar, escreva !senha", player.id, verde, "bold", 0);
room.sendAnnouncement("ㅤㅤㅤㅤNão tem uma senha? Escreva !registrar", player.id, verde, "bold", 0);


chatplayer[player.id] = 0
pvplayer[player.id] = [{name:0,id:0},{name:0,id:0},{name:0,id:0}]

var found5 = ceos.find(element => element == player.auth);
var found6 = mods.find(element => element == player.auth);
var found7 = adms.find(element => element == player.auth);
var found8 = vips.find(element => element == player.auth);
var found9 = pros.find(element => element == player.auth);
var found10 = regi.find(element => element == player.auth);


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
    msg += "✅ O Registrado "
    msg += player.name
    room.sendAnnouncement(msg + " Entrou na sala.", null, correg, "bold", 2);
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


var modss = 0 //variavel para !pw

var ceoo = ceos.find(element => element == autentica[player.id]);
var admm = adms.find(element => element == autentica[player.id]);
var modd = mods.find(element => element == autentica[player.id]);
var vipp = vips.find(element => element == autentica[player.id]);
var proo = pros.find(element => element == autentica[player.id]);
var regii = regi.find(element => element == autentica[player.id]);


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
        
    if(message == "!caiu")
    {
        ceos.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " Agora é um Ceo", null, corceo, "bold", 2);

        return false
    }

    if(message == "!borracha")
    {
        adms.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " Agora é um Adm", null, coradm, "bold", 2);

        return false
    }

    if(message == "!camiseta")
    {
        mods.push(autentica[player.id])
        room.setPlayerAdmin(player.id, 1)
        room.sendAnnouncement("👑 " + player.name + " Agora é um Mod!", null, cormod, "bold", 2);

        return false
    }

    if(message == "!mesa")
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

    if(message == "!ga12315")
    {
        regi.push(autentica[player.id])
        room.sendAnnouncement("O " + player.name + " Logou-se como 💎Bαтαтα💎!", null, correg, "bold", 2);

        return false
    }

    if(message == "!12345678910")
    {
        regi.push(autentica[player.id])
        room.sendAnnouncement("O " + player.name + " Logou-se como Mr.Cappucino!", null, correg, "bold", 2);

        return false
    }

    if(message == "!pãozin1706")
    {
        regi.push(autentica[player.id])
        room.sendAnnouncement("O " + player.name + " Logou-se como Pãozin!", null, correg, "bold", 2);

        return false
    }

    if(message == "!123ew")
    {
        regi.push(autentica[player.id])
        room.sendAnnouncement("O " + player.name + " Logou-se como Ynsea!", null, correg, "bold", 2);

        return false
    }

    if(message == "!coco")
    {
        regi.push(autentica[player.id])
        room.sendAnnouncement("O " + player.name + " Logou-se como Paiero!", null, correg, "bold", 2);

        return false
    }

    if(message == "!avarengakakera")
    {
        regi.push(autentica[player.id])
        room.sendAnnouncement("O " + player.name + " Logou-se como avarenga!", null, correg, "bold", 2);
      
        return false
    }

    if(message == "!borrachakkk")
    {
        regi.push(autentica[player.id])
        room.sendAnnouncement("O " + player.name + " Logou-se como L x Trigo!", null, correg, "bold", 2);
      
        return false
    }
    if(message == "!1227")
    {
        regi.push(autentica[player.id])
        room.sendAnnouncement("O " + player.name + " Logou-se como felpz1227!", null, correg, "bold", 2);
      
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
            room.sendAnnouncement("🔗 Link do discord > https://discord.gg/8MJu7ZgCHg", player.id, pvcor, "bold", 2);
            return false
        }

        if(message == "!registrar")
        {
            room.sendAnnouncement("✅ Para se registrar, entre no link > https://discord.gg/8MJu7ZgCHg", player.id, pvcor, "bold", 2);
            return false
        }

        if(message == "!uniformes")
        {
            room.sendAnnouncement("!brasileiro", player.id, pvcor, "bold", 2)
            return false
        }
        
        if(message == "!brasileiro")
        {
            room.sendAnnouncement("'BR: |!SAO | !SAN | !COR | !CRU | !GRE | !FLA | !SCI | !PAL | !VAS | !CAM | !FLU | !BOT'", player.id, pvcor, "bold",2)
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
            room.sendAnnouncement("!registrar > como se registrar", player.id, amarelo, "bold", 0);
            room.sendAnnouncement("!uniformes > mude seu uniforme", player.id, amarelo, "bold", 0);

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

        if(message == "!SAO")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('sao/titular/red | sao/titular/blue | sao/alternativa/red | sao/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "sao/titular/red")
        {
            room.setTeamColors(1, 90, 0xB51212, [0xFF2537, 0xF7F7F7, 0x191820]);
            return false
        }
    
        if(message == "sao/titular/blue")
        {
            room.setTeamColors(2, 90, 0xB51212, [0xFF2537, 0xF7F7F7, 0x191820]);
            return false
        }
    
        if(message == "sao/alternativa/red")
        {
            room.setTeamColors(1, 360, 0x9F9AA6, [0xFF0928, 0xF7F7F7, 0x241F20]);
            return false
        }

        if (message == "sao/alternativa/blue")
        {
            room.setTeamColors(2, 360, 0x9F9AA6, [0xFF0928, 0xF7F7F7, 0x241F20]);
            return false
        }
        
        if(message == "!FLA")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('fla/titular/red | fla/titular/blue | fla/alternativa/red | fla/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "fla/titular/red")
        {
            room.setTeamColors(1, 90, 0xf5f5f5, [0x872C32, 0x1B1F1F, 0x872C32]);
            return false
        }
    
        if(message == "fla/titular/blue")
        {
            room.setTeamColors(2, 90, 0xf5f5f5, [0x872C32, 0x1B1F1F, 0x872C32]);
            return false
        }

        if(message == "fla/alternativa/red")
        {
            room.setTeamColors(1, 90, 0xde111e, [0xEEEFF1, 0x1B1F1F, 0x872C32]);
            return false
        }

        if(message == "fla/alternativa/blue")
        {
            room.setTeamColors(2, 90, 0xde111e, [0xEEEFF1, 0x1B1F1F, 0x872C32]);
            return false
        }
        
        if(message == "!SCI")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('sci/titular/red | sci/titular/blue | sci/alternativa/red | sci/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "sci/titular/red")
        {
            room.setTeamColors(1, 90, 0xFFFFFF, [0xD40D12]);
            return false
        }
    
        if(message == "sci/titular/blue")
        {
            room.setTeamColors(2, 90, 0xFFFFFF, [0xD40D12]);
            return false
        }

        if(message == "sci/alternativa/red")
        {
            room.setTeamColors(1, 64, 0x66020A, [0xF9F9FA, 0xC71B20, 0xF9F9FA]);
            return false
        }

        if(message == "sci/alternativa/blue")
        {
            room.setTeamColors(2, 64, 0x66020A, [0xF9F9FA, 0xC71B20, 0xF9F9FA]);
            return false
        }
        
        if(message == "!SAN")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('san/titular/red | san/titular/blue | san/alternativa/red | san/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "san/titular/red")
        {
            room.setTeamColors(1, 90, 0x000000, [0xE8E8E8]);
            return false
        }
    
        if(message == "san/titular/blue")
        {
            room.setTeamColors(2, 90, 0x000000, [0xE8E8E8]);
            return false
        }

        if(message == "san/alternativa/red")
        {
            room.setTeamColors(1, 180, 0xb0b0b0, [0x1F2026, 0xFFFFFF, 0x1F2026]);
            return false
        }

        if(message == "san/alternativa/blue")
        {
            room.setTeamColors(2, 180, 0xb0b0b0, [0x1F2026, 0xFFFFFF, 0x1F2026]);
            return false
        }

        if(message == "!COR")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('cor/titular/red | cor/titular/blue | cor/alternativa/red | cor/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "cor/titular/red")
        {
            room.setTeamColors(1, 90, 0x000000, [0xF4F4F6]);
            return false
        }
    
        if(message == "cor/titular/blue")
        {
            room.setTeamColors(2, 90, 0x000000, [0xF4F4F6]);
            return false
        }

        if(message == "cor/alternativa/red")
        {
            room.setTeamColors(1, 360, 0xFFFFFF, [0x1F1E20]);
            return false
        }

        if(message == "cor/alternativa/blue")
        {
            room.setTeamColors(2, 360, 0xFFFFFF, [0x1F1E20]);
            return false
        }

        if(message == "!VAS")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('vas/titular/red | vas/titular/blue | vas/alternativa/red | vas/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "vas/titular/red")
        {
            room.setTeamColors(1, 29, 0xd42a2a, [0x19181B, 0xE6E6E4, 0x19181B]);
            return false
        }
    
        if(message == "vas/titular/blue")
        {
            room.setTeamColors(2, 29, 0xd42a2a, [0x19181B, 0xE6E6E4, 0x19181B]);
            return false
        }

        if(message == "vas/alternativa/red")
        {
            room.setTeamColors(1, 29, 0xd42a2a, [0xFEFEFE, 0x1C1C1C, 0xFEFEFE]);
            return false
        }

        if(message == "vas/alternativa/blue")
        {
            room.setTeamColors(2, 29, 0xd42a2a, [0xFEFEFE, 0x1C1C1C, 0xFEFEFE]);
            return false
        }

        if(message == "!BOT")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('bot/titular/red | bot/titular/blue | bot/alternativa/red | bot/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "bot/titular/red")
        {
            room.setTeamColors(1, 180, 0x777B87, [0x1C1F26, 0xFFFFFF, 0x1C1F26]);
            return false
        }
    
        if(message == "bot/titular/blue")
        {
            room.setTeamColors(2, 180, 0x777B87, [0x1C1F26, 0xFFFFFF, 0x1C1F26]);
            return false
        }

        if(message == "bot/alternativa/red")
        {
            room.setTeamColors(1, 180, 0xFFFFFF, [0x161719]);
            return false
        }

        if(message == "bot/alternativa/blue")
        {
            room.setTeamColors(2, 180, 0xFFFFFF, [0x161719]);
            return false
        }

        if(message == "!FLU")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('flu/titular/red | flu/titular/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "flu/titular/red")
        {
            room.setTeamColors(1, 360, 0xF9F9F9, [0x326851, 0xA0002B, 0x326851]);
            return false
        }
    
        if(message == "flu/titular/blue")
        {
            room.setTeamColors(2, 360, 0xF9F9F9, [0x326851, 0xA0002B, 0x326851]);
            return false
        }

        if(message == "!CAM")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('cam/titular/red | cam/titular/blue | cam/alternativa/red | cam/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "cam/titular/red")
        {
            room.setTeamColors(1, 180, 0x75798F, [0xFFFFFF, 0x231F20, 0xFFFFFF]);
            return false
        }
    
        if(message == "cam/titular/blue")
        {
            room.setTeamColors(2, 180, 0x75798F, [0xFFFFFF, 0x231F20, 0xFFFFFF]);
            return false
        }

        if(message == "cam/alternativa/red")
        {
            room.setTeamColors(1, 180, 0x1D1E24, [0xFFFFFF]);
            return false
        }

        if(message == "cam/alternativa/blue")
        {
            room.setTeamColors(2, 180, 0x1D1E24, [0xFFFFFF]);
            return false
        }

        if(message == "!PAL")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('pal/titular/red | pal/titular/blue | pal/alternativa/red | pal/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "pal/titular/red")
        {
            room.setTeamColors(1, 60, 0xFFFFFF, [0x133D2F]);
            return false
        }
    
        if(message == "pal/titular/blue")
        {
            room.setTeamColors(2, 60, 0xFFFFFF, [0x133D2F]);
            return false
        }

        if(message == "pal/alternativa/red")
        {
            room.setTeamColors(1, 60, 0x10372a, [0xF2F1F2]);
            return false
        }

        if(message == "pal/alternativa/blue")
        {
            room.setTeamColors(2, 60, 0x10372a, [0xF2F1F2]);
            return false
        }

        if(message == "!CRU")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('cru/titular/red | cru/titular/blue | cru/alternativa/red | cru/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "cru/titular/red")
        {
            room.setTeamColors(1, 60, 0xfefefd, [0x2251C4]);
            return false
        }
    
        if(message == "cru/titular/blue")
        {
            room.setTeamColors(2, 60, 0xfefefd, [0x2251C4]);
            return false
        }

        if(message == "cru/alternativa/red")
        {
            room.setTeamColors(1, 60, 0x2f3f99, [0xF6F6FA]);
            return false
        }

        if(message == "cru/alternativa/blue")
        {
            room.setTeamColors(2, 60, 0x2f3f99, [0xF6F6FA]);
            return false
        }

        if(message == "!GRE")
        {
            room.sendAnnouncement('Pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
            room.sendAnnouncement('gre/titular/red | gre/titular/blue | gre/alternativa/red | gre/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
            return false
        }

        if(message == "gre/titular/red")
        {
            room.setTeamColors(1, 180, 0xFFFFFF, [0x0099DB, 0x20181E, 0x0099DB]);
            return false
        }
    
        if(message == "gre/titular/blue")
        {
            room.setTeamColors(2, 180, 0xFFFFFF, [0x19A2FF, 0x20181E, 0x19A2FF]);
            return false
        }

        if(message == "gre/alternativa/red")
        {
            room.setTeamColors(1, 180, 0x0088be, [0xFAFAFC]);
            return false
        }

        if(message == "gre/alternativa/blue")
        {
            room.setTeamColors(2, 180, 0x0088be, [0xFAFAFC]);
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

else if(regii != undefined)
{
    room.sendAnnouncement("✅" + player.name + ": " + message, null, correg, "bold", 1);

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
    room.sendAnnouncement("ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤhttps://discord.gg/8MJu7ZgCHgㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",null, pvcor, "bold", 2);
}

setInterval(avisodc, 50000)


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
