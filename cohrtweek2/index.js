// const fs = require('fs');

// const data = fs.readFileSync('a.txt', 'utf8');
// console.log(data);

// "Node is trying to find a.txt in the Desktop folder (where I ran the command), not in the cohrtweek2 folder (where index.js and a.txt actually are)."

// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'a.txt');
// const data = fs.readFileSync(filePath, 'utf8'); // synchornously 
// console.log(data);


// asynchornously code is beter because its fast and sae your time 
// const data = fs.readFile(filePath, 'utf8'); // asynchornously



// function logName(){
//     console.log("Raman");
    
// }

// setTimeout(logName,3000);


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'a.txt');
const data = fs.readFileSync(filePath, 'utf8'); // synchornously 
console.log(data);