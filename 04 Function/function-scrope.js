//Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    //Local scope(fahrenheit, celsius)
        //Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * (5 / 9)
    if(celsius <= 0){
        let is freezing = true;
    }
    return celsius;
}
//Call a couple of time (32->0) (68 -> 20)
let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

//print the converted values.
console.log(tempOne)
console.log(tempTwo) 