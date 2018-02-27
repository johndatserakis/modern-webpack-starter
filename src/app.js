require('./assets/images/favicon.png')
require('./assets/css/app.scss');
const imdImage = require('./assets/images/mws-profile.png')

import 'bootstrap';

let path = window.location.pathname

let main = document.getElementById('app')
let image = document.createElement('img')
image.setAttribute('src', imdImage)
main.appendChild(image)

if (path === ('/')) {
    main.innerHTML += 'Howdy. You\'re on the HOME page. <a href="/about">Click here</a> to view the about page.'
}

if (path === ('/about')) {
    main.innerHTML += 'Howdy. You\'re on the ABOUT page. <a href="/">Click here</a> to view the home page.'
}



