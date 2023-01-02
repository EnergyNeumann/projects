#alistamento militar
from datetime import date
atual = date.today().year
ano = int(input('Digite o ano de seu nascimento '))
idade = atual - ano
print('Quem nasceu em {} tem {} anos, pois estamos em {}'.format(ano, idade, atual))
if idade == 18:
    print('Você tem 18 anos, então deve se alistar no exército')
elif idade < 18:
    print('Para se alistar no exército, você precisa ter 18 anos. Falta(m) {} ano(s) para seu alistamento'.format(18 - idade))
elif idade > 18:
    print('Já passou o tempo de você se alistar, campeão. Você devia ter se alistado há {} anos'.format(idade - 18))