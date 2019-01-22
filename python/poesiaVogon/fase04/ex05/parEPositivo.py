def parEPositivo (num1):
    x1 = num1 / 2
    
    x2 = round(x1)
    
    if x1 == x2 and num1 > 0:
        return "Sim"
    else:
        return "Não"
