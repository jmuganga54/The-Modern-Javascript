//Undefined for variable
let name

name = 'Joseph'

if(name === undefined){
    console.log('Please provide the name')
}else{
    console.log(name)
}

//Undefined for function arguments
//undefined as function return default value
let square = function (num){
   return num
}

let result = square()
console.log(result);

let age = 27

age = null;

console.log(age)
