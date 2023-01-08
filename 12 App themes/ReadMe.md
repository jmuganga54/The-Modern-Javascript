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


## Summary