def fatorial(num=1):
    f = 1
    for c in range(num, 0, -1): #vai do numero, até 0 e tirando 1
        f *= c
    return f

n = int(input('número: '))
print(f'o fatorial de {n} é igual a {fatorial(n)}')