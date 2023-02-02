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