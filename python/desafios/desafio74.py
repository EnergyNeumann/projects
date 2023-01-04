#Crie um programa que vai gerar cinco números aleatórios e colocar em uma tupla. Depois disso, mostre a listagem de números gerados e também indique o menor e o maior valor que estão na tupla.
from random import randint
numeros = (randint(1, 10), randint(1, 10), randint(1, 10), randint(1, 10), randint(1, 10))
print('Os valores sorteados foram:', end=' ')
for n in numeros:
    print(n, end=' ')
print(f'\nO maior valor de {numeros} é {max(numeros)},\nO menor valor é {min(numeros)}')