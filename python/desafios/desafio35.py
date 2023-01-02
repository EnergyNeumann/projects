#programa que leia 3 retas e forme um triangulo
print('-=' * 20)
print('Analisador de triângulos')
print('-=' * 20)
r1 = float(input('Digite um primeiro segmento para o triângulo '))
r2 = float(input('Digite um segundo segmento para o triângulo '))
r3 = float(input('Digite um terceiro segmento para o triângulo '))
if r1 < r2+r3 and r2 < r1+r3 and r3 < r1+r2:
    print('Os segmentos acima podem formar triângulo')
else:
    print('Os segmentos acima não podem formar triângulo')

