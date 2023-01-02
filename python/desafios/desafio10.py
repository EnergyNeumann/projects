#conversor de moeda real pra dolar
dindin = float(input('Quantos de money vc tem na conta? R$ '))
dolar = dindin / 5.32
print('Com {:.2f} você compra {:.2f} dolars'.format(dindin, dolar)) #o {:.2f} é para 2 casas decimais e flutuantes (formato do dinheiro)
