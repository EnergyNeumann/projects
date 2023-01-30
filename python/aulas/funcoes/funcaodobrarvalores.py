def dobra(lst):
    pos = 0
    print(len(lst))
    while pos < len(lst):
        lst[pos]*=2
        pos+=1

valores = [7,2,5,0,4]
dobra(valores)
print(valores)