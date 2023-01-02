from datetime import date
from time import sleep
import emoji 
dia = date.today().day
mes = date.today().month
for cont in range(10, -1, -1):
    print(cont)
    sleep(1)
if mes == 12 and 1 < dia < 25:
    natal = 25 - dia
    print(f'VOCÊ ESTÁ PRÓXIMO DO NATAAAAAAL 🎅 (faltam: {natal} dias)')
elif mes == 12 and dia == 25:
    print('É NATAAAAAAAL!!!')
elif mes == 12 and 25 < dia < 31:
    novo = 31 - dia
    print(f'O ANO NOVO ESTÁ CHEGANDOOOO! (faltam: {novo} dias')
elif mes == 12 and dia == 31:
    print('É QUASE ANO NOVOOOO!!!!')
elif mes == 1 and dia == 1:
    print('FELIZ ANO NOVOOOO!!!')
sleep(1)
print(emoji.emojize('\033[35mPIIIIIIIIFFFFFFFFFF\033[m \033[32mBOOOOOOOM\033[m \033[33mBUUUUMM\033[m :fireworks: :sparkler: :balloon: :party_popper: :confetti_ball:'))