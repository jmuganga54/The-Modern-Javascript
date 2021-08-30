## Topics
> In this section we are going to learn `Objects in Javascript` this is good because `Objects` are essential for javascript development.An object allows us to store related pieces of information in a single central location and that's good because all the apps we build are going to have related piece of information.

Think about a note taking application what really makes up a note.It has a title and body. And those are both strings.So we have these two strings and we want to store them together to represents a note as a whole with objects we can model other things like users. A user is the combination of an email, a password, a name and anything else we might be able to come up with like our age or a profile picture.

> We could also use objects to model things from the real world like a book. A book has a page count, a title, and author the publisher. We store all of these pieces of information together and we get everything we need to represent the book as a whole. 

## Keywords && Notes
### Objects Basics
Syntax for creating and working with objects in Javascript.As we mentioned we use `object` to store `related pieces of information` in a single place.

This allows us to model things from the real world like books cars or people. For a car we have a make, a model, a color, a year, a VIN number as well as other piece of information. For a book we have a title, author and page count. We can also model things from the virtual world a video game has things like the title, the publisher, the price all sorts of information along those lines.

> The important thing to note is that it's all related to a single entity.We can use an object to describe a car or a person by storing all of the pice of information that make  that thing up.
```
//Define an object and assign values to object properties
let myBook = {
    title:'1984',
    author:'George Orwell',
    pageCount: 326
}
console.log(myBook);

//Expected output: {title:'1984' author:'George Orwell', pageCount: 326}
```
After curly braces, the object contain various properties,so when we have a object we have properties. These are piece of data, we have the title property, the author property, we have the page count property. Property just describe a piece of data stored on an object. This properties have values.

> How to get a single value off of an object. For example If I want to print a message about this book.How do I pull out the individual piece of information, how do i get one of the object properties.This is done via `dot notation` and it's called `dot notation` because it uses the `dot key` on your keyword.

```
//Reding properties off an object
let myBook = {
    title:'1984',
    author:'George Orwell',
    pageCount: 326
}
console.log(``${myBook.title} by ${myBook.author}``);

//Expected output: 1984 by George Orwell
```

We can also `change object's properties`.So we want to change the title of the book to a different George Orwell book like Animal Farm.To do this we also use `dot notation` but in a slightly different way.

```
let myBook = {
    title:'1984',
    author:'George Orwell',
    pageCount: 326
}
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`);

//Expected output: Animal Farm by George Orwell
```
The essential thing which we are going to do with objects are creating them.We're going to be reading property values and we're going to be changing property values when we put all this together we have a really nice way to create models of real world things.In this case a model of a book.

### Using objects with functions
> Know that you know the basics of working with objects and their properties in this section we're going to figure out how objects works with functions. We're going to explore how we can pass objects in as function arguments and we're going to figure out how we can return objects from our functions.


```
//Passing an object in a function 
let myBook = {
    title:'1984',
    author: 'George Orwell',
    pageCount: 326
}
let otherBook = {
    title:'A People History',
    author: 'Howard Zinn',
    pageCount:723
}

let getSummary = function (book){
    console.log(`${book.title} by ${book.author}`);

}
getSummary(myBook);
getSummary(otherBook);

//Expected Output:
1984 by George Orwell
A People History by Howard Zinn
```
This is fantastic we were able to use this one line `console.log(`${book.title} by ${book.author}`);` and do something for every single book that we have in a program.

Now that you know how to pass an object into a function let's figure out how we can return an object from a function.The reason why you may want to do that is to be able to return multiple values.Right now all of our returns statement return just a single thing.I I want to return two strings for example or a string and three numbers there's no good way to do. But if we return an object we can just add three properties onto it. That's is going to allow us to send back as many values as we like.

```
//Passing return objects in a function.
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
let otherBook = {
    title: 'A People History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}
let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary)
```
### Object Reference
In this section I want to take a few minutes to talk about what happens when we pass objects around our program.

> When we pass an object as a function argument like we do in a code below.What we get as that argument value isn't just a clone of the object with the exact same properties and values. It's actually a reference to that exact same object in memory.
```
let myAccount = {
    name:'Joseph Muganga',
    Expenses: 0,
    income: 0
}
let addExpenses = function(account, amount){
    account.Expenses = account.Expenses + amount;
    console.log(account);
}

addExpenses(myAccount, 2.50)
console.log(myAccount);

Expected output:
{ name: 'Joseph Muganga', Expenses: 2.5, income: 0 }
{ name: 'Joseph Muganga', Expenses: 2.5, income: 0 }

```
So somewhere on your machine in your computer's RAM  we have this object stored. `myAccount` is a pointer to this object  when we pass `myAccount` into `addExpense`, `account` become a pointer to that object as well.And this explains why changing `account` not only changes `account` as we probably expected but it also changes `myAccount` which we might not have expected.

> This is why we get an expenses value of 2.5 for each, changing one is just like changing the other since they're both pointing to the same object in memory.

```
let myAccount = {
    name: 'Joseph Muganga',
    Expenses: 0,
    income: 0
}
let addExpenses = function (account, amount) {
    account = {}
    //account.Expenses = account.Expenses + amount;
    console.log(account);
}

addExpenses(myAccount, 2.50)
console.log(myAccount);

Expected output:
{}
{ name: 'Joseph Muganga', Expenses: 0, income: 0 }

```

So when we pass an object into a function we can manipulate it's properties, if we manipulate it's properties or manipulating the properties of the object originally passed in.

If we assign a new values to that argument as the code above, we break this binding completely. Now `account` does not point to the same thing that my account did.So I can't use the assignment operator in `account` to clear `myAccount` or set it to something new like the number one. This is not going to work.

It's only we can manipulate the properties of the object.Do we see the changes reflected in both.

### Build an Expense Tracker
In this section we're going to be adding three, new function to our little expense manager on `object-references.js`.

```
let myAccount = {
    name: 'Joseph Muganga',
    Expenses: 0,
    income: 0
}
let addExpense = function (account, amount) {
    account.Expenses = account.Expenses + amount;
}

//addIncome
/**
 * This function is going to take the account to manipulate  which account we trying to add income for.
 * And is going to take the amount of income we're trying to add.
 */
let addIncome = function (account,amountIncome){
    account.income = account.income + amountIncome;
}


//resetAccount
/**
 * This function is going to reset the expenses and income for an account to zero.
 * So it's still needed to know which account to change but that's the only argument it requires since we're going to use the static zero for the values for both properties.
 */
let resetAccount = function(account){
    account.Expenses = 0;
    account.income = 0;
}

//getAccountSummary
/**
 * This is going to print a summary of the account that includes the current account balance as well as total in expenses and income.
 * Account for Joseph Muganga has $9000. $100 in income. $100 in expenses.
 * You can return the string as the return value for get a cap summary and then when you actually use it you can print it to the screen using console dot lock.
 */
let getAccountSummary = function(account){
    let accountBalance = account.income - account.Expenses;
    return (`${account.name} has $${accountBalance}. $${account.income} in income. $${account.Expenses} in expenses.`)
}

addIncome(myAccount,2000)
addExpense(myAccount,2.50)
addExpense(myAccount,160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

Expected output:
Joseph Muganga has $1837.5. $2000 in income. $162.5 in expenses.
Joseph Muganga has $0. $0 in income. $0 in expenses.
```

### Methods
All the objects we have created so far in this section have had pretty standard property values we've added on things like strings numbers and booleans.But we can actually add functions as property values as well.

> We're going to explore exactly how we do that and some additional features given to us when we do. 

`What is a Method?`
A `method` is nothing than an object property whose value is a function.
```
let restaurant = {
    name:'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
     this
      return true;
    }
}

```

> `So what's interesting about putting a function on an object?`. What's interesting is that you get access to that object properties right inside of the function.That means we can access `name`, `guestCapacity` and `guestCount` from inside of this function.That what is going to allow us do things, like run our little calculation, 

Access the object properties we use what's is known as the `this` keyword that `this` keyword is a source of a ton of confusion for new developers.It's a place where a lot of people get tripped up.

So we're going to break it down into a way that's easy to understand 

Inside of our methods we have access to `this`, code above.`this` references the object the methods is defined on. In this case we have our method `checkAvailability:` which is within `restaurant object`, object within which the method is defined. So `this` refers to the object `restaurant`.

Now that means we should be able to `console.log(this)` to see the object with all of it properties.
```
let restaurant = {
    name:'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
      console.log(this)
      return true;
    }
}
let status = restaurant.checkAvailability(20);
console.log(status);

Expected output:
{
  name: 'ASB',
  guestCapacity: 45,
  guestCount: 0,
  checkAvailability: [Function: checkAvailability]
}
true
```
That's all we have to worry about related to `this` at this moment.It's a way to access our object properties inside of a method.So we can access for example  ``this.guestCapacity` to get the value of guestCapacity property.

```
let restaurant = {
    name:'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
      console.log(this.guestCapacity);
      return true;
    }
}
let status = restaurant.checkAvailability(20);
console.log(status);

Expected output:
75
true
```

So using `this` we're going to be able to get `guestCapacity` and the `guestCount` and actually figure out if we have enough seats available.
```
let restaurant = {
    name:'ASB',
    guestCapacity: 75,
    guestCount: 73,
    checkAvailability: function(partySize){
      let seatLeft = this.guestCapacity - this.guestCount;
      return partySize <= seatLeft;
}
}
let status = restaurant.checkAvailability(20);
console.log(status);

Expected output:
false
```
So using methods we're going to be able to `add functionality` right on to the object itself.We can get arguments we can return values and we can also use `this` to access properties off of the object, the method is defined on.

> Let's go ahead and reset the guest count to zero because instead of just changing it on the object we're going to change it via a method calls.

```
let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatLeft;
    },
    //SeatParty
    /**
     * Which takes the party size to be seated and adds that on to guest count.
     */
    setParty: function (partySize) {
        this.guestCount = this.guestCount + partySize;

    },
    
    //Remove party
    /**
     * Which would take the part size that's leaving the restaurant and it would remove it from Guest account.
     */
    removeParty: function (peopleLeaving) {
        this.guestCount = this.guestCount - peopleLeaving;
    }
}

restaurant.setParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));

Expected output:
false
true
```

### Exploring String Methods
In this section we're going to continue talking about methods in Javascript.But instead of creating and running methods that we've written. We're going to focus on exploring some methods made available to use by javascript itself.

> So in the last section we created some data, the data model the restaurant and all of the methods we created worked with that restaurant and data.

In this section we're going to explore the string and all of the methods available to us to work with the string data.

Imagine for example we're trying to validate a user's password and we want to make sure that it's length is greater than 8 and that it doesn't contain the world password.Right now we don't know the way to do that but with string method and properties we'll be able to do just and more.

[Function.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
```
let name = 'Joseph Muganga'

//length property
console.log(name.length);

Expected output:
14
14
```
The `.length` return the length of the string.Observe the code above, so using the length property will be able to do things like validate a user's password. Does the password contain nine or more characters for example.

> No with that we've seen one of the properties.Let's explore other methods down below.

*Convert all of the characters to upper case*
[String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
To do this we use the built in method `.toUpperCase()`
```
let name = 'Joseph Muganga'

//length property
console.log(name.toUpperCase());

//Expected output: JOSEPH MUGANGA
```

> This is not a `property` is a `method`.So we have to call it as such and it doesn't take any `arguments`.All it does, is it takes your string, it converts it to uppercase and it returns that as the return value. 

So it's not going to change the name variable.It's just going to give us a new string that we could store or in our case we could just print it to the screen.

> I want to make you aware of where the documentation lives for all of this because it's super important.

Now I believe the documentation is really essential for learning a language.Getting conformable with it is going to allow you to explore all of the features available.But at this point in this course it's also going to open up some question because some thing you'll see in the documentation won't make sense yet since we're not done with the course that we haven't explored all of the features of the language.

> So let' keep that in mind as we explore the documentation.While some things will be clear others will be a little bit blurry to find the documentation for the string.We're going to go over to [Google](https://www.google.com/) and search for [mdn](https://developer.mozilla.org/en-US/) which stands for `Mozilla Developer Network`.It's the best set of documentation for javascript and then I'm going to toss a string on the net and this should get me to the right place.

[String Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

[String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

```
let name = 'Joseph Muganga'

//length property
console.log(name.toLowerCase());

//Expected output: joseph muganga
```
[String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
The `includes()` method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

```
//Include mdethod
let password = 'abcpassword1238'
console.log(password.includes('password'));

//Expected output:true
```

[String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
The `trim()` method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

```
let name = ' Joseph Muganga '


//removing white space
console.log(name)
console.log(name.trim())

//Expected outpu:
    Joseph Muganga
Joseph Muganga
```
> This is really useful when it comes to sanitizing data that users enter.So when a user enters data we want to make sure it is correct. One of the things we'll be doing is removing those white spaces.

## Exploring Numbers method
Now that you've explored the string in some of its methods.Let's take a look at the number and some things that it allows us to do.

> There are infinitely less useful methods available to use.There are just not tht much going on since most of the math operations we do ware done via the operators we already explore.

One great is the two fixed method.This allows us to specify the number of decimal places we would like to preserve.

```
let num = 103.941;
console.log(num.toFixed(2))

//Expected output: 103.94
```

Documentation [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

There is also a math object made availabe to us which has other things that allow us to do things with numbers.

[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

The math global is available to us in our script much like console.We do not have to do anything in order to get access to it.It's provided to us by the language.

So to access `math` we use upper case Math and then we access methods on it like `console.log`.
```
let num = 103.941;
console.log(Math.round(num));

//Expected output: 104
```

`Math.floor()`, this forces us to round down to the nearest integer.

```
let num = 103.941;
console.log(num.toFixed(2))

console.log(Math.floor(num));

//Expected output: 103

```
`Math.ceil(), this forces to round up to the nearest integer.
```
let num = 103.941;
console.log(num.toFixed(2))
console.log(Math.ceil(num))

//Expected output: 103
```

`Math.random()`This is a popular one for generating a random number.

Documentation [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

```
let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

//Expected output: 1 or 0
```
### Constant Variable
In this section I want to wrap up our section on objects by not really talking about object too much.Instead we're going to talk about an alternative way we can define variables in javascript and alternative from what we've been using so far which is the `let` keyword.

Alternative way to define a variable is by using the `const` keyword.

> The only difference between `let` based variables and `const`based variables is that you can't reassign a constant after it has been created.

```
const isRaining = true;
isRaining = false;

console.log(isRaining)

//Expected output: TypeError: Assignment to constant variable.
```

Now you might be wondering why is this useful.It doesn't make much sense to create a variable if we're never going to reassign it.

> So there's a lot of situation in software development we are trying to create a variable and we know we're never going to reassign the value in that case it is best to use a constant over a `let` based variable.Now it's important to remember that this only applies when we're trying to reassign variable value.

Imagine our variable was an object.If you want to change property value of an object define as `const`, this is valid because you are just changing one of the object properties.

> To summaries `Const` based variables cannot have their values reassigned.Everything related to scoping or valid variable naming all of that is identical between the two.

Now at this point people often ask why use `const` at all.We've been able to get by just fine using `let`.Why not continue to just use let throughout the entire course.

> And the answer mostly has to do with `code readability`.It all comes to semantic, it allows us to better describe that a variable is intended to do. 

### Var based variables
```
var firstName = 'Joseph Muganga
```
> For longest time this wa it.  This was the only way we could create variable in javascript using the kewyword `var`.

Why did let and const ever need to get added to the language. 
> And the reason why is that `var` has it's own fair share of quirks and flaws.Making it a less than ideal way to create variables in Javascript.

What I want to talk about now though are the difference between `var`,`const` and `let`. And why `let` should be preferred. 

> The first thing with `var`, that we can't do with `const` and `let `is redeclare a variable that's already been created.

```
var firstName = 'Joseph';
firstName = 'Mike'

var firstName = 'Lizzy'

console.log(firstName)

//Expected output: lizzy
```
And the above can be a pretty big problem when we're creating programs that are significant with lots of different variables.

> It can be very easy to accidentally create a variable that already exists with `let` and `const` javascript, let's you know and it crashed the program so you can change the variable name to something else. With `var` javascript silently accepts what you've done even if it might not be what you wanted to do.

So this is the first reason we want to avoid var.

> The next reason we want to avoid `var` is that `var` is function scoped not `block scoped`.That means thing like if statements which create code blocks, don't actually create a new scope when working with far.

```
if(10 === 10){
    var firstName = 'Joseph'
}
console.log(firstName)

//Expected output: Joseph
```
So on the above code, we get `Joseph` printing so `var` has a function based scope.If we don't create a new function we don't have a new scope since we don't make a function anywhere in this file.Everything is in the exact same scope meaning that we do have access to first name down below.Even though it was defined in the if statement we know that with `const` or `let` this wouldn't work.

> So `const` and `let` are both block scoped. if is a variable is withing `if statement` the creates a new block, so we know that we wouldn't be able to access firsName.

```
if(10 === 10){
    let firstName = 'Joseph'
}
console.log(firstName)

//Expected output:ReferenceError: firstName is not defined
```
I prefer working with block scoped variable as opposed to function scoped variable because it gives me a lot  more flexibility.I'm able to maintain fine grained control over my scope for example if I'm working in an if statement and I want to perform some sort of private calculation inside of there, I can create a variable using `let` or `const` are specific to that local scope.

```
const setName = function(){
    var firstName = 'Joseph'
}
setName();
console.log(firstName);

//Expected output:ReferenceError: firstName is not defined
```

So on the code above, we can see that if we were to call set name this line would indeed run but we're still not going to be able to access that down below because `var` based variable are function scoped.So the only thing that create a new scope is indeed a function.

> We just learned that `var` is functions scoped as opposed to block scoped.

What's interesting and why I want to explore this third difference between the two is what happens if we tried to access a variable before it's been declared to do this.
```
console.log(age);
var age

//Expected output: undefined
```

```
console.log(age);
let age

//Expected output:ReferenceError: Cannot access 'age' before initialization
```

When we create a variable with `var` its declaration gets hoisted to the top of the scope.So in reality the program we're running still looks below.

```var age
console.log(age)
```
Now things get a bit more interesting if we actually assign it a value. So let's keep our console.log as the first line.

```
console.log(age);
var age = 10;

//Expected output: undefined
```
So when we run the above code, we still get `undefined` not `10`. So once agin it is the declaration of the variable that gets `hoisted`.So in reality when we run a script like the above it really looks below

```
var age;
console.log(age);
age = 10

//Expected output:undefined
```
So this is pretty strange behavior that we're seeing with far and it can be really confusing when we're working with variables in our scripts.

> I just want to show you one last strange example of reordering these lines once again.
```
var age = 10;
console.log(age)
var age;

//Expected output: 10
```
So to summarize if we try to access a `VAR` variable before it's declared we get undefined.If we try to access a `let` or `const` variable before it's declared we get a `reference error`.And that is probably the behavior we would expect that's going to allow us to go back find out why we're using variables before we're declaring them and then fix our code to actually work.

## Summary
On this section we have learned Javascript Objects basics, objects with function, object references, methods, exploring string methods, exploring number methods, constant variables and var variable.