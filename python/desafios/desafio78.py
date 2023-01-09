#Faça um programa que leia 5 valores numéricos e guarde-os em uma lista. No final, mostre qual foi o maior e o menor valor digitado e as suas respectivas posições na lista
listanum = []
maior = menor = 0
for valor in range(0, 5):
    listanum.append(int(input(f'Digite um valor para posição {valor} ')))
    if valor == 0: #testando maior valor e menor valor
        maior = menor = listanum[valor]
    else:
        if listanum[valor] > maior:
            maior = listanum[valor]
        if listanum[valor] < menor:
            menor = listanum[valor]
print(f'O maior valor foi {maior} nas posições: ', end = '')
for i, v in enumerate(listanum): #codigo para saber qual a posição do maior valor (ele pode estar em mais de uma posição, pois podem haver valores iguais)
    if v == maior:
        print(f'{i}...', end = '')
print(f'O menor valor foi {menor} nas posições: ', end = '')
for i, v in enumerate(listanum):
    if v == menor:
        print(f'{i}...')