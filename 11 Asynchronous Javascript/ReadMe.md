## Topic
> In this section we are going to explore asynchronous programmings as well as HTTP request. We're going to figure out how we can connect our application to the outside world.
> 
> So lets's think about where data comes from in our apps, it comes from two locations. It's either hardcoded into the app itself or it comes from the user.An example of hard coded data would be our hangman puzzle. It's just a string defined in the code file. An example of data coming from the user would be the todo text information which the user types in the little input field.
>
> But what if we wanted to communicate with another server out there in the world we're going to figure out how to do that in this section, that's going to allow use to do interesting thing like get the puzzle from a random  word generator, so we're going to be able to get a brand new puzzle from some third part data source every single time we want to start a new Hangman game. So we're going to explore all of that and more in this section.
>
> This is going to be the most complex section by far but it is essential to creating application where you send and receive data from the outside world.

## Keywords & Notes
### HTTP Request from Javascript
The `Hypertext Transfer Protocol` is a request response protocol meaning that we the developer in the browser will issue some of request.

This goes off to some sort of third party server that server does some work and it gives us back a `response`.

```
HTTP (Hypertext Transfer Protocol)
//Request - What do we want to do
//Response - What was actually done
```

> To view your request go to `Network Tab`  

`Web sockets : ws` allow us to communicate between two things in real time. And this is used to allow the browser to automatically refresh whenever we change some data on the application files.

Well we're not going to do  is make HTTP requests that send things back like HTML or javascript files.

Instead what we're going to do is make HTTP request that allow us to get Jason Back. We can then parse that Jason into javascript object to extract the data off of it, the Jason that comes back contains the randomly generated word. 

Sow what we want to to do is figure out how we can make request example [Jason](https://puzzle.mead.io/puzzle) not by typing something in the browser but running some code from javascript that is going to allow us to set up the request requesting a new random puzzle, and then inside of the response we're going to be able to get the puzzle and create a new game.

> XML was just a different way to structure data that you wanted to transfer, but most of the time today most people use Jason.

We can use this constructor function `XMLHttpRequest()` to transfer any information we want not just XML.

`request.send()` This is going to actually initiate the process. Now the process doesn't take place right away.It takes a bit of time for you to connect with that server. It takes time for the server to actually do what it's supposed to do, in this case generate random phrase and it takes time for the server to get it's response back to you.

> Now we can see this over inside of the `network tab` as well, we can see there's a timeline and the timeline is in milliseconds, it all happens very quickly and it shows you exactly when requests are started when they're made and how long they actually take to get done.

We need to add an `eventListener` that's going to fire when we actually have the information.

[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) Documentation

```
//Making an HTTP request 
//initialize a request using constructor function provided with a browser
const request = new XMLHttpRequest()
//setting an eventListener when the response is returned
request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4){
      //capture the responseText content and parse it 
      const data = JSON.parse(e.target.responseText)
      console.log(data)
    }

})
// open request: HTTP method and path of where Jason is 
request.open('GET','https://puzzle.mead.io/puzzle')
//send off the request
request.send()


//Expected output:
{puzzle: 'Exercise Bicycle'}
```
> So using this little bit of code our application is going to be able to pull information from some other server that lives out there in the world. This could be a server that we've created using a backend language like Python, Java or node.
> 
> Or it could be a server that someone else has set up for example companies like Google, Facebook and Twitter all have Jason API that you can access to pull Information in to your program.

### HTTP Headers and Errors

In this section we are going to look at HTTP request, we're going to dive into some of the details and we're also going to be making a new request to a completely different API 

Every `HTTP response` comes with a status also known as a status code, and this is a numeric value that describes exactly how things went. There are a whole bunch of different status code for various degrees of succeeding or failing.

So the status code is our big picture way to figure out if things went good or if things went bad.So we're actually going to want to look at that status code value when we use the response.

That means it's not enough to just ask if things are complete. Things might be complete but a complete failure. We only want to parse response text when the request is complete and it was considered a success.

> We're going to use the status code value to determine if it was success or not.

Now we can actually access that value on target just like we can access response text. `e.target.status`

```
request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4){
      //printing the status code
      console.log(e.target.status)
      //capture the responseText content and parse it 
      const data = JSON.parse(e.target.responseText)
      console.log(data)
    }

})

//Expected output:
200
Object { puzzle: "Old Building Supplies" }

```

When the puzzle API was configure it can return the number of words based on `wordCount` if it is 2, it will return only two words. To use this we use the query string. You can't use any key, the key which is already set up is called `wordCount`, `key=value`, `wordCount=2`, this will only generate puzzles that have two words in them.

```
http://puzzle.mead.io/puzzle?wordCount=

//Expected output:
puzzle	"Incredible Skyline"
```

If you make a mistake on writing the the name of the key the API will return an error, and the status code will be `400`.

```
https://puzzle.mead.io/puzzle?wordCounddjdt=2

//Expected output:
error	"Invalid query parameter used."

```
Checking if readyState is equal to fourth state which means things are complete.If it does we're going to do is cancel dialogue  and error has taken place.

```
    if(e.target.readyState === 4 && e.target.status === 200){
      //capture the responseText content and parse it 
      const data = JSON.parse(e.target.responseText)
      console.log(data)
    }else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }

})


// open request: HTTP method and path of where Jason is 
request.open('GET','https://puzzle.mead.io/puzzle?key=value') //no key=value
//send off the request
request.send()


//Expected output:
An error has taken place
```

So by adding just a little bit of conditional logic we can make sure that we only do certain things when things go well and we do other things when the request seems to fail for some reason.

> Resources to understand status code and HTTP request
* [HTTP Statuses](https://httpstatuses.org/)
* [HTTP Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)

There are four parts to both the request and the response
* `Start line` for the `request` is where we can see the `method such as GET`, and we can also see the `protocol such as HTTP/1.1`. For response we can see the protocol which comes first and the status code `HTTP/1.1 403 Forbidden`

> So the request says what method it want to use, the response said exactly how things went via the start line.

* `HTTP headers` after that on both sides we have a `list of headers`. Headers are just key value pairs.

> For example the key can be the `Host: localhost:8000`. So when we work with headers it's typically API specific if you work with an API it will tell you if it needs you to set any headers or not. In most cases the answer is no.
> 
> Now in the example of our `response` there are headers that get set as well. One of the headers is `server` which tells you what type of server you're working with. And another one type tell you what exactly is coming back. For example `Server: Apache`

* `Blank line/ Empty line` To separate the headers from the body.

* `optional body` And after the Empty line we have the `body` either the request body or the response body.
> The body for the response can be for example `HTML Document` or `Jason string`

So to quick recap in this section we learned about `HTTP status code` which has a numeric value that describe exactly how things went. The status code gets sent in the response.

So when you make a request for some data you don't send out a status code when the server sends the data back, it gives you a status code saying that things went well or that things went poorly.

We also learned what makes up these request as we can see it is just a bunch of text.We're never going to work with the text, instead we're just going to work with the interface given to use by `XMLHttpRequest()` and that is a great transition into the next section.

### Exploring Another API | Challenge
In this section we are going to be making a brand new request to a brand new URL as a challenge.

This new request is not going to return a puzzle, but it is going to return a different set of data related to the various countries in the world.

> Link to API 
* [REST COUNTRIES](https://restcountries.com/)
> API FOR ALL 
* [ALL](https://restcountries.com/v3.1/all)

How to figure out the code for your country. You can do a quick Google Search. There is a standard for these country codes it's called `ISO 3166-2 tanzania` which is `ISO 3166-2:TZ`

So this what we're going to be using to locate the correct country in this array. We're going to find it by its `alpha2Code`, then we're going to print the name of that country.

```
const countryCode = 'TZ'


const request = new XMLHttpRequest()

//setting the event Listener
request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 4 && e.target.status === 200){
        //2. Paste the responseText get back the array of objects
        const data = JSON.parse(e.target.responseText)
       
        //3. Find your country object by it's country code (cca2 property)
        //It is oK to use array.find()
        let sameCountryCode = data.filter((country)=> country.cca2 === countryCode
        )
    
        console.log(sameCountryCode[0]['name']['official'])
    
       
    }else if(e.target.readyState ===4){
        console.log('Unable to fetch data')
    }

})

//1. Make a new request for all countries
request.open('GET', 'https://restcountries.com/v3.1/all')
//send the request
request.send()

//Expected output:
United Republic of Tanzania

```
### Callback Abstration
In this section will be spending some time on clean up app.js

But we want to focus on is how we're going to transfer information first then we'll actually bring in the code that gets the puzzle.

```
> request.js
const getPuzzle = () =>{
    return 'My new puzzle'
}
```

```
> app.js
//calling of function
const puzzle = getPuzzle()
console.log(puzzle)

Expected output:My new puzzle
```
So in the above case we are indeed going to get everything working as expected. The puzzle variable is going to equal the string returned and I can log it to `console.log`. This is clearly it works for the current set up.

The problem is that the `getPuzzle()` function has the data to return right away. This is not going to be the case when we actually introduce the `HTTP request`. 

We have to wait for the callback function to fire first then and only then do we have access to the data.

So returning directly from `getPuzzle()` is not going to be possible.

> Let's go ahead and actually prove that:

> request.js
```
const getPuzzle = () =>{
    const request = new XMLHttpRequest()
    //setting an eventListener when the response is returned
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }

    })
    // open request: HTTP method and path of where Jason is 
    request.open('GET','https://puzzle.mead.io/puzzle?wordCount=3')
    //send off the request
    request.send()
}
```
Now if we were to run the program what would happen. Yes we would still see the data printing to the console, that's fine but that's not what we want.

We don't want to print the data to the console.

We want to be able to access the data ad `console.log(puzzle)` so we can do something meaningful with it like pass it into new hangman constructor function to actually start the game with whatever puzzle comes back.

> Inside `request.js` we might think we can solve this using return, like `return data`

Well this isn't actually going to work and there are few important reasons why?
* The first is that its returning from the wrong function. When we use the return statement we return from the function we are currently in.

Where is this code?

It is not directly inside of `getPuzzle()`, there is a closer function, it's related to that is the callback function.

```
{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(e.target.responseText)
        console.log(data)
        return data
    }else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }

    }

    Expected output: undefined
```

So you cannot return from the parent function inside of a child function. The return statement applies to the function that the code is executing from.

That means return data isn't going to solve our problem.

* Now this bring us to the second important reason why this return statement isn't going to work.

Look at the order that things are happening here.

![Order of Exectution](../10%20Advanced%20Objects%20and%20Functions/hangman/img/orderOfExecuction.png)

> Undefined from app.js -> Puzzle from request.js

And this might not have been the order we expected but it is indeed the correct order.

That is because going off and making an HTTP request takes a bit of time.Now in the grand scheme of things it's a very short amount of time maybe 100 milliseconds but that's a whole lot of time, when it comes to executing javascript code, executing code that lives on your machines is super fast, we could execute thousands and thousands of lines of code before a single HTTP request is actually made and processed.

That is because going off to the network and finding  that server letting the server process your request and then sending the data back all takes time.

So the order that's happening over here is just further proof that at no point, `return` is going to work.

Because this code `console.log(puzzle)` that's we are suppose to use it actually runs before we ever have access to the data.

And we just proved that by seeing `undefined` printing before the data prints.

But there's one more common solution that people usually turn to or try to turn when they want to keep their code looking like this. and that is the following.

> They start by creating some sort of variable up above `let data` then they try to manipulate data inside of the callback function, going to set data from up above equal to what is return by parse, see code below then return `data`

```
const getPuzzle = () =>{
    let data
    const request = new XMLHttpRequest()
    //setting an eventListener when the response is returned
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        data = JSON.parse(e.target.responseText)
        
    }else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }

    })
    // open request: HTTP method and path of where Jason is 
    request.open('GET','https://puzzle.mead.io/puzzle?wordCount=3')
    //send off the request
    request.send()

    return data
}
```
So none of these solutions are going to help us solve the problem.

Let's talk about what is going to help us solve the problem and that is the `callback function`.

> Callback Function is a function which is passed to another function.

```
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        data = JSON.parse(e.target.responseText)
        
    }else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }

    })

```
```
> This is a callback function from the above
(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        data = JSON.parse(e.target.responseText)
        
    }else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }

```

So in the end of the day we're not going to return anything from `getPuzzle()`, instead of relying on a return value we're going to rely on a callback function.

Instead we pass a function in to `getPuzzle()`

Now the callback functions gets called with some information. We've seen the eventListeners get called with their `(e)` argument. We can have our callback function called with as many arguments as we like. 

> app.js
```
getPuzzle((puzzle)=>{
    console.log(puzzle)
})
```

The above is how we use callback function, but the question is how do we set the callback function?

>request.js
```
const getPuzzle = (callback) =>{
}
```

So callback is a function like any other function like `getPuzzle` which means we can execute it whenever we nee to and we can pass arguments to it but we're going to do right here is all it.

```
const getPuzzle = (callback) =>{
    //calling callback function
    callback('Some fake puzzle')
}
Expected output: Some fake puzzle
```
Using callback function in our project

>request.js
```
getPuzzle((puzzle)=>{
    console.log(puzzle)
})
```

> request.js
```
const getPuzzle = (callback) =>{
    const request = new XMLHttpRequest()
    //setting an eventListener when the response is returned
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(e.target.responseText)
        callback(data.puzzle)
        
    }else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }

    })
    // open request: HTTP method and path of where Jason is 
    request.open('GET','https://puzzle.mead.io/puzzle?wordCount=3')
    //send off the request
    request.send()

  
}
```

```
Expected output: United Republic of Tanzania
```
![callback](../10%20Advanced%20Objects%20and%20Functions/hangman/img/callback.png)

It is not showing up because it's logged in the request file. It is showing up because it's log out from app.js, meaning that our call back pattern worked successfully.

So by taking advantage of nested functions and lexical scope, we're able to access the parent scope's callback variable from this function allowing us to respond to the request from `app.js`.

Now when we're working with this callback pattern it's actually common to accept two arguments to the callback. 
> 1. The first is any potential error
> 2. The second is your success data which in this case is a puzzle 

That makes it really easy to do one thing if the program crashes, if the puzzle can't do it's job and another things if get puzzle does it job correctly

```
getPuzzle((error,puzzle)=>{
    if(error){
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})

```

So when we're working with the callback pattern we define at most one, one of those is always going to be defined but never both and never one. Things either went well or they did not go well. There is no alternative, where both things happen where we got an error and things went well.

```
const getPuzzle = (callback) =>{
    const request = new XMLHttpRequest()
    //setting an eventListener when the response is returned
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(e.target.responseText)
        callback(undefined,data.puzzle)
        
    }else if(e.target.readyState === 4){
        callback('An error has taken place',undefined)
    }

    })
    // open request: HTTP method and path of where Jason is 
    request.open('GET','https://puzzle.mead.io/puzzle?wordCount=3')
    //send off the request
    request.send()

  
}
```

>Summary
The big picture goal in this section was to create a function that we can call from `app.js` to get the puzzle. Now we originally tried to solve this using the `return` by expecting the puzzle to be `returned` from `getPuzzle()`, but as we saw that wasn't possible because what we have here is an eventListener which does not fire until after `request.open() and request.send()` completes.

Which means that we cannot use `return` anywhere inside of this file `request.js` to solve the problem.

So the solution was to use the callback pattern, in the callback pattern we don't expect anything to be returned from `getPuzzle()`. Instead we pass in a function and we expect that function to be called with the information when it's actually ready.

In this case we used a pretty standard callback pattern where the first argument is a potential error and the second argument is your success data. Only one of these is ever going to be defined either things went wrong or thing went well.

Now to actually use this over inside of `request.js`. All we did is we call that when we had the data, we called it providing the second argument when things went well and down below we call that providing only the first argument when things went poorly.

### Asynchronous vs. Synchronous Execution
In this section we're going to explore the differences between synchronous and asynchronous execution.

Now the example from previous section is an example of asynchronous execution. 

When we execute something `synchronously`, we start some sort of task like fetching a puzzle and then we have to wait for it to finish before we move on to the next thing.

```
> Example of Asynchronously execution
getPuzzle((error,puzzle)=>{
    if(error){
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})
```

When we execute something `asynchronously`, we can start some task then we can actually get other work done before the task completes.

```
getPuzzle((error,puzzle)=>{
    if(error){
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})

console.log('Do something else')
```
When we run the above program, we're going to see `do something else` print before we either get our puzzle or the error message. That's because we're using asynchronous execution.

Yes, we start the process of getting the puzzle before the log `Do Something else`, but it doesn't complete until after this log runs.

So if we run the program the below will occur.
![Asynchronous execution](../10%20Advanced%20Objects%20and%20Functions/hangman/img/async.png)

We get the expected results, we get `Do something else` showing up right away then you could see about a fraction of a second later, we go the puzzle. So this is asynchronous execution.

We can actually creates a synchronous version of `getPuzzle` and we're going to do that just to illustrate the difference between the two.


So we an `asynchronous request` we can do other things while we're waiting for that data to come back from the server.



```
> request.js
const getPuzzleSync = () =>{
    const request = new XMLHttpRequest()
    // third argument, def sync or async
    request.open('GET','https://puzzle.mead.io/puzzle?wordCount=3', false)
    //send off the request
    request.send()

    if(request.target.readyState === 4 && request.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(request.target.responseText)
       return data.puzzle
        
    }else if(request.target.readyState === 4){
        throw new Error('Things did not go well')
    }
}
```

```
> app.js
const puzzle = getPuzzleSync()
console.log(puzzle)

console.log('Do something else')
```

And this is good because as I mentioned in the last section this could take a decent amount of time maybe `100 milliseconds` that might not seem like a lot but if you browser stopped for a tenth of a second every once in a while you would definitely notice.

```
 if(request.target.readyState === 4 && request.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(request.target.responseText)
       return data.puzzle
        
    }else if(request.target.readyState === 4){
        throw new Error('Things did not go well')
    }
```
On `getPuzzle()` the code above is never going to run until after the server responds with data. That's why we don't have to rely on an eventListener.

> Expected output
![getPuzzleSync](../10%20Advanced%20Objects%20and%20Functions/hangman/img/getPuzzleSync.png)

On the above output, we get the puzzle first, then after that we're getting `Do something else`.

So with the `asynchronous approach` we're able to start a process and continue running other code eventually. Then thing that we run completes we get our data back and we run the callback function.

This allows us to keep running other code while we're waiting 100 milliseconds or whatever the time.

For `synchronous execution`, we actually have to wait all 100 milliseconds even if something else that runs later on it, isn't related to this data at all.

So in `getPuzzleSync()` example we see that the puzzle print first then down below, we're able to run our other task so we can see why this is not what we want, I don't want task to need to wait on task one if task 2, does it need any information from task 1.

This can be very bad for end user, we are preventing other unrelated javascript code from running and getting some work done.

> Visualization 
![Sync vs Async](../10%20Advanced%20Objects%20and%20Functions/hangman/img/visualization.png)

Looking at the visualization, you will understand that there is a big difference between the two.

`In left hand side` you'll notice that no point, there is overlap. So at no point we can draw a vertical line an run into two vertical line. This means that we're doing one thing at a time.

`In right hand side` we have a ton of overlap in waiting for the two request and we are even able to start requests and print the end of program message while we're waiting for some of those requests to complete.

As our synchronous example, not only is it a lot faster it also does not block the user from interacting with the user interface and it doesn't prevent other unrelated code from running.

Now, here we're using the terms `synchronous` and `asynchronous`. You might also see people refer to this as blocking and non-blocking.

### Callback Abstraction Challenge
This is challenge section which we are going to be using callback and asynchronous execution to create another function similar to `getPuzzle`, so instead of getting a `puzzle`, we're going to be getting the details of a country based off its country code.

```
> request.js
const getCountry = (countryCode,callback)=>{
    //make HTTP request
    const request = new XMLHttpRequest()
   
    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            let sameCountryCode = data.filter((country)=> country.cca2 === countryCode)
          
            callback(undefined,sameCountryCode[0]['name']['official'])
        }else if(e.target.readyState ===4){
        
            callback('An error has taken place')
        }

    })
  
    request.open('GET', 'https://restcountries.com/v3.1/all')
    request.send()
   

}

```

```
> app.js
getCountry('TZs',(error,country)=>{
    if(error){
        console.log(`Error:${error}`)
    }else{
        console.log(`Country name:${country}`)
    }
})

```
```
Expected output: Country name: United Republic of Tanzania

```

### Closures | Asynchronous Javascript
In this section we are going to learn about `closures` in javascript.

`Closures` is closely related to function and function scope.

```
> closures.js
const myFunction = ()=>{
    const message = 'This is my message'
    const printMessage = ()=>{
         console.log(message)
    }
    printMessage()
 }
 
 myFunction()

 //Expected output: This is my message
```

On above code, this is at its very basic an examples of a closure but this one's a bit too straightforward to see where closures actually become useful.

Let's make a little tweak
```
const myFunction = ()=>{
    const message = 'This is my message'
    const printMessage = ()=>{
         console.log(message)
    }
    return printMessage
 }
 
 const  myPrintMessage =  myFunction()
 myPrintMessage()

 //Expected output: This is my message

```
> What is happening on the above code?

The first thing that's worth noting is that we don't call `printMessage` until after `myFunction` has return.

Now what's interesting though, is that even though we call `myPrintMessage()`, after `myFunction()` is done, `printMessage()` still works.

Our function `printMessage()` still has access to the `message` variable from the parent function.

So this is a `Closure`

A `closure` is the combination of a function with the lexical scope in which it was defined.

In this case when `printMessage()` was defined it had access to `message`. So it's always going to have access to `message`.Even if `myFunction()` completes.

> Check! See what happen on Hangman, request.js

Both `getPuzzle()` and `getCountry()` use the `addEventListener` to setup a callback function that gets fired later when the HTTP request completes.

Now we know that it takes time for the HTTP request to completed, maybe 50 milliseconds or something along those lines. This is much longer than it'll take for the `getPuzzle()` and `getCountry()` to finish.

So `getPuzzle()` and `getCountry()` actually complete. Then at some point sown the line these callback function fire. In this case it had access to `callback`. It also had access to `wordCount`, it just happened to not use it.

It's because of closures that bellow inner function has access to callback. So because we have a closure our function has access to the lexical scope in which it was defined.
```
//request.js
// request.addEventLiseter('readystatechange',belowFuction)
(e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            let sameCountryCode = data.filter((country)=> country.cca2 === countryCode)
            console.log(sameCountryCode)
            let country = sameCountryCode[0]['name']['official']
          
            callback(undefined,country)
        }else if(e.target.readyState ===4){
        
            callback('An error has taken place')
        }

    })

```

So using closures and actually having support for them is essential for patterns like this to actually work. Without it we wouldn't be able to do the stuff we've already been doing.

> Other Closures Examples

How we can use a closure to create a way to have a private variable in javascript, the variable that is only accessible or modifiable via a very specific set of rules.

```
> Closures.js
let createCounter = () =>{
     let count = 0

     return {
          increment(){
               count ++
          },
          decrement(){
               count --
          },
          get(){
               return count
          }
     }

}

const counter = createCounter()
```

From the above `createCounter` we are return an object with many function in it.

Now on this object what do we have? We have a bunch of functions. All of these functions are using closures to access count a variable defined inside `createCounter` function. All the function in returned object, are using closures to access `count`.

The end result is that the person who's using our `counter` tool cannot hack the system. They can ony ever increment the counter by one, decrement by one or  get it.

There's no way to increment the count by 100 to cheat the system, there's no way to change the counter variable, over to a string. It is only modifiable by a very specific set of methods down below.

Let's go and use those methods.

```
let createCounter = () =>{
     let count = 0

     return {
          increment(){
               count++
          },
          decrement(){
               count--
          },
          get(){
               return count
          }
     }

}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Expected output: -1
```

Now the cool thing about using a closure in this way is that I cannot modify the count other than through these two methods `increment() and .decrement()`

So using a `closure` in this way we are able to create variable or a set of variables that are only modifiable via the interface we provide. You can't just do anything you want with them. You have to use our methods to actually work with the data and depending on your application this could be a very useful thing to be able to do.

> Another Example of `Closures`

```
//closure.js
const createAdder = (a) =>{
     return (b) =>{
          return a + b
     }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

//Expected output:
8 
30
```

```
const add100 = createAdder(100)
console.log(add100(-90))
//Expected output : 10
```

The above code is using `closure` to get its work done, but it's also using another pattern worth defining called `currying` 

`Currying` refers to the process of transforming a single function that takes a lot of arguments to multiple function that take a subset of those arguments.

```
//Standard Function
const add = (a,b) => a + b
```

```
//currying Function
const createAdder = (a) =>{
     return (b) =>{
          return a + b
     }
}

```

Currying function, is useful when we want to generate functions with some sort of base value.

> Another Example of Closure | Challenge

```
// Tipper

// 1. Create createTipper which takes in the base tip (.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount 
// 3. Call createTipper to generate a few function for different percentage.
// 4. Use the generated function to calculate tips and print them

const createTipper = (baseTip)=>{
     return (amount)=>{
          return baseTip * amount
     }
}

const tip20 = createTipper(.2)
const tip30 = createTipper(.3)
console.log(tip20(100))
console.log(tip30(100))

//Expected output:
20
30
```

So to recap a closure is the combination of a function and lexical scope in which it was defined.

### Exploring Promises
In this section I want to push our discussion of Asynchronous Javascript forward by talking about promises in javascript.

We're going to be learning about the `promise API` and how that is going to allow us a different and in my opinion a `better way to structure our asynchronous code`.

Currently we have structuring things using `callback` function approach, which did indeed make it very easy to separate the usage of the data `app.js` from how the data is actually fetched `request.js`. 

In this case we pass a function  `getPuzzle()`. And I hope that in the future gets called with the correct arguments in the correct order. 

This is via `callbacks` what we're going to do is explore how we can structure this using promises.

> Tip! New Features

As will all new features it's usually best to explore them in isolation then and bring them into the application where we're actually working on. That's going to make sure we actually understand how things are working and then integrate them into the program.

Also we're going to directly compare and contrast the `standard callback pattern` with the `promise pattern`.

In `promise.js` we are going to stimulate a delay instead of sending the actual `HTTP request`, we can simulate a delay in javascript by using `setTimeout()`.

`setTimeout()`, allows us to run some code after a certain amount of time has passed. It takes two arguments, the first one is the `code to run` after a certain amount of time has passed and the other argument is `how much time you want to wait` and this time is represented in milliseconds.

```
setTimeout(()=>{
    console.log('This time is up')
}, 2000)

//Expected output:
When we run it, we see we get a blank screen for 2 seconds, then we get our message `This time is up` then the program completes.
```

Now It's going to be important to compare and contrast the different between standard `callbacks` and `promises`

>> Callback Approach

So we're going to start by creating a standard callback example `getDataCallback()`.

```
//def func and pass callback
const getDataCallback = (callback)=>{
    setTimeout(()=>{
        callback(undefined, 'This is the data')
    }, 2000)
}

//using the defined function
getDataCallback((err,data)=>{
    if(err){

    }else{
        console.log(data)
    }
})

//Expected output:
Waiting for 2 seconds and printing data will be
This is the data
```

This is exactly what we did by creating a `getPuzzle()` in `request.js` and use it  in `app.js`



>> Promise Approach
Now we want to explore how we can get something very similar done with the `promise API`. Then we'll be able to easily compare and contrast the two techniques.

So the promise techniques starts by creating a `new promise` using a `new`, with the `promise constructor` function. 

Now the `promise constructor` function is not something that we create.

It's built right into the language and it does indeed expect a single argument, which is a function. This function actually gets called right away.

```
const myPromise = new Promise(()=>{
    
})
```

This is where we can perform our long running process. So that could be us making an HTTP request to save some data to a database or in this particular example, it could be us  using `setTimeout()` to simulate a delay.

>> Note! argument in a promise constructor

It's more than `Ok` to use an `arrow function` in this situation since we're not going to be using `this` or arguments.


```
const myPromise = new Promise(()=>{
    setTimeout(()=>{

    },2000)

})
```

Well when the promised constructor function calls this function, it calls it with two arguments, we can use, the first argument is `resolve` and the second argument is `reject`.

We can call `resolve` to say that things went well that we were able to successfully perform this long running operation.

We call `reject` if things went poorly. If something failed along the way whether we used invalid arguments or the data we tried to access didn't exist.

So inside the function we're going to call either `resolve` or `reject`.

So when using `callback approach` we had to call the callback, we had to fake the `first` argument setting equal to `undefined` saying there was no `error` and we passed in our data for the `second` argument

```
const getDataCallback = (callback)=>{
    setTimeout(()=>{
        callback(undefined, 'This is the data')
    }, 2000)
}
```

With `promises`, we actually have two separate functions. So if nothing went wrong I just call `resolve` and pass to it my data

```
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is the data')

    },2000)

})
```

Now at this point we have set up a promise. Let's go ahead and actually use it. 

What we're going to do is call a method on our promise instance, remember we're creating a new instance of promise by using new with the promise constructor 

```
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is the data')

    },2000)

})

```

 So `myPromise` is the promise instance. The methods that we're going to be accessing on it is called `then`. 
 
 `then` lets us define what we want to do when we actually have the information. In this case when we have our fake data, in the case of a real application when we have the HTTP request information.

 For now we are going to call `then` and we pass to `then` a function. This function gets called when the promise resolves, meaning that things went well and we get access to the data via a first argument.

 ```
 //Promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is the promise data')

    },2000)

})

//using the promise
myPromise.then((data)=>{
    console.log(data)
})

//Expected output:
This is the promise data

 ```

Now before we really analyze this syntax and start comparing and contrasting let's just look at how we could potentially have an error be the result instead of the success case.

> Callback Approach | Unsuccessfully

For the callback solution we know how we would do that we would provide the first argument instead of the second.

```
//callback
const getDataCallback = (callback)=>{
    setTimeout(()=>{
        callback('This is my callback error', undefined)
    }, 2000)
}

//using the defined function
getDataCallback((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
```

> Promise Approach | Unsuccessfully

How do we do the same thing when unsuccessfully on promise approach. 

So instead of calling `resolve`  we just call `reject`.

```
//Promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('This is the promise data')
        reject('This is my promise error')

    },2000)

})

//using the promise
myPromise.then((data)=>{
    console.log(data)
})

//Expected output
(node:5416) UnhandledPromiseRejectionWarning: This is my promise error
(Use `node --trace-warnings ...` to show where the warning was created)
(node:5416) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:5416) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
At this point if we were to save the program and rerun the above, we will get all sorts of errors and warming, as shown on expected output.

`The bunch of errors` is because we do not have a `handler set up` for it.

```
//using the promise
myPromise.then((data)=>{
    console.log(data)
})
```
The above function is only ever going to fire, when the promise resolves. 

If we want to do something for when things go `poorly` we have to set up a second argument for `then`. This second argument is only ever going to get called when things go poorly and it gets called with the `error`.

```
//using the promise
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

```

> Note ! Why all the warning

All of the warning in the console are just letting you know that you have a `promise` that `rejected` but at no point are you doing anything with that error information. 

```
//Promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('This is the promise data')
        reject('This is my promise error')

    },2000)

})

//using the promise
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

//Expected output:
This is my callback error
This is my promise error
```

now that we've seen a basic example I want to dive deep into how promises work comparing and contrasting the two.

1. The first thing we're going to notice with the promise API is that it's much easier to reason about, now it might not be easier to reason about at first because it's a new tool.

> Let explore callback approach

```
//callback approach 
const getDataCallback = (callback)=>{
    setTimeout(()=>{
        callback('This is my callback error', undefined)
    }, 2000)
}
```
On `callback approach` we have a single argument callback. This callback argument doesn't necessarily denote whether things are going well or poorly when we call it. It's name isn't specific because we just have one. It is the order of the arguments which allows us to determine whether things went well or whether things went poorly.

```
const getDataCallback = (callback)=>{
    setTimeout(()=>{
        << callback('This is my callback error', undefined) >>
    }, 2000)
}
```

> Let explore promise approach

On `promise approach` we have clearer semantic we have `resolve` and `reject`. We know that if we see `resolve` things went well. We know that if we see `reject` things went poorly.

```
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('This is the promise data')
        reject('This is my promise error')

    },2000)

})
```

You don't have to look at which argument was provided and which argument wasn't in order to figure out if things are going well or if things are going bad.

2. Now the other nice thing is  that with callbacks, it's totally possible to call your callback twice. These is not something we're going to want to do for application because it could result in extremely unexpected behavior. It might try to start to causing something weird to occur.

With `promise` it is impossible to run more than just one of these functions and it's only ever going to run once. You cannot resolve twice, yo can not reject twice, you can not resolve and then reject or reject and then resolve. You can call 1 one time, everything else is going to be ignored.

> Example of the above | reject twice
```
//Promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('This is the promise data')
        reject('This is my promise error')
        reject('This is my promise error')

    },2000)

})

//using the promise
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

//Expected output
//reject error shows up once
This is my promise error
```

So with `promises` we can `reject` or `resolve` the promise a single time with a single value. There's only one argument for each of these functions `resolve` and `reject`.

3. Another nice feature of promises is that we don't have to know what we're going to do with the code before we start the process of fetching the information.

So `on callback` I have to define my callback that uses the data before I can fetch the data by nature because I have to call get data callback with it.

```
//using the defined function
getDataCallback((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
```

So `on promise` once the promise starts its process. We do not need to attach `then` to start waiting.
```
//Promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('This is the promise data')
        reject('This is my promise error')
    },2000)

})
```

If I was to add this code in it would still reject just the same. We've just chosen to do nothing with it. We could do something right away like what we had before we could access it multiple times. For example I can take the same code and past it down below.

```
//Promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('This is the promise data')
        reject('This is my promise error')
      

    },2000)

})

//using the promise
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

//Expected output:
This is my promise error
This is my promise error
```

Now we are waiting on the single promise to either `resolve` or `reject` and when it does we run the appropriate function. By using `then` twice, we are not requesting the data twice. We are just doing different things with the same information.

`The expected output is` because we have two calls to `then`, but we did not have to wait four seconds. We just had to wait two seconds. We waited for the promise to `resolve` or `reject` then both methods responded to it.

### Converting to Promises
In this section we're going to be integrating promises into the `request.js` file. We're going to convert `getPuzzle()` and `getCountry()` from using `callback` pattern to using the `promises` pattern

`request.js`
```
const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()
    //setting an eventListener when the response is returned
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(e.target.responseText)
        callback(undefined,data.puzzle)
        
    }else if(e.target.readyState === 4){
        callback('An error has taken place',undefined)
    }

    })
    // open request: HTTP method and path of where Jason is 
    request.open('GET','https://puzzle.mead.io/puzzle?wordCount=3')
    //send off the request
    request.send()
}



const getCountry = (countryCode,callback)=>{
    //make HTTP request
    const request = new XMLHttpRequest()
   
    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            let sameCountryCode = data.filter((country)=> country.cca2 === countryCode)
            console.log(sameCountryCode)
            let country = sameCountryCode[0]['name']['official']
          
            callback(undefined,country)
        }else if(e.target.readyState ===4){
        
            callback('An error has taken place')
        }

    })
  
    request.open('GET', 'https://restcountries.com/v3.1/all')
    request.send()
   

}
```

`app.js`
```

getPuzzle((error,puzzle)=>{
    if(error){
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})

getCountry('TZs',(error,country)=>{
    if(error){
        console.log(`Error:${error}`)
    }else{
        console.log(`Country name:${country}`)
    }
})
```

One more small tweak to make our example on `promises.js`. This is going to be the last piece of the puzzle for figuring out how we're going to get that done. The code has been tweaked instead of using `const myPromise = new Promise`, we have created a function which will return a promise, then assign the return promise to `myPromise`.

```
/Promise
const getDataPromise = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve('This is the promise data')
            reject('This is my promise error')
            reject('This is my promise error')
    
        },2000)
    
    })
}

const myPromise = getDataPromise()

//using the promise
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
```

Hopefully you see this subtle difference between the two. I could call `getDataPromise()` with some random data like `123`. I can access that data and I could use it within the function when i'm actually making my request.

```
//Promise
const getDataPromise = (data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve('This is the promise data')
            reject('This is my promise error')
            reject('This is my promise error')
    
        },2000)
    
    })
}

const myPromise = getDataPromise(123)

//using the promise
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
```

The reason that I'm pointing this out is because we're going to have to do the exact same thing with `getPuzzle` and `getCountry`.

Yes we are going to remove `the callback arguments` but if want an option we still have to pass that via a function argument and now we have a way to get that done.


There is one way we can improve the syntax even further, we have a arrow function that just returns something. So we can take that something and we can put that just after the arrow and use the shorthand syntax.

```
const getDataPromise = (data) => new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve('This is the promise data')
            reject('This is my promise error')
            reject('This is my promise error')
    
        },2000)
    
    })
```
This is the shorthand syntax for a function that returns a promise. 

> Testing the code if it works
```
//Promise
const getDataPromise = (data) => new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`This is my success data: ${data}`)
            // reject('This is my promise error')
            // reject('This is my promise error')
    
        },2000)
    
    })


const myPromise = getDataPromise(123)

//using the promise
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

//using the promise
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

//Expected output:
This is my success data: 123
This is my success data: 123
```

Now that we've seen this with out fictitious example let's go ahead and do it with something real. We're going to work on converting `getPuzzle()` over to a `promise API` opposed to a `callback API`

> Below is the converting | using promises instead of callbacks.

`request.js`
```
const getPuzzle = (wordCount) =>  new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest()
    //setting an eventListener when the response is returned
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(e.target.responseText)
        resolve(data.puzzle)
        
        
    }else if(e.target.readyState === 4){
        reject('An error has taken place')
       
    }

    })
    // open request: HTTP method and path of where Jason is 
    request.open('GET',`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    //send off the request
    request.send()
   })

```

`app.js`
```

getPuzzle('2').then((puzzle)=>{
    console.log(puzzle)
},(error)=>{
    console.log(`Error: ${error}`)
})

//Expected output: Lucky Shot
```

Now the challenge is to do the same thing using getCountry()

```
> Steps
1. Convert getCountry to return a new promise
2. Call getCountry and use then to print count name or the error
```

> The code after completing the challenge

```
> request.js
const getCountry = (countryCode) =>{
    return new Promise((resolve,reject)=>{
        //make HTTP request
        const request = new XMLHttpRequest()
      
     
        request.addEventListener('readystatechange',(e)=>{
            if(e.target.readyState === 4 && e.target.status === 200){
                const data = JSON.parse(e.target.responseText)
                
                let country = data.find((country)=>{
                    return country.cca2 === countryCode
                })
                let countryName = country[`name`][`official`]
              
                resolve(countryName)
            }else if(e.target.readyState ===4){
            
                reject('An error has taken place')
            }
    
        })
      
        request.open('GET', 'https://restcountries.com/v3.1/all')
        request.send()
       
  })
}
```

```
> app.js
getCountry('TZ').then((country)=>{
    console.log(`Country name:${country}`)
},(error)=>{
    console.log(`Error:${error}`)
})

//Expected output: Country name: United Republic of Tanzania

```

Now we've converted both our functions over to the promise API and that's where I'd like to stop.

### Promise Chaining
In this section we are going to continue learning about `promises`, we're going to talk about a more advanced way we can structure our `promises`. This is known as `promise changing promise`.

`Promise Chaining` is super useful when we're trying to do two things in a row. Both end up being just `promise calls`.

So imagine that we had another function similar to `getCountry()` called `getCountries()` in a region, and what we really wanted to do was not just one thing we wanted to do two things. We wanted to start with the `country code` to find out what region this country is in then based off of their region, we wanted to get all of our countries in that region and print them.

That would require us to create two functions with two separate promises where the data for the `first promise` needs to be `received` before we can start the `second one`. We have to know what region `Mexico` is in before We can make the second request by region to get all countries that happen to be nearby.

What I want to start with though is just us messing around dummy callbacks and dummy promises over inside of `promises.js`.

Now I actually want to start by `modifying the callback` example once again comparing and contrasting the two techniques with how they handle this sort of situation.

So inside `promises.js` on callback approach we going to remove our current callback calls and we're going to make a small change to `getDataCallback()`.

We are going to take in a number. And the goal here is to just multiply that number by 2, if it's type of is a `number`, if it's not, well call back with an error instead.

```
const getDataCallback = (num, callback)=>{
    setTimeout(()=>{
       if( typeof num === 'number'){
            callback(undefined, num*2)
       }else{
            callback('Number must be provided')
       }
    }, 2000)
}
```

Now let's say that we call `getDataCallback()` using the function. I will provide the number that first argument and I'm going to start with `2`, so `2*2 is 4`. So we would expect that data would be `4`.

Now this is `OK` but the goal here it to do something twice. So we're actually going to use data and pass it into a new version of `getDataCallback()` to multiply that too.Now when we want to do this with `callbacks` I have to remove the `console.log` and all I do is I call our function again `getDataCallback()` passing in the data and then passing in another callback function, where I have error and I have my new data.

```
//using the defined function
getDataCallback(2, (err,data)=>{
    if(err){
        console.log(err)
    }else{
       getDataCallback(data,(err, data)=>{
            if(err){
                console.log('err')
            }else{
                console.log(data)
            }

       })
    }
})

//Expected output:
8
```
All right so this is the general structure that we would use if we were to work with callbacks.

Eventually the callback completes it takes twice as long since we do the same thing twice.But in the end of the day we do get `8` printing.

So this is indeed working as we wanted it to. Even if it's not the nicest looking piece of code.

So what we're seeing here is commonly called `callback hell`. And this is just `spaghetti code`. It's just a hot mess of code. It is hard to follow, it's even harder to maintain

And if we wanted to expand it any further that would be pretty challenging task. So the problem with this code is that we are getting deeply nested.

We are four layers deep for the final code and this creates code that is just unnecessarily complex to work with and read.

So callbacks don't handle this sort of thing, well. If I want to do `two asynchronous things` using the data from the first to start the process for the second callbacks fall short.




 
## Summary