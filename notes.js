'use strict';
console.log('starting notes.js...');

// module is an object accessible thorughout th application that describes the current module(file, object etc..).
console.log(module);

// exports is a method contained inside module that allows one to create and exports functions to be used inside other files.
module.exports.addNotes = () => {

    console.log('add notes');

    return 'new notes';
};


module.exports.add = (a, b) => {

    return a + b;
};

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////