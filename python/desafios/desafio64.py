#Crie um programa que leia vários números inteiros pelo teclado. O programa só vai parar quando o usuário digitar o valor 999, que é a condição de parada. No final, mostre quantos números foram digitados e qual foi a soma entre eles (desconsiderando o flag).
parar = False
soma = cont = 0
while not parar:
    num = int(input('Digite um número [999 para parar] '))
    if num == 999:
        parar = True
    else:
        soma += num
        cont += 1
print(f'Você digitou {cont} números e a soma dos números é {soma}')
