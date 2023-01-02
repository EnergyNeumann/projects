#desafio clássico da media kk
n1 = float(input('Digite sua primeira nota: '))
n2 = float(input('Digite sua segunda nota: '))
média = (n1+n2) / 2
if média < 5:
    print('Você está reprovado.')
    quit()
if média >= 7:
    print('Você está aprovado!')
    quit()
else:
    print('Você está na recuperação')
    rec = float(input('Qual a sua nota na prova de recuperação? '))
    médiafinal = (média + rec) / 2
if médiafinal >= 5:
    print('Você passou na recuperação')
if médiafinal < 5:
    print('Você foi reprovado na recuperação.')