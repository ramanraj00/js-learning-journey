// Dates

let myDate = new Date()

//console.log(myDate.toString());  // output => Thu Jun 05 2025 10:15:05 GMT+0530 (India Standard Time)
//console.log(myDate.toDateString()); // output => Thu Jun 05 2025
//console.log(myDate.toLocaleString()); // output => 6/5/2025, 10:17:58 AM
 //console.log(typeof myDate); // output => object 

// let myCreatedDate = new Date (2025 , 4 , 31) 
// console.log(myCreatedDate.toDateString());  // => Sat May 31 2025

// let myCreatedDate = new Date (2025 , 4 , 31 , 5 , 3)
// console.log(myCreatedDate.toLocaleString()); //output => 5/31/2025, 5:03:00 AM

let myCreatedDate = new Date("2025-05-31")
// console.log(myCreatedDate.toLocaleString()); OutPut => 5/31/2025, 5:30:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() +1 );
// console.log(newDate.getDay());

newDate.toLocaleString('default' , {
    weekday: "long",

})