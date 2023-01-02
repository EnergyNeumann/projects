nome = str(input('Qual é o seu nome? '))
if nome == 'Richard':
    print('Que nome bonito!')
elif nome == 'Pedro' or nome == 'Thiago' or nome == 'Paulo':
    print('Seu nome é de apóstolo!') 
elif nome in 'Ana Rosa Maria Jéssica': #se o nome for algum desses
    print('Belo nome feminino!')
else:
    print('Seu nome é bem clássico')
print('Tenha um bom dia, {}!'.format(nome))
