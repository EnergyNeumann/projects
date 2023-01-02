#programa que le o primeiro termo e a razão de uma PA. no final mostre os 10 primeiros termos da progressao
primeiro = int(input('Primeiro termo: '))
razao = int(input('De quanto em quanto você quer pular? (razão) '))
decimo = primeiro + (10 - 1) * razao #formula do enesimo termo de uma PA
for c in range(primeiro, decimo + razao, razao):
    print(f'{c}', end = ' → ')
print('ACABOU!!')