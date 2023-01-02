#pedra, papel ou tesoura
from random import randint
from time import sleep
print('{:=^30}'.format(' JOKENPÔ '))
print('')
print('''Vamos jogar? ESCOLHA:   
    [ 0 ] PEDRA
    [ 1 ] PAPEL
    [ 2 ] TESOURA''')
eu = int(input('Sua jogada: '))
computador = randint(0, 2)
print('=' * 25)
print('JO')
sleep(0.7)
print('KEN')
sleep(0.7)
print('PÔ!!!')
sleep(0.7)
print('=' * 25)
if computador == 0 and eu == 0:
    computador = 'PEDRA'
    eu = 'PEDRA'
    print(f'O computador escolheu {computador}.\nVocê escolheu {eu}.\nEMPATOU!')
elif computador == 0 and eu == 1:
    computador = 'PEDRA'
    eu = 'PAPEL'
    print(f'O computador escolheu {computador}.\nVocê escolheu {eu}.\nVOCÊ VENCEU!')
elif computador == 0 and eu == 2:
    computador = 'PEDRA'
    eu = 'TESOURA'
    print(f'O computador escolheu {computador}.\nVocê escolheu {eu}.\nO COMPUTADOR VENCEU!')
elif computador == 1 and eu == 1:
    computador = 'PAPEL'
    eu = 'PAPEL'
    print(f'O computador escolheu {computador}.\nVocê escolheu {eu}.\nEMPATOU!')
elif computador == 1 and eu == 0:
    computador = 'PAPEL'
    eu = 'PEDRA'
    print(f'O computador escolheu {computador}.\nVocê escolheu {eu}.\nO COMPUTADOR VENCEU!')
elif computador == 1 and eu == 2:
    computador = 'PAPEL'
    eu = 'TESOURA'
    print(f'O computador escolheu {computador}.\nVocê escolheu {eu}.\nVOCÊ VENCEU!')
elif computador == 2 and eu == 2:
    computador = 'TESOURA'
    eu = 'TESOURA'
    print(f'O computador escolheu {computador}.\nVocê escolheu {eu}.\nEMPATOU!')
elif computador == 2 and eu == 0:
    computador = 'TESOURA'
    eu = 'PEDRA'
    print(f'O computador escolheu {computador}.\nVocê escolheu {eu}.\nVOCÊ VENCEU!')
elif computador == 2 and eu == 1:
    computador = 'TESOURA'
    eu = 'PAPEL'
    print(f'O computador escolheu {computador}.\nVocê escolheu {eu}.\nO COMPUTADOR VENCEU!')
else:
    print('JOGADA INCORRETA! Jogue novamente.')