function ateZero (num) {
var z = []
    if (num === 0)
        return [0]
    else if (num>0)
        for (i=0;i<=num;i++) {
            z[i]=i
        }
    else
        for (j=0;j<=-num;j++) {
            z[j]=num+j
        }
    return z
}
