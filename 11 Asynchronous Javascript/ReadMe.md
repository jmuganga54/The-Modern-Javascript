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
> 2. The second is your sucess data which in this case is a puzzle 

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
The big picture goal in this section was to create a function that we can call from `app.js` to get the puzzle. Now we originally tried to solve this using the `return` by expecting the puzzle to be `returned` from `getPuzzle()`, but as we saw that wasn't possible because what we have here is an eventListener which does not fire untill after `request.open() and request.send()` completes.

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

`In right hand side` we have a ton of overlpa in waiting for the two request and we are even able to start requests and print the end of program message while we're waiting for some of those requests to complete.

As our synchronous example, not only is it a lot faster it also does not block the user from interacting with the user interface and it doesn't prevent other unrelated code from running.

Now, here we're using the terms `synchronous` and `asynchronous`. You might also see people refer to this as blocking and non-blocking.












 


 
## Summary