// let name = ' Joseph Muganga '


// //length property
// console.log(name.length)

// //Convert to upperCase
// console.log(name.toUpperCase())

// //Convert to lowerCase
// console.log(name.toLowerCase());

// //Include mdethod
// let password = 'abcpassword1238'
// console.log(password.includes('password'));

// //removing white space
// console.log(name)
// console.log(name.trim())

//Challenge area
/**
 * Create a function: isValidPassword
 * it takes a single argument :password
 * Return true if the length is more than 8 > and it doesn't' contain the word password.
 * 
 */
let isValidPassword = function(password){
    return password.length >= 8 && !password.includes('password')
    // if(password.length >= 8 && !password.includes('password')){
    //     return true;
    // }else{
    //     return false;
    // }
}
console.log(isValidPassword('asdp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfdkddkdkpassword'))