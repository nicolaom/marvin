function somaPares(x1,y1) {

x = Math.ceil(x1)
y = Math.floor(y1)

t=0

for(i=x;i<=y1;i++) {
   if (i/2==Math.floor(i/2)) {
        t+=i
    }
}
return t
}
