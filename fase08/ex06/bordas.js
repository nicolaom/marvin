function bordas (x,y) {
    xx=1
    yy=1
    z=""
    for (l=1;l<=y;l++) {
        for(c=1;c<=x;c++) {
            if((xx==1 && yy==1)||(xx==x && yy==y && xx!=1 && yy!=1)){
                z=z+"A"
            }
            else if((xx==1 && yy==y)||(xx==x && yy==1)){
                z=z+"C"
            }
            else if(xx==1 || yy==1 || xx==x || yy==y){
                z=z+"B"
            }
            else{
                z=z+"0"
            }
            xx++
        }
        z=z+"\n"
        xx=1
        yy++
    }
    console.log (z)
}
    