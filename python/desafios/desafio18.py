#calculando seno, cosseno e tangente
import math
ang = int(input('Digite o ângulo que você quer calcular '))
#converter para radianos e depois calcular oq vc quer
angrad = math.radians(ang)
sen = math.sin(angrad)
cos = math.cos(angrad)
tan = math.tan(angrad)
print('O valor em ângulos é {}°, o valor em seno fica {:.2f}, o valor em cosseno fica {:.2f} e o valor em tangente fica {:.2f}' .format(int(ang), sen, cos, tan))