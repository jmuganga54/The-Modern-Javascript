## Topic
In this section, you'll be setting your machine for the rest of the course. There are a few things we have to install, and then we'll start learning how to create Javascritp applications.

* Installing Visual Studio Code
* Installing Node.js
* [Window Only] Install cmder
* Introduction to the Terminal
* Hello Javascript!

## keywords & Notes
### Installing Visual Studio Code
In this video you're going to install Visual Studio code on your machine. Visual Studio code is a text editor.This is where we're going to write all the code throughout the course.

You can learn more [Visual Studio Code](https://code.visualstudio.com/)

Aside from being my favorite text editor Visual Studio code is free open source and it runs everywhere.So regardless of what operating system you're using for this course you are going to be able to install VSC and configure it exactly as I have my local copy set up for this course.

Other text editor 

[Atom](https://atom.io/)

[Sublime Text](https://www.sublimetext.com/)

[WebStorm](https://www.jetbrains.com/webstorm/) It's more of an IDE(Integrated Development Environment) than  a text editor but for this course we don't need a lot of those features. I prefer a visual studio code.

*Extension to be installed*
* Sublime text keymap: This plug in is going to switch the keyboard shortcuts for Visual studio code from their defaults to default popularized by Sublime TEXT.

* Babel ES6/ES7: So we're supporting more recent version of the syntax.

### Installing Node.js
As I mentioned in the introduction to the course one of the great things about javascript, is that its a universal language so once you know it and you can use it in a lot of different places, I can use javascript in the browser, on a server, I can use it to make mobile application or I can program a virtual reality headset.Whatever you want to do.You can probably do with javascript.Well it means that we need to install at least one of those.

We need a way to execute javascript code and to do that.For now we're going to be using `nodejs`. Node js is typically used to execute javascript to create a server to create a backend for a mobile app or Web site.That is not what we're going to use if for.We just going to use node to execute basic javascript scripts.We're not going to be exploring any nodes specific features.

Don't worry we are going to tie our javascript files into the browser a bit later in the course but that's more complex process which requires us to set up HTML a web server and few other things.For now as we're just trying to learn the basics that would be a distraction.So we're going to stick with node as a really easy way to run javascript from our computer.

How to get [nodejs](https://nodejs.org/en/), Here we can grab the installer and once again node is available for all operating systems, it's free and open source.We're just using this as a way to run javascript files.So as long as we grab any version or greater we're going to be good to go.

## Introduction to the Terminal
In this video, you'll learn hot to use the terminal. We'll cover some basic commands that'll make it possible to run Javascript files from our machine.

`The terminal` is a program on your machine and it allows you to type commands and issue those commands to the computer. These commands can do all sorts of things.

Knowing the version of node installed
```
node -v
```
`clear`: All clear does is it clears the output shown on the screen

_Clear the termina output_
```
clear
``` 
Every command we run from the terminal runs from a specific directory on our machine.So to visualize this what we're going to is click open the Finder or the file explorer and the finder I'm always looking a specific directory.And if we don't pick one it uses our user directory by default and we can prove this we can run `pwd` which stands for *print working directory*.The working directory is just the directory you're currently issuing commands from.

_Print the full path to the current working directory_
```
pwd
```
You can also switch directory in the terminal.We can use a command to switch the directory.We're currently executing commands from.So let's go ahead and switch from user directory which am currently in over here to desktop folder

`cd` - Change directory
```
cd Desktop
```
So let's say I want to go back to the user folder to do that I use cd space dot dot that goes from the currently directory up to the parent directory which would be switching from the desktop back to specific directory.

_Navigate up a directory_
```
cd ..
```
_Change directories to home_
```
cd ~
```
The last command I want to talk about is `ls` is lists out the contents of the current working directory.If I run `ls` we can see all of this stuff inside of that folder.

_List the contents of the working directory_
```
ls
```

_Navigate up directory then into a nested directory_
```
cd ../Downloads
```
### Hello Javascript
We installed a bunch of tools and configured them creating a good environment for writing and running


## Summary

In this section we have learned how to set up environment to be able to execute javascript code.We have learned how to use basic command on a terminal to be able to access different files and directories.
