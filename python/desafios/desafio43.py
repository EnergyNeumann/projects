#calculando o imc da pessoa
from time import sleep
peso = float(input('Digite o seu peso em kg: EX(73.3) '))
print(f'Você tem {peso} kg? Escreva "SIM" para confirmar e "NÃO" para recusar')
sleep(1)
resp = str(input('Resposta: '))
if resp == 'SIM':
    altura = float(input('Qual a sua altura em m? EX(1.75) '))
    print(f'Você tem {altura} metros? Escreva "SIM" para confirmar e "NÃO" para recusar')
    sleep(1)
    resp2 = str(input('Resposta: '))
    if resp == 'SIM':
        print('Calculando IMC...')
        imc = peso / (altura ** 2) #calculo imc
        sleep(2)
        print(f'O seu IMC é {imc:.2f}')
        print('Você está no peso ideal? Calculando...')
        sleep(2)
        if imc < 18.5:
            print('Você está abaixo do peso')
        elif 18.5 <= imc < 25:
            print('Você está no peso ideal')
        elif 25 <= imc < 30:
            print('Você está no sobrepeso')
        elif 30 <= imc < 40:
            print('Você está obeso')
        elif imc >= 40:
            print('Você está em obesidade mórbida. TOME CUIDADO!!')
    else:
        print('Ok, meu amigo, tente novamente.')
else:
    sleep(1)
    print('Rode o código novamente, para inserir os dados')