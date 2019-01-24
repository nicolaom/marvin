function conversor (temp, de, para) {
    if (de == "celsius") {
        tempK = temp + 273.15
    }
    else if (de == "fahrenheit") {
        tempK = (temp - 32) * (5/9) + 273.15
    }
    else if (de == "kelvin") {
        tempK = temp
    }
    
    if (para == "celsius") {
        tempFin = tempK - 273.15
    }
    else if (para == "fahrenheit") {
        tempFin = (tempK - 273.15) * 9/5 + 32
    }
    else if (para == "kelvin") {
        tempFin = tempK
    }

return tempFin

}