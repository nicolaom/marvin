function abc(letra) {
    var objRegExp  = /^[A-Ca-c]+$/
    var x = letra.substr(0, 1)
    return (objRegExp.test(x))
}