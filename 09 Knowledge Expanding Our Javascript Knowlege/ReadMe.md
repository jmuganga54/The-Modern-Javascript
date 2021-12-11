## Topic
In these section 9 we are going to get back to the fundamentals of javascript by exploring some brand new language features.

> There are still features of the language we have not talked about yest so we're going to use this section as a change to cover quite a few of those.That means we are going to go back to the old system of creating scripts on our machine and running them from the terminal as we explore these new features. But since we already have web application in place we're going to integrate these features into those apps into both Todo and note taking applications.

> All of the features that we're going to cover in this section are essentials for clean modern Javascript code.

We're going to talk about things like Arrow functions a different way to create functions and we're going to talk about how we can recover from errors that might occur in our program.
## Keywords & Notes

### Arrow Functions
`Arrow Function` is an alternative way to create a function in javascript and it comes with a special syntax making it a great candidate for a lot of situations where you have a simple one line functions.

```
const square = (num)=>{
    return num * num
}
console.log(square(5));

//Expected output: 25
```
> One of the greatest features of Arrow function is known as it's `shorthand syntax`.This is a very different way to define the function body. And  it's something that we can't do with regular functions.

The above function can be written in a shorter way using an Arrow Function, see the example below.

```
const square = (num) => num * num
```

The use of arrow function, more example
```
const people = [{
    name: 'Andrew',
    age: 27
},{
    name: 'Vikram',
    age: 31
},{
    name: 'Jess',
    age: 22
}]

const under30 = people.filter(function(person){
    return person.age <30
})

const peopleUnder30 = people.filter(person => person.age < 30)

console.log(under30)
console.log(peopleUnder30);

//Expected output:
[ { name: 'Andrew', age: 27 }, { name: 'Jess', age: 22 } ]
[ { name: 'Andrew', age: 27 }, { name: 'Jess', age: 22 } ]
```
Now I understand that at first the single line is going to be harder to read and write but I promise, that's just a temporary setback.

Once you get used to it you're going to be able to read and write much faster than you would have with the regular function syntax.

### Arrow Function Part II
In the last section we learned about the irregular arrow function syntax as well as it's shorthand syntax companion.

> In this section we are going to talk about some of the more subtle difference between arrow functions and regular functions.

```
const add = function(a,b){
  return arguments[0] + arguments[1]
}
console.log(add(11,22,33,44))

//Expected output: 33
```

So arguments isn't particularly useful but it does exist there are some situation where you do find yourself using it. Now it's important to note arguments only exists in regular functions, it is not bound.There is no local variable in your arrow functions.

```
const add = ()=>{
  return arguments[0] + arguments[1]
}
console.log(add(11,22,33,44))

//Expected output: This will throw an error
```

> The other difference between arrow functions and regular function is that arrow function don't bind their `this ` value. Meaning they're bad candidates for most methods.

```
const car = {
    color: 'Red',
    getSummary: () => {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())

//Expected output: The car is undefined
```
In arrow function `this` is not bound. `The car is undefined` it is trying to access something that does not exist.So when we are creating methods function on object properties we want to stick with regular functions as opposed to arrow functions.They're bad candidates for situation like that.

> Now there is still an alternative way to defined your regular function on an object.This is using the `method definition syntax` and all we do is we remove the function keyword.

```
const car = {
    color: 'Red',
    getSummary(){
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())

//Expected output:The are is Red
```
> Those are the main difference between regular function and arrow functions, arrow functions don't bind `arguments`, they don't bind `this` and arrow function come with that advanced shorthand syntax.

So in general I first write all of my functions as arrow function that's my personal preference if can convert it to the shorthand syntax I do.Now if I need a feature of a regular function like accessing `this` or `arguments` I will use the regular function syntax but I default to the arrow function syntax.

### Conditional(Ternary) Operator
In this section we are going to learn about the conditional operator also referred as ternary operator.

> It is not a complete replacement for the if statement. Almost all of our statements are going to stay as they are but it is a nice little shorthand for some specific cases.

```
const myAge = 27
let message

if(myAge >= 18){
    message = 'You can vote!'
}else{
    message = "You cannot vote."
}

console.log(message)

#Expected output: You can vote!
```

The above code can be written using ternary operator, or conditional operator, see below

```
const myAge = 27

const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'

console.log(message)

#Expected output: You can vote!
```

> Another example using the ternary operator or conditional operator

```
const myAge = 20

const showPage = () => 'Show the page'
    
const showErrorPage = () => 'Showing the error page'

 const message = myAge >= 21 ? showPage() : showErrorPage()

 console.log(message)
```

### Truthy and Falsy Values
> In this section we are going to learn about truth and falsy values in javascript.

Now I said truthy and falsy not true and false.So don't mess around with all of this.

```
const products = [{
    name: 'computer Science'
}]
const product = products[0]

//Truthy - values that resolves to true in boolean context
//Falsy - values that resolve to false in boolean context

//Falsy values - false, 0, empty string(''), null, undefined, NaN

if(product){
    console.log('Product found')
}else{
    console.log('Product not found')
}
```


Being able to take advantage of the Truthy and falsy nature of javascript is going to allow you to clean up your code and use these techniques that everyone out there is using.If you read javascript code written by someone else you're going to see them taking advantage of truthy and false values throughout all of their conditions.

> We can use them in our `if conditions`. We could aslo use them in our `ternary operators`. So let's go ahead and recreate the behavior we had at the beginning of the program.

Now being able to use truthy and falsy values is one thing but what I do want to do is take some time to actually integrate them into both of our applications because there are actually quite a few situations where we can take advantages of this behavior. 

> So all of the functionality of the application is still in place with the changes we made. So truthy and falsy is a nice little way to improve our code. If you ever forget what values are truthy and what values are falsy just look at this list.

### Type Coercion
> This is actually part of a bigger language feature called type coercion.This is allowing us to take a value of one type and in a specific context automatically translate it over to a values of a different type.

```
```

For example here we take an object of undefined and we coerce it into a boolean values either true or false.Now when it comes to truthy and falsy. This is the one situation where type coercion is actually what we want.

```
console.log('5' + 5)

//Expected out put: 55
```
So here we are trying to use the plus operator with two different types a string and a number.So we probably have a few questions.First up is this program going to crash or is it going to actually run through if it runs through, what values are we going to get.

So this is an example of javascript not being 100% sure what it should be doing.So it takes its best guess at what behavior you want and now type coercion in this fashion is typically something we want to avoid because we're going to get extremely inconsistent behavior.

`For Example`
```
console.log('5' - 5)
Expected output: 0
```
This time though instead of using the plus sign we'll use the minus sign then we're going to set up the number five afterwards.So the only difference is that I swapped out the plus sign for the minus sign.

Now once again we have to guess in which context is this gong to operate.Is it going to operate in the string context or the number context.

> Well there actually is no situation where we subtracted two string like this with the plus sign. We did have string concatenation with the minus sign, we do not.So this is inconsistent behavior I was talking about.

This is type coercion and as we saw it can be very useful when trying to convert things over a boolean.But when it comes to our other type it's typically something we want to avoid.

```
//Type Coercion - a string, a number, a boolean
console.log('5' + 5)
console.log('5' - 5)

//Expected output: 
55
0
```

```
console.log(`5` == 5)
console.log(`5` === 5)

//Expected output:
true
false
```
This is why we're always going to be using strict equality with three equal signs which what we've been using so far throughout the course. 

> One thing we're probably going to want to add to our code is a bit of type checking if a values comes from somewhere else in the code.We might want to make sure it's of the type we expect before we start using it.

For example if we are expecting a number we might want to confirm it's a number before we start performing math operations on it because as we can see we might get a result even though it's not the correct one.To check the type of a given value, we can use the type of operator.

```
const type = typeof {}
console.log(type)

//Expected output: object
```
We're not going to use `typeof` a whole lot but It's important to know that it exists.It's going to help us better manage the types inside of our program.

```
const value = true + 12
const type = typeof value
console.log(type)
console.log(value)

//Expected output:
number
13
```
> When we convert a boolean to a number, which is exactly what we're doing at the above.What happens it actually converts true to the number 1 and FALSE to the number 0. So we see 13 with true.

> If I switch this over to false I would expect to see one lat and if I rerun the script that's exactly we will get.

```
const value = false + 12
const type = typeof value
console.log(type)
console.log(value)

//Expected output:
number
12
```

### Catching and Throwing Errors
```
const getTip = (amount) => {
    if(typeof amount === 'number'){
        return amount * .25;

    }else{
        throw 'Argument must be a number'
    }
}
const result = getTip(true)
console.log(result)

//Expected output:
Error message
throw 'Argument must be a number'

```

> So using a combination of `typeof and throw`. We're going to be able to add type checking into our functions.

```
const getTip = (amount) => {
    if(typeof amount === 'number'){
        return amount * .25;

    }else{
        throw Error('Argument must be a number')
    }
}
const result = getTip(true)
console.log(result)
```

So by throwing a real error we're getting a bit more context about why and where that one come from.So anytime we do throw an error we're going to be using the syntax up above.

Now just because a program throws an error doesn't mean that we have to let our program crash and burn like we're already doing.Not all errors require a code change to be fixed.

> Think of your phone for example if your phone can't connect to the telephone company.Then what's going to happen when you try to make a phone call.It's going to throw an error saying you can't make a call right now. You don't have a signal.The lack of signal has nothing to do with the phone's software itself. So what we need in our software is a way to recover from errors gracefully.Doing something as opposed to letting things just explode.

To do this we use the `try catch statement`.
`Syntax- boiler plate`
```
try{

}catch(e){

}
```
`Example`
```
const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25;

    } else {
        throw Error('Argument must be a number')
    }
}
try {
    const result = getTip('test')
    console.log(result)

} catch (e) {
     console.log('Catch block is running')
}

//Expected output:
Catch block is running
```

### Handling Application Errors
> I said that just because a program throws an error does not mean any code in the program needs to change.And this is true when we're relying on external things whether it's an external data source or some sort of external server or network.

### Working in Strict Mode
> In this section we are going to learn about `Strict Mode` which is a different mode in which we can run our Javascript.

And when we opt in to this new mode we are opting into a slightly better version of the language or some of those easy to fall into traps and weird language quirks are tweaked making it a lot harder to mess up.

So essentially strict mode makes it easier for us to write cleaner more concise less error prone code.Let's mess around with this by creating a few examples up above we're going to see how our code would operate as of now it would change in strict mode to start.

```
const processData = () => {
    data = '1230987234'
}
processData()
console.log(data)

#Expected output:
1230987234
```
> Running the above code, it will be executed.Now what do we know about scope in javascript, well we know that if we call `processData()` it is going to run the function. 

The function is going to try to assign the variable data this values the string it's going to first look for data in the local scope.It's not going to find it. So it's going to go up to the global scope. It's not going to find it there. So what is it going to do.

It's actually going to create it.It's going to create a data variable in that global scope which means that after we run `processData` function, we can access the data using `console.log(data)`

> Now when we talked about this previously in the course I called this a `leaked global` because of a typo in code, we are accidentally creating a global variable where we may have intended to assign a value to a new variable or define a local one. So this code runs without letting you know that anything weird happened in `regular mode`.

Let's go ahead and enable strict mode and see how this code would change without actually changing any of its line, to enable `strict mode` at very top of our file all we're going to do is create a string so we can create some single or double quotes and we're going to type `use strict`, when we do this the browser is going to parse this file it's going to see the ue strict declaration.

```
'use strict'
const processData = () => {
    data = '1230987234'
}
processData()
console.log(data)

#Expected output:
Uncaught ReferenceError: data is not defined
```

> So the above code would have run causing `unexpected behavior` in regular mode but when we enable `strict mode` the javascript processor is actually going to catch this making it way easier for ust to fix our errors before they become bugs in production before they actually mess up a suer's experience delete data or do something else that we don't want to have happen.

* The first thing we get when we `use strict` mode we're not going to be able to leak global variables anymore which is a good thing.

* Another useful features of strict mode is that it makes our code a bit more future proof.So thing about the reserved keywords in the language. We have things like `let` and `const` these can't be used for variable names for example.Well there are other thing that are coming to Javascript in the future but they're not quite here yet, with strict mode through we can reserve those `identifiers`. Making sure they're not used in our program to check this out.

```
//if we disable strict mode
const public = true;
```

If I runt the code as it currently stand we aren't going to get any errors inside of the console.`public` is not  `reserved keyword.`

```
//enable strict mode
'use strict'
const public = true

//Expected output:
Uncaught SyntaxError: Unexpected strict mode reserved word
```

But if we enable strict mode with `use strict` we're going to see that we now do get an error over in console `public is going to be reserved keyword in the future`.And when we use strict mode we get that information syntax error `public is a reserved identifier`.So once we see this we can say okay this is going to be a reserved keyword in the future I best not.

> Use strict helps us fix code today and it also helps us create code that's going to run better tomorrow.