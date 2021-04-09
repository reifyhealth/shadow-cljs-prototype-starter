# Picasso Prototype Starter Project

A barebones project app using:

* [Antd](https://ant.design/components/overview/)
* [Picasso](https://github.com/reifyhealth/picasso-pkg)
* [Shadow-CLJS](https://github.com/thheller/shadow-cljs)
* [Express 4](http://expressjs.com/).
* [Heroku](https://heroku.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/), Clojurescript, and the [Heroku CLI](https://cli.heroku.com/) setup on your machine.

_TL;DR_
In 3 terminal windows, run:
* `$ npm run start`
* `$ npm run watch`
* `$ npm run SCSS`

Default credentials are:
`demo` : `demo`


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

#### HTTP Basic Auth
Username and Password can be set in the `./index.js` file.
Default credentials are:
`demo` : `demo`

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
