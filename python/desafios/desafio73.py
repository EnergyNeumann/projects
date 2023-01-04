# #Crie uma tupla preenchida com os 20 primeiros colocados da Tabela do Campeonato Brasileiro de Futebol, na ordem de colocação. Depois mostre:
# a) Os 5 primeiros times.
# b) Os últimos 4 colocados.
# c) Times em ordem alfabética. 
# d) Em que posição está o time da Chapecoense.
from time import sleep
times = ('Corinthians','Palmeiras','Santos','Grêmio','Cruzeiro','Flamengo','Vasco','Chapecoense',
'Atlético','Botafogo','Atlético-PR','Bahia','São Paulo','Fluminense','Sport Recife','EC Vitória',
'Curitiba','Avaí','Ponte preta','Atlético-GO')
print('=' * 100)
print('PROGRAMA QUE LERÁ COISAS SOBRE O BRASILEIRÃO 2018')
print('=' * 100)
sleep(2)
opc = ' '
dnv = ' '
while True:
    print('''ESCOLHA UMA DAS OPÇÕES: 
    0) Times do Brasileirão
    A) Os 5 primeiros times.
    B) Os últimos 4 colocados.
    C) Times em ordem alfabética. 
    D) Em que posição está o time da Chapecoense.
    E) Em que posição está tal time
    N) Não quero mais jogar''')
    opc = str(input('Escolha uma das opções: ')).strip().upper()[0]
    if opc not in '0ABCDEN':
        print('Escolha uma das opções disponíveis.')
    if opc == '0':
        print('=' * 100)
        print(f'Os times do brasileirão são: {times}')
        print('='*100)
        sleep(3)
    elif opc == 'A':
        print('=' * 100)
        print(f'Os 5 primeiros times são: {times[0:5]}')
        print('='*100)
        sleep(3)
    elif opc == 'B':
        print('=' * 100)
        print(f'Os últimos 4 colocados são: {times[-4:]}')
        print('='*100)
        sleep(3)
    elif opc == 'C':
        print('=' * 100)
        print(f'Os times em ordem alfabética ficam: {sorted(times)}')
        print('='*100)
        sleep(3)
    elif opc == 'D':
        print('=' * 100)
        chap = times.index('Chapecoense')
        print(f'Chapecoense está na: {chap + 1}º posição')
        sleep(3)
    elif opc == 'E':
        print('=' * 100)
        time = str(input('Escolha o time que você quer: '))
        posi = times.index(time)
        print(f'{time} está na: {posi + 1}º posição')
        sleep(3)
    elif opc == 'N':
        break
print('Obrigado por jogar!!!')