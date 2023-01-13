#Crie um programa onde o usuário possa digitar sete valores numéricos e cadastre-os em uma lista única que mantenha separados os valores pares e ímpares. No final, mostre os valores pares e ímpares em ordem crescente.
num = [[], []] #uma lista é par, outra é impar
valor = 0
for c in range(0, 7):
    valor = (int(input(f'Digite o {c+1}º valor: ')))
    if valor % 2 == 0:
        num[0].append(valor)
    else:
        num[1].append(valor)
num[0].sort()
num[1].sort()
print(f'Os valores pares são {num[0]}')
print(f'Os valores ímpares são {num[1]}')