/**
 * === - equality operator
 * !== - no equal operator
 * < - less than operator
 * > - greater than operator
 * <= - less than or equal to operator
 * >= -greater than or equal to operator
 */
let temp = 31;
let isFreezing = temp === 32;

if(temp <= 32){
    console.log('It is freezing outside')
}

if(temp >= 110){
    console.log('It is very hot outside')
}
//Challenge area
//If you're under seven we'll call you a child and will say that you can get in at a discount

//If you're over 65 will say you're a senior and you can also get in at a discount and everyone else will get blanketed in some sort of standard rate.

//Create a get variable set to your age
let age = 5;

//if 7 or under print message about child pricing
if(age <= 7){
    console.log('You are a child you deserve a discount')
}

//if 65 or older print message about senior discount
if(age >=65){
    console.log('You are a Senior, you deserve a discount')
}



