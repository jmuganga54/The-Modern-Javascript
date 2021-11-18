## Topics
On this section we're going to be talking a lot of awesome features like data storage third party libraries debugging and more.

As we move through the section we'll be putting the finishing touches on the basic functionality for both our notes and Todo applications

> So that means we'll be able to check the checkbox next to the individual to do and we'll be able to do things like sort our notes by when they were last edited.

## Keywords & Notes

### Saving Our Data to LocalStorage Part I
In this section we're going to learn how we can save our users data.So the next time they visit the page they can pick up right where they left off.

> For example if we were to close the browser refresh the page and come back later that data is no longer around.So what we need to do is figure out how we're going to be able to save the data and then fetch it later.We're going to be doing that using local storage.

Now when it comes to working with any data storage mechanism in this case local storage we want to be able to perform those four basic operations.Those are the CRUD operations.And that stands for create, read, update and delete. If we can perform those four operations then we'll actually have a data storage mechanism that's useful, local storage can perform all of those operations.

So we're going to be able to store our data and then get the data back then next time the user visits the site

#### Storing data in localStorage
To store data in localStorage we use 
```
localStorage.setItem('key','value')

For example
localStorage.setItem('location','Dar es Salaam');
```

#### Getting the stored data in localStorage
```
localStorage.getItem('key')

For example
localStorage.getItem('location')

Expected output: Dar es Salaam
```
#### Removing stored Item in localStorage
```
localStorage.removeItem('key')

For example
localStorage.removeItem('location')

Expected output: Dar es Salaam will be removed
```

#### Removing all the stored data in localStorage

```
localStorage.clear()
```

Now at this point we've only stored strings inside of localStorage and that's because local Storage actually only support strings.

> so how is this going to be useful for us when we're trying to store an array of objects.The short answer is that it's not going to be useful unless we can figure out, how to convert our array into a string.

There are two methods in Javascript.The first takes our array and convert it into string.The second takes a string and converts it back to the array.So we're going to be able to store our array data like our array of nodes or an object or anything else in local storage even though local Storage at it's core only support that string based data.

> The first thing we have to do is use a method on a global variable called JSON which stands for Javascript Object Notation is going to be a way for us to convert our objects into a string.

The string is going to still look pretty similar to what javascript objects looks like but it will

`JSON.`, there are two methods we're going to use and they're both showing up right here.The first one is parse and the second is stringify.

`JSON.stringify()`, it takes in your object or your array and return a string.

```
const user = {
  name:'Joseph',
  age: 27
}

const userJSON = JSON.stringify(user);
//storing JSON string to the localStorage
localStorage.setItem('user',userJSON);

Expected output:{"name":"Joseph","age":27}
```
In JSON the keys are also wrapped in double quotes and we have to use double quotes throughout.You can't use single quotes in JSON.

JSON.parse(), convert JSON string, to javascript object

```
//getting item from localStorage 
const userJSON = localStorage.getItem('user');

//convert JSON object to Javascript object
const user = JSON.parse(userJSON);
//outputting the values
console.log(`Name: ${user.name}, Age: ${user.age}`);

Expected output: Name: Joseph, Age: 27
```
Using JSON.stringify() and JSON.parse()  we're going to be able to expand the usefulness of localStorage from just storing strings to storing pretty much anything even though in the end of the day is represented as a string.

> Now it's important to remember that the JSON  itself is really just a string.Let prove it will below code

```
const userJSON = localStorage.getItem('user');
console.log(`Name: ${userJSON.name}, Age: ${userJSON.age}`);

//Expected output: Name: undefined, Age: undefined
```

### Saving our Data in LocalStorage Part II
It now we have the basics of local Storage and our JSON  methods down we're going to actually integrate this into our applications, how we save our data as the user adds it to get things off with the notes

### Splitting up Our Application Code
On this section, we will discuss about `Refactoring`, which is the process of restructuring your code without changing it's external behavior.

> So what that means is changing the code without affecting it's output.That's going to make it super easy and fun to actually add on more features.

The process of refactoring is one of those things that really makes sense after you actually see someone go through the process and you can see the real advantages.

> So we're going to be focussing on two big picture things.The first thing we're going to do is set up another Javascript file for applications so we do have all of our code in one place and the second thing we're going to do is abstract specific features out into function calls.

The goal with refactoring is to take your existing features and actually break them out into something a bit more reasonable.And how far you take it is really up to your own personal preference.

### Debugging Our Applications
In this section we will learn a bit more about debugging javascript applications.

> Debugging is the art of getting bugs out of your code and these bugs typically come up from small typos. 

Using `console.log` to debug does indeed work.But there is a better way.This is using the `debugger statement` the debugger statement is going to make it so much easier to figure out exactly what's going wrong with your code.

We put a debugger statement anywhere in pur application we want to pause the code and figure out what variable values equal.

so let' say you find a spot where we feel like something's going wrong.Instead of using a bunch of console.log that logs and constantly switching back and forth all we need to do is type `debugger`, debugger is going to trigger the debugging tools in our browser.And this is supported by all major browsers not just firefox.

Now what's really interesting is that if we hit the escapee `(esc)` key this toggles the console from the console tab and we can actually run statements down below using the data up above.

So if we do want to continue on with the execution all we do is we click this little play button, that's going to continue on executing through the file.

> Now debugging is great with the debugger because we can pause our code take our time and try to figure out where things are going wrong.There's no limit to using `debugger`

Using the `debugger` we can pause our program at a specific point in time to analyze the variables at that point in time.

> This is going to make it a  lot easier and more accessible to debug our applications and get them back to a working state.

### complex DOM Rendering
In this section we're going to get back to adding new features to our applications.

And since we've already done our refactoring it's going to be a bit easier to add these features in.Well we're going to focus on is the individual item.

### Setting up third party Library
In the last section we set up the inputs for our individual items whether it's an individual note or an individual to do in this section we're going to start wiring up those inputs to actually do their job.

We now we're going to setup up an event listener for the remove button, for example we will use the click event, when someone clicks it what we do is remove something from an array. We already know how to do all of that.

And the reason that this section exists at all is that we're going to need to figure out which item was the item the user interacted with, so we can delete it or check it.

Sow what we're going to focus on doing is giving each  item, each note or each todo a unique identifier.

> if you ever worked with a database before this is going to be something that you're already familiar with.Each note is going to have an identifier that completely and uniquely identifies it.

That's going to allow us to use this id  to target these specific items.

So we're not going to have to worry about whether or not we have two notes with the same title or two todos with the same todo text to actually generate these IDs.

We're going to be using a third party library, our very first one third party libraries.Third party libraries are nothing more than javascript code that somebody else wrote.

Right now all the code that makes up our application is code that we wrote.In here we create functions and take advantage to core javascript features various function and method calls like an attribute or append child.

When we introduce a third party library into the mix the're going to expose even more functionality to solve these specific but common problems.So the idea of generating a unique identifier is by no means to a todo app or  note app or pretty much any application.

> So we don't need to worry about writing the code to get that done because it's super complex.All we need to do is know that we need to solve the problem of generating a unique ID.We find a library that allows us to do that.We implement it and we can focus on building out features specific to our apps not features that you'd see in pretty much every web app out there.

So we don't need to wast time reinventing the wheel instead we can use this third party library to solve our problems and quickly get back to improving the core functionality of our apps.

> So third party libraries are fantastic and everybody is using them.People always ask if they are reliable should I be using them? Think about any big company out there just start naming them.All of these companies they're releasing these libraries they're using other peoples libraries. There's  a rich ecosystem of open source code, code which is freely shared and distributed to solve these common problems. 

The libraries which we are going to use is [uuidjs/uuid](https://github.com/uuidjs/uuid). So this is going to allow us to solve our problem of generating unique id when using localStorage.

### Targeting by UUID
In the last section we set up our unique id's, in this section we're going to wire up our inputs to actually do something meaningful using the unique ID we're going to start by wiring up the remove button for our note application.


### The Edit Note Page: Part I
In this section and in the next one we're going to wire up the page that allows us to edit our notes.

> We're going to creating a separate HTML document and we're going to be sending the user from one to other based of the actions they take in this section. We're going to be creating a separate HTML document and we're going to be sending the user from one to other based off  of the actions they take in this section.

We're going to focus on just part of the entire features.We're going to focus on getting that second HTML page set up and we're going to focus on getting the user over to that page when they interact with the current page.

We're going to send them over to the note editing page when they click a note title or when they actually click the Create note button.Either way we want to get them over to that page so they can actually change the note data.

> What we will be talking on this section is how we're actually going to transfer the user from one page to the other.We're going to go back to the home page and we're going to focus on this one.

We are going to wire up the create note button to redirect the user and then we're also going to add a link for the titles getting the user over to that brand new page.We're going to do all of this in Visual Studio code.

* Let's go ahead and start with the link

> This can be achieved by wrapping the title of the note inside the anchor tag (`<a href='./edit.html'>Title</a>`)
* When someone clicks create a note when they create a note we are going to create the note that added to localStorage then we're immediately going to send them over to that edit page to perform this redirect.

> To perform this redirect we're going to be using a global variable provided to us by the browser much like document is.This one is called `location`.So to redirect to a different page the someone click create note, we can do that by adding `location.assign('./edit.html')`

### The Edit Note Page: Part II
Let continue working on the edit page in this one, we're going to set up those fields and make sure they actually change the data in local Storage.

> In summary what we did in this section is looking on how to update the data from localStorage, updating the data from different page from where it was submitted.

### Syncing Data Across Pages
In this section we are going to learn how to listen for changes to localStorage.That's going to allow us to keep all of our tabs in sync.

> So if I have the same note open in multiple tabs and I change the text to something like some new text.Currently it's not reflected anywhere else even though it is indeed saved.

We're going to make sure it gets changed live.Currently we would need to manually refresh the page in order to see the new data, to get this done we're going to be listening for an event that allows us to do something when local storage changes.

Now in order to actually attach this event we have to figure out what to attach it to.And what we're going to talk about is another global variable provided by the browser and this is window.

>The widow global contain all sort of interesting thing related to the browser widow.It's a representation of it.Now it also contains all of the other browser Global's we've used.

So let's go ahead and explore a few properties just to get feet we for example we can print,get the browser heigh and width.We use `inner height` for height and I can get the value in pixels.Same to the width, 'window.innerWidth

```
window.innerHeight
window.innerWidth

Expected output: Number 
```

> On window we also have all of the other Global's made available to us by the browser for example `window.console.log()`.

```
window.console.log('test');

Expected output: test
```
We can prove that they're the same by checking if `window.document` is equal to `document`.

```
window.document === document.
Expected output: true
```

We're going to be using a window object to attach an event listener to.There are certain event listener that don't really make sense on a visible element on the page.If I want to watch local storage for changes I don't really want to attach that to any of these.Well we can just attach it to the window as a whole and you could think of this as a way to attach a global event.

> So let' mess around with this over inside of our notes edit file

For example
```
window.addEventListener('click', function (e) {
    console.log('clicked')
})

Expected output:clicked [When you click on a window]
```
> On the above we've essentially set up a global even listener to run when anything on the page gets clicked.

Now we're not going to be using the click event for our purposes.That doesn't make a whole lot of sense but we're going to be using instead a special even called `storage`.The storage event fires, when any of the data in local Storage changes this is going to allow us to update what the user sees.

When any of the data in local storage changes this is going to allow us to update what the user sees.Now it's important to know that the storage event only fires on the other pages.So if I have two tabs and Tab 1 it changes local storage this function isn't going to fire for tab 1, it's only to fire for Tab 2.

And we're going to add the storage event over to the Notes app file.We are going to listen for a storage event and update the notes.

### Javascript Dates
Read More [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
In this section we're going to start working with the dates and time in javascript.This is going to allow us to wire up the last feature for the notes application which is not wired up. That is our sorting dropdown.

> We can sort by last edited when the actual note was create or we could sort alphabetically.Now we could probably figure out how to sort of vertically right now using what we already know.But it's these two that are going to require us to worry about date and time.

So before we try to integrate anything into the Notes application I just want to mess around with the date in javascript.

> We're going to create a const called now and I'm going to set it equal to a new space and then we'll open and close a set of practices.

Now if we were to remove the new and the extra space we would get code like this which we could understand, by introducing the new operator into the mix.All we're going is we're creating a new instance of data that represents the current point in time.

```
const now = new Date()
console.log(now);

//Expected output:Thu Nov 04 2021 10:47:13 GMT+0300 (East Africa Time)

```
From here we can do something with the current date we could for example manipulate it.I could figure out what day of the month is we can just print out all of the information though using the to string method console.log.

```
const now = new Date()
console.log(now.toString());

//Expected output:Thu Nov 04 2021 10:49:13 GMT+0300 (East Africa Time)

```
So the date object does give us everything we need, to get all that done we can extract individual pieces of information and we can also go ahead and manipulate the information.So that's where I want to turn next.

But before I do let's pull up the documentation for date because there are a lot of methods we can work with right here that is MDN [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

There are a lot of methods which works with Date object, one of them is `getFullYear()` which provide the current year of the current local time.

```
const now = new Date();
console.log(now.getFullYear());

//Expected output:2021
```
> If we provide some arguments we can really specify when this new variable represents.The first thing we can put in here is a string representation of the point in time we're trying to work.

```
const now = new Date('January 21 2021 6:25:01');
console.log(now.toString());

console.log(`Year:${now.getFullYear()}`)
console.log(`Month:${now.getMonth()}`)
console.log(`Date of the Month:${now.getDate()}`)
console.log(`Hour:${now.getHours()}`)
console.log(`Minute:${now.getMinutes()}`)
console.log(`Seconds:${now.getSeconds()}`)

//Expected output:
Thu Jan 21 2021 06:25:01 GMT+0300 (East Africa Time)
Year:2021
Month:0
Date of the Month:21
Hour:6
Minute:25
Seconds:1
```

Notice that we have zero for month,remember that is zero indexed now passing in a string to date actually isn't very common when we're passing around date related information in our code.We typically store it as a number.This might look a little weird at first but it actually makes a whole lot of sense.

And it's going to make saving and storing information easy.If I want to store a created at value and a last edited add value on each note all I really need to do is add two new properties whose values are numbers.

Now an important missing piece to this puzzle is going to be what's know as the *the Unix epoch* the Unix epoch is a specific point in time that is in the past, this point in time is January 1st of the year

```
//Unix Epoch - January 1st 1970 00:00:00
```
This is the Unix epoch when we represent time as a number, we use positive numbers for all points in time after this and negative numbers for all points in time before.So I would use a positive number for today.

So 0 represent this point in time exactly as th number increases we increase the number of milliseconds.So if I wanted to move one second in the future from this point in time I would represent it via 1000.Since there are a thousand milliseconds in a second.

If I wanted to move 1 minute in the past it would be a negative number and it would be 60 seconds four minute times 1000.So that would be 6000

```
const now = new Date()
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());
```
So the above is the sort of code we're going to be using when we create a new note.It allows us to get the time stamp and say that this is the sort of code we're going to be using after we read the data from local storage and we want to do something specific related to the date.

Now when we have time stamps it's really easy to figure out if one thing came before or after another.You can simply use the less than or greater than operator on my numbers to get that done now.

### Moment
In the last section we explored the built in date in javascript and we saw that well it can get the job done, it's not exactly user friendly it's a little bit awkward and clunky.

>In this section we're going to explore the defector way to work with time in javascript by using the moment JS library, moment gives us a very usable methods allowing us to easily format time in a way that is meaningful for us or change time adding on days and seconds manipulating it as we go.

Now this library we can find on the web,[Moment Js](https://momentjs.com/), then you can go to documentation page [Moment documentation](https://momentjs.com/docs/). And if you scroll down there are a few different ways we can install it.

We'll be installing it via the browser and we can actually grab the javascript file we need via this website [cdnjs.com](https://cdnjs.com/), then copy the link and install it  on you file `<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js" integrity="sha512-LGXaggshOkD/at6PFNcp2V2unf9LzFq6LE+sChH7ceMTDP0g2kn6Vxwgg7wkPP7AAtX+lmPqPdxB47A0Nz0cMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`

Using *moment* object to print the current time 
```
const now = moment();
console.log(now.toString())
```

Now we're going to figure out how to manipulate the moment.

If you want to `GET AND SET`, for example you can get the minute or set the minute using the minute() moment function.

```
const now = moment();
//getting the minute of the current time
console.log(now.minute())

//setting the minute of the current time as 1 minute.
console.log(now.minute(1))
```

Now there is one more set of methods related to manipulation worth taking about over in the documentation.

> What we're looking for are methods that actually allow us to add and subtract relative to where we currently. So on moment documentation over in the sidebar *manipulate* section.We can see that under the Manipulate section we have methods like 'add' and 'subtract'.

These allow us to add a amount of a given unit.For example we could add two years or I could subtract 5 seconds and we can see right here that here that they change a bunch of them together to perform some sort of manipulation.

```
moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0);
```

So let has perform some manipulation

```
//adding one year the current year is 2021
const now = moment();
//adding one year
now.add(1,'year');
console.log(now.toString())

//Expected output:Sun Nov 13 2022 11:26:14 GMT+0300
As you can see new year added.
```

Right after adding one year we can subtract.This is known as `chaining we are chaining` on multiple method calls and a lot of third party libraries support this allowing you to simplify your code.

```
const now = moment();
//adding one year then subtract 20 days
now.add(1,'year').subtract(20,'days');
console.log(now.toString())

//Before subtracting 20 days: Sun Nov 13 2022 11:26:14 GMT+0300
//Expected output: Mon Oct 24 2022 11:30:16 GMT+0300
```
Being able to use add and subtract is going to be super useful.We're going to be using that whenever you want to manipulate a given moment.

>There are other methods now that we're going to explore.Related to formatting so we have a point in time and we want to display it in a way that's meaningful to a user.

The one that we're first going to explore is called `format` over inside of the documentation.

There is an entire section on this under *display*.The format method does not require an argument but I've personally never called it without one.If we do call it without one we can see what we get right here.

```
const now = moment();
//adding one year
now.add(1,'year').subtract(20,'days');
//use of format()
console.log(now.format())

//Expected output:2022-10-24T11:42:16+03:00
```
The date format that we get is not very readable.Not something I'm actually going to show to a user.What's really cool about format though is we can actually pass in a string when we pass in a string, we get to customize exactly what information shows up where and we do this via a simple set of patterns.

> Pass in a token on format() to customize how date will be displayed

```
const now = moment();
//adding one year
now.add(1, 'year').subtract(20, 'days');
console.log(now.format('MMMM Qo, YYYY'))
//November 3rd, 2003

Expected output:October 4th, 2022
```
Now there is one more way we can format things I want to explore before we move on to the challenge if we go back to the docs.

> This one is indeed under display after the format documentation.We have `time from now` time from now for turns a message like you'd see next to an Instagram post where it would say two minutes ago for a comment or something along those lines. When we use from now it actually runs this calculation it takes your moment, it figures out exactly how far in the past or in the future.And then they returned the little string.

In this case we've taken our moment and we've manipulated it away from the current moment in time.We added a year and subtracted 20 days.So lets go ahead and see exactly what we get when we use this from now function console.log.

```
*TIME FOR NOW*
const now = moment();
//adding one year
now.add(1, 'week').subtract(20, 'days');
console.log(now.format('MMMM Qo, YYYY'))
//November 3rd, 2003
console.log(now.fromNow())

//Expected output:October 4th, 2021
                  13 days ago
```

> The last thing to cover is how we can work with our time stamps in Moment.Moment makes it really simple.

> `Unix Timestamp`
If we pull up the documentation right on the sidebar, we are looking under display for Unix time stamp.Here we can get in milliseconds or in seconds and go in javascript it's common to use milliseconds and all we have to do is use the value of method super simple to use.

Let's go ahead and wrap this one up by doing just that.

```
const now = moment();
//adding one year
now.add(1, 'week').subtract(20, 'days');
console.log(now.format('MMMM Qo, YYYY'))
//November 3rd, 2003
console.log(now.fromNow())

const nowTimeStamp = now.valueOf();
console.log(moment(nowTimeStamp).toString())

//Expected output:
November 4th, 2021
13 days ago
Wed Nov 03 2021 07:50:13 GMT+0300
```
InSummary: The value of method is going to give us a number back.

If we save this the browser is going to go ahead and refresh.And what we get is the correct data.So we were able to take a moment instance and get the time stamp.Then later on we were able to use that time stamp to get a moment instance back so we could take advantage of it super handy methods.

So I hope by now you're starting to see the advantages of using moment over the regular date.Can we get what we want to get done with date done? The answer is yes but it's going to require us to write a ton more code that is just not realistic.

It is much better to use a library written by somebody else that already contains the code we need.

### Integration Dates: Part I 
In the last section, we spent our time exploring the basics of working with dates in javascript. In the next couple, this one and the next section we're going to focus on actually integrating moment into our application.That's going to allow us to display a string to the user when they're editing a note like last edited five hours ago.

> And it's also going to allow us to finally wire up that select dropdown.Now we're going to be breaking this out into two videos and we'll be breaking it up into multiple little challenges requiring  us to use what we have already learned.

So let's go ahead and kick things off.

```
timestamp = note.updateAt;
 return `Last edited ${moment(timestamp).fromNow()}`
```

### Integrating Dates: Part II
Now that we've set up created and updated at properties for each note in this one we are going to actually use those to do more than display a little message.What we're going to is do figure out how we can wire up this dropdown.

We're going to actually sort by those three categories depending on which one they pick.Now if you remember we had already set up the options under the select tag we have by edited by created and an alphabetical.

```
<select id="filter-by">
        <option value="by-edited">Sort by last edited</option>
        <option value="by-created">Sort by recent created</option>
        <option value="alphabetical">Sort alphabetically</option>
    </select>

```

Now we're going to have `by edited` be the default value.And we're actually going to store the value.

And we're actually going to store the value.One of these three inside of the Notes app file under the filters's object.It's not really a filter it's more of a way to sort but is a pretty good place to store it right here sort by.

```
const filters = {
  searchText: '',
  sortBy: 'byEdited'
}
```
Now we're going to go ahead and actually respond to changes in that filter as well.

## Summary
In this section we have learned different things, these includes how to store data in local storage, how to retrieve the store data, how to use date object to get the date and how to use moment library to simplify how to get and set the date.