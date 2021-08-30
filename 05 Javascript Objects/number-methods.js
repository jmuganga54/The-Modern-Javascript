let num = 103.941;
console.log(num.toFixed(2))

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num))

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

//challenge area.
//the function is going to take in the person's guess a single argument and it's going to generate a random number in a given range to see if it it correct

let makeGuess = function (userGuess) {
    let min = 0;
    let max = 1;

    let randomNum = Math.floor(Math.random() *(max - min + 1)) + min;

    if(userGuess === randomNum){
        return true;
    }else{
        return false;
    }
}
console.log(makeGuess(1));