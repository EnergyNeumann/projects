#programa de python que abra e reproduza um audio de um arquivo mp3
import pygame
pygame.init() #iniciar pygame
pygame.mixer.music.load('desafio21.mp3')
pygame.mixer.music.play()
input()
pygame.event.wait()