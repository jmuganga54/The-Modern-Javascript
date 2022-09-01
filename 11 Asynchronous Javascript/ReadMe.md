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
>In this section we're going to kick off on asynchronous programming by making our very first request for third party data. So we're going to figure out how we can get some information into our application that doesn't come from the code itself and doesn't come from the user. In this case the information we're going to be getting is a random phrase we can use for the hangman puzzle as opposed to the static text that's currently defined in app.js. 
>
> Now to actually set up a communication between our browser and this other server what we need to do is issue and HTTP request up above

> HTTP (HyperText Transfer Protocol) is a request response protocol meaning that we the developer in the browser will issue some sort of request.This goes off to some sort of third party server that server does some work and it gives us back a response.
> Request: The request describes what we the person making the request hoped to do.
> Response: contain information about what was actually done.
>
> So think about the request that we're trying to make to generate random word or phrase for each new Hangman game. The `request` itself is what we want to do, what we want to do is to generate a new word or phrase, and the response is going to contain that word or phrase, what was actually done behind the scenes the service that we're going to use is going to generate a random word or phrase from a list and then it's going to send that back so we can add it into the game.
> 
> This is the process which we are going to use here and the HTTP protocol is actually something that our application is already using, these request though are just initiated behind the scene.
> If you go go to network tab on the browser, you can see the request and the response
> `Websocket` allow us to communicate between two things in real time.And this is used to allow the browser to automatically refresh whenever we change some data. [Because of life Server]
>
> What we want to do is initiate a request from our javascript and we want to do something with the response in the javascript. Because in the end of the day when I get that random word back I want to actually pass it to the new hangman so I can start a game with the randomly generated word.
>
> Well we're not going to do is make HTTP requests that send things back like HTML or javascript files.Instead what we're going to do is make HTTP request that allow us to get Jason back.We can then parse that Jason into a javascript object to extract the data off from it.
>
> So what we want to do is figure out how we can make this request not by typing something in the browser but running some code from javascript that is going to allow us to set up the request requesting a new random puzzle, and then inside of the response we're going to be able to get that puzzle and create a new game to do.

## Summary