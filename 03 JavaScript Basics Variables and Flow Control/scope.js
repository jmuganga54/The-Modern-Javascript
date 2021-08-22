let varOne = 'varOne'
//Global Scope (varOne)
    //Local Scope (varTwo)
        //Local Scope (varFour)
    //LocalScope(varThree)

if(true){
    console.log((varOne))
    let varTwo = 'varTwo'
    console.log(varTwo)

    if(true){
        let varFour = 'varFour'
    }
}

if(true){
    let varThree = 'varThree';
}
console.log(varTwo)