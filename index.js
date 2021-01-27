const express = require('express')
const basicAuth = require('express-basic-auth')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/', basicAuth({
  challenge: true,
  realm: 'demo',
  users: {'demo' : 'foobar'},
  unauthorizedResponse: 'Restricted area.'
}));
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
