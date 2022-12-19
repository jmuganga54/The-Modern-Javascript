const getPuzzle = (wordCount) => {
   return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data)=>{
        return data.puzzle
    })
}


const getCountry = (countryCode)=>{
    return fetch(`https://restcountries.com/v3.1/all`).then((response)=>{
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('Unable to fetch the country')
        }
    }).then((data)=>{
      let country = data.find((country) => {
        return country.cca2 === countryCode;
      });

      if (country) {
        
        return country['altSpellings'][2];
      } else {
        throw new Error(`No country found with country code ${countryCode}`);
      }
      
      
    })

}

// const getCountryOld = (countryCode) =>{
//     return new Promise((resolve,reject)=>{
//         //make HTTP request
//         const request = new XMLHttpRequest()
      
     
//         request.addEventListener('readystatechange',(e)=>{
//             if(e.target.readyState === 4 && e.target.status === 200){
//                 const data = JSON.parse(e.target.responseText)
                
//                 let country = data.find((country)=>{
//                     return country.cca2 === countryCode
//                 })
//                 let countryName = country[`name`][`official`]
              
//                 resolve(countryName)
//             }else if(e.target.readyState ===4){
            
//                 reject('An error has taken place')
//             }
    
//         })
      
//         request.open('GET', 'https://restcountries.com/v3.1/all')
//         request.send()
       
//   })
// }

 


