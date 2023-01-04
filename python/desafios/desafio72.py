#Crie um programa que tenha uma dupla totalmente preenchida com uma contagem por extenso, de zero até vinte. Seu programa deverá ler um número pelo teclado (entre 0 e 20) e mostrá-lo por extenso.
cont = ('zero', 'um', 'dois', 'três', 'quatro', 'cinco',
           'seis', 'sete', 'oito', 'nove', 'dez', 'onze',
           'doze', 'treze', 'catorze', 'quinze', 'dezesseis',
           'dezessete', 'dezoito', 'dezenove', 'vinte')
while True:
    num = int(input('Digite um número: '))
    if 0 <= num <= 20:
        print(f'Você digitou o número {cont[num]}')
        dnv = ' '
        while dnv not in 'SN':
            dnv = str(input('Você quer continuar? [S/N] ')).strip().upper()[0]
        if dnv == 'N':
            break
    print('Digite outro número. ', end='')