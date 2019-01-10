function maiusculo (palavra) {
    var x = palavra.substr(0,3)
    var y = palavra.slice(3)
    var z = x.toUpperCase()
    return z + y
}
