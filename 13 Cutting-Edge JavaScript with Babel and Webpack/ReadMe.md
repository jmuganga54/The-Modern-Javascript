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

The babel is going to take our javascript code and convert it to something that all browsers understand. So if we use a fancy cutting edge feature when we're writing our script, Babel is going to convert that to a dumber feature that all browser understand and that's what's actually going to run behind the scenes. This still allows us to work with and write code using the cutting edge features but our application will work pretty much everywhere.

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

The problem here is that we've run babel but we haven't specified any of the babel plug ins we want to use, by default babel does almost nothing, if we actually want to convert constant, class and the other ES6 and ES7 features which we do we have to set up just one more thing.

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

It's going to take the module code and it is going to dump it in a new directory in the root of our project. This one is called `node modules`. This is where the installed code lives in this folder contains the module that we just installed. It is not a folder we're going to be diving into and you shouldn't change any of the code inside of there. We can click it open for a moment just to see what lives inside of there. And it is essentially a long set of directories where we have our module that we installed as well as it's dependencies.

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
> You should never change anything in `mode modules`. You should never manually change anything in `package-lock.json` either. We are going to be making some changes to `package.json` throughout the course and that is perfectly fine.

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

The second folder that we're going to create inside of boilerplate is going to be called source, `src` for short, inside here we're going to put our javascript code before it was processed by `babeljs`, inside `public` we are going to put the javascript code that was processed by babeljs because remember things that are in public are the things we use for the application, and in this case we want to use this `output.js` file for our web app so it works in a wider range of browser.

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

## Avoiding Global Modules

In this section I want to take a few moments to talk about `global modules` and how they're going to relate to a project like `boilerplate` which has its own set of local dependencies.

We're actually going to end up uninstalling all of our global modules and adding them in as a `local dependencies`.

Let's talk about why a couple of section ago, I mentioned that node modules is not a folder we need to keep around or keep track of, I can always delete it and I can reinstall it by running `npm install` which installs all of the dependencies listed in `package.json`, this is really nice because I could zip up the boilerplate project folder without node modules and I could share it with a friend. I could give them a template to start building their next web app from.

The only problem is that when that friend runs `npm install` they're not going to have everything they need to actually work with the code because they don't have `babel cli` which the project depends which is what we're using to serve up our application.

So what we want to do is add both of those as local dependencies. So when we install our projects dependencies they come along for the ride as well.

Let's get started by running two commands from the terminal. We're going to run one command to uninstall both `live server` and `babel cli`. Then we'll talk about the implication of doing that.

I can uninstall local modules with `npm uninstall`, I can uninstall global ones by adding on the `g` flag, like we do with the install command. From here we can just list out separated by spaces all the modules we want to uninstall.

```
npm uninstall -g babel-cli live-server
```

If we go ahead and run the above command, it is going to uninstall both modules. Then we're going to reinstall both of them locally. So right here `npm install` no g flag we don't want to install them globally.

```
npm install babel-cli@6.26.0 live-server@1.2
```

Now the implications of doing this are that we no longer have access to either a live server or babel from the command line something that we're currently relying on for a live server.

If I cycle back through my previous commands and go back to `live server` running the public folder this command no longer works because `live server` is no longer installed.

```
liver-server public
```

But let's go ahead and take a look at our other command. If I shutdown the other command and then restart it what happens, it seems to work it seems to be waiting for us to make a change.

```
npm run build
```

So why is live server failing while our other command is working. That is because our other command is running from a script. When we run commands from our scripts in package.json we get access to all of the dependencies as if they were installed globally so I can still access Babel from inside of the build script.

Now if I want to try to run babel from the terminal like we did earlier in the course before we added it as a script that would indeed fail.

```
babel --help
```

Well it means that we don't have to change this script at all. The build script currently gets the job done, all we have to do is add on another one for a liver server.

```
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "input.js",
  "scripts": {
    "serve": "live-server public",
    "build": "babel src/index.js --out-file public/scripts/bundle.js --presents env --watch"

  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "live-server": "1.2"
  }
}
```

Then run the serve

```
npm run live-server public
```

This is going to use the locally installed version of live server, we can see the server is up and running and I can refresh thing in the background and we can see the page is still live.

> Using local modules in this way it makes life just a little bit easier. All of the dependencies for our project live in package.json and you can run `npm install` to install all of them.

## Exploring Webpack

In this section we're going to start talking about the second tool we'll be introducing in our javascript project, this is `webpack`, is an awesome tool that opens up a world of new features for us to use.

So what we're going to do in this section is go through quick visualization to talk about exactly how `webpack` fits into the bigger picture.

Then in the next couple of sections we'll actually go through the process of installing it setting it up and using it in our boiler plate project.

Let's start with our current workflow, we have a file called `index.js` which contains the code that we actually write and add it in visual studio code.

![Webpack](./imgs/webpack.png)

We then pass that code through babel which converts the modern javascript into javascript that can be be executed from pretty much anywhere and babel splits out a file.

`bundle.js` this is the file that actually runs in the browser. So this is the set up that we currently have and we are currently using.

When we introduce `webpack` it's going to be very similar with a slight tweak. So we are still going to have some file that contains the code we write and we are still going to pass it through some tool, and in the end of the day we are going to get a single file back which contains all of the code that needs to run in the browser.

The difference is that `webpack` can do way more than `babel`. That's no to say Babel is a bad tool. `Webpack` is just a more flexible tool which allows us to do a few interesting things including running babel.

So with webpack we're going to continue to run babel as we already have set up. But we're also going to get access to some awesome stuff.

And one thing I want to place an emphasis on in this section is the javascript modules system, when we use the module system we get a brand new way to structure and set up our Javascript code.

I actually want to spend the second part of this section moving through a quick visualization that shows us how the `modules system` is going to change our project structure.

So right here we have the `before` webpack example and the `after` webpack example, we're currently living in the before webpack example.

We start off with public directory and in there we have our assets. One of those being HTML pages we might need in this case I'm just going to stick with one `index.html`.

We also have those javascript files we have `uuid.js`, `notes-app.js` and `notes-functions.js`. And all three of these needed to be loaded in in a specific order.

If `notes-app.js` file needs something from `uuid.js` file which it does and `note-function.js` file needs to be loaded first.So we have 1,2 and 3 ensuring that both of these files get access to the ID for function defined in here.

Now all of this creates a few problems. First up we have three script tags. That means we're making three requests from the browser to the server for a new javascript file making those requests and then waiting for our response takes time. So we want to minimize the number of requests to get down to just one single file that contains everything.

The other problem is that because the files need to be loaded in a specific order it's really hard to share code between those files. We either end up sharing too much or we share things, but in the wrong order. So if `notes-app.js` need to share something with `notes-functions.js` file it actually can't. Because `notes-app.js` file is `3` and `notes-functions.js` is `2` and we might accidentally expose something from `notes-functions.js` that we didn't really want `note-app` to have access to.

This can create problems when we're defining the same variable name across our files and running into issues.

So we're going to be able to leave all of this in the past after we introduce `webpack` with `webpack`. With webpack our files is going to look a bit different.

The first thing I notice is that we have three directories we have `public folder` still and this is where our `index.html` file is going to live and then we also have a `source folder` and `node modules` folder.

![Exploring webpack](./imgs/exploring-webpack.png)

The source folder `src/` is going to contain all of the javascript code that we write, `node modules` is going to contain all of the `third party application code` we need. So we still have the same three files, the're just structured a bit differently.We have the app file and the functions file in the `source directory` and `uuid.js` is going to live in node modules.

We'll talk about how to set all of this up in the next several section, in this section we're just visualizing how this would work.

Now from here wha't going to happen, well our files still need to communicate. So one of these two files `notes-app.js or notes-functions` might need access to `uuid.js` and the `notes-app.js` files might need access to something from `notes functions`.

With modules system in place, any file can try to import something from another file and any given file can export something specific. So `notes-function.js` file could export a function called `get-notes` or `save-notes`. This file could then import that function and actually use it where needed.

So we would have some arrows like the above showed, that `notes-app.js` can access things from the other files in controlled and structured way. The `notes-app.js` file specify what they want to expose and `note-function.js` specifies what it actually needs.

Now how is all this work. Well it all works because of webpack. Webpack is going to take all of our assets, it's going to bundle them up into a single file called `bundle.js` and this is going to give us access to this `module's` system which is what we're going to explore in the next section. In the end of the day all we need to do is load in a single script with a single script tag.

So with webpack we're going to be able to reduce the number of script tags making our application faster.

We're also going to be able to reduce the weird ordering in order to share code between our files with the `new import export system`, we're going to have a much better way to structure things.

Excited to get in other weeds with webpack and start installing it and setting it up.

## Setting up Webpack
In this section we'll learn how to install webpack into the boilerplate project and you're going to learn how to configure it to work with our project structure.

This is going to give use access to all sorts of awesome stuff like the javascript modules system which is very exciting.

Before we dive into anything and install webpack. I want to show you where webpack lives on the web. And the one page that I want to point out ont his website is the documentation page. The documentation page is basically an entire website on its own.It outlines everything that webpack can do. Incase you want to dive deep, just read the documentation.

[Webpack documentation](https://webpack.js.org/concepts/)

In this section we're going to come up with the most basic configuration necessary to get webpack to work. Then throughout the section we'll be adding more things to our well-packed configuration to enable new features, to kick things off, we do need to install webpack in our project, it's an npm module.

So let's go ahead and move in to the terminal. We are going to use a control C to shutdown the server script, then we are going to use `npm install` to install two new modules.

Now I'm leaving off the g flag because we want to install these as local modules and not global modules. The first one is `webpack@4.5.0` and the second one is `webpack-cli@2.0.14`.

```
npm install webpack@4.5.0 webpack-cli@2.
0.14
``` 

After installing, we're going to go ahead and move over to Visual studio code and we're going to create the configuration file that webpack needs.So in the end of the day we're going to be running a webpack via a script just like we run babel via a script.

We can actually go ahead and create that script right now, the script name itself can be whatever we want.

```
"webpack": "webpack"
```
Now you'll notice this is similar to running babel without any of the arguments, webpack actually allows us to create the separate configuration file. So we don't have to define a really long command here. Instead we can create a javascript file and we can set up an object that defines all of the thing like where the code lives, what we want to process and where we want to save the processed code.

So let's go ahead and knock that out by creating a new file. This file needs to live in the root of your project and its name it needs to match up exactly with this `webpack.config.js`, and this is where we configure webpack specifying the details of our project.

The code we put in this file is eventually going to get processed via `node.js`. So we actually need to take advantage of a couple of node specific features which I'll walk you through. So bear with me through this webpack configuration.

The big picture goal is to create a configuration object and we actually define this object on `module.exports` is specific to `nodejs`. This is how we can expose something from a given file, and in this case we are exposing the configuration object right here inside of the object, inside the object we can now start providing the configuration details for our purposes, to get the basic configuration in place, we have to specify the input and the output, the input also known as the entry, for webpack is going to get defined first.

So we are going to setup our first property on the object entry and we're going to set entry equal to string. This string is relative path to the place where our code lives. So for us this is inside of the source directory and the file is called `index.js`

```
modules.exports = {
  entry: './src/index.js'
}
```

We have half of the configuration down, webpack now knows where to find the code to process. The only thing we have to still specify is where to save the processed code. We can now add a second property onto our configuration object. This one is called `output` and output actually doesn't get set equal to a string, it gets set equal to an object since there are a lot of different things we can configure about the output, for our purpose we are going to configure just one path and path get set equal to a string, it contains the path to where we want to save the webpack output.

So for us we want to save it in the public scripts directory.Now there is a catch what goes inside of the path value needs to be an absolute path unlike entry which can be a relative path, the absolute path needs  to start from the root of our hand drive and navigate all the way to the correct location.

```
modules.exports = {
  entry: './src/index.js',
  output: {
    path: '/Users/macbook/Documents/Learning_center/Computer Science/Learning_code/modern-javascript-bootcamp/13 Cutting-Edge JavaScript with Babel and Webpack/boilerplate/public/scripts'
  }
}
```

`/Users/macbook/Documents/Learning_center/Computer Science/Learning_code/modern-javascript-bootcamp/13 Cutting-Edge JavaScript with Babel and Webpack/boilerplate/public/scripts` This is a absolute path, it start the way from the root of my hard drive and navigate into my user folder untill to the specified location.

The problem is that this path is subject to change. If I take the boilerplate project and move it from this folder to my documents folder for example the path is going to change. If I share this with a friend whose user name isn't `Andrew` the path is going to change. So we don't want to define this string right inside of here because that's not very flexible it's pretty much going to break any single time we change the location of the project or someone else works on the project with us.

What we want to do is provide an absolute path that's a bit more flexible. Luckily `nodejs` gives us good way to get this done. The first piece of puzzle is nodejs global variable. It's `__dirname` and this provides the absolute path to the root of your project. So for our purposes with the `webpack.config.js` it's going to provide this portion of the path all the way from the root of the hard drive up to the `boilerplate` folder so we can get all of the stuff that's subject to change with the name variable.

All we need to do then is tack on `public/scripts` which is never going to change because it's all part of the project structure and `public/scripts` portion is going to be the same regardless of where the project lives on my folder or if I share it with someone else and they're on a different operating system or have a different user name.

Now the value for path is not going to be a simple as `just taking __dirname`and concatenating something on like for example forward slash public forward slash scripts `path: __dirname + '/public/scripts/`, this isn't going to work because of cross operating system issues with path's windows, linus and Mac, have different systems or working with those paths. We need a universal way to get this done, nodejs give us few functions that allow us to get this done up above.

We need to explore one more node feature. What we're going to do is create a concept called `path` we're then going to load in one of the libraries that nodejs provides, this library gives us whole bunch of utility methods for working with paths, we can combine two paths in a universal way to get this, we use the require function and we pass to require as single argument a string and provide the name of the library, we would like access to the one that we're going to be accessing is called `path.

So now we have access `const path = require('path')` to this library path.`path` is just an object with a bunch of methods, on it down below, we are going to use one of those methods, it is `path.resolve` which is going to allow us to combine those two pieces to come up with the final absolute path.`path: path.resolve()` inside the resolve methods we pass two arguments, the first is `--dirname`, the second argument is `public/scripts/`, and there we go.

```
const path = require('path')
modules.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts')
  }
}
```

We now have an absolute path that's going to work in all operating systems and with this in place we actually have our basic configuration all set up. 

We can go ahead and save the `webpack.config.js` file and we can save `package.json` and we're going to go ahead and move into the terminal and actually run that webpack script to kick things off.

Then we are going to run webpack

```
npm run webpack
```

The above command is going to run webpack and we're going to get a whole bunch of confusing output. So in the end of the day what happened here is a successful build webpack was able to run correctly and it actually created a new file in our project this file lives in the folder we specified and by default it's called `main.js` 

When we open `main.js`, you can see that webpack has done a few really nice things for us. The first thing it's done is it has minimized all of our code making it as small as possible. This makes it very difficult for humans to actually read it but it makes thing much faster when a computer is processing it by reducing the total number of characters in the file.

The codes from `main.js` is the code that we're going to end up running from the browser. Now with this code we have access to the modules system and that's what we're going to explore in the very next section.

Before we go and dive into that I do want to show you how you can change the name of the file that's spit out over in webpack.config.js, we can add another property to the output object along  

```
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: 'bundle.js'
  },
};

```

## Javascript Modules Part 1

That we now have webpack all set up. In this section we're going to start taking advantage of what web pack actually offers us, one of the main things it offers is the javascript module system which gives us a better way to structure our application, so that what we're going to spend the next couple of video talking about.

Now the good news is that we don't need to install anything new or change our configuration at all.

We're going to spend all of our time working with files in the source directory. We're going to work with `index.js` and we're going to create a new file as well.


The whole point of the module system is to give us a better way to structure and build out our javascript applications in the past if I wanted to have one file, use a function defined in a different file, we had to load in multiple files with multiple script tags and we had to load them in a specific order.

No longer is that going to be the case with web pack, we always just have one file coming out, this contains everything needed to run our application and we only ever loaded in with a single script tag. Even though the underlying application might have multiple scripts.

So let's go ahead and demonstrate how this is going to work by creating a second script in the source directory `utilities.js`

```
run live server (npm run server)
run webpack(npm run webpack)
```
Now after running webpack, we can notice that the only file being loaded is the `src/index.js` file. Nowhere in this output do I see anything about my ew `utilies.js` file.

That's because when web packs starts it starts with the entry point. Our entry point `index.js` gets loaded, `index.js` doesn't specify that it needs anything from any other files so no other files actually run.

now the solution is to no change web pack configuration at all. The solution is to use the javascript modules system. It gives us new two things, we have the `import statement` and the `export statement` and the import statement can be used to grab something from another file.

So `index.js` can use `import` to grap a function or a variable from some other file, the `export statement` can be used to export something from a file. So we can export function from `utilities.js`, that gets used over in `index.js` databasese allowing us to share code between those files.

Currently there is nothing to grap from `utilities.js`. All we're going to do is use the `import statement` to get this file to run so we can actually see it's `console.log printing` int eh browser to do this, we're going to add an `import statement` into `index.js` and import statements start off with the `import` keyword.

Now when it comes to our import statements with web pack we can actually leave off the file extension. They're completely option.

```
//index.js
import './utilties'

console.log('index.js')
```

Then run webpack `npm run webpack`

```
//webpack ouput

cacheable modules 73 bytes
  ./src/index.js 46 bytes [built] [code generated]
  ./src/utilties.js 27 bytes [built] [code generated]

```
We can see that our entry point now has two files listed `indexjs` and `utilities.js`, this is only showing up because of the `import statement` we added to our code over inside the browser. Both files are executing

```
//console log
utilities.js
index.js
```

Now you might think that to actually share code between the two files I can just create a variable in index.js and use it .

So this brings us to the first important thing to not about using the module system, each file has it's own separate scope no longer are available share between files, and `this is a good thing.`

Now this separate scope doesn't means we can't share code between files, after all that's the whole point of the module system. This does mean though that we have to be explicit about what we're exporting from one file and what we're importing from another.

Currently utilities has no exports meaning that data `index.js` is actually not going to be able to access `add` even if it wanted to.

We're going to go ahead and change that by exporting add right here.

We can create an export statement out of an existing variable declaration by just adding `export` with a space upfront.

So here we are now saying we are exporting the constant `add` we could also export `let` if we wanted to.

```
//utilite.js

console.log("utilities.js");

export const add = (a, b) => a + b;
```

You can use function add down below the export with the utilities.js.

All we're saying is that other files should also be able to access this if they need it. So now that we are explicits exporting the add function we can access it for the index.js by making a change to the import statement.

It is not enough to just import the file, we have to specify the things we want from that file.

So I'm going to go ahead and comment out this import statement and we're going to look at a different import statement that allows us to grab thing like `add`.

```
//import "./utilties";
import {add} from './utilties'

console.log("index.js");
console.log(add(2, 3));

//Expected output:
utilities.js
index.js
5
```

### Challenge 

```
1. Create new file called scream.js
2. Export a 'screams` function that takes a string
   a. Convert that string to upper case
   b. Add "!" onto the end
3. Import scream into index.js and use it.
```

```
//utilities.js
console.log("utilities.js");
export const add = (a, b) => a + b;
export const name = "Andrew";

//screams.js
export const screams = (string) => `${string.toUpperCase()}!`;


//index.js
import { add, name } from "./utilties";
import {screams} from "./screams"

console.log("index.js");
console.log(add(2, 3));
console.log(name);
console.log(screams('joseph'))

Expected output:
utilities.js
index.js
5
Andrew
JOSEPH!


```










## Summary
