from time import sleep
print('''FOGOS DE ARTIFÍCIL
Digite a opção
[ 1 ] para acender
[ 2 ] Para explodir na sua mão (não recomendado)''')
opção = int(input('Digite a opção: '))
if opção == 1:
    for c in range(10, 0, -1):
        sleep(1)
        print(c)
    print('BOOOOOOM!!!')
elif opção == 2:
    sleep(1)
    print('BOOOOOOM!!!')
    print('Sua mão ainda está ai? kkk')
else:
    print('Opção invalida! acenda novamente :)')

