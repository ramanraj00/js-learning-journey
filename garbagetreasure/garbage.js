// Lets Create a CallBack function.

// const { log } = require("console");

// function getfruits(callback){
//     let fruits = ["Grapes","Berrys","Mango"]
//     setTimeout(()=>callback(fruits),1000)
// }

// getfruits(console.log);



function getfruits(resolve) {
    setTimeout(resolve,3000)
}


function setTimeoutPromisified(){
    return new Promise(getfruits);
}

function main() {
    console.log(["Grapes","Berrys","Mango"]);
}

setTimeoutPromisified().then(main);