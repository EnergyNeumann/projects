#Crie um programa que leia o ano de nascimento de sete pessoas. No final, mostre quantas pessoas ainda não atingiram a maioridade e quantas já são maiores.
from datetime import date
atual = date.today().year
maioridade = 0
menoridade = 0
for c in range(1, 8):
    ano = int(input(f'Em que ano a {c}º pessoa nasceu? '))
    result = atual - ano
    if result > 21:
        print(f'A pessoa {c} é maior de idade')
        maioridade += 1
        print(f'A pessoa {c} tem {result} anos')
    else:
        print(f'A pessoa {c} é menor de idade')
        menoridade += 1
        print(f'A pessoa {c} tem {result} anos')
print(f'A quantidade de maiores de idade é de {maioridade}')
print(f'A quantidade de maiores de idade é de {menoridade}')