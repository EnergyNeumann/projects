#escreva um programa que leia um número e diga 3 opções: binário, octal ou hexadecimal. a pessoa escolhe e o número é representado em tal
num = int(input('Digite um número inteiro: '))
print('''Escolha uma das bases para conversão:
[ 1 ] converter para \033[33m BINÁRIO\033[m
[ 2 ] converter para \033[33m OCTAL\033[m
[ 3 ] converter para \033[33m HEXADECIMAL\033[m''')
opcao = int(input('Sua opção: '))
if opcao == 1:
    print('Seu número é {}, já em binário é {}'.format(num, bin(num)[2:])) #2: serve para pegar da casa 2 em diante
elif opcao == 2:
    print('Seu número é {}, já em octal é {}'.format(num, oct(num)[2:]))
elif opcao == 3:
    print('Seu número é {}, já em hexadecimal é {}'.format(num, hex(num)[2:]))
else:
    print('Não existe essa opção')

