//Multiple arguments
let add = function (a, b) {
    return a + b;
}

let result = add(10, 10);
console.log(result)

//Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score;
    return `Name: ${name} - Score: ${score}`;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

//Challenge Area
//A 25% top on $40 would be $10
//total, tipPercent= 0.20
let calculateTip = function (totalBill, tipPercent = 0.2) {
    let percent = tipPercent *100;
    let tip = totalBill * tipPercent;
    // return totalBill * tipPercent;
    return `A ${tip}% tip on $${totalBill} total would be ${percent}`
}

let tip = calculateTip(50, .2);

console.log(tip)

let name = 'Andrew'
let age = 12;
console.log(`Hey, my name ${name} am ${age} years old`)