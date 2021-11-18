//Tags
const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeNoteBack = document.querySelector('#remove-back');
const dateElement = document.querySelector('#last-edited');

//getting the id from URL
const noteId = location.hash.substring(1);

//fetch all the notes been saved in localStorage
let notes = getSavedNotes();

//checking if noteId match, the id of fetched notes
let note = notes.find(function (note) {
    return note.id === noteId;
})

if (note === undefined) {
    location.assign('./index.html')
}

titleElement.value = note.title;
bodyElement.value = note.body;
//showing last edited
dateElement.textContent = generateLastEdited(note.updatedAt);


//event listener for title
titleElement.addEventListener('input', function (e) {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf()
    //showing last edited
    dateElement.textContent = generateLastEdited(note.updatedAt);
    savedNotes(notes);

})





//event listener for body
bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf()
    //show last edited
    dateElement.textContent = generateLastEdited(note.updatedAt);
    savedNotes(notes);

})




//remove the tiltle value and body values and send the user back to the home page
removeNoteBack.addEventListener('click', function () {
    removeNote(note.id);
    savedNotes(notes);
    location.assign('./index.html');

})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)

        note = notes.find(function (note) {
            return note.id === noteId;
        })


        if (note === undefined) {
            location.assign('/index.html')
        }

        titleElement.value = note.title;
        bodyElement.value = note.body;


    }

})