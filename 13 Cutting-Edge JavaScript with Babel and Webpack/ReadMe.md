## Topic
In this section we will be primarily going to be focusing on two tools `Babel` and `webpack` which are going to open up a world of new features for us to use. 

`Babel` is going to ensure that our applications work in a wide a range of browsers as possible even older browsers that are no longer being updated to support the latest cutting edge javascript features.

`Webpack` is going to open up a whole bunch of new features for us to use the biggest and best being the javascript `module system`.

This gives us a brand new way to structures our application code and I'm super excited to show you want it can do.

## Keywords and Notes
### The Problem Cross-Browser Compatibility
The goal of this section is to introduce a few new tools that are going to make it possible for our application to function in a wider range of browsers.

Like much older browsers that don't support the newer features or taking advantage of in this modern javascript bootcamp.

Illustration an example of this cross-browser incompatibilities. This video is all about exploring the problem. The rest of the section is all about the solution.

Let start with the really easy one, we're going head over to the browser and Google `mdn const`. Down below you can see `Browser compatibility Table`

So this browser incompatibilities for a feature is going to be big problem for us if we want to write modern javascript code and have our applications work everywhere. We are going to need to introduce a bit of tooling that tooling that we're going to introduce is going to solve those two key problems. 

The first problem `older browsers` are never going to update to support these newer features, so if ew want to use them which we do we have to figure out a way to work around that which we're going to.

The second problem is that there are newer javascript features out there that currently aren't supported by any browser or even the latest and greatest, so the tooling that we're going to set up is going to solve that problem too allowing us to use the most advanced, cutting edge features in the language.

### Exploring Babel
We now have a goal in mind, the goal is to create javascript application that actually work in all browser but still use cutting edge features. To get that done, we're going to be using a tool and that tool si called `Babel(babo)`

The babel is going to take our javascript code and convert it to something that all browsers understand. So if we use a fancy cutting edge feature when we're writing our script, Babel is going to convert that  to a dumber feature that all browser understand and that's what's actually going to run behind the scenes. This still allows us to work with and write code using the cutting edge features but our application will work pretty much everywhere.

So let's go ahead and kick this section off by messing around with this tool in the browser then we're actually going to integrate it into our application to start.

Let's go to [babeljs](babejs.io/)

Babel takes code we write with the latest features and it complies it down into more simple code that older browsers can understand. This is exactly what we're going to be setting up and that's what I want to do next to actually be able to perform this conversion process with files locally on our machine.

So we're going to install it just like we installed live server earlier in the course.

```
npm install -g babel-cli@7.11.0
```
`babel-cli` stands for Babel command line interface. This is the version of Babel that lets us run commands from the terminal 

It's actually going to go through the installation process and once it's done all I want to do is verify that things actually installed correctly by running a test command

```
babel --version
```
## Summary