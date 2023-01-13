teste = []
teste.append('Richard')
teste.append(17)
galera = []
galera.append(teste[:])
teste[0] = 'Richardao'
teste[1] = 20
galera.append(teste[:])
print(galera)