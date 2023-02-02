#Reescreva a função leiaInt() que fizemos no desafio 104, incluindo agora a possibilidade da digitação de um número de tipo inválido. Aproveite e crie também uma função leiaFloat() com a mesma funcionalidade.
def leiaInt(msg):
    while True:
        try:
            n = int(input(msg))
        except (ValueError, TypeError):
            print('Por favor, digite um número inteiro válido')
            continue #continue tenta dnv, ou seja, joga pro laço while dnv
        except (KeyboardInterrupt):
            print('Usuário preferiu não digitar esse número')
            return 0
        else:
            return n

def leiaFloat(msg):
    while True:
        try:
            n = float(input(msg))
        except (ValueError, TypeError):
            print('Por favor, digite um número real válido')
            continue #continue tenta dnv, ou seja, joga pro laço while dnv
        except (KeyboardInterrupt):
            print('Usuário preferiu não digitar esse número')
            return 0
        else:
            return n            

num = leiaInt('Digite um valor inteiro: ')
num2 = leiaFloat('Digite um número real: ')
print(f'O valor digitado foi {num}')
