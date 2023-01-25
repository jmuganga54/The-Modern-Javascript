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
We now have babeljs installed on our computers and we're going to move over to Visual Studio code and actually create an input file that we can run through Babel.

Changing directory to `boilerplate folder` then create a file naming `input.js`, then change directory to that file. For here we can now use the babel command to process the input.js file, the command we're going to run it needs two piece of information. It needs to know what file we're going to use as the input and it needs to know where we want to save the output, we have to provide both of these with the command.

The first thing we provide is the name of the file that we want to use as the input. In our case the file is `input.js`. The next thing we have to do is provide the output file name. This file is a file that doesn't exit, the babel command is actually going to create it. The command below

```
babel input.js -o output.js
```
Nothing will appear on the terminal, but that indicate that the `output.js` file has already being created.

The problem here is that we've run babel but we haven't specified any of the babel plug ins we want to use, by default babel does almost nothing, if we actually want to convert constant, class and the other  ES6 and ES7 features which we do we have to set up just one more thing.

What we're going to be installing is called babel preset. This is what's going to give us the functionality that we actually saw from babel over inside of the browser.

So that's going to make sure babel actually converts those ES6 and ES7 features down into regular boring old javascript that older browsers can understand.

To install this preset we're not going to be installing it as global NPM module. Instead we're going to be installing it as a local NPM module local to our project, local to the `boilerplate` directory.

Now we're going to be using `local modules` quite a bit in this section.

The first thing we have to do is set up the boiler plate project to actually be able to install local module and to do this we just need to run a single command from the terminal.

```
npm init
```
No need to change any entry, just click enter for each entry. It is will ask you a permission to create a file. It will create a file called `package.json` in the boilerplate folder and it will put the displayed content, will different `key value pair`. All we have to to is hit yes, hit enter.

Now we have a `json` file with simple configuration inside it. We're going to be using this in just a moment to store the various dependencies our project needs, one of them being that present that we're going to use.

The install another command

```
clear
npm install babel-present-env@1.6.1
```

It's going to take the module code and it is going to dump it in a new directory in the root of our project. This one is called `node modules`. This is where the installed code lives in this folder contains the module that we just installed. It is not a folder we're going to be diving into and you shouldn't change any of the code inside  of there. We can click it open for a moment just to see what lives inside of there. And it is essentially a long set of directories where we have our module that we installed as well as it's dependencies.

You can just pick a random folder and click it open and see that there are more files and folders inside of there.

So this is all of the code necessary to get the `env` pre-set up and running. We were able to get all of it by installing the module.

We also noticed that inside of `package.json`, we now have that module listed in a new property called `dependencies`

```
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "input.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-preset-env": "^1.7.0"
  }
}
```

We have the module name and we have the version that we're currently depending on.

We have one brand new file called `package-lock.json` this just keeps track of the version of module we're using to make sure we don't run into any conflicts later on.

> Note!!
You should never change anything in `mode modules`. You should never manually change anything in `package-lock.json` either. We are going to be making some changes to `package.json` throughout the course and that is perfectly fine.

Running babel command by telling it to use our brand new present tha we have just installed. `babel input.js -o` youcould have also used a `babel input.js --out-file` both of them are identical. The one is just a shorthand for the other.

```
babel input.js --out-file output.js --presents env
```

A lot of students usually mess that up and right after `presents` we're just going to provide the one present we want to use , the one we just install the `env`, you don't have to provide `babel-present-env`. All you have to do is give babel the last piece.

The run the command, we get the new output. This is modified version of our file that's going to work in a wider range of browsers.

### Setting up our Boilerplate
In the last section we learned a lot about babel, we saw how babel allows us to create javascript applications that work in a wider range of browsers even if we're using those supper modern javascript features.

In this section we are going to convert boilerplate from just a set of script in a folder to a web application that we can actually view in the browser.


> Note!!

Now the first thing I want to talk about has to do with the `node modules folder` if you remember from the last section, we never put anything inside node modules and we didn't even create it.

It was created for us when we ran `npm install` with the package we installed which happened to be `babel present-emv` package.

Now what does these means, well, that means that we're not going to be keeping `node modules` around. `Node modules` is a generated directory. 

So for example if I was to give you a copy of this code I wouldn't include node modules because it takes up a ton of space, `node modules` can be rebuilt by running a single command.

Now the question is how do I get the node modules folder back so I can actually work with this project. And the answer is to run a single command, the command that you need to run is `npm install`

If you run `npm install` just like this with no package name afterwards it's going to look in your `package json file` and install everything in `dependencies`.

You don't need to specify modules or module version because all of that lives in package. This makes it really easy to pass our projects around, when I you a zip, I don't have to give you a `huge node modules folder`. You can get that back by seeing changing directory to `boiler plate folder` and running `npm install`.

Now the next thing I want to do has to do with the directory structure. So what we're going to do is create two folders. The first folder inside the `boiler plate` it will be called `public`. So we still need a public folder that contains everything we want to serve up to our web server.

The second folder that we're going to create inside of boilerplate is going to be called source, `src` for short, inside here we're going to put our javascript code before it was processed by `babeljs`, inside `public` we are going to put the javascript code that was processed by babeljs because remember things  that are in public are the things we use for the application, and in this case we want to use this `output.js` file for our web app so it works in a wider range of browser.

So `src folder` will contain all the file which are original file, before conversion. For example `input.js`

The next thing we're going to do inside of public is create a new folder called `scripts` and this is where we're going to dump the `output script`.

So all of the code we type lives inside of the source folder. Then the babel output gets dumped inside of the script folder. So it can actually be used by the web application.

Before we go ahead and run the `babel script again` I'm going to change the name of `input.js` and `output.js` to make the last section easier to follow. But in the real world I would most likely call this file `index.js` as the starting point for our app.

So we have `index.js`, this is the file we now want to run through Babel. So let's go ahead and explore how we can set up the modified version of our previous command. so we are still going to start with babel like we had before.

```
babel src/index.js --out-file public/scripts/bundle.js --presents env
```

Now if you're like me you're probably pretty sick already of writing this command out in the terminal.

So the next thing I want to do is give you a better way to run scripts when you're just going to be typing the same thing over and over again like we would be here.

This is using these scripts property in `package.json`, what we are going to do is copy the command exactly as we have it above. So I'm going to take this and copy this to the clipboard and then I'm going to move over into package.json

```
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "input.js",
  "scripts": {
    "build": "babel src/index.js --out-file public/scripts/bundle.js --presents env"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-preset-env": "^1.7.0"
  }
}

```

> Note | scripts

```
"scripts": {
    "build": "babel src/index.js --out-file public/scripts/bundle.js --presents env"
  }
```

Now we can run this long command over and over again using this shorthand `build`, let's see how we get that done from the terminal right here.

```
npm run build
```

The good new is that we can make a small change to our scripts to actually have babel watch for changes. So let's go ahead and explore how to set that up, over `package.json` all we have todo is add a new option. so right at the very end of this script, we are going to add a space then two hyphens followed by watch. When we add on and watch it is not going to jus run babel once it'g going to run babel once then it is going to watch the input for changes when the input changes. When the input changes it is going to rerun babel and generate a new out file.
```
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "input.js",
  "scripts": {
    "build": "babel src/index.js --out-file public/scripts/bundle.js --presents env --watch"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-preset-env": "^1.7.0"
  }
}

```
When we add on watch, it is not going to just run babel once it's going to run babel once then it is going to watch the input for changes when the input changes, when the input changes it is going to rerun babel and generate a new out file.

So with this in place we can now automate our workflow.






## Summary