#onde está tal letra?
frase = str(input('Digite uma frase: ')).upper().strip()
letra = str(input('Escolha uma letra para achar: ')).upper().strip()
print('A letra {} apareceu {} vezes'.format(letra, frase.count(letra)))
print('A primeira letra "{}" apareceu na posição {} ' .format(letra, frase.find(letra) + 1)) #+1 para tirar/passar de 0 para 1
print('A última letra "{}" apareceu na posição {} ' .format(letra, frase.rfind(letra) + 1)) #+1 para tirar/passar de 0 para 1