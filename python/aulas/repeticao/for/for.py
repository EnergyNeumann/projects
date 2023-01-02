for c in range(0, 6):
    print('Oi')
print('FIM')

for c in range(1, 7): #contará de 1 até 6, pois o último ele ignora
    print(c)
print('FIM')

for c in range(6, 0, -1): #vai fazendo -1
    print(c)
print('FIM')

for c in range(0, 7, 2): #ele coloca 1 e tira 1 dps coloca 1 e tira 1 (vai pulando de 2 em 2)
    print(c)
print('FIM') 

n = int(input('Digite um número: '))
for c in range(0, n+1):
    print(c)
print('FIM')

i = int(input('Início: '))
f = int(input('Fim: '))
p = int(input('Passo: '))
for c in range(i, f+1, p): #de um número até outro pulando de x em x
    print(c)
print('FIM')

s = 0
for c in range(0, 4):
    n = int(input('Digite um valor: '))
    s = s + n #ou s += n
print(f'o somatório de todos os valores foi {s}')