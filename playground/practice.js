
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// module is an object accessible thorughout th application that describes the current module(file, object etc..).
console.log(module);

// exports is a method contained inside module that allows one to create and exports functions to be used inside other files.
// module.exports.addNotes = () => {
//
//     console.log('add notes');
//
//     return 'new notes';
// };


// module.exports.add = (a, b) => {
//
//     return a + b;
// };

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// os (operating system) build-in module used for operating system related tasks.
const os = require('os');



// method that belongs to the fs module, which appends new information toa file. the mathods takes three arguments.
fs.appendFile('greeting.txt', `Hello ${user.username}!`, function (err) {
        if (err) {
            console.log('Unable to write to file.');
        }
    }
);


// assign the return form the addNotes method inside the notes module(file) to the result variable.
// let result = notes.addNotes();

// assign the return form the add method inside the notes module(file) to the result variable.
// let addition = notes.add(2, 2);

// testing out lodash array methods.
let uniqArray = _.uniq(['Ilaha', 1, 2, 2, 1, 5, 4, 5, 'Anderson']);

// console logging each result.
// console.log(addition);

// console.log(result);

console.log(module);

console.log(_.isString(true));

console.log(_.isString('Anderson'));

console.log(uniqArray);

// assign userInfo to a variable called user. UserInfo is a method that belongs to the os module, which returns information abbout the current user.
let user = os.userInfo();