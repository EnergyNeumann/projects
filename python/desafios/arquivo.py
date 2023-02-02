import menu

def arquivoExiste(nome):
    try:
        a = open(nome, 'rt')#rt = abrir para leitura e texto
        a.close()
    except FileNotFoundError: #se arquivo não for encontrado, não retorna o open
        return False
    else:
        return True


def criarArquivo(nome):
    try:
        a = open(nome, 'wt+')#escrever arquivo de texto e se não existir, criará (o '+' faz isso)
        a.close()
    except:
        print('Houve um ERRO na criação do arquivo!')
    else:
        print('Arquivo criado com sucesso')


def lerArquivo(nome):
    try:
        a = open(nome, 'rt')
    except:
        print('ERRO ao ler arquivo')
    else:
        menu.cabeçalho('PESSOAS CADASTRADAS')
        print(a.read())#ler o arquivo todo