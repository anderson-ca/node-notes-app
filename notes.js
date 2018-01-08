'use strict';
console.log('starting notes.js...');

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// add note method
let addNote = (title, body) => {
    console.log('Adding note', title, body);
};

// retrieve all notes method
let getAll = () => {
    console.log('Retrieving all notes...');
};

// retrieve individual note
let getNote = (title) => {
    console.log('Retrieved note:', title);
};

// remove note
let remove = (title) => {
    console.log(title, 'removed from notes');
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove
};




