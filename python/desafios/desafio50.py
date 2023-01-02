#programa que lerá 6 números inteiros e mostrará a soma dos pares. se o valor for impar, desconsidere-o
soma = 0
cont = 0
for num in range(1 , 7):
    valor = int(input(f'Digite o {num} valor '))
    if valor % 2 == 0:
        soma += valor
        cont += 1
print(f'Você informou {cont} e a soma fica {soma}')