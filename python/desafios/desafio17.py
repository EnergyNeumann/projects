#calculando hipotenusa pelos catetos usando modulo
from math import hypot
catopo = float(input('Digite o valor do cateto oposto '))
catadj = float(input('Digite o valor do cateto adjascente '))
hipot1 = (catopo ** 2 + catadj ** 2) ** (1/2) #1/2 é a raiz quadrada
hipot2 = hypot(catopo, catadj)
print('O cateto oposto é {}, o adjascente é {} e a hipotenusa vale {:.2f}' .format(catopo, catadj, hipot1))
print('Com o módulo, fica {:.2f}' .format(hipot2))