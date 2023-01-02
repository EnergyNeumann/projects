#soma dos numeros primos que são multiplos de 3 entre 0 e 500
soma = 0
for numeros in range(0, 501):
    if numeros % 2 == 1:
        if numeros % 3 == 0:
            print(numeros, end=' ')
            soma = soma + numeros
            print(f'A soma desses números é: {soma}')