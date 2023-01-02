#mostrando se a cidade que eu digitar, realmente é a cidade que eu nasci e se tem ela
cidade = str(input('Em que cidade você nasceu? ')).strip()
print('A cidade que tu digitou é Guarulhos? ') 
print(cidade[:9] == 'Guarulhos')
cidade2 = cidade.capitalize().split()
print('A cidade que você digitou é {} '.format(cidade2))
print('Tem Guarulhos?')
print('Guarulhos' in cidade2[0])