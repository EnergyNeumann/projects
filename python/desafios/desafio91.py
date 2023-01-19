#Crie um programa onde 4 jogadores joguem um dado e tenham resultados aleatórios. Guarde esses resultados em um dicionário em Python. No final, coloque esse dicionário em ordem, sabendo que o vencedor tirou o maior número no dado.
from random import randint
from time import sleep
from operator import itemgetter
jogo = {}
for j in range(1, 5):
    jogo[f'jogador {j}'] = int(randint(1, 6))
print(jogo)
ranking = list()
print('Valores sorteados:')
for k, v in jogo.items(): 
    print(f'{k} tirou {v} no dado.')
    sleep(1)
    ranking = sorted(jogo.items(), key=itemgetter(1), reverse = True) #a chave é o item getter da parte 1 (que são os valores do randint). o reverse é pra deixar do maior para o menor. ISSO VIROU UMA LISTA!!!
print(ranking)
print('-='*20)
print('== RANKING DOS JOGADORES =='.center(10))
for i, v in enumerate(ranking):
    print(f'{i+1}º lugar: {v[0]} com {v[1]}.') #v[0] é o jogador e v[1] é o valor
    sleep(1)