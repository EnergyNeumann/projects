#Crie um programa que tenha uma tupla com várias palavras (não usar acentos). Depois disso, você deve mostrar, para cada palavra, quais são as suas vogais.
palavras = ('JOGAR', 'DIVERTIR', 'EXPLORAR', 'TREINAR', 'ESTUDAR', 'FOCAR')
for p in palavras: #mostrar as palavras uma dps da outra
    print(F'\nNa palavra {p.upper()} há as vogais:', end =' ')
    for letra in p: #mostrar as letras
        if letra.lower() in 'aeiou': #se a letra jogada para minuscula for dentro de aeiou, escreve a letra
            print(letra, end='')