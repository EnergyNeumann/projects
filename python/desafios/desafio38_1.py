from termcolor import colored, cprint
cprint('-=-' * 20, 'cyan')
a1 = str(input(colored('Escreve um número: ', 'blue'))).strip()
cprint('-=-' * 20, 'cyan')
b1 = str(input(colored('Agora escreve outro: ', 'blue'))).strip()
cprint('-=-' * 20, 'cyan')
c1 = str(input(colored('E agora mais um: ', 'blue'))).strip()
cprint('-=-' * 20, 'cyan')
if a1.isnumeric() == True or a1.find('.') > 0 and b1.isnumeric() == True or b1.find('.') > 0 and c1.isnumeric() == True or c1.find('.') > 0:
    a = float(a1)
    b = float(b1)
    c = float(c1)
    if a > b and a > c:
        cprint('O maior número é o {}!'.format(a), 'green')
    else:
        if b > c:
            cprint('O maior número é o {}!'.format(b), 'green')
        else:
            cprint('O maior número é o {}!'.format(c), 'green')

    if a < b and a < c:
        cprint('O menor número é o {}!'.format(a), 'green')
    else:
        if b < c:
            cprint('O menor número é o {}!'.format(b), 'green')
        else:
            cprint('O menor número é o {}!'.format(c), 'green')

    if a == b == c:
        cprint('Todos os números são iguais!', 'yellow')
    else:
        if a == b:
            cprint('O 1º e o 2º números são iguais!', 'yellow')
        if a == c:
            cprint('O 1º e o 3º números são iguais!', 'yellow')
        if b == c:
            cprint('O 2º e o 3º números são iguais!', 'yellow')
else:
    cprint('ERRO: Escreveste letras ou deixaste espaços em branco!', 'red', attrs=['underline'])