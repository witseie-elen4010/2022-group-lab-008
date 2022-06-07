// Aquire word from .ejs file and server
const test = document.getElementsByClassName('wordVal')
const testValue = test[0].dataset.testValue
console.log(testValue)
document.getElementById('data').innerHTML = testValue
