#Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, crie duas listas extras que vão conter apenas os valores pares e os valores ímpares digitados, respectivamente. Ao final, mostre o conteúdo das três listas geradas.
lista = []
pares = []
impar = []
while True:
    num = int(input('Digite um número '))
    lista.append(num)
    if num % 2 == 0 and num != 0:
        pares.append(num)
    elif num % 1 == 0 and num != 0:
        impar.append(num)
    cont = str(input('Você quer continuar? [S/N] ')).upper().strip()[0]
    if cont not in 'SN':
        cont = str(input('Você quer continuar? [S/N] '))
    elif cont in 'N':
        break
print(f'A primeira lista é {lista}')
print(f'A lista com pares é {pares}')
print(f'A lista com ímpares é {impar}')
