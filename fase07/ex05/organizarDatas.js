function organizarDatas (x){
ordem=[]
final=[]
console.log
    for(i=0;i<x.length;i++){
        t=x[i].dataDeChegada
        ordem[i]=t.substr(6,4)+t.substr(0,2)+t.substr(3,2)+i.toString()
    }
ordem.sort()
    for(i=0;i<x.length;i++){
        z=ordem[i].substr(-1,1)
        final[i]=x[z]
    }
    return final
}
