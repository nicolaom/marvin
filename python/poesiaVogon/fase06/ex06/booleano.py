def booleano (x):
    a = len(x)
    z = []
    for i in range(0,a):
        if(type(x[i])!= bool):
            z.append(x[i])
    return z

