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

getCountry('TZs',(error,country)=>{
    if(error){
        console.log(`Error:${error}`)
    }else{
        console.log(`Country name:${country}`)
    }
})


