// Create web server with express
const express = require('express')
const app = express()
const port = 3000
// Setting up mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/comment', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})
// Setting up body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// Setting up template engine
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// Setting up routes
const routes = require('./routes')
app.use(routes)
// Start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
