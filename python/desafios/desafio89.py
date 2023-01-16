#Crie um programa que leia nome e duas notas de vários alunos e guarde tudo em uma lista composta. No final, mostre um boletim contendo a média de cada um e permita que o usuário possa mostrar as notas de cada aluno individualmente.
ficha = []
while True:
    nome = (str(input('Nome: ')))
    nota1 = (int(input('Nota 1: ')))
    nota2 = (int(input('Nota 2: ')))
    media = (nota1+nota2)/2
    ficha.append([nome, [nota1, nota2], media])
    dnv = ' '
    while dnv not in 'SN':
        dnv = str(input('Continuar? [S/N] ')).strip().upper()[0]
    if dnv == 'N':
        break
print('-'*20)
print(f'{"No.":<4} {"Nome":<10} {"Média":>8}')
print('-'*20)
for i, p in enumerate(ficha):
    print(f'{i:<4} {p[0]:<10} {p[2]:>8.1f}')#1f é para casa decimal
# print(ficha)
while True:
    print('-'*20)
    opc = int(input('Mostrar notas de qual aluno? (999 interrompe): '))
    if opc == 999:
        print('FINALIZANDO...')
        break
    if opc <= len(ficha) - 1: #tem que ser menor doq o len de ficha (0, 1 e 2), pois não pode ser 3. o len será 2, ent tem que ser menor ou igual a 2
        print(f'Notas de {ficha[opc][0]} são {ficha[opc][1]} ')