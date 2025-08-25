// Lets Create a CallBack function.

// const { log } = require("console");

// function getfruits(callback){
//     let fruits = ["Grapes","Berrys","Mango"]
//     setTimeout(()=>callback(fruits),1000)
// }

// getfruits(console.log);



// function getfruits(resolve) {
//     setTimeout(resolve,3000)
// }


// function setTimeoutPromisified(){
//     return new Promise(getfruits);
// }

// function main() {
//     console.log(["Grapes","Berrys","Mango"]);
// }

// setTimeoutPromisified().then(main);

// class circle {
//     constructor(radius,color){
//         this.radius = radius;
//         this.color = color;
//     }

//     area (){
//         const area = this.radius * this.radius * Math.PI;
//         return area;
//     }

//     paint(){
//         console.log(`Painting with color ${this.color}`);
//     }
// }

// const c1 = new circle(2,"yellow");
// console.log(c1.area());

// c1.paint();


// class shape {
//     constructor(color){
//         this.color = color;
//     }

//     paint(){

//     }

//     area(){

//     }
// }


// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function sequence() {
//     await wait(3000);
//     console.log("Printed after three second");
// }

// sequence();


// function setTimeoutPromisified(ms){
//     return new Promise (resolve=>setTimeout(resolve,ms));
// }

// function greeting(greet){
//     console.log(greet);
// }

// setTimeoutPromisified(1000)
// .then(()=>{
//     greeting("Hii");
//     return setTimeoutPromisified(3000);
// })
// .then(()=>{
//     greeting("Hello")
//     return setTimeoutPromisified(5000);
// })
// .then(()=>{
//     greeting("Hello There")
   
// })

function setTimeoutPromisified(ms){
return new Promise(resolve=> setTimeout(resolve,ms));
}

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("Hii")

    await setTimeoutPromisified(3000);
    console.log("Hello");

    await setTimeoutPromisified(5000);
    console.log("Hello There");
}

solve()
