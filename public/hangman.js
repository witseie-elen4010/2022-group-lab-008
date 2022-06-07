const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

// socket functions
// this changed what is inside of the function

const name = prompt('What is your name?')
socket.emit('new-user', { name: name, word: 'SUPER' })



messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    console.log(message)
    socket.emit('admin-word', message)
  })
