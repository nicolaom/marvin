function primo(x) {
    x = Math.abs(x)
if (x==2||x==3||x==5||x==7)
    return "Sim"
else if (x<=1||x!=Math.floor(x))
    return "Não"
else
for (i=0;i<(Math.floor(x/2));i++) {
    if ((x/(i+2))==Math.floor(x/(i+2)))
        return "Não"
    }
return "Sim"
}
