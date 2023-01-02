# cores padrão ansi
#/033[0;33;44m 
#     estilo;text;background

#styles: 
# 0 - None
# 1 - bold
# 4 - underline
# 7 - negative

# text:
# 30 - branco
# 31 - vermelho
# 32 - verde
# 33 - amarelo
# 34 - azul
# 35 - roxo 
# 36 - ciano
# 37 - cinza

# background:
# 40
# 41
# 42
# 43
# 44
# 45
# 46
# 47

print('\033[1;31;43mTeste\033[m') #o \033 inicial abre, já o \033 final fecha
print('\033[7;30mOlá, Richard!\033[m')

a = 3
b = 5
print('Os valores são \033[32m{}\033[m e \033[31m{}\033[m'.format(a, b))

nome = "richard"
cores = {'limpa':'\033[m', 'azul':'\033[34m', 'amarelo':'\033[33m', 'pretoebranco':'\033[7;30m'}
print('Olá, muuito prazer em te conhecer, {}{}{}'.format('\033[4;34m', nome, '\033[m'))
print('Olá, {}{}{}'.format('pretoebranco', nome, "limpa"))