let temp = 55;

//Logical And operator

if(temp >=60 && temp <= 90){
    console.log('It is pretty nice out');
}else if(temp <= 0 || temp >= 120){
    console.log('Do not go outside');
}else{
    console.log('Eh. Do what you want')
}

//Challenge area
let isGuestOneVegan = false;
let isGuestTwoVegan = false;

//Are both vegan? Only offer up vegan dish
//At least one guest is vegan? Make sure to offer up some vegan food
//Else, Offer anything on the menu
if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up vegan dish')
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan option');
}else{
    console.log('Offer anything on the menu')
}