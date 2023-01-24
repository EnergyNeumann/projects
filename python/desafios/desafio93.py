#Crie um programa que gerencie o aproveitamento de um jogador de futebol. O programa vai ler o nome do jogador e quantas partidas ele jogou. Depois vai ler a quantidade de gols feitos em cada partida. No final, tudo isso será guardado em um dicionário, incluindo o total de gols feitos durante o campeonato.
from time import sleep
jogador = {}
gols = list()
soma = 0
jogador['nome'] = str(input('Nome do Jogador: '))
partidas = int(input(f'Quantas partidas {jogador["nome"]} jogou? '))
for c in range(0, partidas):
    gol = int(input(f'Quantos gols na partida {c} '))
    gols.append(gol)
    soma += gol
    jogador['gols'] = gols
jogador['total'] = soma
sleep(1)
print('-='*20)
print(jogador)
print('-='*20)
sleep(1)
for k, v in jogador.items():
    print(f'O campo {k} tem o valor {v}')
sleep(1)
print('-='*20)
print(f'O jogador {jogador["nome"]} jogou {partidas} partidas')
for i, a in enumerate(gols):
    print(f'Na partida {i}, fez {a} gols')
print(f'Foi um total de {jogador["total"]} gols')
