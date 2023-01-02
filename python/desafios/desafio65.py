# Crie um programa que leia vários números inteiros pelo teclado. No final da execução, mostre a média entre todos os valores e qual foi o maior e o menor valores lidos. O programa deve perguntar ao usuário se ele quer ou não continuar a digitar valores.
soma = cont = media = maior = menor = 0
contin = 'S'
while contin in 'Ss':
    num = int(input('Digite um número: '))
    soma += num
    cont += 1
    if cont == 1:
        maior = menor = num
    else:
        if num > maior:
            maior = num
        elif num < menor:
            menor = num
    contin = str(input('Você quer continuar? [S/N] ')).upper().strip()[0] #o [0] serve para só considerar a primeira letra
    if contin not in 'SsNn':
        contin = str(input('Não existe essa opção. [S/N] ')).upper().strip()[0]
media = soma / cont
print(f'Você digitou {cont} números e a média foi de: {media}')
print(f'O maior número foi {maior} e o menor foi {menor}')