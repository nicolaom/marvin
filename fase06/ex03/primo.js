function primo(x) {
if (x==2||x==3||x==5||x==7)
    return "Sim"
else if (x<=1||x!=Math.floor(x))
    return "N�o"
else
for (i=0;i<(Math.floor(x/2));i++) {
    if ((x/(i+2))==Math.floor(x/(i+2)))
        return "N�o"
    }
return "Sim"
}