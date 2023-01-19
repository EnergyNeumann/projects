#Faça um programa que leia nome e média de um aluno, guardando também a situação em um dicionário. No final, mostre o conteúdo da estrutura na tela.
pessoa = dict()
pessoa['nome'] = str(input('Nome: '))
pessoa['media'] = int(input(f'Média de {pessoa["nome"]}: '))
if pessoa["media"] > 6:
    pessoa['situacao'] = 'Aprovado'
elif 6 > pessoa["media"] > 4:
    pessoa['situacao'] = 'Recuperação'
else:
    pessoa['situacao'] = 'Reprovado'
print('-='*20)
for k, v in pessoa.items(): #para cada key há um valor
    print(f'{k} é igual a {v}')