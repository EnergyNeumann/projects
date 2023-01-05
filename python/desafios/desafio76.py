#Crie um programa que tenha uma tupla única com nomes de produtos e seus respectivos preços, na sequência. No final, mostre uma listagem de preços, organizando os dados em forma tabular.
listagem = ("Lápis", 1.75, 
            "Borracha", 2.00, 
            "Caderno", 15.90, 
            "Estojo", 25.00, 
            "Transferidor", 4.20,
            "Compasso", 9.99, 
            "Mochila", 120.32, 
            "Canetas", 22.30, 
            "Livro", 34.90)
print('-'*40)
print(f'{"LISTRAGEM DE PREÇOS":^40}')#centralizado e com 40 de espaço
print('-'*40)
print(len(listagem))
for pos in range(0, len(listagem)): #começa na posição 0 e vai até o tamanho da lista (quantos itens tem)
    if pos % 2 == 0: #se a posição for par, ele é o nome do produto; motivo: lápis = 0, 1.75 = 1, borracha = 2 e etc
        print(f'{listagem[pos]:.<30}', end='') #mostra os produtos, com 30 caracteres de pontos, e o texto está alinhado à esquerda. se quisesse mostrar a posição, imprimia só a 'pos'
    else: #se for impar (for os preços)
        print(f'R${listagem[pos]:>5.2f}')#mostra com 5 de espaço, itens alinhados a direita e com decimal (.2f)
print('-'*40)