

//HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done



//Selectors
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

//Making an HTTP request 
//initialize a request using constructor function provided with a browser
const request = new XMLHttpRequest()
//setting an eventListener when the response is returned
request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
      //capture the responseText content and parse it 
      const data = JSON.parse(e.target.responseText)
      console.log(data)
    }else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }

})
// open request: HTTP method and path of where Jason is 
request.open('GET','https://puzzle.mead.io/puzzle?wordCount=3')
//send off the request
request.send()


