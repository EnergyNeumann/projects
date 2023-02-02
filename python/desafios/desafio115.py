#115aVamos criar um menu em Python, usando modularização.
#115bVamos ver como fazer acesso a arquivos usando o Python.
import menu
from time import sleep
import arquivo

arq = 'energy.txt'

if not arquivo.arquivoExiste(arq):
    arquivo.criarArquivo(arq)

while True:
    resposta = menu.menu(['Ver pessoas cadastradas', 'Cadastrar nova pessoas', 'Sair do sistema'])
    if resposta == 1:
        menu.cabeçalho('Opção 1')
    elif resposta == 2:
        menu.cabeçalho('Opção 2')
    elif resposta == 3:
        menu.cabeçalho('Saindo do sistema... Até logo!')
        break
    else:
        menu.cabeçalho('ERRO! Digite uma opção válida')
    sleep(2)