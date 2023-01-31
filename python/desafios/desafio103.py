#Faça um programa que tenha uma função chamada ficha(), que receba dois parâmetros opcionais: o nome de um jogador e quantos gols ele marcou. O programa deverá ser capaz de mostrar a ficha do jogador, mesmo que algum dado não tenha sido informado corretamente.
def jogador(nomes='<desconhecido>', gols=0):
    print(f'O jogador {nomes} fez {gols} gol(s) no campeonato')

nome = str(input('Digite o nome do jogador: '))
gol = str(input('Número de gols: '))
if gol.isnumeric(): #se for numerico, transformar em int
    gol = int(gol)
else: #se não for numerico, ficará 0
    gol = 0
if nome.strip() == '': #se eu tirei os espaços e ficou vazio
    jogador(gols=gol) #chama o jogador de desconhecido
else:
    jogador(nome, gol)