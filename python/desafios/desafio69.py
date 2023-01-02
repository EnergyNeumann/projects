#Crie um programa que leia a idade e o sexo de várias pessoas. A cada pessoa cadastrada, o programa deverá perguntar se o usuário quer ou não continuar. No final, mostre:
#A) quantas pessoas tem mais de 18 anos.
#B) quantos homens foram cadastrados.
#C) quantas mulheres tem menos de 20 anos. 
mais18 = homens = mulheresmenores = 0
while True:
    print('-' * 20)
    print('   CADASTRE UMA PESSOA   ')
    print('-' * 20)
    idade = int(input('Idade: '))
    sexo = ' '
    while sexo not in 'MF':
        sexo = str(input('Sexo: [M/F] ')).strip().upper()
    print('-' * 20)
    if idade > 18:
        mais18 += 1
    if sexo in 'Mm':
        homens += 1
    if sexo in 'Ff' and idade < 20:
        mulheresmenores += 1
    continuar = ' '
    while continuar not in 'SN':
        continuar = str(input('Quer continuar? [S/N] ')).strip().upper()
    if continuar == 'N':
        break
print(f'Total de pessoas com mais de 18 aos: {mais18}')
print(f'Total de homens cadastrados: {homens}')
print(f'Total de mulheres com menos de 20 anos: {mulheresmenores}')
