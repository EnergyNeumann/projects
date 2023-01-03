# #Crie um programa que leia o nome e o preço de vários produtos. O programa deverá perguntar se o usuário vai continuar ou não. No final, mostre:
# A) qual é o total gasto na compra.
# B) quantos produtos custam mais de R$1000.
# C) qual é o nome do produto mais barato. 
print('-' * 20)
print('LOJA ENERGY_NEUMANN')
print('-' * 20)
total = maisde1k = menorpreco = cont = barato = 0
while True:
    prod = str(input('Nome do produto: '))
    prec = int(input('Preço: R$ '))
    cont += 1
    total += prec
    if prec > 1000:
        maisde1k += 1
    if cont == 1 or prec < menorpreco:
        barato = prod
        menorpreco = prec
    dnv = ' '
    while dnv not in 'SN':
        dnv = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
    if dnv == 'N':
        print('-' * 10 + ' FIM DO PROGRAMA ' + '-' * 10)
        break
print(f'O total da compra foi de R${total:.2f}')
print(f'Temos {maisde1k} produto custando mais de R$1000.00')
print(f'O produto mais barato foi {barato} que custou R${menorpreco:.2f}')