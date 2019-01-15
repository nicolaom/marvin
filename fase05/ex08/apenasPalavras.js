function apenasPalavras (x) {
a = x.length
y = 0
z = []
    for(i=0; i<a ; i++){
        if(typeof x[i]== "string") {
            z[y] = x[i]
            y = y + 1}
        else
            false
    }
    return z
}
