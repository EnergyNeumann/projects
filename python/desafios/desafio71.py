#Crie um programa que simule o funcionamento de um caixa eletrônico. No início, pergunte ao usuário qual será o valor a ser sacado (número inteiro) e o programa vai informar quantas cédulas de cada valor serão entregues.
# OBS: considere que o caixa possui cédulas de R$50, R$20, R$10 e R$1
print('=' * 20)
print('{:^30}'.format('BANCO ENE')) #comando para centralizar 
print('=' * 20)
valor = int(input('Qual valor você quer sacar? R$'))
totalvalor = valor #total valor é o valor do banco
ced = 50 #cedulas de 50
totced = 0 #número total de cedulas
while True:
    if totalvalor >= ced: #se o valor total for maior que 50, poderá tirar em cedulas de 50
        totalvalor -= ced #sacará em cedula de 50
        totced += 1 #quando tirar, aumentará total de cedulas de 50 em 1
    else: #se não puder tirar
        if totced > 0:
            print(f'Total de {totced} cédulas de R${ced:.2f}')
        if ced == 50: #se a cedula for 50 e não der para sacar, muda pra 20
            ced = 20
        elif ced == 20: #se a cedula for 20 e não der para sacar, muda pra 10
            ced = 10
        elif ced == 10: #se a cedula for 10 e não der para sacar, muda pra 1
            ced = 1
        if totalvalor == 0: #se o valor do banco ficar 0, para o programa
            break
print('Volte sempre ao Banco ENE, e tenha um bom dia!')