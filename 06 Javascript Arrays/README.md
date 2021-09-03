## Topics
> In this section we are going to learn about `Arrays` in javascript. Arrays allows us to store lists of information, you might have a list of string, a list of numbers, a list of objects, a list of whatever we like.

`So why are list so important to software development.`
Well think about any application that you use day to day whether on your computer or you phone or even TV.
When we open up our phones to respond to a text what do we see.We see a list of all of the message we sent back and forth between that friend.

If I go over to the weather app we have a list of locations.If I click one of the location I have a list of temperatures for the week when I turn on my TV  I get a list of all of the app's I have installed.

If I go to the Netflix app I have a list of all the shows available to me.So being comfortable working with list based information is essential to creating these real world applications.

## Keywords & notes
### [Array Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
> In this section we are going to learn the basic syntax for creating an array.And we're going to figure out how we can interact with those array items like reading their values for example.

-`./notes.js` This is were we are building out a little note taking script
-`./todo.js` Practice when building note.js script

Creating an array
```
//Creating an array and assign values to it
const notes = ['Note 1','Note 2','Note 3']
console.log(notes);

//Expected output: ['Note 1', 'Note 2', 'Note 3']
```
One of the most basic things is to figure out how many items are in your array.To do this we can use the `.length` property of an array.
```
const notes = ['Note 1','Note 2','Note 3']
console.log(notes.length);

//Expected output: 3
```
How we can grap an individual item from the list.And this is done via `bracket notation`It's what allows us to grab an individual item from the list and we grab it by its position.So let's say you want to grab the first item in the list and do something with that string.

```
const notes = ['Note 1','Note 2','Note 3']
console.log(notes[0])

//Expected output: Note 1
```

The `index` is nothing more than the order the item comes in the array.Now it's important to not that indexes start at 0 for arrays and this isn't specific to javascript.You're going to see this with pretty much any programming language you use which means that this would.

Now if you access an item by its index and it doesn't exist you're just going to get `undefined` back.
```
const notes = ['Note 1','Note 2','Note 3']
console.log(notes[20])

//Expected output: undefined
```
We can also access items starting at the end of the list and to do this we just perform a little calculation right here inside of the square brackets.

```
const notes = ['Note 1','Note 2','Note 3']

console.log(notes[notes.length-1])

//Expected output: Note 3
```
So this is just the very basics of working with arrays

### Manipulating Arrays with Methods
> In this section we are going to learn how to manipulate your arrays.So we'll figure out how we can add new items remove items or replace existing ones.

And we're really just going to be running through a series of methods on the array.The array has a ton of very useful methods.So we're going to be able to tackle quite a few in just a single video.

`Adding item in an array`

The add an item in an array we use `array push method (.push())`.So push method add somethinng at the end of the array

```
const notes = ['Note 1', 'Note 2', 'Note 3']
notes.push('My new note')
console.log(notes)

//Expected output:[ 'Note 1', 'Note 2', 'Note 3', 'My new note' ]
```
`Remove an item from the array`

We can also remove something from the end.This is done via push his companion is called `pop`[array pop method (.pop())]. The pop method return the removed item.

```
const notes = ['Note 1', 'Note 2', 'Note 3']
notes.pop()
console.log(notes)

//Expected output:'Note 1', 'Note 2']
```
> So the push and pop method focus on manipulating the array from the end.We have two other methods that focus on manipulating the array from the start. This is `shift` and `unshift`

Let's go ahead and explore how both of those work.So the shift method removes the very first item from your array.The shift method return the removed item.

`Remove the first item of an array`
```
const notes = ['Note 1', 'Note 2', 'Note 3']
console.log(notes.shift())
console.log(notes)

//Expected output: 
Note 1
[ 'Note 2', 'Note 3' ]
```
`Adding item on the start of an array can be achieved using unshift() method.`

```
const notes = ['Note 1', 'Note 2', 'Note 3']
notes.unshif('My first Item')
console.log(notes)

//Expected output: ['My first Item','Note 1', 'Note 2', 'Note 3']
```
> You have push and pop for the end of the array and you have shift and unshift for the beginning of an array.

Now aside from manipulating an array from either the beginning or the end.There are other methods that allow us to do something from the middle of the array.

> The one I want to explore which is a little complex is called `splice`.So splice is going to allow us to add elements to the middle of an array or remove elements from anywhere in our list.It takes couple of arguments. So let's go ahead and explore both of those.

The `first arguments` to splice is where you're trying to take the action.So are you trying to start at the second item, the first item, you need to provide the index.

The `second arguments` we provide is the number of item we're interested in removing so we can remove zero, we can remove one and we could remove two.

> [Code Below]For the moment let's just remove a single item.So this has the effect of saying start the index of one and remove one item.

```
const notes = ['Note 1', 'Note 2', 'Note 3']

notes.splice(1,1)
console.log(notes)

//Expected output:[ 'Note 1', 'Note 3' ]
```
 > Now you might be asking why would you evr provide zero as the second argument.This basically does nothing it says hey start at 1 and then delete nothing.
```
splice(1,0)
```
Well that's because the third arguments of splice, if you want to provide it allows you to add an item at that point in time.So let's say I do want to add a new item as the second item in my array.All I do is I provide zero right there.

```
notes.splice(1,0,'This is a new second item')
```

> We can actually also change the value of a given item using using `bracket notation`.

```
const notes = ['Note 1', 'Note 2', 'Note 3']
notes[2] = "This is the new note 3"
console.log(notes)
```
So `spice()` is great when you're trying to remove items.It's also nice when you're trying to remove an item. But if you're just trying to swap out one item for another you can use the basic old bracket notation to get that done.

### Looping over Arrays
Now that we know how to manipulate our arrays I want to talk about something else which is looping over arrays which is run some code for each item in array.

> So imagine if I really do have a list of todo's and I'm trying to print them to the screen I would want to go through the entire list get the text for each one and use console.log to print it or later on use different javascript methods to render it in the browser.Either way I want to go through the list of items running some code for each.This is know as looping and with arrays we have a method that makes a looping over our arrays pretty easy.

The method to get this done is called `forEach()` because we do something for each item in the array.We can access it via `notes.forEach()`
* .forEach() methods takes a single argument and this argument is actually a function. 

So in the past everything we've called a function we've passed in argument values like strings numbers,booleans and objects but we can pass anything in as a function argument including arrays which will see later.

And this case is a function.So what we're going to do is call this method for each and we're going to pass to it as it's one and only arguments a function.Now, there are two ways to get that done.

Now this function itself is what's going to get executed one time for every item in the array.So if I have two items in my array this function will get called twice in my array and if I have 15 items in the array, this function will get called 15 times and we can prove this with a quick console.log.

```
const notes = ['Note 1', 'Note 2', 'Note 3']

notes.forEach(function(){
    console.log(testing 123)
})

Expected output:
testing 123
testing 123
testing 123
```
After running the code above , and when I do the first thing we see is testing 123 is printing three times, why this is because we have three items in our array.So we've never seen something like this before, passing a function into a function, when we do this we're creating what's known as a `callback function`.

`So a callback function is nothing more than a function that is passed to a function.`Now in this particular case you'll notice that we have never call this function `function(){
    console.log(testing 123)
}`directly.Instead we pass it into the forEach API.And in that code that is where it ends up getting caught.

Now in this case this function that we have defined gets called, that we've already proved that we see the message printing three times but it also gets called with some arguments that we can access in our code. We get two arguments.

* The `first arguments` we get is the individual item.So we're running the function three times because we have three different items in the array.We can access the individual item hre which we'll see in just a second.Let's go ahead and do that instead.Right here instead of printing `testing123`.I'm just going to reference the item arguments, let's save the script and run thing form the terminal.

```
const notes = ['Note 1', 'Note 2', 'Note 3']

notes[2] = "This is new the new note 3"
notes.forEach(function(item){
    console.log(item)
   
})

//Expected output:
Note 1
Note 2
Note 3
```

When we run, what I get is three item notes printing, note 1,note 2 and note 3.

We actually get access to that item so we can do something specific to it alongside of the item.

Along side to the item, we also get the `index as the second argument of forEach Function`.This is the position of the item in the list.And we could print that as well.

```
const notes = ['Note 1', 'Note 2', 'Note 3']

notes[2] = "This is new the new note 3"
notes.forEach(function(item,index){
    console.log(index)
    console.log(item)
   
})

//Expected output: 
0
Note 1
1
Note 2
2
Note 3
```
The code above shows the index followed by the individual note.

So using for each we're going to be able to do something meaningful for each item in our array.And this is probably the most common array method that will end up using throughout the course.

The term callback function just allows us to better talk about our program.It's just how when we add a function as an object property we call it a method.You can still call it property and you wouldn't be wrong.The word method is just a bit more descriptive.Same thing with callback function we're still passing in an argument.It just happens to be a function.

Now in this case we saw that our function got called one time for each item in the array and it got called with some arguments.We got the individual item as well as the index.

Now forEach is not the only array method that's goint to use callback as we'll see throughout the section, almost all of them will.

### For loop
In this section we are going to learn about for statement which is an alternative looping mechanism.So it's an alternative to using forEach(), the `for statement` also known as the `for loop` is great because it doesn't require us to have array  of data.

> forEach is array of method so we have to have some sort of array in order to work with forEach, the for Loop, we had a whole lot more flexibility what I'd like to do is mess around with.

Imagine you want to do something three times.Maybe you're trying to print the top three scores for players in your game or maybe you're trying to count to specific number.So let's say I want to print a message three times.

> Now obviously if I only wanted to count to three I could add three console.log() statements in.But now let's say I want to count to 1000.You don't want to add 1000 console.log() statement in.And we also can't use forEach method call unless we had array with a thousand different items.So if we did want to do something like this.

When we want to run a code a specific number of times we don't have a way to get that done without the for statement 

`Syntax of for statment`There are three thing we need to provided when writing for statement.The `first is an initializer`.The second is a `condition` and the third is the final expression.
```
for(let count=0; count<=2; count= count + 1){
    console.log(count)
}
//Expected output:
0
1
2
```
`Using for loop with Array`
So what we're going to do is use the for statement to recreate the functionality from for loop.

```
let todos = ['Reading Book','Learning Javascript','Entering Data','ICF Translation','Learning Python and Django','Learning React Framework']

for(let count = todos.length-1; count > 0; count--){
    console.log(todos[count])
}

//Expected output:
Learning React Framework
Learning Python and Django
ICF Translation
Entering Data
Learning Javascript
```
So when we use for each we have to have an array and we have to count from beginning to end, when we use a for statement we have a bit more flexibility making it a great tool to have it in our tool belts.

> If I have an array and I am counting in order, I like to stick to the forEach method.If I don't have an array or I'm trying to count in a different order I'll use the for statement in this case.

Documentation of for statement: [for statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

### Searching Array
In this section we're going to take a look at how we can see if something exists in an array.Now there are a few different ways we can get this done.And in this section we're going to make the transition from array of strings in both cases to an array of objects because a note isn't just a string a note probably contains other pieces of information we want to model as well like a title and a body.

> Maybe when the note was created who created it all sorts of different information and the same with a todo, a todo is not just a string.It might be assign it to a specific date or a specific user in your application.It might be completed or uncompleted.

So these are all things we want to associate with each item and not just some string data.Before we switch thing up though I do want to explore a couple of features down below.Let's say that we are creating this application and we have our list of notes.And now we decide that we want to find if a note exists or maybe be located so we can do something with it like delete it, the way we get that done is using the indexOf() method.

```
const notes = ['Note 1', 'Note 2', 'Note 3']
console.log(notes.indexOf('Note 2'));

//Expected output: 1
```
The indexOf() return the index or position of the values entered in a method.So if it was the first item, we would get zero back. If it was the second item, we would get one back.And if it doesn't exist at all, we get -1 back.

```
const notes = ['Note 1', 'Note 2', 'Note 3']

//note 2 doesn't exist in an array[with small letter]
console.log(notes.indexOf('note 2'));

//Expected output: -1
```
So when we see -1 from indexOf() we know that the item you searched for was not anywhere in the array.If we get any value greater than -1 including 0 then we know the item is indeed somewhere in the array and we could go ahead and do something like remove it or modify it to fit our needs.

> Now let's go ahead and see how switching things over to an array objects is going to affect this behavior.So up above like I mentioned earlier we're going to have strings as the individual array items.Instead we're going to have objects.

Well we just define new object right here in those square brackets.

```
//Array contain objects (Array of objects)
const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]
```
But when you want to use `indexOf()` to find the position of an empty object in the array above we get -1
```
const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

console.log(indexOf({}))
console.log(notes)

//Expected output: -1
[
 {},
  { title: 'My next trip', body: 'I would like to go to Spain' },
  { title: 'Office modifications', body: 'Get a new seat' }
]
```
But Right above though I do see an empty object.So what exactly is going on here.

> To explore this behavior. The `indexOf()` method works by going through your array from beginning to end and checking if the item is exists in an array, currently looking at equals the item passed into index of using trippe equals(===).If it finds a match it returns that index.If it gets all the way to the end and it doesn't find a match it returns -1 we already saw that.

But what about an empty object equals another empty object.
```
console.log({}==={})

//Expected output: false
```
So when we're comparing two object it doesn't matter if they have the same set of object properties and the same object property values.That does not make two objects equal.What makes two objects equal is `if they're exact same object in memory`.

So let's see how this looks like.
```
let someObject = {};
let otherObject = someObject;
console.log(someObject === otherObject)

//Expected output: true
```
So objects are only equal to other objects.If there are actually the exact same object it does not matter if two separate objects have the same properties with the same property values.

> Now we just prove that is going to break indexOf() for our purpose and I mentioned that array of objects are super popular.So why would this supper popular structure an array of objects not be able to use basic methods like indexOf().Well the truth is we can't use indexOf(). But in the array methods list there are a whole bunch of methods specifically designed for use cases like this.

So let's go ahead and explore an alternative way we can get the index of something in our array.Knowing that something is an object.That's going to be `findIndexOf()`

[Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

Using findIndex(), if this item isn't the thing we're looking for we return false, if it is the thing we're looking for we return true.

So let's imagine I'm trying to find the note where the title is `Habits to work on` because I want to read it or delete it or something along those lines.

```
const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]


const index = notes.findIndex(function(note,index){
   console.log(note)
   return note.title === 'Habits to work on'
})
console.log(index)

//Expected output:
{}
{ title: 'My next trip', body: 'I would like to go to Spain' }
{ title: 'Habits to work on', body: 'Exercise, Eating a bit better' }
2
```

If I have an array of 1000 items and the second item in the list is the one I'm looking for.We don't have to spend the computational power to go through the other nine hundred ninety seven.findIndex() return the first item which match the criteria.

`Moment to recap` In this section we learned about `indexOf()` which uses the triple quality operator to go through our array and find an item, we saw that work with an array of strings because a string like 'X' is indeed equal to another string 'X', this is true with strings, numbers and booleans but it is not true with objects as we saw.So we weren't able to use `indexOf()` to find the item in the array of notes.Instead we used `findIndex()`.Instead of using triple equality on the entire object.We can specify our own search criteria.In this case the search criteria was, does this title match the string , in this case we are able to use the triple of qualities because one string does equal in another.


findIndex() looks for the first match it finds when it finds that it stops running the function which makes this efficient.

### Searching Arrays Part II
Part two on finding things in an array. In the last one we learned about indexOf() and findIndex() we learned that indexOf() always uses triple equals which means that it's not a great fit for arrays of objects which we want to be able to model in real world things.

> So we switched over to findIndex() which allows us to specify our own way to compare two thing in this case we're looking at the titles.

In this section we're going to break this out into a more real world example by creating function that works with our notes.

The code below look for a note with title:`Office modification`

```
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const findNote = function(notes, noteTitle){
    const index = notes.findIndex(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
    return notes[index]
}

const note = findNote(notes, 'Office modifications');
console.log(note)

//Expected output:
{ title: 'Office modifications', body: 'Get a new seat' }
```

.toLowerCase() helps us to perform insensitive search which converts all the title to lowerCase before comparing them.

> To wrap this up there is just one more method I want to explore before closing these section.

This method is called `find()`, in the above case we're using findIndex() to find the index and then we're directly grabbing that item out of the array.There's actually a function that does some of this for us making our life a bit easier in the documentation.

The one which we're looking for is just called `find()`, pretty much function exactly as we set up the findIndex()

[Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

```
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
    const note = notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();})
    return note;
}


const note = findNote(notes, 'office modifications');
console.log(note)

//Expected output: 
{ title: 'Office modifications', body: 'Get a new seat' }
```
> So if you're looking for item directly `find()` is a great choice.If you're looking for the index to do something like remove it by its index the `findIndex()` is a great choice.Both of them are supper supper similar.The only different is what you get back from the method.

Now we can simply this further. We create a variable and then only thing we ever do with it is return it.We could add the return right away(see the code below). The below is our modified version.Now both of those would be considered fine ways to get the job done interms of code quality and performance.I'm just showing you two different ways we can work with our arrays when it comes to finding thing.

```
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();})

}


const note = findNote(notes, 'office modifications');
console.log(note)

//Expected output: 
{ title: 'Office modifications', body: 'Get a new seat' }
```
`Point to note`Arrays are also passed by reference which means that if I pass an array into a function and I make a change to the array I'm going to see it reflected in the original one just like we saw with our objects.

```
//Challenge deleting to todo
let todos = [
    {
        text:'Reading Book',
        completed:false
    },{
        text:'Learning Javascript',
        completed: true
    },{
        text:'Entering Data',
        completed: false
    },{
        text:'ICF Translation',
        completed:true

    },{
        text:'Learning Python and Django',
        completed:false
    },{
        text:'Learning React Framework',
        completed:true
    }
]
//Functiont to delete todo
const deleteTodo = function (todos, todoToDelete){
    let indexTodo = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoToDelete.toLowerCase();
    });

//checking to see if any match found
 if(indexTodo > -1){
        todos.splice(indexTodo,1)
    }else{
        console.log('Todo not found, nothing removed')
    }
}
deleteTodo(todos,'Reading Book')
console.log(todos)

//Expected output:
[
  { text: 'Learning Javascript', completed: true },
  { text: 'Entering Data', completed: false },
  { text: 'ICF Translation', completed: true },
  { text: 'Learning Python and Django', completed: false },
  { text: 'Learning React Framework', completed: true }
]
```

### Filtering Arrays
In the last section we've figured out how to find an individual item in our list.This allowed us to pull back a specific item based off of the title in our notes app and it allowed us to find a specific item and delete it in a todo application.

> Now in these cases we're targeting one item in our array.But what if we wanted to do something a bit different.For example what if I didn't know the exact title for my notes something that's probably the case but I know that I put triple p in it or I know that I put office somewhere in the texts.

Currently we don't have a solution for that.We're going to focus on adding that in this video and the same thing is going to happen in the todo application.

What if we want to get a list of just that todo that haven't been completed.So we know what we actually need to work on.And this concept is called `filtering` we take an existing array and we create a new array with some of the items based of whatever the filter is.

So if I were to filter by items by that haven't been completed. I would get a new array of objects back with just his item and this item if I was creating an email application I could filter by a specific author.

I would go from a list of all my emails to a list of emails just by that person.Now that we have a general idea of what we're working towards. Let's go ahead and actually implement this and we're going to start over in notes as what we're going to do is create a companion 

[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

> Now filter it gives you back this new array. It does not make any changes to notes so I could create a variable to store the return result.

The simple thing at first what we can do inside the filter is just return true.This is going to generate a new array filtered notes.And what is it going to do.It's going to have all of the same items as notes because we consider every single one a match.If I were to return false we would have not notes be considered a match which means that filter nodes wouldn't be undefined.It would actually just be an empty array since there are no matches right here.

> So filter is always going to return an array.It's just whether or not there are any items in that array.

```
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const filteredNotes = notes.filter(function (note) {
    return true;
})

console.log(filteredNotes);

//Expected output:
[
  { title: 'My next trip', body: 'I would like to go to Spain' },
  { title: 'Habits to work on', body: 'Exercise, Eating a bit better' },
  { title: 'Office modifications', body: 'Get a new seat' }
]
```
In the code below, we are searching for an object whose title and body includes certain text in it.For example 'ne', so by using .filter(), array method it will return an array which match the specified condition.

```
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]


const filteredNotes = notes.filter(function (note) {
    let isTitleMatch = note.title.toLowerCase().includes('ne');
    let isBodyMatch = note.body.toLowerCase().includes('ne')
    return isTitleMatch || isBodyMatch;
})

//Expected output:
[
  { title: 'My next trip', body: 'I would like to go to Spain' },
  { title: 'Office modifications', body: 'Get a new seat' }
]
```

We can improve the above code as below, through writing a function and passing arguments instead of passing hard coded values.

```
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]



const findNotes = function(note,query){
    return notes.filter(function (note) {
        let isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        let isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch;
    })

}

console.log(findNotes(notes,'eating'));

//Expected output:
[
  { title: 'Habits to work on', body: 'Exercise, Eating a bit better' }
]
```

The code below uses array method filter to return al the todos which are not completed.
```
let todos = [
    {
        text:'Reading Book',
        completed:false
    },{
        text:'Learning Javascript',
        completed: true
    },{
        text:'Entering Data',
        completed: false
    },{
        text:'ICF Translation',
        completed:true

    },{
        text:'Learning Python and Django',
        completed:false
    },{
        text:'Learning React Framework',
        completed:true
    }
]




const getThingToDo = function(todos){
    return todos.filter(function(todo){
        return !todo.completed;
    })

}
console.log(getThingToDo(todos,))

//Expected output:
[
  { text: 'Reading Book', completed: false },
  { text: 'Entering Data', completed: false },
  { text: 'Learning Python and Django', completed: false }
]
```
### Sorting Arrays
In this section we're going to learn about sorting our arrays.

> Now when it comes to sorting our arrays depending on what data we're storing we want to sort by different things.So for a list of notees we most likely want to sort by title as opposed to by the body.

For a list of todos we probably want to sort by completed status putting one that haven't been completed at the top of the list and ones that have been completed down at the bottom.So with each application the sorting order is really going to depend on the specific data you're working with.

Regardless of how you're trying to sor t thing the method you use is the same.This is the sort array method.So let's take a look at how this works.

[Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

> Now this sort method doesn't require a function as the first argument though it can take one for arrays of simple data types.The sort method is just going to try to sort things alphabetically.

So with string sort() can intuitively figure out that we probably want to sort thing alphabetically as opposed to something else like the lenth of the individual string.

> So if we want to use the sort method with an array of objects, it's not going to let us specify the specific criteria we want to sort() but sort() does take a function which allows us to specify the exact comparing behavior.

Sort() takes an optional compare function and this compare function allows us the developer to define the sort order. 

> So for notes I want to sort alphabetically by the title, for the todos I want to sort the completed items at the bottom of the list and the ones that haven't been completed I want those to appear up at the top

As I mentioned calling sort() method isn't going to do anything for our array of object but we need to provide it a function.This function also know as the compare function allows us to determine if one thing should come after or before another thing.

> Now unlike other arrays methods which had the function called one time for each item, the function sort() actually gets called with two individual items.

So in this case it get called with two notes.When we're creating the sort function or you look at any examples of someone using it they typically called the first one A and the second B.Both of these are going to be some object from the array we're sorting.It is our job to look at A and B figure out which one should come first depending on which one should come first.

> Depending on which one will come first we return one of three values `if A should come first we return -1`. `If A should come after B, so B should come first we return 1`.If both of them don't have their order changed, they're identical in order for example the two todo are already completed, then we could return zero saying that the order doesn't need to be changed up.

So we're going to end up returning one of those three values.The trickier part is to figure out how if one comes before or after another when we're trying to figure out if one shrink comes before or after another string alphabetically.All we do is use the less than and greater than operators.So before we try to put that into these sort method let's go ahead and just mess around with it.

Checking if String A comes after string B
```
console.log('a' < 'b')

//Expected output:true
```
Checking if String 'March' comes before  String 'January'. In this case I would expect the result to be false, March should come after January since J comes first.

```
console.log('March' < 'January')

//Expected output:false
```
The last thing to consider is that the capitalization is important,so does the lower case `a` come before the capital `A`, and the answer is no.Capital letters always come first.So in the end of the day the result of this is going to be false.
```
console.log('a' < 'A')

//Expected output: false
```
We're going to address that in our sort function by converting everything to lowercase before we create any comparisons.That's going to make sure that if we did have a uppercase H and a lowercase a for example the a will come first even through it's a lowercase letter and it should come second. 

```
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const sortNotes = function (notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0;
        }

    })
}

sortNotes(notes)
console.log(notes)

//Expected output: 
[
  { title: 'Habits to work on', body: 'Exercise, Eating a bit better' },
  { title: 'My next trip', body: 'I would like to go to Spain' },
  { title: 'Office modifications', body: 'Get a new seat' }
]
```
Now the sort method doesn't return much of anything.And actually sorts whatever array it's called.So it's going to modify the notes array directly.That means if we were creating a sort's note function like we are doing on the above code, we no need to have a return value or do anything with the return value.When you call it for our purpose that means down below we just need to call the function and then print the notes array.

> On below code we want to sort an array of object in a such a why that, the todos which are not completed must appear at the top and todo which are completed must appear at the bottom.
```
let todos = [
    {
        text:'Reading Book',
        completed:false
    },{
        text:'Learning Javascript',
        completed: true
    },{
        text:'Entering Data',
        completed: false
    },{
        text:'ICF Translation',
        completed:true

    },{
        text:'Learning Python and Django',
        completed:false
    },{
        text:'Learning React Framework',
        completed:true
    }
]


const sortTodos = function (todos){
    todos.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        }else if(!b.completed && a.completed){
            return 1
        }else{
            return 0;
        }
    })
}


sortTodos(todos)
console.log(todos)
//Expected output:
[
  { text: 'Reading Book', completed: false },
  { text: 'Entering Data', completed: false },
  { text: 'Learning Python and Django', completed: false },
  { text: 'Learning Javascript', completed: true },
  { text: 'ICF Translation', completed: true },
  { text: 'Learning React Framework', completed: true }
]
```
### Improve our Expense Tracker
In this section we are going to improve our expense tracker, previously in the course we did build a little expense tracker app when we learned about objects and function but if you remember we kept track of expenses via a single number and we added  a new expense, on that single number.And this is Ok but it's not really great because we don't have a list of our expenses so I can't figure out how much I'm spending on food for example and I can't see the individual cost of each expense.

Now that we know about arrays of objects we are going to model each expense using an object that's going to allow us to have multiple pieces of data.We're going to have an expenses description as well as the exact amount of the expense that is going to allow us to search our expenses, delete expenses, and we'll still be able to analyze our data and get a total.

```
const account = {
    name:'Joseph Muganga',
    expenses: [],
    addExpense:function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let expenseTotal = 0;
        let incomeTotal = 0;
        this.expenses.forEach(function(expense){
            expenseTotal = expenseTotal + expense.amount;
        })
        this.income.forEach(function(inc){
            console.log(this.amount)
            incomeTotal = incomeTotal + inc.amount;
            console.log(incomeTotal)
        })
        return `${this.name} has a balance of $${incomeTotal-expenseTotal}. $${incomeTotal} in income. $${expenseTotal} in expenses`
    },
    addIncome : function(description, amount){
        this.income.push({
            description:description,
            amount:amount
        })
    }
}

account.income = [];

account.addExpense('Rent',950)
account.addExpense('Coffee',2)
account.addIncome('Job',1000)

console.log(account);
console.log(account.getAccountSummary())
```

## Summary
In this section we learn a bunch about arrays and how they're going to allow us to model real world piece of information like a  list of expenses or an array of notes.And this was also the hardest section in the course.