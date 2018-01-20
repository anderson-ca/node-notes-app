// "use strict";
//
// // simple javascript object
// let obj = {
//     name: 'Anderson',
//     age: 25,
//     status: 'unemployed'
// };
//
// // stringify is a method that belongs to the JSON object. Stringify takes an object parameter and turns that object to a json object.
// let personString = JSON.stringify(obj);
//
// console.log(typeof personString);
//
// console.log(personString);
//
// // parse is also a method that belongs to the JSON object. Parse turns json objects back to plain objects.
// let personNotString = JSON.parse(personString);
//
// console.log(typeof personNotString);
//
// console.log(personNotString);

const fs = require('fs');

let originalNote = {
    title: 'some title',
    body: 'some body'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note);

debugger;

console.log(note.title);











