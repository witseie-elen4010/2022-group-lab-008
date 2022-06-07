function validatePassword(password) {
    if (password.length < 8) {
        return false
    }
    if (password.length > 99) {
        return false
    }
    return true
}

function comparePasswords(password, confirmPassword) {
    return (password === confirmPassword)
}

async function validateUsername(username, password) {
    const response = await fetch('/validateUsername', {
        method: 'POST',
        headers: {
            Authorization: 'usernameAvailable',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
    const validity = await response.json();
    return validity.truth;
}

function registerComplete(validity) {
    console.log(validity)
    if (!validity) {
        alert('Username Taken!')
        return
    }
    location.href = "/registerComplete";
}
const letterButtons = document.querySelectorAll('button')
letterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const password = document.getElementById('password').value
        if (!validatePassword(password)) {
            alert('Invalid Password. Must contain at least 8 and no more than 99 characters!')
            return
        }
        const confirmPassword = document.getElementById('confirmPassword').value
        if (!comparePasswords(password, confirmPassword)) {
            alert('Passwords do not match')
            return
        }
        const username = document.getElementById('name').value
        validateUsername(username, password).then(validity => {
            registerComplete(validity)
        });
    })
})

module.exports = {
    validatePassword,
    comparePasswords,
    validateUsername
}


