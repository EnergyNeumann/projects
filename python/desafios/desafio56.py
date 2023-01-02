#Desenvolva um programa que leia o nome, idade e sexo de 4 pessoas. No final do programa, mostre: a média de idade do grupo, qual é o nome do homem mais velho e quantas mulheres têm menos de 20 anos.
somaidade = 0
media = 0
maioridadehomem = 0
nomemaisvelho = ''
totmulher20 = 0
for pessoa in range(1, 5):
    print(f'---- {pessoa}º PESSOA ----')
    nome = str(input('Nome: ')).strip()
    idade = int(input('Idade: '))
    sexo = str(input('Sexo: [M/F] ')).strip()
    somaidade += idade
    if pessoa == 1 and sexo in 'Mm': #se a pessoa for a primeiro e o sexo for M ou m
        maioridadehomem = idade
        nomemaisvelho = nome
    if sexo in 'Mm' and idade > maioridadehomem:
        maioridadehomem = idade
        nomemaisvelho = nome
    if sexo in 'Ff' and idade < 20:
        totmulher20 = totmulher20 + 1 #totmulher20 += 1
media = somaidade / 4
print(f'A média de idade do grupo é de {media} anos')
print(f'O homem mais velho tem {maioridadehomem} anos e se chama {nomemaisvelho}')
print(f'Ao todo há {totmulher20} mulheres com menos de 20 anos')