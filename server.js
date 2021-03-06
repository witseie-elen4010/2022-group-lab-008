const express = require('express')
const app = express()
const path = require('path')
const dataQuery = require('./db/dbQueries')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const wordlist = []
const usernames = []
const passwords = []
const logs = []
const server = require('http').Server(app)
const io = require('socket.io')(server)
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
let singlePlayerWord = ''

const rooms = { Lobby1: {}, Lobby2: {} }

//
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

dataQuery.getAllPlayerLog()
  .then(result => {
    result[0].forEach(element => {
      logs.push(element)
    })
  })

// Allowing use of cookies
app.use(cookieParser())

// adding the path to public
app.use('/public', express.static('./public/'))

// getting features
app.use(express.urlencoded({ extended: false }))

// setting the EJS engine
app.set('view engine', 'ejs')

// Home Page
app.get('/', (req, res) => {
  res.clearCookie('usernameCookie')
  res.clearCookie('passwordCookie')
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

app.post('/validateUsername', async (req, res) => {
  try {
    const usernameIsAvailable = !usernames.includes(req.body.username)
    const username = req.body.username
    const password = req.body.password
    if (usernameIsAvailable) {
      const hash = await bcrypt.hash(password, 10)
      dataQuery.addUserInfo(username, hash)
      usernames.push(username)
      passwords.push(hash)
    }
    res.json({ truth: usernameIsAvailable })
  } catch (error) {
    console.log('Error: ' + error)
  }
})

// AfterLogin
app.post('/', (req, res) => {
  if (usernames.includes(req.cookies.usernameCookie)) {
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
  const verified = bcrypt.compareSync(req.body.password, passwords[index])
  if (verified) {
    res.cookie('usernameCookie', req.body.username)
    res.cookie('passwordCookie', passwords[index])
    res.render('gameMode')
  } else {
    res.send(`<h1>Password Incorrect</h1> 
        <div class = row>
        <a class="btn btn-primary" href='/signin' method = "POST" role="button">Sign In Again</a>
        </div>`)
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

app.post('/check', async (req, res) => {
  res.json({ truth: wordlist.includes(req.body.word) })
})

app.get('/lobby', (req, res) => {
  res.render('lobby', { rooms })
})

app.get('/getLogs', (req, res) => {
  res.render('logs', { logs })
})

app.get('/hangLobby', (req, res) => {
  res.render('hangLobby', { rooms: rooms })
})

app.get('/hangman', (req, res) => {
  res.render('hangman', { rooms: rooms })
})

// multiplayer
app.get('/:Multiplayer', (req, res) => {
  dataQuery.getRandomWord()
    .then(result => {
      singlePlayerWord = result[0][0].Word
      console.log(singlePlayerWord)
      res.render('multiPlayer', { roomName: req.params.room, word: singlePlayerWord })
    })
})

server.listen(process.env.PORT || 3000)

const users = {}
io.on('connection', socket => {
  socket.on('new-user', data => {
    users[socket.id] = data.name
    socket.broadcast.emit('user-connected', { name: data.name, word: data.word })
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message, name: users[socket.id] })
  })
  socket.on('send-word', message => {
    socket.broadcast.emit('incoming-word', { message: message.message, guess: message.guess })
  })
  socket.on('admin-word', message => {
    socket.broadcast.emit('incoming-admin-word', { message: message })
  })
})
