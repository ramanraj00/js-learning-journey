
// function Assignment 1

// function sum (a,b) {
//     let totalSum = a + b;
//     return totalSum;
// }

// let ans = sum("Raman ");

// console.log(ans);

// function Assignment 2
// This method is wrong
// function canVote (age) {
//     if (age > 18){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }

// }

// let age = canVote(17);

function canVote(age){
    return age > 18;
}

// console.log(canVote(20));
// console.log(canVote(17));

let result1 = canVote(20);  // 20 > 18 → true
let result2 = canVote(17);  // 17 > 18 → false

// console.log(result1); // true
// console.log(result2); // false


function greet (){
    let user = {
        name: "Raman",
        age: 19
    };

   return user
}
let user = greet()
// console.log("His name is "+user.name );


    // sum from 1 to n.

function sum (n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i
    }
    return ans; 

}

const ans = sum(100);
// console.log(ans);

// Simple question to imrove logic

let x = 5;
let y = 6;

// console.log(x + y);

// Q2

function name () {

}

// Q3 

// Using let we can declare a variable or name and with var we also do the same but when we declare a var it strated working in globale scope and when we declare let it not work in global scope so its safe to used 

// Q4 How do you write a for loop that prints numbers from 1 to 5?
 for (i = 0; i <= 5; i++) {
    console.log(i);
 }

arr = [0,1,2,3,4]