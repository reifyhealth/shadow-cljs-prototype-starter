# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```
or `heroku local web`.

### Running the CLJS
To compile the CLJS located in `./src/app`, run `npm run watch`.

### Running the SCSS
To compile the SCSS, run: `node-sass scss/main.scss public/stylesheets/main.css`
To watch the SCSS, run: `node-sass scss/main.scss public/stylesheets/main.css -w`

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
