function juntar (num1, num2) {
   var x = num2.toString()
   var y = Math.pow(10,x.length)
   return num1 * y + num2
}