function xp (x) {
xp1 = 100
nivel = 1
    for(i=0;i<x;i++) {
        if(x<=xp1){
            return nivel
        }
        else{
            xp1 += 100+50*nivel
            nivel ++
        }
    }
}

