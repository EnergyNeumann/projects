#desafio 34 só q de um carinha do yt (tendi nada)
r1 = str(input('\033[0;30;0mDigite R para reais ou D para dolar ')).lower().strip()
n1 = float(input('\033[0;30;0mQual o salario do funcionario ? R$ '))
salario1 = (n1+(10/100)*n1)
salario2 = (n1+(15 / 100)*n1)
if 'r' == r1 and n1 <= 1250:
    print('\033[0;34;0mO funcionario que ganhava {:.2f}R$ agora ganha R$ {:.2f}'.format(n1, salario2))
    c = str(input('Voce quer fazer a conversao do salario para dolar? ')).title()
    if c == 'Sim':
        print('Conversão: U${:.2f}'.format(salario2 / 3.27))
if 'r' == r1 and n1 >= 1250:
    print('\033[0;34;0mO funcionario que ganhava {:.2f}R$ agora ganha R$ {:.2f}'.format(n1, salario1))
    c2 = str(input('Voce quer fazer a conversao do salario para dolar? ')).title()
    if c2 == 'Sim':
        print('Conversão: U${:.2f}'.format(salario1/3.27))
##########################################################################################################
if 'd' == r1 and n1 <= 1250:
    print('\033[0;31;0mO funcionario que ganhava {:.2f}R$ passa a ganhar {:.2f}U$'.format(n1, salario2))
    c3 = str(input('Voce pode acima fazer a conversao do salario para Reais? ')).title()
    if c3 == 'Sim':
        print('Convesão: R${:.2f}'.format(salario2 * 3.27))
if 'd' == r1 and n1 >= 1250:
    print('\033[0;31;0mO funcionario que ganhava {:.2f}R$ passa a ganhar {:.2f}U$'.format(n1, salario1))
    c4 = str(input('Voce pode acima fazer a conversao do salario para Reais? ')).title()
    if c4 == 'Sim':
        print('Conversão: R${:.2f}'.format(salario1 * 3.27))
if (r1 != 'r') & (r1 != 'd'):
    print('\033[0;35;0mVocê não escolheu\nOu esolheu a forma errada de conversao do seu salario !')