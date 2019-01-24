function por42(n1, n2) {
x = (Math.ceil(n1/42))*42 + 42

    if(x<=n2)
        return x
    else
        console.log("Não encontrado")
        return false
}
