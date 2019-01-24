function diaDaSemana (x) {
    DatIng = x.substr(3,2) + "/" + x.substr(0,2) + "/" + x.substr(6,4)
    y = new Date (DatIng)
    z = Math.round((y/7-Math.floor(y/7))*7)
    semana=["Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo","Segunda-feira"]
    return semana[z-1]   
}

