#desconto de produto
valor = float(input('Qual o preço do produto? R$ '))
desconto = int(input('Qual o porcentagem de desconto? (coloque só o número) '))
total = valor - ((valor / 100) * desconto)
print('O produto custa {:.2f}R$ e o seu desconto é de {}%, então, o valor final ficará {:.2f}R$'.format(valor, desconto, total))