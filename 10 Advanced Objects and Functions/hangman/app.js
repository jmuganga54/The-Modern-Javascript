const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const guess1 = new Hangman('cat', 2)
puzzleEl.textContent = guess1.getPuzzle()
guessesEl.textContent = guess1.getStatusMessage()




window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    guess1.makeGuess(guess)
    puzzleEl.textContent = guess1.getPuzzle()
    guessesEl.textContent = guess1.getStatusMessage()
    

})


getPuzzle('2').then((puzzle)=>{
    console.log(puzzle)
},(error)=>{
    console.log(`Error: ${error}`)
})


getCountry('TZ').then((country)=>{
    console.log(`Country name:${country}`)
},(error)=>{
    console.log(`Error:${error}`)
})

fetch('http://puzzle.mead.io/puzzle',{}).then ((response)=>{
    if(response.status === 200){

    }else{
        throw new Error('Unable to fetch the puzzle ')
    }

}).catch((err)=>{
    console.log(`Error: ${err}`)
})

