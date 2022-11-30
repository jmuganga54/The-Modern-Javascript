const getPuzzle = (wordCount) =>  new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest()
    //setting an eventListener when the response is returned
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        const data = JSON.parse(e.target.responseText)
        resolve(data.puzzle)
        
        
    }else if(e.target.readyState === 4){
        reject('An error has taken place')
       
    }

    })
    // open request: HTTP method and path of where Jason is 
    request.open('GET',`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    //send off the request
    request.send()
   })

const getCountry = (countryCode) =>{
    return new Promise((resolve,reject)=>{
        //make HTTP request
        const request = new XMLHttpRequest()
      
     
        request.addEventListener('readystatechange',(e)=>{
            if(e.target.readyState === 4 && e.target.status === 200){
                const data = JSON.parse(e.target.responseText)
                
                let country = data.find((country)=>{
                    return country.cca2 === countryCode
                })
                let countryName = country[`name`][`official`]
              
                resolve(countryName)
            }else if(e.target.readyState ===4){
            
                reject('An error has taken place')
            }
    
        })
      
        request.open('GET', 'https://restcountries.com/v3.1/all')
        request.send()
       
  })
}

 


