#Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já exista lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente. 
lista = []
conti = ' '
while True:
    n = int(input('Digite um valor. '))
    if n not in lista:
        lista.append(n)
        print('Valor adicionado com sucesso...')
        conti = str(input('Quer continuar? [S/N] '))
        if conti in 'Nn':
            break
    else:
        print('Valor duplicado! Não vou adicionar...')
lista.sort()
print(f'Você digitou os valores: {lista}')