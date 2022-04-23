//Primitive value: Is a values that does not have properties it is not an object.

//Object: myObject --> Object.prototype --> null
//Array: myArray -->. Array.prototype --> Object.prototype --> null
//Function: myFunc --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null
//Number. myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null


// const product = 'Computer'
// console.log(product.split())

// const otherProduct = new String('Phone')
// console.log(otherProduct)


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