const letterButtons = document.querySelectorAll('button')
letterButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText)
    })
})