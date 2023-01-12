## Topic
### Section Intro App Theme
At this point in the course, all of our apps are functionallly complete but obviously they look a bit deadful.

In this section we're going to switch that up. So theere are two goals in this section. The first is to integrate a theme for each of the application, I put together three themes one for each app. I'm going to walk you through the process of integrating it. 

That's going to take us from an unstyle application to a style of application that you feel a bit more confident to actually sharing.

The second thing we're ging to do is give you a way to actually share your work by deploying our applications to the Web. So you're gong to cmae up with a real URL, you can give that URL out to anybody with an internet connection and they're going to be able to view your app and actually use it.

## Keywords & Notes
### CSS at Glance
Before we integrate any of the themes that I've set up with our applications I want to go ahead and give you a quick crash course on CSS. 

We're going to look at the very basic of CSS and how it works. The goal of this section is to give you a high level overview of how exactly it works. So the integration of the theme makes a bit more sense and doesn't seem like magic.

We're going to kick things off by going to hangman directory on `section 10` and adding some new stuff into the mix.

The first thing we're gong to add is a new file a CSS file and that's where we're going to define all of these styles that style our application.

For example changing the color of the text to read or changing the background of the browser from white to gray.

All of that would be done with `stylesheet`.

So we're going to go head and create a new folder inside of `hangman` and I'm going to call this one `scripts` Now the reason that I am creating these scripts directory and putting all of our scripts inside of it, is to clean up the file structure for our hangman application.

We're about to create a new file type CSS and I don't want everything sitting in one folder. Instead we're going to organize things a little bit.

Adding another folder for style. This is going to be called style, this is where are are going to define our `CSS` to style the app.

Let start by writing a dummy css to style the text color on how application

```
body {
    color:red;
}
```

The style above, is not going to be applied on our page, cause we're not linking the file with our page. To fix this, you must add <link> tag `the link tag allows us to link an external resource` such as a stylesheet and there are couple of attributes we need to set up to specify exactly that it is a stylesheet and were it lives to specify where the stylesheet lives.
```
<link rel="stylesheet" href="./styles/styles.css">
```

`rel=` stand for `relationship` is for defining the thing we're linking is of a certain type and in this case is the `stylesheet`

`href=` the source of the lives, in other words where this file lives.

When we first explored `selectors` with querySelector() and querySelectorAll(), we found that we could select by `tag name`, we could select by `id`, we could select by a `class` or a combination of the three.

So right here we could go ahead and select all paragraph element in the document by just using p`

```
p {
    color:red;
}
```

Tagging the button

```
button {
    color:white;
}
```

`Tag Selector` it's going to make up a small portion of our style rules but a lot of the styles rules are going to be targetting by `class` some by `id`

Tagging by `id`

```
#puzzle {
    color:red;
}
```

Tagging by `class`
```
.warning{
    color:white;
    background:red;
}
```

One of the last thing I want to cover is how we can set up a rule to have multiple selector.

```
#puzzle, button {
    color:red;
}
```
Now it's important to know that, what we have up above, is not conditional logic using `and`, it is conditional logic using `or`. So we're going to give the color red to any elemennt who has an `id of puzzle` or any element which is `button`.

If I wanted to select by both I would have to put `button` infront of our `id selector`

```
button#puzzle{
    color:red;
}
```

In this section we took a look on the basics of CSS, we figured our how we can link a file in to our Website and we also looked at how we can work with style rules.

We learned that a rule is made up of a set of selectors as well as a set of style declarations.

### Setting Hangman Theme
In this section we're going to style the hangman application using the theme that I've set up.

There are going to be a few steps to get this done. The first thing we're going to do is grab and explore the CSS theme. 

Then once we have the theme code inside of our CSS file, we're going to need to make changes to HTML file, if the CSS file sets up a class for warning. We have to actually use that class for the styles to be applied.

So we'll be making some small structural changes to the HTML file as well.

That last thing we'll end up doing is modifying one of our javascript files to conform to the setup that the theme expects.

So let's go ahead and kick this off by grabbing the theme code and exploring it to see at a high level, what it does over.

```

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

body {
    background: #2B292E;
    color: #fafafa;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

span {
    border-bottom: 1px solid #534f59;
    display: inline-block;
    font-size: 2rem;
    height: 2.4rem;
    line-height: 2.4rem;
    margin: 0 .1rem;
    text-align: center;
    text-transform: uppercase;
    width: 2.4rem;
}

p {
    font-weight: 300;
    margin-bottom: .8rem;
}

.puzzle {
    display: flex;
    margin-bottom: 4.8rem;
}

.button {
    background: #7044a0;
    border: none;
    border-bottom: 2px solid #603a88;
    cursor: pointer;
    color: white;
    font-size: 1.4rem;
    font-weight: 300;
    padding: .8rem;
    transition: background .3s ease, color .3s ease;
}

.button:hover {
    background: #5F3A87;
}
```
In CSS file this file starts with some generic selectors that aren't targeting classes or IDs. These are just tags selectors like `HTML body(html)`, `span` and the universal selector(`*`).

The first nine line just override browser defaults.

```
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

So all browsers have their own set of defaults and all we're doing here is we're trying to start from a unified place, so our styles that we apply actually look standardized.

If browsers start off various spacing sizes each browser being a bit different I'm never going to get user interface to look the same. So all we're doing here is we're starting from a nice clean.

Correctly centering things has to do with our body selector the `body selector` ses up quite a few rule definition down below.

```
body {
    background: #2B292E;
    color: #fafafa;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
```
Using CSS flex box, were able to center the element inside of the body. Here we are making it a single `div` which is why we have our centered content the content. We are making it a single div which is why we have our centered content the content inside of their stacks as we normally do by default which is top to bottom. That's what we saw, when we didn't have any styles applied.

```
  <div>
        <p id="puzzle" class="warning"></p>
        <p id="guesses" class="warning"></p>
        <button id="reset">Reset</button>
    </div>
```
All of the rules that allow us to style the button, live over in theme.

```
.button {
    background: #7044a0;
    border: none;
    border-bottom: 2px solid #603a88;
    cursor: pointer;
    color: white;
    font-size: 1.4rem;
    font-weight: 300;
    padding: .8rem;
    transition: background .3s ease, color .3s ease;
}
```
`transition` is what allow us to smoothly switch between the lighter purple and the darker purple. So you can see it fades in as opposed to just jumping from one to the other

Changing the selector of puzzle from `paragraph` to `div`. CSS rule of puzzle

```
.puzzle {
    display: flex;
    margin-bottom: 4.8rem;
}
```

Now let's go ahead and customize some Javascript code. The only file we need to change is `app.js`. And the only part of `js` we're going to change is `render function`.

```
const render = () =>{
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
}
```

The first line of this function adds the text content into the puzzle element which is currently why we're seeing it showing up, instead of doing that though, we're going to start with actually clearing the element.

What we're going to do is store each HTML inside of it so we can clear all HTML inside the puzzle element using innerHTML.

```
const render = () =>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.getStatusMessage()
}
```

This is where we are going to manipulate what actually goes inside of the puzzle element.

```
const render = () =>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.getStatusMessage()

    game1.getPuzzle().split('').forEach((letter)=>{
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

```

If we go to our CSS we can see where our CSS live.

```
span {
    border-bottom: 1px solid #534f59;
    display: inline-block;
    font-size: 2rem;
    height: 2.4rem;
    line-height: 2.4rem;
    margin: 0 .1rem;
    text-align: center;
    text-transform: uppercase;
    width: 2.4rem;
}
```
Creating Title in html page and favicon

```
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/styles.css">
    <link rel="icon" href="./images/favicon.png">
    <title>Hangman</title>

</head>
```

## Summary