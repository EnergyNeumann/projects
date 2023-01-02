#formando triangulos e dizendo qual que é
seg1 = int(input('Digite o primeiro segmento: '))
seg2 = int(input('Digite o segundo segmento: '))
seg3 = int(input('Digite o terceiro segmento '))
if seg1 < seg2 + seg3 and seg2 < seg3 + seg1 and seg3 < seg2 + seg1:
    print('Os segmentos acima podem formar um triângulo')
    if seg1 == seg2 == seg3:
        print('O triângulo formado é o equilátero, pois todos os lados são iguais')
    elif seg1 == seg2 or seg2 == seg3 or seg3 == seg1:
        print('O triângulo formado é isósceles, pois tem 2 lados iguais')
    else:
        print('O triângulo formado é escaleno, pois tem todos os lados diferentes')
else:
    print('Os segmentos acima NÃO podem formar um triângulo')