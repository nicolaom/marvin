function diaDaSemana (x) {
    DatIng = x.substr(3,2) + "/" + x.substr(0,2) + "/" + x.substr(6,4)
    y = new Date (DatIng)
    z = y.getDay()
    semana=["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]
    return semana[z]   
}

