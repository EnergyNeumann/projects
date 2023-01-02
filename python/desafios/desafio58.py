#Melhore o jogo do DESAFIO 028 onde o computador vai "pensar" em um número entre 0 e 10. Só que agora o jogador vai tentar adivinhar até acertar, mostrando no final quantos palpites foram necessários para vencer.
from random import randint
bot = randint(1, 10)
erro = 0
print('Sou seu computador... \nAcabei de pensar em um número de 1 a 10... \nTente adivinhá-lo!')
acertou = False
while not acertou:
    palpite = int(input('Qual seu palpite? '))
    erro += 1
    if palpite == bot:
        acertou = True
    elif palpite < bot:
        print('Quase lá... um pouco mais...')
    elif palpite > bot:
        print('Quase lá... um pouco menos...')
print(f'Você acertou!! Meu palpite foi {bot}')
print(f'Você precisou de {erro} chances para acertar')