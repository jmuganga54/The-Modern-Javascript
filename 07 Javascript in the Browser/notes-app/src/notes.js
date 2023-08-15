let notes = []

/**
 * Get the notes from localStorage
 * @returns {array}
 */
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    } 
}
/**
 * Expose notes from module
 * @returns {array} notes
 */
const getNotes = () => notes

//calling the function
notes = loadNotes();

export {getNotes}