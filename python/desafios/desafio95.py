#Aprimore o desafio 93 para que ele funcione com vários jogadores, incluindo um sistema de visualização de detalhes do aproveitamento de cada jogador.
time = list()
jogador = dict()
gol = list()
while True:
    jogador['nome'] = str(input('Nome do Jogador: '))
    partidas = int(input(f'Quantas partidas {jogador["nome"]} jogou? '))
    gol.clear()
    for c in range(0, partidas):
        gol.append(int(input(f'Quantos gols na partida {c+1} ')))
    jogador['gols'] = gol[:]
    jogador['total'] = sum(gol)
    time.append(jogador.copy())
    dnv = ' '
    while dnv not in 'SN':
        dnv = str(input('Quer continuar? [S/N] ')).upper().strip()[0]
        if dnv not in 'SN':
            print('ERRO! APENAS S OU N')
        elif dnv in 'S':
            break
    if dnv == 'N':
        break
print('-='*40)
print('cod ', end='')
for i in jogador.keys():
    print(f'{i:<15}', end='')
print()
print('-='*40)
for k, v in enumerate(time):
    print(f'{k:>3} ', end='')
    for d in v.values():
        print(f'{str(d):<15}', end='')
    print()
print()
print('-='*40)
while True:
    busca = int(input('Mostrar dados de qual jogador? (999 parar) '))
    if busca == 999:
        break
    if busca >= len(time): #se colocar um número q n está lá, vai dar erro
        print(f'ERRO! NÃO EXISTE JOGADOR COM CÓDIGO {busca}!')
    else: 
        print(f' -- LEVANTAMENTO DO JOGADOR {time[busca]["nome"]}')
        for i, g in enumerate(time[busca]['gols']):
            print(f'    No jogo {i+1} fez {g} gols')
        print('-'*40)