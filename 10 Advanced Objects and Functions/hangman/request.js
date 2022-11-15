const getPuzzle = (callback) =>{
    const request = new XMLHttpRequest()
    //setting an eventListener when the response is returned
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(e.target.responseText)
        callback(undefined,data.puzzle)
        
    }else if(e.target.readyState === 4){
        callback('An error has taken place',undefined)
    }

    })
    // open request: HTTP method and path of where Jason is 
    request.open('GET','https://puzzle.mead.io/puzzle?wordCount=3')
    //send off the request
    request.send()
}



const getCountry = (countryCode,callback)=>{
    //make HTTP request
    const request = new XMLHttpRequest()
   
    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            let sameCountryCode = data.filter((country)=> country.cca2 === countryCode)
            console.log(sameCountryCode)
            let country = sameCountryCode[0]['name']['official']
          
            callback(undefined,country)
        }else if(e.target.readyState ===4){
        
            callback('An error has taken place')
        }

    })
  
    request.open('GET', 'https://restcountries.com/v3.1/all')
    request.send()
   

}

