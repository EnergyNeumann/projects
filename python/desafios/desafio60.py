#Faça um programa que leia um número qualquer e mostre o seu fatorial. Ex: 5! = 5 x 4 x 3 x 2 x 1 = 120
num = int(input('Digite um número para calcular seu fatorial: '))
contador = num #contador começa com num
calculator = 1
print(f'Calculando {num}! = ', end = ' ')
while contador > 0:
    print(f'{contador}', end = ' ')
    print(' x ' if contador > 1 else ' = ', end = ' ')
    calculator *= contador
    contador -= 1 #tirar 1 de contador
print(f'O fatorial de {num} é {calculator}')
