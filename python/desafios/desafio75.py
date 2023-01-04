# Desenvolva um programa que leia quatro valores pelo teclado e guarde-os em uma tupla. No final, mostre:
# A) Quantas vezes apareceu o valor 9.
# B) Em que posição foi digitado o primeiro valor 3.
# C) Quais foram os números pares.
num = (int(input('Digite um número: ')), int(input('Digite um número: ')), int(input('Digite um número: ')), int(input('Digite um número: ')), int(input('Digite um número: ')))
print(f'O número 9 apareceu: {num.count(9)} vezes')
if 3 in num:
    print(f'O primeiro valor 3 está na posição: {num.index(3)}')
else:
    print('Não há "3" na tupla')
print('Os pares são:', end= ' ')
for n in num:
    if n % 2 == 0:
        print(n, end= ' ')