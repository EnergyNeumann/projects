#financiamento de uma casa através do valor dela e seu salario. A prestação mensal não pode exceder 30% do salário ou então o empréstimo será negado.
from time import sleep
valor = float(input('Valor da casa: R$'))
salario = float(input('Salário do comprador: R$'))
finan = int(input('Quantos anos de financiamento? '))
prestacao = valor / (finan * 12)
print('Calculando...')
sleep (2)
print('O valor da casa é {}R${:.2f}{}, já o seu salário é {}R${:.2f}{} e o financiamento será de {}R${:.2f}{} por mês,'.format('\033[32m', valor, '\033[m', '\033[32m', salario, '\033[m', '\033[32m', prestacao, '\033[m'), end='') #o end serve para que o print debaixo continue na linha de cima pelo terminal
print(' durante {}{}{} anos'.format('\033[33m',finan, '\033[m'))
print('Processando...')
sleep (4)
porcemsal = (30 / 100) * salario #30% do salário
if prestacao > porcemsal:
    print('O valor {}não{} está adequado para sua conta, pois excede 30% de seu salário'.format('\033[31m', '\033[m'))
else:
    print('Vai na fé que o valor {}é{} bom, pois não excede 30% do seu salário'.format('\033[33m', '\033[m'))
sleep(3)
print('Lembrando que 30% de seu salário equivale à {}R${:.2f}{}'.format('\033[32m', porcemsal, '\033[34m')) 