const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'Exercise, Eating a bit better'
}, {
  title: 'Office modifications',
  body: 'Get a new seat'
}]

const filters = {
  searchText: ''
}

//renderNotes function
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  document.querySelector('#notes').innerHTML = '';
  filteredNotes.forEach(function (note) {
    let noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    document.querySelector('#notes').appendChild(noteEl);
  })
}

//rendering Notes
renderNotes(notes, filters)


//create a notelet hour = data.hour;
document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = 'The button was clicked';
})

//search text
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters)
})

//dropdown
document.querySelector('#filter-by').addEventListener('change', (e) => {
  console.log(e.target.value);
})