#Faça um programa que mostre a tabuada de vários números, um de cada vez, para cada valor digitado pelo usuário. O programa será interrompido quando o número solicitado for negativo.
from time import sleep
while True:
    print('-' * 20)
    valor = int(input('Quer ver a tabuada de qual valor? '))
    print('-' * 20)
    if valor < 0:
        print('Programa de tabuada encerrado! Volte sempre!')
        break
    for num in range(1, 11):
        sleep(0.5)
        print(f'{valor} X {num} = {valor * num}')
