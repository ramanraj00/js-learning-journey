const promiseOne = new Promise (function(resolve,reject){
    // Do an Async task 
    // DB call , cryptography , network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("Promised Consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve({Username: "Chai", emil: "Chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Raman",password: "1234"})
        } else {
            reject("Error: Something went wrong")
        }
        
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected"))





const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Hitesh",password: "123"})
        } else {
            reject("Error: JS went wrong")
        }
        
    },1000)
})

async function consmePromiseFive () {
    try {
        const response = await promiseFive 
        console.log(response);
    } catch (error) {
        console.log (error);
    }
}

consmePromiseFive()


// async function getAllUser () {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
 