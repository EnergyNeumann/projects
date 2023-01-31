def teste(b):
    global a
    a = 8 #esse é o a do escopo local
    b += 4
    c = 2
    print(f'A dentro vale {a}')
    print(f'B dentro vale {b}')
    print(f'C dentro vale {c}')

a = 5 #esse é o a global
teste(a)
print(f'A fora vale {a}') #valerá 8, pois o a local virará o global