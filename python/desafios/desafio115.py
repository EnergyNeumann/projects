import menu

while True:
    resposta = menu.menu(['Ver pessoas cadastradas', 'Cadastrar nova pessoas', 'Sair do sistema'])
    if resposta == 1:
        print('Opção 1')
    elif resposta == 2:
        print('Opção 2')
    elif resposta == 3:
        print('Saindo do sistema... Até logo!')
    else:
        print('ERRO! Digite uma opção válida')