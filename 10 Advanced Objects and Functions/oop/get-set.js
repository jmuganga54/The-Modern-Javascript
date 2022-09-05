const data = {
  locations: [],
  get location(){
      return this._location

  },
  set location(value){
      this._location = value.trim()
      this.locations.push(this._location)
  }
}

//code that uses the data object
data.location = 'Dar es Salaam'
data.location = 'Mwanza'
console.log(data) 