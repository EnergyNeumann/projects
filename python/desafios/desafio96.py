#Faça um programa que tenha uma função chamada área(), que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terren
def area(larg, comp):
    a = larg * comp
    print(f'A área de um terreno {larg}X{comp} é de {a}m² ')

print('Área de um terreno')
print('-'*30)
largura = float(input('Largura (m)'))
comprimento = float(input('Largura (m)'))
area(largura, comprimento)