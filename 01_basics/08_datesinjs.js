// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date (2025 , 4 , 31) 
// console.log(myCreatedDate.toDateString());output => Sat May 31 2025

// let myCreatedDate = new Date (2025 , 4 , 31 , 5 , 3)
// console.log(myCreatedDate.toLocaleString()); output => 5/31/2025, 5:03:00 AM

let myCreatedDate = new Date("2025-05-31")
// console.log(myCreatedDate.toLocaleString()); OutPut => 5/31/2025, 5:30:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() +1 );
// console.log(newDate.getDay());

newDate.toLocaleString('default' , {
    weekday: "long",

})