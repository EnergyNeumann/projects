#Crie um programa onde o usuário digite uma expressão qualquer que use parênteses. Seu aplicativo deverá analisar se a expressão passada está com os parênteses abertos e fechados na ordem correta.
expr = str(input('Digite uma expressão: '))
pilha = []
for simb in expr: #para cada caractere em expressão
    if simb == '(':
        pilha.append('(') #se abrir parentese, coloca um paresente na lista
    elif simb == ')':#se encontrou parentese fechando, pode ser que a lista esteja vazia ou cheia, pois pode ser que o paretense esteja no final da lista
        if len(pilha) > 0: # o tamanho da lista for maior do que 0, significa que ela não está vazia
            pilha.pop() #remove o ultimo elemento da lista
        else: #se a pilha estiver vazia
            pilha.append(')') #coloca o parentese fechando
            break
#explicando o que está feito em cima. cada vez que eu abro um parentese, eu coloca um na lista. cada vez que eu fecho um parentese, eu tiro um da lista.
if len(pilha) == 0:
    print('Sua expressão está válida!')
else:
    print('Sua expressão está errada!')
