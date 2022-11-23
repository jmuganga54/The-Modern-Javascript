// //callback
// const getDataCallback = (callback)=>{
//     setTimeout(()=>{
//         callback(undefined, 'This is the data')
//     }, 2000)
// }

// //using the defined function
// getDataCallback((err,data)=>{
//     if(err){

//     }else{
//         console.log(data)
//     }
// })

//Promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is the promise data')

    },2000)

})

//using the promise
myPromise.then((data)=>{
    console.log(data)
})