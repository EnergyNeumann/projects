#radar eletronico com hora automatica
import time
import emoji
hora = time.strftime('%H:%M',time.localtime())#horario atual
km = float(input('Qual sua velocidade? km: '))
time.sleep(2)
if km < 80:
    print('Isso aí, bom cidadão!')
else:
    print('Você excedeu o limite de 80 km/h!')
    time.sleep(1)
    print('Calculando multa...')
    multa = (km-80) * 7 #a cada 1km a mais do limite, tu paga 7 reais
    time.sleep(3)
    print(emoji.emojize('Você deve pagar uma multa de R${:.2f} 🤑'.format(multa)))

if hora >= '05:00' and hora <= '12:00':
    print(emoji.emojize('Tenha um bom dia e dirija com cuidado 🥱'))
elif hora > '12:00' and hora <= '17:59':
    print(emoji.emojize('Tenha uma boa tarde e dirija com cuidado 😎'))
else:
    print(emoji.emojize('Tenha uma boa noite e dirija com cuidado 😴'))

