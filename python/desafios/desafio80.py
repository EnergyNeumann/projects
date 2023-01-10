#Crie um programa onde o usuário possa digitar cinco valores numéricos e cadastre-os em uma lista, já na posição correta de inserção (sem usar o sort()). No final, mostre a lista ordenada na tela.
lista = []
for c in range(0,5):
    num = int(input('Digite um número: '))
    if c == 0 or num > lista[-1]: #se for a primeira posição ou se o número for maior doq o último elemento
        lista.append(num)
        print('Adicionando ao final da lista')
    else:
        pos = 0
        while pos < len(lista): #enquanto 0 menor doq 4
            if num <= lista[pos]: #se o número for menor ou igual a posição da lista
                lista.insert(pos, num)
                print(f'Foi adicionado na posição {pos}')
                break
            pos += 1
print(lista)