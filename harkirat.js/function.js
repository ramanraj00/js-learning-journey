
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