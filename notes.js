'use strict';
console.log('starting notes.js...');


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
let fs = require('fs');

// add note method
let addNote = (title, body) => {

    // create empty array to store note objects.
    let notes = [];

    // declare a note object with title, and body attribute. Assign the         argument from the addNote method as values for the keys inside the         object.
    let note = {
        title,
        body
    };

    // create try/catch in order to avoid stack-trace error. in case the        notes-data.json file doesn't exist or data inside the file is             corrupted.
    try {

        // assign data inside file to variable notesString.
        let notesString = fs.readFileSync('notes-data.json');

        // parse string object to a plain js object, and assign it to               previously created notes array.
        notes = JSON.parse(notesString);

    } catch (e) {

    }

    // verify the user input is not duplicated by filtering duplicated          input to duplicateNotes array. Filter is an array method that takes       a callback function.
    let duplicatedNotes = notes.filter((note) => {

        return note.title === title;

    });

    // if duplicated variable is empty push data to file created.
    if (duplicatedNotes.length === 0) {

        notes.push(note);

        fs.writeFileSync('notes-data.json', JSON.stringify(notes))

    }

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




