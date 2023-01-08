## Topic
### Section Intro App Theme
At this point in the course, all of our apps are functionallly complete but obviously they look a bit deadful.

In this section we're going to switch that up. So theere are two goals in this section. The first is to integrate a theme for each of the application, I put together three themes one for each app. I'm going to walk you through the process of integrating it. 

That's going to take us from an unstyle application to a style of application that you feel a bit more confident to actually sharing.

The second thing we're ging to do is give you a way to actually share your work by deploying our applications to the Web. So you're gong to cmae up with a real URL, you can give that URL out to anybody with an internet connection and they're going to be able to view your app and actually use it.

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 




window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
    

})

const render = () =>{
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
}

const startGame = async () =>{
    const puzzle = await getPuzzle('2')
    console.log(puzzle)
    game1 = new Hangman(puzzle,5)
    render()

}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

## Keywords & Notes

## Summary