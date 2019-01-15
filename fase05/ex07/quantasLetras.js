function quantasLetras (x) {
a = x.length
y = 0
    for(i=0; i<a ; i++){
        y = x[i].length + y
    }
    return y
}
