#programa que calcula o preço da passagem em km, e se for mais doq 200km, é mais caro
from time import sleep
distancia = float(input('Qual a distância da viagem? '))
print(f'Você está prestes a iniciar uma viagem de {distancia}km ')
sleep(2)
print('Calculando valor...') 
sleep(3) 
if distancia < 0:
    print('O ônibus não pode andar de ré, o cabeçudo')
elif distancia <= 200:
    preco = distancia * 0.50
else:
    preco = distancia * 0.45
print('O valor da sua passagem será R${:.2f}'.format(preco))

