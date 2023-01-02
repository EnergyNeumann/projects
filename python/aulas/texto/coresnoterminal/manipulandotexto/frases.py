frase = 'Eu sou Gostoso' # Eu sou gostoso

#fatiando
print(frase[0:15])
print(frase[2:6])
print(frase[0:14:2])
print(frase[0:14:3])
print(frase[4])
print(frase[:5])
print(frase[0::3])

#analisando string
#quantos caracteres a frase tem
print(len(frase))

#contar quantas vezes aparece tal letra na palavra
print(frase.count('o'))
#contar quantas letras 'o' tem, só que fatiando de x letra até y letra
print(frase.count('o', 0, 8))

#achar tal coisa
print(frase.find('toso')) #em que posição está tal coisa?
print(frase.rfind('o')) #achar a ultima posição q aparece tal coisa
print('sou' in frase) #se existir, manda true

#transformar frase
print(frase.replace('Gostoso','Lindo'))

#mudar fonte
print(frase.upper())
print(frase.lower())
print(frase.capitalize()) #deixa todos minusculo e só deixa o primeiro caractere em maiusculo
print(frase.title()) #vai dizer quantas palavras há na frase (precisa ter espaço entre as palavras)
print(frase.lower().find('gostoso'))

frase2 = '   Eu sou uma delicia  '
#espaçamento
print(frase2.strip()) #tirar espaços iniciais e finais
print(frase2.rstrip()) #tirar espaços finais (direita)
print(frase2.lstrip()) #tirar espaços iniciais (esquerda)

#divisão 
frase3 = 'Eu sou o richard'
print(frase3.split()) #lista com todos as palavras de uma cadeia de caracteres

dividido = frase.split()
print(dividido[2][3]) #0 = eu; 1 = sou; 2 = gostoso (mesmo esquema com as letras)

#junção
print('-'.join(frase)) #juntar elementos de frase usando -