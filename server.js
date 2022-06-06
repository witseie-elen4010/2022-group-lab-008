const express = require('express')
const app = express()
const path = require('path')
const dataQuery = require('./db/dbQueries')
const wordlist = []

// add list of words to server
dataQuery.getAllWords()
  .then(result => {
    result[0].forEach(element => {
      wordlist.push(element.Word)
    })
  })

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
  dataQuery.getRandomWord()
    .then(result => {
      console.log(result[0][0].Word)
      res.render('./singlePlayer', { word: result[0][0].Word })
    })
})

// singleplayer
app.get('/singlePlayer/test', (req, res) => {

})

// multiplayer
app.get('/multiplayer', (req, res) => {
  // sending data in same way
  res.sendFile(path.join(__dirname, 'views', 'multiplayer.html'))
})

app.listen(process.env.PORT || 3000)
