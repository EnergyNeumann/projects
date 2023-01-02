#Faça um programa que leia o peso de cinco pessoas. No final, mostre qual foi o maior e o menor peso lidos.
maior = 0
menor = 0
for pess in range(1, 6):
    peso = float(input(f'Digite o peso da {pess} pessoa: '))
    if pess == 1: #se for a primeira pessoa, ela é o maior e o menor peso
        maior = peso
        menor = peso
    else:
        if peso > maior: #se o peso que eu li for maior do que o outro peso que eu havia lido, esse peso se torna o maior
            maior = peso
        if peso < menor:
            menor = peso
print(f'O maior peso lido foi de {maior} kg')
print(f'O menor peso lido foi de {menor} kg')
