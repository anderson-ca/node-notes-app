'use strict';
console.log('starting app.js...');

// fs (file system) built-in module. used for I/O file operations. It has both synchronous and asynchronous forms.
const fs = require('fs');

// os (operating system) build-in module used for operating system related tasks.
const os = require('os');

// exporting functionality from a file created by myself by using require and passing a absolute path as a argument. Giving me access to methods inside notes.js
const notes = require('./notes.js');

let user = os.userInfo();


fs.appendFile('greeting.txt', `Hello ${user.username}!`, function (err) {
        if (err) {
            console.log('Unable to write to file.');
        }
    }
);

console.log(user.username);
