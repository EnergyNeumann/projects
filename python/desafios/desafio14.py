#conversor de temperatura
celsius = float(input('Informe sua temperatura em celsius '))
fah = (celsius * 9 / 5) + 32
kelvin = celsius + 273
print('A temperatura em celsius é {}°C, agora, para fahrenheit será {}°F e em Kelvin será {}K' .format(celsius, fah, kelvin))