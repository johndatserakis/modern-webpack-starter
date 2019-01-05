<p align="center"><a href="http://modern-webpack-starter.innermonkdesign.com/" target="_blank"><img width="200" src="./src/assets/images/mws-profile.png"></a></p>

<p align="center">
  <a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Issues"></a>
  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjohndatserakis%2Fmodern-webpack-starter&text=Check%20out%20modern-webpack-starter%20on%20GitHub&via=johndatserakis">
  <img src="https://img.shields.io/twitter/url/https/github.com/johndatserakis/modern-webpack-starter.svg?style=social" alt="Tweet"></a>
</p>

# modern-webpack-starter
A modern JavaScript starter using [Webpack 4](https://github.com/webpack/webpack). Made in a simple way - good for learning or starting a new project without having to rollout cli-auto-builders. You can view the demo [here](http://modern-webpack-starter.innermonkdesign.com/).

### Features
- Webpack 4.14.0
- Webpack-Dev-Server
- Bootstrap 4.1
- Babel
- SASS Handling
- Uglifying, Minimizing
- html-webpack-plugin, mini-css-extract-plugin, optimize-css-assets-webpack-plugin
- `@` Alias Support For Easy File Imports
- ESLint
- And more...

### Installing / Getting started

``` bash
# install dependencies
npm install

# serve using webpack-dev-server with hot reload at http://localhost:8080/
npm run watch

# build for production
npm run build
```

### General Information

#### Note - Now updated to Webpack 4!

My goal with this project was to make a simple Webpack starter template for use in modern-day development projects. While it is a good thing that a lot of the popular frameworks bundle their own CLI's to help scaffold projects, I felt I was losing something in translation - especially when it came to Webpack and the project initialization.

I've used [Grunt](https://github.com/gruntjs/grunt) in the past - and have been using [Gulp](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwj43N6Mn-bVAhXo5YMKHehPBYUQFggoMAA&url=https%3A%2F%2Fgithub.com%2Fgulpjs%2Fgulp&usg=AFQjCNFA8IbRiWBlkSJKjQyVnUb3ktwCwg) for many years now, and while Gulp and Grunt have been awesome, I believe the concepts Webpack introduces are critical and must be utilized in my projects going forward. I especially liked how Webpack coordinates everything for you - no more including code in the wrong order.

An issue I've had is finding a repository or tutorial that doesn't go too far - as I find it can be harmful when you are given too much - or too little - when learning.

So this project stops right before you would add a framework of your choosing. I've emulated a simple `async/await` promise call just to show that babel is working correctly.

In the end, I am an even bigger fan of Webpack now then when I started - although if I plan to use a framework in my application with 100% certainty - I may continue to choose the framework's chosen CLI tool when scaffolding with Webpack. Depends on the circumstances of course. I do really like `vue-cli`. It's just that sometimes I've found myself with the need to set it up myself - so this was a great learning experience, and hopefully it helps you.

### Hit Me Up

Go ahead and fork the project! Message me here if you have questions or submit an issue if needed. I'll be making touch-ups as time goes on. Have fun with this!

### License

Copywrite 2017 John Datserakis

[MIT](http://opensource.org/licenses/MIT)