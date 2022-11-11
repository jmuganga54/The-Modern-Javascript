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


getPuzzle((error,puzzle)=>{
    if(error){
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})


const countryCode = 'TZ'


const request = new XMLHttpRequest()

//setting the event Listener
request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 4 && e.target.status === 200){
        //2. Paste the responseText get back the array of objects
        const data = JSON.parse(e.target.responseText)
       
        //3. Find your country object by it's country code (alpha2Code property)
        //It is oK is use array.find()
        let sameCountryCode = data.filter((country)=> country.cca2 === countryCode
        )
    
        console.log(sameCountryCode[0]['name']['official'])
    
       
    }else if(e.target.readyState ===4){
        console.log('An error has taken place')
    }

})

//1. Make a new request for all countries
request.open('GET', 'https://restcountries.com/v3.1/all')
//send the request
request.send()


