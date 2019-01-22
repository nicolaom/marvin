def parOuImpar (num1):
    x1 = num1 / 2
    
    x2 = round(x1)
    
    if x1 == x2:
        return "Par"
    else:
        return "Ímpar"
