'use strict'
// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }


}
//Save the notes to localStorage
const savedNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}
//Remove a note from the list
const removeNote = (id) => {
    console.log(notes);
    console.log(id);
    //finding  the index of an item to remove
    let noteIndex = notes.findIndex((note) => note.id == id)
    //remove the item based of its index 
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }


}

//Generate the DOM structure for a note
const generateNoteDOM = (note) => {

    const noteEl = document.createElement('div');
    const textEl = document.createElement('span');
    const linkNote = document.createElement('a');
    const button = document.createElement('button')

    //Setup the  remove note button
    button.textContent = '*';
    noteEl.appendChild(button);
    button.addEventListener('click', () => {
        removeNote(note.id);
        renderNotes(notes, filters);
        savedNotes(notes);
    })

    linkNote.setAttribute('href', `./edit.html#${note.id}`);

    //Setup the note title text
    if (note.title.length > 0) {
        linkNote.textContent = note.title;
    } else {
        linkNote.textContent = 'Unnamed note'
    }
    textEl.appendChild(linkNote);
    noteEl.appendChild(textEl);


    return noteEl;
}
//Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {

    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updateAt < b.updateAt) {
                return 1
            } else {
                return 0
            }

        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAT) {
                return 1
            } else {
                return 0
            }

        })

    } else if (sortBy == 'alphabetical') {
        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }

        })

    } else {

        return notes;
    }
}

//Render application notes
const renderNotes = (notes, filters) => {

    notes = sortNotes(notes, filters.sortBy)

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note);

        document.querySelector('#notes').appendChild(noteEl);
    })
}

//Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}