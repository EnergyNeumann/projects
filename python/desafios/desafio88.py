#Faça um programa que ajude um jogador da MEGA SENA a criar palpites.O programa vai perguntar quantos jogos serão gerados e vai sortear 6 números entre 1 e 60 para cada jogo, cadastrando tudo em uma lista composta.
print('-'*30)
print('JOGA NA MEGA SENA'.center(30))
print('-'*30)
lista = []
jogos = []
quant = int(input('Quando jogos você quer que eu sorteie? '))
tot = 1 #total de vezes que ele vai sortear. colocou 1, para não ficar 1 sorteio a mais
while tot <= quant: #enquanto o total for menor do que a quantidade de numeros reservados
    cont = 0
    from random import randint
    while True:
        num = randint(1, 60)
        if num not in lista: #se o numero não estiver na lista, irá incluir, para n ter numeros iguais
            lista.append(num)
            cont += 1
        if cont >= 6: #se já tiver sorteado 6 números, parará de sortear
            break
    lista.sort()
    jogos.append(lista[:]) # cria uma copia da lista
    lista.clear()
    tot += 1
print('-='*3, f' Sorteando {quant} jogos ', '-=*3')
for i, l in enumerate(jogos): #para cada indice numa lista em enumerate jogos. quando gera 2 jogos, tem jogo 0 e jogo 1
    print(f'Jogo {i+1}: {l}')
    
    