import math #importar modulo math
num = int(input('Digite um número '))
raiz = math.sqrt(num)
print('A raiz de {} é igual a {}' .format(num, math.ceil(raiz))) #math.ceil é para arredondar o valor para cima
print('A raiz de {} é igual a {}' .format(num, math.floor(raiz))) #math.floor é para arredondar o valor para baixo
print('A raiz de {} é igual a {:.2f}' .format(num, raiz)) #:.2f para formatar com 2 casas
