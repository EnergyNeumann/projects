#adivinhando numero do bot
from random import randint #importa para numero aleatorio do bot
from time import sleep #importa para pausa entre as coisas
computador = randint(0, 5)
print('-*-' * 20)
print('Vou pensar em um número entre 0 e 5, tente adivinhar...')
print('-*-' * 20)
jogador = int(input('Qual número estou pensando? '))
print('Processando...')
sleep(4)
if jogador == computador:
    print('Você acertou, sortudo!')
    sleep(2)
else:
    print('Você errou KKKKKKKKK burrola')
    sleep(1)
    print('Eu pensei no número {}, não no {} '.format(computador, jogador))
    sleep(2)
print('Quer tentar dnv? rode o código kkkkk')