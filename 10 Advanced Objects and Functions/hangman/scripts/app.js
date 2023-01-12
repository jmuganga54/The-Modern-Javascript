const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 




window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
    

})
//1. For each character in the string, add a span into #puzzle
//2. The spans text should be the letter itself.

const render = () =>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.getStatusMessage()

    game1.getPuzzle().split('').forEach((letter)=>{
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

   
   
}

const startGame = async () =>{
    const puzzle = await getPuzzle('2')
    console.log(puzzle)
    game1 = new Hangman(puzzle,5)
    render()

}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle)=>{
//     console.log(puzzle)
// }).catch((err)=>{
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country)=>{
//     console.log(country)
// }).catch((err)=>{
//     console.log(err)
// })
