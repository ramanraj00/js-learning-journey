const name = "raman"
const repoCount = 50

// console.log( name  +  repoCount + " value"); //not a modern method 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String (`Raman-rc-cc`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));

// const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "     raman     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com/raman%20raj"

console.log(url.replace('%20' , '-'));

console.log(url.includes("Google"));

console.log(gameName.split('-'));