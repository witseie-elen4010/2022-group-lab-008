const socket = io('https://wordlewithfriends.azurewebsites.net')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

// socket functions
// this changed what is inside of the function

const name = 'Admin'
socket.emit('new-user', { name: name, word: 'SUPER' })



messageForm.addEventListener('submit', e => {
    e.preventDefault()
    let message = messageInput.value
    
    fetch('/check', {
        method: 'POST',
        headers: {
          Authorization: 'wordcheck',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          word: message.toLowerCase()
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            console.log(data.truth)
          if (data.truth) {
            console.log(data.truth)
            console.log(message)
            message = message.toUpperCase();
            socket.emit('admin-word', message)
          }
          else {
            alert('Not a word')
          }
        });
    
  })
