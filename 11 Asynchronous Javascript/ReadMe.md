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
The `Hypertext Transfer Protocol` is a request response protocol meaning that we the developer in the browser will issue some some of request.

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

So to quick recap inn this section we learned about `HTTP status code` which has a numeric value that describe exactly how things went. The status code gets sent in the response.

So when you make a request for some data you don't send out a status code when the server sends the data back, it gives you a status code saying that things went well or that things went poorly.

We also learned what makes up these request as we can see it is just a bunch of text.We're never going to work with the text, instead we're just going to work with the interface given to use by `XMLHttpRequest()` and that is a great transition into the next section.

### Exploring Another API
In this section we are going to be making a brand new request to a brand new URL as a challenge.

This new request is not going to return a puzzle, but it is going to return a different set of data related to the various countries in the world.

> Link to API 
[REST COUNTRIES](https://restcountries.com/)
> API FOR ALL 
[ALL](https://restcountries.com/v3.1/all)

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
       
        //3. Find your country object by it's country code (alpha2Code property)
        //It is oK is use array.find()
        let sameCountryCode = data.filter((country)=> country.cca2 === countryCode
        )
    
        console.log(sameCountryCode[0]['name']['official'])
    
       
    }else if(e.target.readyState ===4){
        console.log('An error has taken place')
    }

})

//1. Make a new request for all countries
request.open('GET', 'https://restcountries.com/v3.1/all')
//send the request
request.send()

//Expected output:
United Republic of Tanzania

```

 
## Summary