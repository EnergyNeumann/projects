def dobra(lst):
    pos = 0
    print(len(lst))
    while pos < len(lst):
        lst[pos]*=2
        print(pos)

valores = [7,2,5,0,4]
dobra(valores)
print(valores)