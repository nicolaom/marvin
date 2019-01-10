function passadoOuFuturo (data) {
    var hoje = new Date(2015, 10, 21)
    
    if(data < hoje)
    return "Passado"
    else
    return "Futuro"
}