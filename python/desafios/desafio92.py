#Crie um programa que leia nome, ano de nascimento e carteira de trabalho e cadastre-o (com idade) em um dicionário. Se por acaso a CTPS for diferente de ZERO, o dicionário receberá também o ano de contratação e o salário. Calcule e acrescente, além da idade, com quantos anos a pessoa vai se aposentar.
from time import sleep
from datetime import datetime
pessoa = {}
pessoa['nome'] = str(input('Nome: '))
ano = int(input('Ano de Nascimento: '))
pessoa['idade'] = datetime.now().year - ano
pessoa['trabalho'] = int(input('Carteira de Trabalho (0 não tem): '))
if pessoa['trabalho'] != 0:
    pessoa['contratação'] = int(input('Ano de Contratação: '))
    pessoa['salário'] = int(input('Salário: R$'))
    pessoa['aposentadoria'] = pessoa['idade'] + ((pessoa['contratação'] + 35) - datetime.now().year)
print('-='*20)
for k, v in pessoa.items():
    print(f'{k} é igual a {v}')
    sleep(1)
    