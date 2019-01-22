def somaPares(x1,y1):
    import math
    x = math.ceil(x1)
    y = math.floor(y1)
    
    t=0
    
    for i in range(x,y+1):
       if (i/2==math.floor(i/2)):
            t=i+t
    
    return t

