function pares (num1, num2) {
    var x1 = num1 / 2
    var y1 = num2 / 2
    
    var x2 = Math.round(x1)
    var y2 = Math.round(y1)
    
    if(x1 == x2 && y1 == y2)
    return "Os n�meros s�o pares"
    else
    return "Os n�meros n�o s�o pares"
}