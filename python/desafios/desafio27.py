#qual seu primeiro e ultimo nome?
nome = str(input('Digite seu primeiro nome: ')).strip()
print('Prazer em te conhecer {} '.format(nome))
nomequebrado = nome.split()
print('Seu primeiro nome é {} '.format(nomequebrado[0]))
print('Seu último nome é {} '.format(nomequebrado[len(nomequebrado)-1])) #-1 pq conta o 0. ent mostra o ultimo espaço de caracteres. espaço 0 para quantidade de espaços que tem -1, ou seja, se tem 3 espaços, será 3-1 = 2, para tirar o 0
print('Seu último nome é {} '.format(nomequebrado[-1]))#pega o ultimo nome mais facilmente

