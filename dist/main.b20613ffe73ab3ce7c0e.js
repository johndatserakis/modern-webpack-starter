!function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)a=u[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([117,1]),n()}({116:function(e,t,n){e.exports=n.p+"6276c382536c9399051fbbb9f5d1e13c.png"},117:function(e,t,n){n(118),e.exports=n(283)},283:function(e,t,n){"use strict";n.r(t);n(284),n(288);var r=n(116),o=n.n(r);function i(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){i(a,r,o,u,c,"next",e)}function c(e){i(a,r,o,u,c,"throw",e)}u(void 0)})}}var u=document.getElementById("app"),c=document.createElement("img");c.setAttribute("src",o.a),u.appendChild(c);var s=document.createElement("button");s.innerHTML="Emulate async/await call",s.className="main-button",u.appendChild(s);s.addEventListener("click",a(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.innerHTML="Wait a few seconds...",e.next=3,new Promise(function(e){setTimeout(function(){e("I pinky promise!")},2e3)});case 3:t=e.sent,window.alert(t),s.innerHTML="Emulate async/await call";case 6:case"end":return e.stop()}},e,this)})));var l=document.createElement("div"),f=document.createElement("a");f.setAttribute("href","https://github.com/johndatserakis/modern-webpack-starter"),f.innerHTML="View on GitHub",l.appendChild(f),u.appendChild(l)},284:function(e,t,n){var r=n(285);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(286)(r,o);r.locals&&(e.exports=r.locals)},285:function(e,t,n){}});