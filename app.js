'use strict';
console.log('starting app.js...');

const fs = require('fs');

const os = require('os');

let user = os.userInfo;


fs.appendFile('greeting.txt', `Hello ${user.username}!`, function (err) {
        if (err) {
            console.log('Unable to write to file.');
        }
    }
);

console.log(user.username);
