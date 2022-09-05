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

## Summary