// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Raman" ,
    "full name": "Raman Kashyap",
    [mySym]: "mykey1",
    age : 18 , 
    location: "Noida",
    email:"raman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);  // whats the point of using it?

JsUser.email = "Ramanraj@chatgpt.com"
//  Object.freeze(JsUser)
JsUser.email = "Raman@microsoft.com"
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo= function(){
     console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

