function pessoaFisica (x) {
    if (x.length !=14)
        return false
n = (x.substr(0,3)+x.substr(4,3)+x.substr(8,3)+x.substr(12,2))
    for (i=0;i<n.length;i++){
        if (!(n.charAt(i) >="0" && n.charAt(i) <= "9")){
            return false
        }
    }
return (x.charAt(3)+x.charAt(7)+x.charAt(11)=="..-")
}
