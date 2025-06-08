const user  = {
    username: "Raman",
    price: 999,


    welcomeMessage: function() {
            console.log(`${this.username} , Welcome to website`);
            // console.log(this)
    }
    
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// Browser mai jo global object hai wo hai window object 

// function chai (){
//     let username = "Raman"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "Raman"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Raman"
//     console.log(this);
// }

// chai()

// const addTwo = (num1,num2) => {
//     return (`Addition of Num1 and Num 2 : ${num1+num2}`)

// }

// console.log(addTwo(3,4));


//Implicit Function

//const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) =>( num1 + num2)

const addTwo = (num1,num2) => ({username:"hitesh"})

console.log(addTwo(2,8))