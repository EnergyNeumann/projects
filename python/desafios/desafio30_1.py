num = int(input('Digite um número inteiro qualquer: '))
numtxt = str(num).strip()
numfinal = numtxt[(len(numtxt)-1):]

if numfinal in ['0', '2', '4', '6', '8']:
    print(f'O número {num} é PAR!')
else:
    print(f'O número {num} é ÍMPAR!')