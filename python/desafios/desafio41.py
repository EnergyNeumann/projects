#classificação de pessoa por idade
from datetime import date
atual = date.today().year
nascimento = int(input('Digite seu ano de nascimento'))
idade = atual - nascimento
if idade <= 9:
    print('Você é um MIRIM')
elif idade <= 14: 
    print('Você é um INFANTIL')
elif idade <= 19: 
    print('Você é um JUNIOR')
elif idade <= 25:
    print('Você é um SENIOR')
else:
    print('Você é um MASTER')