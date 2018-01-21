'use strict';
console.log('starting notes.js...');
let fs = require('fs');
let _ = require('lodash');

///////////////////////////////////////////////
////////////// Reusable Methods ///////////////
///////////////////////////////////////////////

////////////////////////
let fetchNotes = () => {

    // create try/catch in order to avoid stack-trace error. in case the        notes-data.json file doesn't exist or data inside the file is             corrupted.
    try {

        // assign data inside file to variable notesString.
        let notesString = fs.readFileSync('notes-data.json');

        // parse string object to a plain js object, and assign it to               previously created notes array.
        return JSON.parse(notesString);

    } catch (e) {

        return [];

    }

};

//////////////////////////
let saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes))


};

//////////////////////////
let getNoteByTitle = (title) => {
    let notes = fetchNotes();

    notes = notes.filter((note) => {

         if(note.title === title) {

             return note;
         }
    });

    let note = notes[0];

    return note;

};

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// add note method
let addNote = (title, body) => {

    // create empty array to store note objects.
    let notes = fetchNotes();

    // declare a note object with title, and body attribute. Assign the         argument from the addNote method as values for the keys inside the         object.
    let note = {
        title,
        body
    };

    // verify the user input is not duplicated by filtering duplicated          input to duplicateNotes array. Filter is an array method that takes       a callback function.
    let duplicatedNotes = notes.filter((note) => {

        return note.title === title;

    });

    // if duplicated variable is empty push data to file created.
    if (duplicatedNotes.length === 0) {

        notes.push(note);

        saveNotes(notes);

        console.log(note.title, 'added to note.');
        return note;

    } else {
        console.log('Title already in use!');
    }

};

// retrieve all notes method
let getAll = () => {
    console.log('Retrieving all notes...');

    let notes = fetchNotes();

    console.log(`Printing ${notes.length} note(s)...`);
    console.log('////////////////////////');
    notes.forEach((note) => {

        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
        console.log('-------')
    });

    return notes;
};

// retrieve individual note
let getNote = (title) => {

    return getNoteByTitle(title);

};

// remove note
let remove = (title) => {

    let notesList = fetchNotes();

    let notesRemove = notesList.filter((note) => {

        return note.title !== title;

    });

    saveNotes(notesRemove);

    return notesList.length !== notesRemove.length;

};

// console.log value
let logNote = (note) => {

    console.log('--------------------');
    console.log(note.title);
    console.log(note.body);
};


//////////////////////////////////////////////////
// EXPORTING METHODS INSIDE NOTE.JS IN THE FORM //
// AND JS OBJECT /////////////////////////////////
module.exports = {
    addNote,
    getAll,
    getNote,
    remove,
    logNote
};




