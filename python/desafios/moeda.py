def metade(preço = 0, format=False):
    res = preço / 2
    return res if format is False else moeda(res) #retorne res se o format for false. se não for, retornará o método moeda formatado


def dobro(preço = 0, format=False):
    res = preço * 2
    return res if format is False else moeda(res)


def dez(preço = 0, format=False):
    res = preço + (preço / 100)*10
    return res if format is False else moeda(res)

def aumentar(preço = 0, taxaaumento = 0, format=False):
    res = preço + (preço / 100)*taxaaumento
    return res if format is False else moeda(res)

def diminui(preço = 0, taxadiminuir = 0, format=False):
    res = preço - (preço / 100)*taxadiminuir
    return res if format is False else moeda(res)

def resumo(preço = 0, aumento = 0, diminuir = 0):
    print('-'*30)
    print('RESUMO DO VALOR'.center(30))
    print('-'*30)
    print(f'Preço analisado:\t{moeda(preço)}')
    print(f'Dobro do preço: \t{dobro(preço, True):>7}')
    print(f'Metade do preço: \t{metade(preço, True):>7}')
    print(f'Com {aumento}% de aumento: \t{aumentar(preço, aumento, True)}')
    print(f'Com {diminuir}% de diminuição: \t{diminui(preço, diminuir, True)}')
    print('-'*30)


def moeda(preço = 0, moeda = 'R$'):
    return f'{moeda}{preço:.2f}'.replace('.', ',')#substituir pontos por vírgula

def leiaDinheiro(msg): #função que se digitar letra, dará inválido
    valido = False
    while not valido:
        entrada = str(input(msg)).replace(',', '.').strip()
        if entrada.isalpha() or entrada.strip() == '':#se for alfanumerico #letras
            print(f'\033[0;31mERRO: \"{entrada} é um preço inválido!\033[m')
        else:
            valido = True
            return float(entrada)
