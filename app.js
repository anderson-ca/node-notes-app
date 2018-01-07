'use strict';
console.log('starting app.js...');

///////////////////////////////////////////////
/////////////// Node.js Modules ///////////////
///////////////////////////////////////////////

// fs (file system) built-in module. used for I/O file operations. It has both synchronous and asynchronous forms.
const fs = require('fs');

// os (operating system) build-in module used for operating system related tasks.
const os = require('os');

///////////////////////////////////////////////
///////////  Modules I have written ///////////
///////////////////////////////////////////////

// exporting functionality from a file created by myself by using require and passing a absolute path as a argument. Giving me access to methods inside notes.js
const notes = require('./notes.js');

///////////////////////////////////////////////
///////////// Third Party Modules /////////////
///////////////////////////////////////////////

// lodash is a third party module exported through npm, located inside the package.json file. Lodash is a toolkit of javascript functions that provides clean methods for manipulating objects and collections.
const _ = require('lodash');

///////////////////////////////////////////////
//////////// Playing with Modules /////////////
///////////////////////////////////////////////

// assign userInfo to a variable called user. UserInfo is a method that belongs to the os module, which returns information abbout the current user.
let user = os.userInfo();

// method that belongs to the fs module, which appends new information toa file. the mathods takes three arguments.
fs.appendFile('greeting.txt', `Hello ${user.username}!`, function (err) {
        if (err) {
            console.log('Unable to write to file.');
        }
    }
);

// assign the return form the addNotes method inside the notes module(file) to the result variable.
let result = notes.addNotes();

// assign the return form the add method inside the notes module(file) to the result variable.
let addition = notes.add(2, 2);

// testing out lodash array methods.
let uniqArray = _.uniq(['Ilaha', 1, 2, 2, 1, 5, 4, 5, 'Anderson']);

// console logging each result.
console.log(addition);

console.log(result);

console.log(module);

console.log(_.isString(true));

console.log(_.isString('Anderson'));

console.log(uniqArray);
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
