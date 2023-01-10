#Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, mostre:
# A) Quantos números foram digitados.
# B) A lista de valores, ordenada de forma decrescente.
# C) Se o valor 5 foi digitado e está ou não na lista.
lista = []
esta = ''
while True:
    num = int(input('Digite um valor: '))
    lista.append(num)
    if num == 5:
        esta = 'sim'
    cont = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
    if cont in 'N':
        break
    elif cont not in 'SN':
        print('Não há essa opção...')
        cont = str(input('Quer continuar? [S/N] '))
lista.sort(reverse=True)
print(f'Você digitou {len(lista)} elementos')
print(f'Os valores em ordem decrescente são: {lista}')
if esta == 'sim':
    print('O valor 5 está na lista')
else:
    print('O valor 5 não está na lista')