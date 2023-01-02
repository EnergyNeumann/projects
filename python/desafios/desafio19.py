#sorteando um item aleatório da lista
from random import choice #importar um elemento aleatório
alu1 = str(input('Digite um nome '))
alu2 = str(input('Digite mais um nome '))
alu3 = str(input('Digite mais um nome heh '))
alu4 = str(input('Digite mais um kkkkkk '))
lista = [alu1, alu2, alu3, alu4]
resultado = choice(lista)
print('O nome escolhido foi {}' .format(resultado))
