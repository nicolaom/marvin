def ateZero (a):
    z=[]
    if a>0:
        for x in range(0,a+1):
            z.append(x)
        return z
    elif a<0:
        for x in range(a,1):
            z.append(x)
        return z
    else:
        return [0]
