## Topic
> In this section we are going to learn about functions in javascript.When we create a function we're creating a little program in our program we could execute that little sub program as many times as we like

This is going to allow us to create reusable code and it's also going to allow us to do some awesome stuff with javascript in the browser.For example if I want to do something when someone clicks a button on the screen I have to create this little function this little sub program that defines what exactly I like to do.

> So function are essential for modern javascript.

## Keywords & notes
[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
Generally speaking, a function is a "subprogram" that can be called by code external (or internal in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function, and the function will return a value.

> Function are little subprograms. It's a little bit of code we can run over and over again.And are three important parts of function.`Function - input(argument), code, output(return value)

To return a value other than the default, a function must have a `return` statement that specifies the value to return. A function without a return statement will return a default value. In the case of a `constructor` called with the `new` keyword, the default value is the value of its this parameter. For all other functions, the default return value is `undefined`.`

### [Defining of Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#defining_functions)

```
function name([param[, param[, ... param]]]) {
   statements
}
```
*name* - The function name

*param* - The name of an argument to be passed to the function

*statements* - The statement comprising the body of the function


Here is an example of an anonymous function expression (the name is not used):
```
var myFunction = function() {
    statements
}
```

It is also possible to provide a name inside the definition in order to create a named function expression:

var myFunction = function namedFunction(){
    statements
}

Defining the function 
```
let greetUser = function () {
    console.log('Welcome user');
}
```
Calling a function
```
greetUser();
```

### Undefined and Null
These two type are undefined and null. Both represent absence of value.
[Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

The global undefined property represents the primitive value undefined. It is one of JavaScript's `primitive types`.

> A variable that has not been assigned a value is of type `undefined`. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not `returned`.

Example is when we create a variable and not assign any value, so the value of that variable will be `undefined`

`Undefined` is used in Javascript to indicate absence of value. 
```
let name;

console.log(name)
//Expected output undefined
```
This is pretty useful because we can actually create an if statement for example and check if a given variable has ever been assigned a value.

```
//undefined for variable
let name

if(name === undefined){
    console.log('Please provide the name')
}else{
    console.log(name)
}

//expected out : undefined
```
```
//Undefined for function arguments
//undefined as function return default value
let square = function (num){
   return num
}

let result = square()
console.log(result);

//Expected out: undefined
```

> Suppose we have created a variable and assign to it a value, but we want to clear this value assigned.Let's say the user resets the form in the browser and they want to start over.How do we clear a variable value.

We can explicitly assign a variable the value of undefined and we do that by setting the variable

```
let age = 27

age = undefined;

console.log(age)

//Expected out: undefined
```

> On the above example I lose that context between the actual javascript language assigning a value and us explicitly assigning a value and this context can be important.

So to preserve that javascript gave us access to a different type that also represents a sort of emptiness.And this is `null` is meant to be assigned like we're doing here so we can set age equal to null instead of undefined.

```
//Null as assigned value
let age = 27

age = null;

console.log(age)

//Expected out: null
```

> So when we see undefined we know it's language default when we see null we know something was explicitly cleared by the developer of the program above.


[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

The value null represents the intentional absence of any object value. It is one of `JavaScript's primitive` values and is treated as falsy for boolean operations.

> The value null is written with a literal: `null`. null is not an identifier for a property of the global object, like `undefined` can be. Instead, null expresses a lack of `identification`, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant.


## Multiple Arguments and Arguments Defaults
So if we want to provide multiple arguments we just create a comma separated list both in the function definition and in call signature where we actually pass value in to the function.

```
//Multiple arguments
let add = function(a, b){
    return a + b;
}

let result = add(10,10);
console.log(result)

//Expected out: 20
```
You can have a function with no arguments and there's no rule for when to use which it's really going to depend on what the function needs.

> Now what I want to do is figure out how we can provide a default value if an argument isn't actually provided.

So by default if we do not provide an argument value nothing is going to show up but we can actually set up default and we do that right here in our function definition.

```
//Default arguments
let getScoreText = function(name = 'Anonymous',score = 0){
    console.log(name)
    console.log(score)
}

getScoreText('Andrew', 100)

//Expected out: Andrew, 100
```
This default value only gets used if there is no provided argument value.

If you want to provide one value and not another value on default,you can use 'undefined'

```
//Default arguments
let getScoreText = function(name = 'Anonymous',score = 0){
  return 'Name: ' + name + ' - Score: ' + score;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);
```

### Function Scope
The Arguments of a function are also bound to local scope even though they're not defined inside the curly braces. 

> Functions function much the same way as if statements when it comes to scope in javascript.Just because I create something in a function doesn't mean it's accessible outside of a function.

Functions create a local scope much like if statements do and function arguments are bound to that newly created local scope.

```
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
```
### [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.

> Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.

As a name suggest it's a way to create a `template string`.So thee are parts of this template string that are going to be static and there are other parts that are going to be dynamic.
> We can create a regular strings using double quotes as well.There is no difference btn the two in javascript

I used single quotes because I don't have to hit the shift key so it's just one less Shift key press.

I just don't recommend using a combination of the two, find which one works best for you and stick with it.

I'm always going to use single quotes for my regular strings.If you open with single or double you have to close it with the same.

To create a template string we use a back tick on your keyboard.This is located to the left of the one key and it looks very similar to a single quote.As you'll notice it is on a slight angle.

```
let name ='Andrew';
console.log(`Hey, my name is Andrew`)
```
For `template string` where we want to inject the value and we use the following syntax.It's a dollar sign($) followed by the opening and closing curly brace inside.

```
let name = 'Andrew'
let age = 12;
console.log(`Hey, my name ${name} am ${age} years old`)
```
> The real advantage of using template string is that syntactical advantage.The difference is that in my opinion and in the opinion of a lot of others, using single or double quote is way harder to read than using template string.Using single quote or double quotes is also way harder to change.

### Build a Grade Calculator
```

let studentScore = function (studentScore, totalScore) {
    let letterGrade = "";
    
    let percentScored = (studentScore / totalScore) * 100;
    if (percentScored >= 90) {
        letterGrade = "A";
    } else if (percentScored >= 80) {
        letterGrade = 'B'
    } else if (percentScored >= 70) {
        letterGrade = 'C';
    } else if (percentScored >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percentScored}%)`
}
let result = studentScore(15,20);
console.log(result);

```








## Summary