#quais os anos bissextos?
from datetime import date
ano = int(input('Qual ano você quer analisar? Digite 0 para ver o ano atual: '))
if ano == 0:
    ano = date.today().year
if ano % 4 == 0 and ano % 100 != 0 or ano % 400 == 0: #se o resto da divisão por 4 for 0, e o resto da divisão por 400 for diferente de 0 ou o ano ser divisível por 400 (resto por 400 for 0)
    print('O ano {} é bissexto '.format(ano))
else:
    print('O ano {} não é bissexto '.format(ano))
