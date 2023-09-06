import { v4 as uuidv4 } from "uuid";
import moment from "moment";

let notes = [];

/**
 * Get the notes from localStorage
 * @returns {array}
 */
const loadNotes = () => {
  const notesJSON = localStorage.getItem("notes");

  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
};

/**
 * Saving notes to local storage
 */
const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
/**
 * Expose notes from module
 * @returns {array} notes
 */
const getNotes = () => notes;

/**
 * Create a note
 */
const createNote = () => {
  const id = uuidv4();
  const timestamp = moment().valueOf();

  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  //Saving notes
  saveNotes();
};

/**
 * Remove a note from the list
 * @param {String} id - notes id
 */
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
    saveNotes();
  }
};

/**
 * Sort your notes by one of three ways
 * @param {String} sortBy - sorting criteria
 * @returns
 */
const sortNotes = (sortBy) => {
  if (sortBy === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

const updateNote = (id,updates) =>{
  const note = notes.find((note)=> note.id == id)

  if (!note){
    return ;
  }

  if(typeof updates.title === 'string'){
    note.title = updates.title;
    notes.updatedAt = moment().valueOf()
  }

  if(typeof updates.body === 'string'){
    note.body = updates.body;
    notes.updatedAt = moment().valueOf();
  }

  saveNotes();

}

//loading all the notes from localStorage
notes = loadNotes();

export { getNotes, createNote, removeNote, sortNotes, updateNote };
