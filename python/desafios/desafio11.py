#largura da parede x altura e dps calcular área e qtd de tinta pra pintar
largura = float(input('Digite a largura da tua parede '))
altura = float(input('Digite a altura da tua parede '))
area = largura * altura
tinta = area / 2
print('A dimensão da sua parede é de {}x{} e sua área é de {}m²'.format(largura, altura, area))
print('Para pintar a parede, você precisará de {}L de tinta'.format(tinta))