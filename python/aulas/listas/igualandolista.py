a = [2,3,4,5]
b = a #ambas viram a mesma coisa
b[2] = 8 #clonará para o 'a', também
print(f'A lista a: {a}')
print(f'A lista b: {b}')

c = [3,4,5,6]
d = c[:] #d recebe todos os valores de c
d[2] = 9 #esse comando funcionará certo
print(f'A lista c: {c}')
print(f'A lista d: {d}')