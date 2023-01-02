#Escreva um programa que leia um número N inteiro qualquer e mostre na tela os N primeiros elementos de uma Sequência de Fibonacci. 
termos = int(input('Quantos termos da sequência de Fibonacci você deseja ver? '))
t1 = 0
t2 = 1
print(f'{t1} -> {t2}', end = ' ')
cont = 3
while cont <= termos:
    t3 = t1 + t2 #t3 será 0 + 1
    print(f' -> {t3}', end = ' ')
    t1 = t2 #t1 vira t2 (0 vira 1)
    t2 = t3 #t2 vira t3 (1 vira o outro 1), para que t3 vire uma nova soma
    cont += 1