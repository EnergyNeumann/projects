def metade(num = 0, format=False):
    res = num / 2
    return res if format is False else moeda(num) #retorne res se o format for false. se não for, retornará o método moeda formatado

def dobro(num = 0, format=False):
    res = num * 2
    return res if format is False else moeda(num)

def dez(num = 0, format=False):
    res = num + (num / 100)*10
    return res if format is False else moeda(num)

def moeda(preço = 0, moeda = 'R$'):
    return f'{moeda}{preço:.2f}'.replace('.', ',')#substituir pontos por vírgula