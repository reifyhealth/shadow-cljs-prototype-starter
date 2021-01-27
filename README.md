# Shadow-CLJS Prototype Starter Template

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/), Clojurescript, and the [Heroku CLI](https://cli.heroku.com/) installed.

_TL;DR_
In 3 terminal windows, run:
* `$ npm run start`
* `$ npm run watch`
* `$ npm run SCSS`
```

$ git clone https://github.com/andreortiz82/shadow-cljs-prototype-starter.git
$ cd shadow-cljs-prototype-starter
$ npm install
$ npm run start

// You can also run this instead of npm start: 
$ heroku local web

```

### Running the CLJS
In another terminal window, run the ClojureScript. To compile the CLJS located in `./src/app`, run:

```
$ npm run watch
```

### Running the SCSS
In another terminal window, compile your SCSS. To compile the SCSS, run: 

```
$ node-sass scss/main.scss public/stylesheets/main.css

// To watch for changes, add `-w` or `--watch`

$ node-sass scss/main.scss public/stylesheets/main.css -w
```

Your app should now be running on [localhost:5000](http://localhost:5000/).


## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
