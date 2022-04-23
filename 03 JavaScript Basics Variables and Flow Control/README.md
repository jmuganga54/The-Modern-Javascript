## Topic
In this section, you're going to learn the very basics of Javascript. We'll explore the Javascript syntax and some of the core building blocks that Javascript provides. But the end of this section you'll be able to create basic Javascript programs!

* Strings and Variables
* Numbers
* More on Variables
* Building a Temperature Converter
* Booleans and Comparison Operators
* If Statements
* Advanced If Statements
* Logical "And" and "Or" Operators
* Variable Scope: Part I
* Variable Scope: Part II


## keywords & Notes
### [Storing the information you need - Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#what_is_a_variable)

### [Strings and Variable](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)

`Variable` is a way to store values for later.We might want to store a value and access it later in the program.

To create a variable in javascript we do have to follow the javascript syntax of the language. Syntax is just the rules that govern what you can type in a javascript file.

> For now though we're going to start by creating a very simple variable and the first thing we have to do is type `let`

Now let is what's is know as a reserved keyword in javascript.It's part of the language and it has a special meaning to it.When javascript it runs through our files and sees `let` it's going to know that we're trying to create a variable

[Declaring a variable](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#declaring_a_variable)
```
let name = 'Joseph';
```
> Now when you do have a variable name with multiple words it's common convention to use what's known as _camel casing_. That's where we start off the first letter of each word with a capital letter except for the first word.

[Initializing a variable](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#initializing_a_variable)
```
let firstName = 'Joseph';
```

> If you have two string and you want to combine them you use the `plus(+)` operator.This is a (+) sign.

```
let firstName = 'Joseph';
let lastName = 'Muganga'
let fullName = firstName + ' ' + lastName;

console.log(fullName);

//Expected output:
Joseph Muganga
```

> Semi-colons as we've just seen are completely optional.

[Useful string methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)

### [Number]()
In this section  you are going to learn about numbers in javascript and this is going to be our second data type.

> Data type refers to the different types of data you can work with in a given language.We already learned about the string type.

Now right here for values instead of using two quotes, to create as string we just type out the number
```
let num = 5.5;
```
The real usefulness of numbers comes when you can actually perform all of those math operation on them, and all of the core operation are built into the javascript language.For example addition if I wanted to add something on right here I could add on to.

```
let num = 5.5 + 2;
console.log(num)//7.5
```
#### [Operator precedence](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#operator_precedence)

We have to remember that just like in real life on pencil and paper the order of operation takes into effect in javascript as well.

> This is because of operator precedence — some operators are applied before others when calculating the result of a calculation (referred to as an expression, in programming).  Operator precedence in JavaScript is the same as is taught in math classes in school — `Multiply and divide` are always done `first`, then `add and subtract` (the calculation is always `evaluated` from `left to right`).

```
let x = 11;

let num = (x+1) *2;

console.log(num)

//Expected output: 24
```
When you add `parentheses` it means, perform this operation first then use the result to to the rest.

> `Comments in Javascript`:  comments can be single-line: starting with // and multiline: /* ... */

[Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments)


[Basic math in JavaScript — numbers and operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)

### More on Variables
```
let petName = 'Hal'
let petName = 'Spot'
```
1. You can't define a variable more than ones.
You can't define a variable that you've already defined. Here I've used twice to defined `petName` twice.

So while I can't use let twice to define a variable twice, it's Ok to reassign a variable value later.

```
let petName = 'Hal'
petName = 'Spot'
console.log(petName)

//Expected output: Hal Spot
```
2. There are rules related o the variable names
[variable naming rules](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#an_aside_on_variable_naming_rules)

3.Variable names cannot be reserved keywords. Example let
```
let let = 12 // this is not valid
```
### Building temperature conversion 
```
let fahrenheit = 32;

//calculate celsius and store in celsius variable
let celsius = (fahrenheit - 32) * (5 / 9)
//print that value
console.log(celsius)

//calculate kelvins value and store in variable
let kelvin = (fahrenheit + 459.67) * (5 / 9)
//print that value
console.log(kelvin);
```

### Booleans and Comparison Operators
Boolean represents a logical entity and can have two values: true and false

What if we wanted to do something only under a certain condition.For example what if we wanted to print a message that it's freezing outside but only when the temperature is actually 32 degrees or lower for Celsius that would be zero degrees or lower.

> Note: You may see some people using `==` and `!=` in their tests for equality and non-equality. These are valid operators in JavaScript, but they differ from `===/!==`. The former versions test whether the values are the same but not whether the values data types are the same. The latter, strict versions test the equality of both the values and their data types. The strict versions tend to result in fewer errors, so we recommend you use them.

```
//Create a get variable set to your age
let age = 70;

//calculate is child - if they are 7 or under
let isChild = age <= 7;

//Calculate is senior if the are 65 or older
let isSenior = age>=65;

//Print is child value
console.log(isChild);

//Print is senior value
console.log(isSenior);
```

[Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)

[Comparison operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#comparison_operators)

### If statements
if statement which is going to allow you to conditionally run some code.So if some condition execute some code and get to kick things off.

```
//Create a get variable set to your age
let age = 70;

//if 7 or under print message about child pricing
if(age <= 7){
    console.log('You are a child you deserve a discount')
}

//if 65 or older print message about senior discount
if(age >=65){
    console.log('You are a Senior, you deserve a discount')
```

### [Advanced if Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
The `if` statement `executes` a statement if a specified condition is `truthy`. If the condition is falsy, another statement can be executed.

```
function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(-5));

// Expected output: "NOT positive"

```

So using the optional Else. Else if clauses we can create more complex conditionals in our programs.
```
let isAccountLocked = false;
let userRole = 'admin';

if(isAccountLocked){
    console.log('is account locked')
}else if(userRole === 'admin'){
    console.log('Welcome Admin')
}else{
    console.log('welcome')
}
```

### Logical And and Or Operator
[Logical AND(&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
> The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true. 

```
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// Expected output: false

```
[Logical OR (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
> The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true.
```
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// expected output: true
```

Challenge
```
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
```
### Variable Scope Part I
If a `variable` or other expression is not `"in the current scope,"` then it is `unavailable for use`.

The scope of a variable defines where it's accessible in your program based off of where it was created.

So just because we create a variable in one place in our program doesn't mean it's going to be accessible everywhere in the script.

> Lexical Scope(Static Scope) This is sometimes refereed to as static scoping and this is the idea that a variable defined in one part of your program might not be accessible everywhere else in your program and that's exactly what we are seeing below

```
let varOne = 'varOne'

if(true){
    console.log((varOne))
    let varTwo = 'varTwo'
    console.log(varTwo)
}
console.log(varTwo)

//EXpected output:
varOne
varTwo
varTwo is not defined
```
The thing we want to pay attention to when it comes to scoping is the code blocks in our script.So the only thing we have right now that creates a code block is the if statement.There are other structures in the language that will also create code blocks but we'll get to those later like function. 

> There are two types of scope, global scope and local scope.`Global scope` contain all of the things defined outside of all code blocks.`Local scope` theses are things define inside a code block.

In a scope you can access variables defined in that scope, or in any parent/ancestor scope

Global scope on below code (varOne)
    Local scope on below code (varTwo)


```
let varOne = 'varOne' //Global Scope

if(true){
    console.log((varOne))
    let varTwo = 'varTwo' //local Scope
    console.log(varTwo)
}
console.log(varTwo)
```



> A function serves as a `closure` in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:

```
function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x);  

//Expected output: return an error
```

> However, the following code is valid due to the variable being declared outside the function, making it global:

```
var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);
```

[Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

### Variable Scope II
Variable shadowing it's when a variable in a local scope uses it's value instead of a variable in a parent scope.So local variable value is shadowing over the parents basically hiding it from existence.

It is important to know because if you don't know about that you might think it's illegal to define two names like this(below), that's not the case as long as they are in different `scopes` which is indeed true.

```
//Global (name)
    //local(name)
        //Local
    //Local
let name = 'Joseph'

if(true){
    let name = 'Mike'
    if(true){
        console.log(name)
    }
}
if(true){

}

//Expected out : Mike
```
> `Leaked global` when we assign a value to a variable but that variable was never explicitly defined.
```
//let name = 'Joseph'

if(true){
    //let name = 'Mike'
    if(true){
        name = 'Jen'
        console.log(name)
    }
}
if(true){
    console.log(name)

}
```

## Summary
In this section we learned all about variable strings, booleans and numbers. We also learned about flow control how to control the flow in our application using if statements so we can run one block of code and not another block of code. Also we learned about comparison operators in our logic and or operators allowing us to set up more complex real world conditional checks.
