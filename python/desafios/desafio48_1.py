soma = 0
contador = 0
for numeros in range(1, 501, 2): #onde os números serão ímpares, pois vão de 2 em 2
    if numeros % 3 == 0:
        contador += 1 #contador que soma 1 #contador = contador + 1
        soma += numeros #acumulador que soma um valor #soma = soma + 1
print(f'A soma dos {contador} números é {soma}')