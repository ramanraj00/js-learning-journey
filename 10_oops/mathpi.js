

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);

// console. log (Math.PI);
// Math.PI = 5 
// console.(Math.PI);


const chai = {
    name : " ginger chai",
    price : 250,
    isAvailable : true,

    orderchai : function (){
        console.log("Chai nhi banni")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let[key,value] of Object.entries(chai)){
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
    
}

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
