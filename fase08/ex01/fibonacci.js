function fibonacci (x) {
a=0
b=1
z=0
f=[1]
    for (i=1;i<x;i++){
        f[i]= a + b
        z = b
        b = a + b
        a = z
    }
if (x===0)
    return []
else
    return f
}

