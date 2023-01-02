#Melhore o DESAFIO 061, perguntando para o usuário se ele quer mostrar mais alguns termos. O programa encerrará quando ele disser que quer mostrar 0 termos.
primeiro = int(input('Digite o primeiro termo da PA '))
razao = int(input('Digite a razão (de quanto em quando você deseja pular) '))
termo = primeiro
cont = 1
totaltermos = 0
mais = 10
while mais != 0:
    totaltermos += mais
    while cont <= totaltermos:
        print(f'{termo} -> ', end = ' ')
        termo += razao
        cont += 1
    print('PAUSA')
    mais = int(input('Quantos termos você quer mostrar a mais? '))
print('FIM')
