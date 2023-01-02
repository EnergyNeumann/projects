#aumento do salário do funcionario
sal = float(input('Qual o salário do funcionario? R$'))
aumento = int(input('Qual foi o aumento do salário? (digite apenas o número da %) '))
total = sal + ((sal / 100) * aumento)
print('O salário era de R${:.2f} mas, com o aumento de {}%, passou a ser R${:.2f}'.format(sal, aumento, total))