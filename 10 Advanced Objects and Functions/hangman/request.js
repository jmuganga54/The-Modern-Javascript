const getPuzzle = async (wordCount) => {
   const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

   if(response.status === 200){
    const data = await response.json()
    return data.puzzle
   }else{
    throw new Error('Unable to get puzzle')
   }
}

const getCurrentCountry = async () =>{
    const location = await geoLocation();
    const country = await  getCountry(location.country);
    return country

}
const getCountry = async (countryCode)=>{
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    if(response.status === 200){
      const data = await response.json()
      let country = data.find((country) => {
        return country.cca2 === countryCode;
      });
      if (country) {
        return country['altSpellings'][2];
      } else {
        throw new Error(`No country found with country code ${countryCode}`);
      }

    }else{
      throw new Error('Unable to fetch the country')
    }

}


const geoLocation = async ()=>{
  const response = await fetch('https://ipinfo.io/json?token=30215cf9b60933')
  if(response.status === 200){
    return response.json()

  }else{
    throw new Error('Unable to get the current location')
  } 
}




