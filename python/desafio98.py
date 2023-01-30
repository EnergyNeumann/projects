#Faça um programa que tenha uma função chamada contador(), que receba três parâmetros: início, fim e passo. Seu programa tem que realizar três contagens através da função criada:
# a) de 1 até 10, de 1 em 1
# b) de 10 até 0, de 2 em 2
# c) uma contagem personalizada
def contador(i, f, p):
    print(f'Contagem de {i} até {f} de {p} em {p}')

    if i < f: #se o início for maior doq o fim. Pois, se colocar sem isso, o 2º contador (10, 0, 2) não funcionará, até porque 10 é maior do que 10
        cont = i
        while cont <= f:
            print(f'{cont} ', end='')
            cont+=p
        print('FIM')
    
        

contador(1, 10, 1) #de 1 até 10 indo de 1 em 1
contador(10, 0, 2)