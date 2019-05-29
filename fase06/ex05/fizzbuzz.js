function batata(x) {
    var x3 = x/3
    var x5 = x/5
    if(Math.round(x3)===x/3 && Math.round(x5)===x/5)
        return " FizzBuzz"
    else if (Math.round(x3)===x/3)
        return " Fizz"
    else if (Math.round(x5)===x/5)
        return " Buzz"
    else
        return ""

}
function fizzbuzz(n1,n2) {
    var a = n1
    while (a<=n2){
        b = parseInt(a)
        console.log (b+batata(a))
        a++
    }
}

fizzbuzz(10,30)