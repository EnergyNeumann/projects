num = [2, 5, 9 ,1]
print(num)
num[2] = 3 #mudar valores, pois lista é mutável
print(num)
num.append(7) #adicionando o 7 na lista
print(num)
num.sort() #colocando na ordem crescente
print(num)
num.sort(reverse=True) #colocando na ordem decrescente
print(num)
num.insert(2, 0) #na posição 2, colocar o 0 no lugar, apenas colocando o valor que está no 2, mais pra frente
print(num)
num.pop(2) #eliminar o terceiro (2) valor, e fazer voltar o valor antigo
print(num)
num.remove(5) #o remove pega o primeiro valor 5 que aparecer, e não todos ou o último
print(num)
if 4 in num:
    num.remove(4)
else:
    print('Não achei o número 4')
print(f'Essa lista tem {len(num)} elementos')