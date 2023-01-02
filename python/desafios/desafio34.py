#aumentar 15% de salarios baixos e 10% de salarios altos
sal = float(input('Qual o salário do funcionário? '))
salbaixo = sal + (sal/100) * 15
salalto = sal + (sal/100) * 10
if sal <= 5000:
    print(f'Seu salário era R${sal:.2f} e agora será R${salbaixo:.2f}')
else:
    print(f'Seu salário era R${sal:.2f} e agora será R${salalto:.2f}')