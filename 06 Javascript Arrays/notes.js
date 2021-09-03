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

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return note;
// }


const sortNotes = function (notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0;
        }

    })
}

// const findNotes = function(note,query){
//     return notes.filter(function (note) {
//         let isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//         let isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch;
//     })

// }

// console.log(findNotes(notes,'eating'));  

sortNotes(notes)
console.log(notes)

