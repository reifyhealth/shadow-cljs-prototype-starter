const express = require('express')
const basicAuth = require('express-basic-auth')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
const users = {'picasso' : 'picasso'}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/', basicAuth({
  challenge: true,
  realm: 'demo',
  users: users,
  unauthorizedResponse: 'Restricted area.'
}));
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.render('pages/index'))
app.get('/sketch', (req, res) => (res.render('pages/sketch')))
app.get('/design', (req, res) => res.render('pages/design'))
app.get('/validate', (req, res) => res.render('pages/validate'))
app.get('/plan', (req, res) => res.render('pages/plan'))
app.get('/frontend', (req, res) => res.render('pages/frontend'))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
