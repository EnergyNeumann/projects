#Crie um módulo chamado moeda.py que tenha as funções incorporadas aumentar(), diminuir(), dobro() e metade(). Faça também um programa que importe esse módulo e use algumas dessas funções.
import desafio107f

num = int(input('Digite o preço: R$'))
print(f'A metade de R${num:.1f} é R${desafio107f.metade(num):.1f}')
print(f'O dobro de R${num:.1f} é R${desafio107f.dobro(num):.1f}')
print(f'Aumentando 10% de R${num:.1f}, temos R${desafio107f.dez(num):.1f}')