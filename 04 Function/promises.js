//callback
const getDataCallback = (callback)=>{
    setTimeout(()=>{
        callback('This is my callback error', undefined)
    }, 2000)
}

//using the defined function
getDataCallback((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

//Promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('This is the promise data')
        reject('This is my promise error')
        reject('This is my promise error')

    },2000)

})

//using the promise
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

myPromise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})