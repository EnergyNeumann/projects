#Faça um mini-sistema que utilize o Interactive Help do Python. O usuário vai digitar o comando e o manual vai aparecer. Quando o usuário digitar a palavra 'FIM', o programa se encerrará. Importante: use cores.

def ajuda():

    from time import sleep

    def mensagem(msg):
        print('=' * len(msg))
        print(f'{msg}')
        print('=' * len(msg))

    while True:
        print('\033[1;43m', end='')
        mensagem('  SISTEMA DE AJUDA PyHELP  ')
        func = str(input('\033[mFunção ou biblioteca →→→  '))
        if func.upper() == 'FIM':
            print('\033[1;41m', end='')
            mensagem('  ATÉ LOGO  ')
            break
        else:
            print('\033[1;44m', end='')
            mensagem(f"  Acessando o manual de '{func}'  ")
            sleep(1)
            print('\033[7;40m', end='')
            help(func)
            print('\033[m', end='')
            sleep(2)


ajuda()