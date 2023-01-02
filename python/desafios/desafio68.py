#Faça um programa que jogue par ou ímpar com o computador. O jogo só será interrompido quando o jogador perder, mostrando o total de vitórias consecutivas que ele conquistou no final do jogo. 
from random import randint
bot = randint(1, 10)
cont = 0
print('=-' * 20)
print('VAMOS JOGAR PAR OU ÍMPAR')
print('=-' * 20)
while True:
    valor = int(input('Diga um valor '))
    pi = str(input('Par ou Ímpar? [P/I] ')).strip().upper()
    print('=-' * 20)
    soma = bot + valor
    if soma % 2 == 0:
        print(f'Você jogou {valor} e o computador {bot}. Total de {soma} DEU PAR')
        print('=-' * 20)
        if pi in 'Pp':
            print('Você VENCEU!')
            cont+=1
        else:
            print('Você perdeu!')
            break
    else:
        print(f'Você jogou {valor} e o computador {bot}. Total de {soma} DEU ÍMPAR')
        print('=-' * 20)
        if pi in 'Ii':
            print('Você VENCEU!')
            cont += 1
        else:
            print('Você perdeu!')
            break
print(f'Você venceu {cont} vezes')
        
    