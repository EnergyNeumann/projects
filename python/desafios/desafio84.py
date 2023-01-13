# Faça um programa que leia nome e peso de várias pessoas, guardando tudo em uma lista. No final, mostre:
# A) Quantas pessoas foram cadastradas.
# B) Uma listagem com as pessoas mais pesadas.
# C) Uma listagem com as pessoas mais leves.
galera = []
dado = []
pesada = leve = 0
while True:
    dado.append(str(input('Digite o nome da pessoa: ')))
    dado.append(int(input('Digite o peso da pessoa: ')))
    if len(galera) == 0:
        pesada = leve = dado[1]
    else:
        if dado[1] > pesada:
            pesada = dado[1]
        if dado[1] < leve:
            leve = dado[1]
    galera.append(dado[:])
    dado.clear()
    dnv = ' '
    while dnv not in 'SN':
        dnv = str(input('Continuar? [S/N] ')).strip().upper()[0]
    if dnv == 'N':
        break
print(f'A quantidade de pessoas cadastradas foi de {len(galera)}')
print(f'A pessoa mais pesada pesa {pesada}kg. Peso de ', end='')
for p in galera:
    if p[1] == pesada: #se o peso for o mais pesado
        print(f'[{p[0]}]', end='')
print()
print(f'A pessoa mais leve pesa {leve}kg. Peso de ')
for p in galera:
    if p[1] == leve:
        print(f'[{p[0]}]', end='')
print()