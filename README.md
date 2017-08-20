<p align="center"><a href="https://modern-webpack-starter.innermonkdesign.com/" target="_blank"><img width="200" src="./src/static/koa-vue-notes-icon.png"></a></p>

# modern-webpack-starter
A modern JavaScript frontend using Webpack built from scratch. You can view the demo [here](https://modern-webpack-starter.innermonkdesign.com/).

## Features
- Webpack 3.5
- Bootstrap 4 Beta
- Babel
- SASS Handling
- Uglifying, Minimizing
- html-webpack-plugin, extract-text-webpack-plugin, optimize-css-assets-webpack-plugin
- And more...

## Installing / Getting started

``` bash
# install dependencies
npm install

# serve using webpack-dev-server with hot reload
npm run watch

# build for production
npm run build
```

## General Information

My goal with this project was to make a simple Webpack starter template for use in modern-day development projects. While it is a good thing that a lot of the popular frameworks bundle their own CLI's to help scaffold projects, I felt I was losing something in translation - especially when it came to Webpack.

I've used Grunt in the past - and have been using Gulp for many years now, and while Gulp has been awesome, I believe the concepts Webpack introduces are critical and must be utilized in my projects going forward. I especially liked how Webpack coordinates everything for you - no more including code in the wrong order.

An issue I've had is finding a repository or tutorial that doesn't go too far - as I find it can be harmful when you are given too much - or too little - when learning.

So this project stops right before you would add a framework of your choosing. I've emulated a simple router system just to show the concept.

`npm run watch` and `npm run build` both execute a Webpack config file made just for them. This was needed mainly because the CSS gets added in a different way in production. In development it is served with JavaScript in a `require('./assets/css/app.scss');` statement. In production we're utilizing `extract-text-webpack-plugin` which loads our css in the more traditional way. This will make sure we don't see any flashes of unstyled content and our CSS can be cached correctly.

In the end, I am an even bigger fan of Webpack now then when I started - although if I plan to use a framework in my application with 100% certainty - I may continue to choose the framework's chosen CLI tool when scaffolding. Depends on the circumstances of course.

## Hit Me Up

Go ahead and fork the project! Message me here if you have questions or submit an issue if needed. I'll be making touch-ups as time goes on. Have fun with this!

## License

Copywrite 2017 John Datserakis

[MIT](http://opensource.org/licenses/MIT)