// const promiseOne = new Promise (function(resolve,reject){
//     // Do an Async task 
//     // DB call , cryptography , network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     }, 1000)
// })


// promiseOne.then(function(){
//     console.log("Promised Consumed")
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Async 2 resolved');
// })

// const promiseThree = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         resolve({Username: "Chai", emil: "Chai@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"Raman",password: "1234"})
//         } else {
//             reject("Error: Something went wrong")
//         }
        
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The Promise is either resolved or rejected"))





// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"Hitesh",password: "123"})
//         } else {
//             reject("Error: JS went wrong")
//         }
        
//     },1000)
// })

// async function consmePromiseFive () {
//     try {
//         const response = await promiseFive 
//         console.log(response);
//     } catch (error) {
//         console.log (error);
//     }
// }

// consmePromiseFive()


// async function getAllUser () {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
 

// class Student {
//     constructor(name,rollno,year){
//         this.name = name;
//         this.rollno = rollno;
//         this.year = year;
//     }

//     getdetails(){
//         return `Name:${this.name}, Roll No : ${this.rollno}, Year : ${this.year}`
//     }

//     promote(){
//         this.year += 1;
//         console.log(`${this.name} has been Promoted to ${this.year}`)
//     }
// }

// const student1 = new Student("Raman", 2,1);
// console.log(student1);
// student1.promote();


class Rectangle {
    constructor(length,breadth,color) {
        this.length = length;
        this.breadth = breadth;
        this.color = color;
    }

    area(){
        const area = this.length * this.breadth;
        return area;
    }

    paint(){
        console.log(`Painting with colour ${this.color}`)
    }

}

const rect = new Rectangle(1,2,"yellow");
// console.log(rect);
// const raman = rect.area()
// console.log(raman);
// console.log (rect.area());
// console.log(rect.length);



// function promiseCallback(resolve) {
//             setTimeout(resolve,3000)
// }

// function main ()
// {
// console. log ("main is called")
// }

// promiseCallback(main)


// create the promisifed version of fs. readFile, fs writeFile, cleanFile
// cleanFile("a. txt"). then (function() 
// console. log("file is cleaned" );

// Read file Promisified version 

const fs = require("fs");
const path = require("path");

function readFilePromise(filePath, encoding = "utf8") {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}