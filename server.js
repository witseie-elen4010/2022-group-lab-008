const express = require('express')
const app = express()
const path = require('path')

const password = 'b'
const username = 'a'

// adding the path to public
app.use('/public', express.static('./public/'))

// getting features
app.use(express.urlencoded({ extended: false }))

// setting the EJS engine
app.set('view engine', 'ejs')

// Home Page
app.get('/', (req, res) => {
  res.render('welcome')
})

// login or register
app.get('/signin', (req, res) => {
  res.render('signIn')
})
app.get('/register', (req, res) => {
  res.render('signUp')
})

// AfterLogin
app.post('/', (req, res) => {
  if (req.body.password === password && req.body.username === username) {
    res.render('gameMode')
  } else {
    res.send(`<h1>Password or Username Incorrect</h1> 
        <div class = row>
        <a class="btn btn-primary" href='/signin' method = "POST" role="button">Sign In Again</a>
        </div>`)
  }
})

// singleplayer
app.get('/singlePlayer', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'singleplayer.html'))
})

// multiplayer
app.get('/multiplayer', (req, res) => {
  // sending data in same way
  res.sendFile(path.join(__dirname, 'views', 'multiplayer.html'))
})

const db = require('./db.js')
app.get('/database', function (req, res) {
  // Make a query to the database
  db.pools
    // Run query
    .then((pool) => {
      return pool.request()
        // This is only a test query, change it to whatever you need
        .query('SELECT 1')
    })
    // Send back the result
    .then(result => {
      res.send(result)
    })
    // If there's an error, return that with some description
    .catch(err => {
      res.send({
        Error: err
      })
    })
})

app.listen(process.env.PORT || 3000)
