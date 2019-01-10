function parEPositivo (num1) {
    var x1 = num1 / 2
    
    var x2 = Math.round(x1)
    
    if(x1 == x2 && num1 > 0)
    return "Sim"
    else
    return "Não"
}