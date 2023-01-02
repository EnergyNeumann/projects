#o número é par ou impar
num = int(input('Digite um número '))
num2 = num % 2
if num2 == 0: 
    print(f'O número {num} é par')
else:
    print(f'O número {num} é ímpar')