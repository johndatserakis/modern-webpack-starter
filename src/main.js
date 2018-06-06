// Load favicon
import './assets/images/favicon.png'

// Load App's css (scss)
import './assets/css/app.scss'

// Load project image
import projectImage from './assets/images/mws-profile.png'

// Import bootstrap
import 'bootstrap';

// Let grab the path to do some rudimentary routing
let path = window.location.pathname

// Let's append the image to the page
let main = document.getElementById('app')
let image = document.createElement('img')
image.setAttribute('src', projectImage)
main.appendChild(image)

// Make a button and attach an async await call to test.
let button = document.createElement('button')
button.innerHTML = 'Emulate async/await call'
button.className = 'main-button'
main.appendChild(button)

let pinkyPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('I pinky promise!')
        }, 2000)
    })
}

button.addEventListener('click', async () => {
    button.innerHTML = 'Wait a few seconds...'
    let result = await pinkyPromise();
    alert(result)
    button.innerHTML = 'Emulate async/await call'
})

// Make a link to this project's github
let div = document.createElement('div')
let link = document.createElement('a')
link.setAttribute('href', 'https://github.com/johndatserakis/modern-webpack-starter')
link.innerHTML = 'View on GitHub'
div.appendChild(link)
main.appendChild(div)