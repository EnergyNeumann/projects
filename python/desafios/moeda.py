def metade(num = 0):
    m = num / 2
    return m

def dobro(num = 0):
    d = num * 2
    return d

def dez(num = 0):
    p = num + (num / 100)*10
    return p

def moeda(preço = 0, moeda = 'R$'):
    return f'{moeda}{preço:.2f}'.replace('.', ',')#substituir pontos por vírgula