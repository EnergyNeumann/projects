print('='*20)

#centralizar o nome em x espaços (no caso, ta 20)
nome = input('Qual o seu nome? ')
print('Prazer em te conhecer {:^20}' . format(nome))

#colocar x espaços na frente
nome = input('Qual o seu nome? ')
print('Prazer em te conhecer {:>20}' . format(nome))

#colocar quantidades de = entre o nome
nome = input('Qual o seu nome? ')
print('Prazer em te conhecer {:=^20}' . format(nome))