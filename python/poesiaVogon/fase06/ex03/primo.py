def primo(x) :
    import math
    if x==2 or x==3 or x==5 or x==7:
        return "Sim"
    elif x<=1 or x!=math.floor(x):
        return "Não"
    else:
        for i in range(1,x-1):
            if (x/(i+1))==math.floor(x/(i+1)):
                return "Não"
        return "Sim"

