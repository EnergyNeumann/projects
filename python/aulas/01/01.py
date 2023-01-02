Python 3.10.7 (tags/v3.10.7:6cc6b13, Sep  5 2022, 14:08:36) [MSC v.1933 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
print('Olá, mundo')
Olá, mundo
>>> print(7+4)
11
>>> print('7'+'4')
74
>>> 7+4
11
>>> '7' + '4'
'74'
>>> print('Olá' + 5)
Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    print('Olá' + 5)
TypeError: can only concatenate str (not "int") to str
>>> print('Olá' , 5)
Olá 5
>>> nome = 'Richard'
>>> idade = 17
>>> habilidade = estrategista
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    habilidade = estrategista
NameError: name 'estrategista' is not defined
>>> habilidade = 'estrategista'
>>> print(nome, idade, habilidade)
Richard 17 estrategista
>>> print(nome + idade + habilidade)
Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    print(nome + idade + habilidade)
TypeError: can only concatenate str (not "int") to str
>>> print(nome + habilidade)
Richardestrategista
>>> nome = input('Qual seu nome? ')
Qual seu nome? Mestre
>>> idade = input('Quantos anos você tem? ')
Quantos anos você tem? 84
>>> habilidade = input('Qual sua habilidade? ')
Qual sua habilidade? Sabedoria
>>> print(nome, idade, habilidade)
Mestre 84 Sabedoria
