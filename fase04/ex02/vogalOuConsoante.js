function vogalOuconsoante(letra) {
    var objRegExp  = /^[A-Za-z]+$/
    if (objRegExp.test(letra) && letra == letra.substr(0, 1))
        return (letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u' || letra=='A' || letra=='E' || letra=='I' || letra=='O' || letra=='U') ? "Vogal" : "Consoante"
    else
        return "Erro"
}