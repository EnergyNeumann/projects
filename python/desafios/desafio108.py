#Adapte o código do desafio #107, criando uma função adicional chamada moeda() que consiga mostrar os números como um valor monetário formatado.
import moeda

num = int(input('Digite o preço: R$'))
print(f'A metade de {moeda.moeda(num)} é R${moeda.moeda(metade(num))}')
print(f'O dobro de {moeda.moeda(num)} é R${moeda.moeda(dobro(num))}')
print(f'Aumentando 10% de {moeda.moeda(num)}, temos R${moeda.moeda(dez(num))}')