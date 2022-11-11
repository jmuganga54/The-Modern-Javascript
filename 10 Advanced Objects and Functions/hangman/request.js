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