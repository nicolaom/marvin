function x(a) {
y=0
for(i=0;i<a.length;i++){
    if(a.substr(i,1).toLowerCase()=="x")
        y++
}
return y
}