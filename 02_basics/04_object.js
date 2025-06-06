// const tinderUser = new Object() // => Singleton
const tinderUser = {} //=> Non singleton hai

tinderUser.id = "123abc"
tinderUser.name = "Ramon"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Raman" ,
            lastname : "Kashyap"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1 , obj2};  // output => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 //const obj3 = Object.assign ({}, obj1,obj2,obj4);  output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
   //const obj3 = {...obj1,...obj2,...obj4} // output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// console.log(obj3);



const users = 
[
    {
        id : 1,
        email: "R@gmail.com"
    },

    {
        id : 2,
        email: "R@gmail.com"
    },

    {
        id : 3,
        email: "R@gmail.com"
    },
];

// users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser)); // output => [ [ 'id', '123abc' ], [ 'name', 'Ramon' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor : "hitesh"

}

course.courseInstructor

const {courseInstructor:Hero} = course

console.log(Hero);


// API //

  {

  "name" ; "hitesh",
 "coursename" ;"js in hindi",
 "price"; "free"

   }

// [
//     {},
//     {},
//     {},
    
// ]
