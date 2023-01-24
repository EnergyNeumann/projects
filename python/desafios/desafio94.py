#  Crie um programa que leia nome, sexo e idade de várias pessoas, guardando os dados de cada pessoa em um dicionário e todos os dicionários em uma lista. No final, mostre: 
# A) Quantas pessoas foram cadastradas
# B) A média de idade
# C) Uma lista com as mulheres
# D) Uma lista de pessoas com idade acima da média
pessoa = dict()
galera = list()
soma = media = 0
while True:
    pessoa.clear()
    pessoa['nome'] = str(input('Nome: '))
    while True:
        pessoa['sexo'] = str(input('Sexo: [M/F] ')).upper().strip()[0]
        if pessoa['sexo'] in 'MF':
            break
        print('ERRO! Apenas M ou F!')
    pessoa['idade'] = int(input('Idade: '))
    soma += pessoa['idade']
    galera.append(pessoa.copy())
    # if pessoa['sexo'] not in 'MF':
    #     print('ERRO! Por favor, digite apenas M ou F. ')
    dnv = ' '
    while dnv not in 'SN':
        dnv = str(input('Continuar? [S/N] ')).strip().upper()[0]
        if dnv not in 'SN':
            print('ERRO! Responda apenas S ou N.')
    if dnv == 'N':
        break
print('-='*20)
print(f'Ao todo, temos {len(galera)} pessoas cadastradas')
print('-='*20)
media = soma / len(galera) #media das idades
print(f'A média de idade é de {media:5.2f} anos.')
print('-='*20)
print('As mulheres cadastradas foram ', end='')
for p in galera:
    if p['sexo'] in 'F':
        print(f'{p["nome"]} ', end='')
print()
print('-='*20)
print('Lista das pessoa que estão acima da média: ', end='') 
for p in galera:
    if p['idade'] >= media:
        print('   ', end='')
        for k, v in p.items():
            print(f'{k} = {v}; ', end='')
        print()
