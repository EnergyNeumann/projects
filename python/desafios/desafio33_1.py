#qual maior e menor número
n1 =int(input('digite o primeiro número: '))
n2 =int(input('Digite o segundo número: '))
n3 =int(input ('Digite o terceiro número: '))

lista =[n1,n2,n3]
lista_ordenada = sorted(lista)

print('O menor número é {}'.format(lista_ordenada[0]))
print ('O maior número é {}'.format(lista_ordenada[2]))