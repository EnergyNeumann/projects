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
        #opção de listar conteúdo de um arquivo
        arquivo.lerArquivo(arq)
    elif resposta == 2:
        #opção de cadastrar pessoa nova
        menu.cabeçalho('NOVO CADASTRO')
        nome = str(input('Nome: '))
        idade = leiaInt('Idade: ')
        arquivo.cadastrar(arq, nome, idade)
    elif resposta == 3:
        menu.cabeçalho('Saindo do sistema... Até logo!')
        break
    else:
        menu.cabeçalho('ERRO! Digite uma opção válida')
    sleep(2)