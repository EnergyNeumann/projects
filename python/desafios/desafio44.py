#comprando com escolha de metodo do pagamento, juros e etc
from time import sleep
print('LOJA DO ENERGY_NEUMANN')
valor = float(input('Qual o valor da compra? R$'))
sleep(1)
print('''Escolha o método de pagamento: 
[1] à vista dinheiro/cheque
[2] à vista cartão 
[3] 2x no cartão 
[4] 3x ou mais no cartão''')
metodo = int(input('Qual método você quer? '))
sleep(1)
if metodo == 1:
    print('Você escolheu pagar por dinheiro/cheque.')
    sleep(1)
    desconto = valor - (valor / 100 * 5)
    print(f'O valor que era R${valor:.2f}, receberá desconto e passará a ser R${desconto:.2f}')
elif metodo == 2:
    print('Você escolheu pagar no cartão. Quantas parcelas você deseja? ')
    parcelas = int(input('Escolha a quantidade de parcelas: '))
    sleep(1)
    valorparcelado = valor / parcelas
    print(f'O valor da compra é R${valor:.2f} e você escolheu {parcelas} parcelas, então você pagará R${valorparcelado:.2f} por mês ')
    sleep(1)
    print('Porém, como nem tudo são flores, você pagará um juros de 5%!!! HEHEHEHEHE')
    juros = valorparcelado + (valorparcelado / 100 * 5)
    sleep(1)
    print(f'O valor que era: R${valorparcelado:.2f}, ficará R${juros:.2f} por mês')
elif metodo == 3:
    print('Você escolheu pagar 2x no cartão')
    print(f'Você pagará R${valor / 2:.2f} por mês (sem juros), porque eu estou de bom humor')
elif metodo == 4:
    print('Você escolheu pagar 3x no cartão')
    juros2 = (valor + (valor / 100 * 2)) / 3
    print(f'Você pagará R${valor / 3:.2f} por mês (com juros de 2%), então o valor ficará R${juros2:.2f} por mês')
else:
    print('Não existe essa forma de pagamento, pessoa incrivelmente ligeira! SEGURANÇAS, PEGUEM-A!!!!')