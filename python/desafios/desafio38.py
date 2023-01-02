#comparando numeros > < =
num1 = float(input('Digite o primeiro número '))
num2 = float(input('Digite o segundo número '))
if num1 > num2:
    print('O número {} é maior que o número {}'.format(int(num1), int(num2)))
elif num2 > num1:
    print('O número {} é maior que o número {}'.format(int(num2), int(num1)))
else:
    print('Os números são iguais')