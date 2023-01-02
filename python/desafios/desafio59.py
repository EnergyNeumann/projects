'''Crie um programa que leia dois valores e mostre um menu na tela:
[ 1 ] somar
[ 2 ] multiplicar
[ 3 ] maior
[ 4 ] novos números
[ 5 ] sair do programa
Seu programa deverá realizar a operação solicitada em cada caso.'''
from time import sleep
valor1 = int(input('Escolha o primeiro valor '))
valor2 = int(input('Escolha o segundo valor '))
sleep(1)
sair = False
while not sair:
    print(''' O que você deseja fazer?
    [ 1 ] somar
    [ 2 ] multiplicar
    [ 3 ] maior
    [ 4 ] novos números
    [ 5 ] sair do programa''')
    opcao = int(input('Escolha sua opção: '))
    if opcao == 1:
        print(f'A soma entre {valor1} + {valor2} é {valor1 + valor2}')
        sleep(2)
    elif opcao == 2:
        print(f'A multiplicação entre {valor1} X {valor2} é {valor1 * valor2}')
        sleep(2)
    elif opcao == 3:
        if valor1 > valor2: 
            print(f'O maior entre {valor1} e {valor2} é {valor1}')
        elif valor1 < valor2:
            print(f'O maior entre {valor1} e {valor2} é {valor2}')
        else: 
            print(f'O número {valor1} é igual ao número {valor2}')
        sleep(2)
    elif opcao == 4:
        print('Informe os números novamente')
        valor1 = int(input('Digite o primeiro número: '))
        valor2 = int(input('Digite o segundo número: '))
        sleep(2)
    elif opcao == 5:
        saindo = str(input('Você escolheu sair... Tem certeza? [S/N] ')).strip().upper()[0]
        sleep(1)
        while saindo not in 'SsNn':
            print('Essa opção não existe...')
            sleep(1)
            saindo = str(input('Você realmente quer sair...? [S/N] ')).strip().upper()[0]
        if saindo in 'Ss':
            print('Saindo...')
            sleep(1)
            sair = True
        elif saindo in 'Nn':
            print('Jogue novamente...')
    else:
        sleep(1)
        print('Não existe essa opção!')
print('Obrigado por tentar!')

