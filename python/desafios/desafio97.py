#Faça um programa que tenha uma função chamada escreva(), que receba um texto qualquer como parâmetro e mostre uma mensagem com tamanho adaptável.
def escreva(txt):
    print('-'*(1+len(txt)))
    print(txt)
    print('-'*(1+len(txt)))

palavra = str(input('Digite uma palavra ou frase '))
escreva(palavra)