function booleano(x) {
a = x.length
y = 0
z = []
    for(i=0; i<a ; i++){
        if(typeof x[i]!= "boolean") {
            z[y] = x[i]
            y++}
    }
    return z
}