n1 = int(input('Um valor: '))
n2 = int(input('Um valor: '))
s = n1 + n2
m = n1 * n2
d = n1 / n2
d1 = n1 // n2 #resto
e = n1 ** n2 #elevar
print('A soma vale {}, '.format(s), end='') #end evita quebra de linha e \n quebra linha
print('o produto vale {} '.format(m), end='')
print('a divisão vale {}, a divisão inteira vale {}, a potência vale {} '.format(d, d1, e))