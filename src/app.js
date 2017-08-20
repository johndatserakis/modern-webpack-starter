// var msg = require("./contents.js");
// document.write(msg);

require("./assets/css/app.scss");

// const env = process.env.NODE_ENV || 'development'
// if (env !== 'production') {
//     require("./assets/css/app.scss");
// }

import 'bootstrap';

let path = window.location.pathname

if (path === '/') {
    let main = document.getElementById('app')
    main.innerHTML = 'Howdy. You\'re on the home page'
}

if (path === '/about') {
    let main = document.getElementById('app')
    main.innerHTML = 'Howdy. You\'re on the about page'
}



