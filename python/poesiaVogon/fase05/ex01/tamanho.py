def pares (num1, num2):
    x1 = num1 / 2
    y1 = num2 / 2
    
    x2 = round(x1)
    y2 = round(y1)
    
    if x1 == x2 and y1 == y2:
        return "Os números são pares"
    else:
        return "Os números não são pares"

