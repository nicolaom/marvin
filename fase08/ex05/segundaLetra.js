function segundaLetra (x) {
    n = []
    r = []
        for(i=0;i<x.length;i++){
            n[i]=(x[i].slice(1)+i).toLowerCase()
        }
    n.sort()
        for(j=0;j<x.length;j++){
            r[j]=x[n[j].slice(-1)]
        }
    return r
}

