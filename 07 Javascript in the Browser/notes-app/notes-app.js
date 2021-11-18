let notes = getSavedNotes();

const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

//rendering Notes
renderNotes(notes, filters)

//search text
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
})

//dropdown
document.querySelector('#filter-by').addEventListener('change', (e) => {
  filters.sortBy = e.target.value;;
  renderNotes(notes, filters);
})

const form_id = document.querySelector('#note-form');
const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const createNote = document.querySelector('#create-note');

if (createNote) {
  createNote.addEventListener('click', function () {

    const id = uuidv4();
    const timestamp = moment().valueOf();



    notes.push({
      id: id,
      title: "Unnamed note",
      body: "",
      createdAt: timestamp,
      updatedAt: timestamp
    })
    savedNotes(notes);
    location.assign(`./edit.html#${id}`);
    renderNotes(notes, filters);;

  })
}

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    //1.Parse the new data and update notes
    notes = JSON.parse(e.newValue)
    //2.Rerender the notes
    renderNotes(notes, filters);

  }

})