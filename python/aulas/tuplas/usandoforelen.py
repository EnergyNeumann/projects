lanche = ('Hambúrguer', 'Suco', 'Pizza', 'Pudim') #pode tirar os parenteses, tbm
print(len(lanche))
for comida in lanche:
    print(f'Eu vou comer {comida}')
for cont in range(0, len(lanche)): #o cont mostra o primeiro valor, mas nesse caso, por estar pedindo de 0 até o LEN de lanche (é a contagem de valores do lanche), ficaria 0, 1, 2 ,3
    print(cont)