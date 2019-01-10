function parOuImpar (num1) {
    var x1 = num1 / 2
    
    var x2 = Math.round(x1)
    
    if(x1 == x2)
    return "Par"
    else
    return "Ímpar"
}