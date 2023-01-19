estado = dict()
copia = list()
brasil = list()
for c in range(0, 3):
    estado['uf'] = str(input('Unidade Federativa: '))
    estado['sigla'] = str(input('Sigla do Estado: '))
    brasil.append(estado.copy())
for e in brasil: #mostrando bonito
    print(e)

for e in brasil:
    for k, v in e.items():
        print(f'O campo {k} tem valor {v}')#mostra o campo uf tem valor Acre; o campo sigla tem valor AC

for e in brasil:
    for v in e.values():
        print(v, end='') #mostrará os valores (SP, São paulo; RJ, Rio; AC, acre)
    print()