require('./assets/images/favicon.png')
require('./assets/css/app.scss');
const imdImage = require('./assets/images/mws-profile.png')

import 'bootstrap';

let environment = 'development'
let base = ''
let path = window.location.pathname
if (path.includes('/modern-webpack-starter')) {
    environment = 'production'
}
if (environment === 'production') {
    base = '/modern-webpack-starter'
}

let main = document.getElementById('app')
let image = document.createElement('img')
image.setAttribute('src', imdImage)
main.appendChild(image)

if (path === (base + '/')) {
    main.innerHTML += 'Howdy. You\'re on the HOME page. <a href="' + base + '/about">Click here</a> to view the about page.'
}

if (path === (base + '/about')) {
    main.innerHTML += 'Howdy. You\'re on the ABOUT page. <a href="' + base + '/">Click here</a> to view the home page.'
}



