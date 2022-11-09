const getPuzzle = () =>{
    let data
    const request = new XMLHttpRequest()
    //setting an eventListener when the response is returned
    request.addEventListener('readystatechange',(e)=>{
    //fired whenever readState is Done
    if(e.target.readyState === 4 && e.target.status === 200){
        //capture the responseText content and parse it 
        data = JSON.parse(e.target.responseText)
        
    }else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }

    })
    // open request: HTTP method and path of where Jason is 
    request.open('GET','https://puzzle.mead.io/puzzle?wordCount=3')
    //send off the request
    request.send()

    return data
}