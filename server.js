const express = require('express')
const app = express()
const path = require('path')
const dataQuery = require('./db/dbQueries')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
app.use(bodyParser.json());
const wordlist = []
const usernames = []
const passwords = []
let singlePlayerWord = ''

// add list of words to server
dataQuery.getAllWords()
  .then(result => {
    result[0].forEach(element => {
      wordlist.push(element.Word)
    })
  })

dataQuery.getAllUserInfo()
  .then(result => {
    result[0].forEach(element => {
      usernames.push(element.UserName)
      passwords.push(element.Password)
    })
  })

//Allowing use of cookies
app.use(cookieParser());

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

app.get('/registerComplete', (req, res) => {
  res.render('welcome')
})

app.post('/validateUsername',  (req, res) => {
  usernameIsAvailable = !usernames.includes(req.body.username)
  username = req.body.username
  password = req.body.password
  if (usernameIsAvailable) {
    dataQuery.addUserInfo(username, password)
    usernames.push(username)
    passwords.push(password)
  }
  res.json({ truth:  usernameIsAvailable})
})

// AfterLogin
app.post('/', (req, res) => {
  if (usernames.includes(req.cookies.usernameCookie))
  {
    console.log('Working')
    res.render('gameMode')
    return
  }
  if (!usernames.includes(req.body.username)) {
    res.send(`<h1>Username Incorrect</h1> 
        <div class = row>
        <a class="btn btn-primary" href='/signin' method = "POST" role="button">Sign In Again</a>
        </div>`)
    return
  }
  const index = usernames.indexOf(req.body.username)
  if (passwords[index] === req.body.password) {
    res.cookie(`usernameCookie`,req.body.username);
    res.cookie(`passwordCookie`,req.body.password);
    res.render('gameMode')
  }
  else {
    res.send(`<h1>Password Incorrect</h1> 
        <div class = row>
        <a class="btn btn-primary" href='/signin' method = "POST" role="button">Sign In Again</a>
        </div>`)
    return
  }
})

// singleplayer
app.get('/singlePlayer', (req, res) => {
  dataQuery.getRandomWord()
    .then(result => {
      singlePlayerWord = result[0][0].Word
      console.log(singlePlayerWord)
      res.render('./singlePlayer', { word: singlePlayerWord })
    })
})

app.post("/check", async (req, res) => {
  res.json({ truth: wordlist.includes(req.body.word) })
});

// multiplayer
app.get('/multiplayer', (req, res) => {
  // sending data in same way
  res.sendFile(path.join(__dirname, 'views', 'multiplayer.html'))
})

app.listen(process.env.PORT || 3000)
