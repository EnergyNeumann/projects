import desafio107f

num = int(input('Digite o preço: R$'))
print(f'A metade de R${num:.2f} é R${desafio107f.metade(num):.2f}')
print(f'O dobro de R${num:.2f} é R${desafio107f.dobro(num):.2f}')
print(f'Aumentando 10% de R${num:.2f}, temos R${desafio107f.dez(num):.2f}')