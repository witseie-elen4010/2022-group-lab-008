const express = require('express')
const app = express()
const path = require('path')

let password = 'joseph'
let username = 'swaggott'

// adding the path to public
app.use("/public", express.static('./public/'));

//getting features
app.use(express.urlencoded({extended: false}))

// setting the EJS engine
app.set('view engine', 'ejs');

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


// singleplater
app.get('/singlePlayer', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'singleplayer.html'))
})






app.listen(20000)