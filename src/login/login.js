const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'wordle')));

// http://localhost:3000/
app.get('/', function (request, response) {
    // Render login template
    response.sendFile(path.join(__dirname + '/login.html'));
});

// http://localhost:3000/auth
app.post('/auth', function (request, response) {
    let username = request.body.username
    let password = request.body.password
    if (username === "user" && password === "wordle") {
        response.redirect('/home')
    } else {
        response.send('Incorrect Username and/or Password entered.');
    }
});

// http://localhost:3000/home
app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname, 'Framework', 'index.html'))
});

app.listen(3000);