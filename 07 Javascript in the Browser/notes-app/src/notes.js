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
  saveNotes();
};
//Saving notes

//calling the function
notes = loadNotes();

export { getNotes, createNote };
