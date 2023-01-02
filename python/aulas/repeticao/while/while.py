# for c in range(1, 10):
#     print(c, end = ' ')
# print('Fim')

# c = 1
# while c < 10:
#     print(c, end = ' ')
#     c = c + 1
# print('Fim')



# for c in range(1, 5):
#     n = int(input('Digite um valor: '))
# print('Fim')

# n = 1
# while n != 0: #enquanto número diferente de 0
#     n = int(input('Digite um valor: '))
# print('Fim')


# r = 'S'
# while r == 'S':
#     n = int(input('Digite um valor: '))
#     r = str(input('Quer continuar? [S/N] ')).upper()
# print('Fim')


num = 1
par = 0
impar = 0
while num != 0:
    num = int(input('Digite um valor: '))
    if num != 0:
        if num % 2 == 0:
            print(f'O número {num} é par')
            par += 1
        else:
            print(f'O {num} é ímpar')
            impar += 1
print(f'Houveram {par} pares e {impar} ímpares')