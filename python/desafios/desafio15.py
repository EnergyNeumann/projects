#aluguel de carros
km = float(input('Qual a quantidade de km que você rodou com o carro? '))
dias = int(input('Qual a quantidade de dias que você rodou com o carro? '))
pagar = (dias * 60) + (km * 0.15)
print('A quantidade de kms que você rodou foi {}, a quantidade de dias foi {} e o preço que você terá que pagar será R${:.2f}' .format(km, dias, pagar))
