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
        for linha in a: #para cada linha do arquivo
            dado = linha.split(';')
            dado[1] = dado[1].replace('\n', '')#tira o \n e coloca um espaço para não ter espaçamento entre os nomes
            print(f'{dado[0]:<30}{dado[1]:>3} anos')
        # print(a.read())#ler o arquivo todo
    finally:
        a.close()


def cadastrar(arq, nome='desconhecido', idade=0):
    try:
        a = open(arq, 'at')
    except:
        print('HOUVE UM ERRO na abertura do arquivo')
    else:
        try:
            a.write(f'{nome};{idade}\n')
        except:
            print('Houve um erro na hora de escrever os dados')
        else:
            print(f'Novo registro de {nome} adicionado')
            a.close()