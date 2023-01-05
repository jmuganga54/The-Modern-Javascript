const getPuzzle = async (wordCount) => {
   const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

   if(response.status === 200){
    const data = await response.json()
    return data.puzzle
   }else{
    throw new Error('Unable to get puzzle')
   }
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

const geoLocation = ()=>{
  return fetch('https://ipinfo.io/json?token=30215cf9b60933').then((response)=>{
    if(response.status === 200){
        return response.json()
    }else{
      throw new Error('Unable to fetch the IP address')
    }
  })
}
 


