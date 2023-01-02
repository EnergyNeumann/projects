#analisando um número
num = int(input('Informe um número inteiro '))
u = num // 1 % 10 #divide o número por 1 sem pegar o valor do decimal, e pega o resto da divisão por 10
d = num // 10 % 10 #divide o numero por 10 sem pegar o decimal, e pega o resto da divisão por 10
c = num // 100 % 10 #divide o numero por 100 sem pegar o decimal, e pega o resto da divisão por 10
m = num // 1000 % 10 #divide o numero por 1000 sem pegar o decimal, e pega o resto da divisão por 10
print('Analisando o número {} ' .format(num))
print('Unidade: {} '.format(u))
print('Dezena: {} ' .format(d))
print('Centena: {} ' .format(c))
print('Milhar: {} ' .format(m))