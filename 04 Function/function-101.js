// function - input, code, output

let greetUser = function () {
    console.log('Welcome user');
}

greetUser();
greetUser();
greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue)

//Challenge Area

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * (5 / 9)
    return celsius;
}
//Call a couple of time (32->0) (68 -> 20)
let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

//print the converted values.
console.log(tempOne)
console.log(tempTwo)