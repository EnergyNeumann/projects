#Crie um programa que leia uma frase qualquer e diga se ela é um palíndromo, desconsiderando os espaços.
frase = str(input('Digite uma frase ou palavra: ')).strip().upper()
palavras = frase.split() #separa em partes (em lista)
teste = '*'.join(palavras) #junta tudo em *
junto = ''.join(palavras) #junta tudo sem espaço
print(teste, junto)
inverso = ''
for letra in range(len(junto) - 1, -1, -1): #pega o len de letras (quantidade de letras) e tira 1 para ficar exato; vai até a letra -1 (antes da primeira q é 0) e vai voltando -1 (vai voltando uma letra)
    inverso += junto[letra]
print(f'O inverso de {junto} é {inverso}')
if inverso == junto:
    print('TEMOS UM PALÍNDROMO')
else:
    print('A FRASE DIGITADA NÃO É UM PALÍNDROMO')