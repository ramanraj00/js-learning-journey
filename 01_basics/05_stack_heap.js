// Stack (Primitive) , Heap (Non-Primitive).

// Stack (Primitive) mtlb pass by value mtlb ki copy value iska mtlb agar aap kuch v
//  change karengai to wo orignal vale ko effect nhi karega.aap
 
// Heap(Non primitive ) mtlb agar aap kuch v change kar rahe hai to wo orignal mai 
// change ho raha hai.


// Example Stack

// In this example we can see that in "another name" variabke   we call "myYoutbename" and the
// output is "areyoubuffalo" so its is called primitive but the output in "myYoutbname" is 
// still "areyoubuffalo" so what we learn is that original value doesnot change and it
// shared its copy (heap)

let myYoutubename = "areyoubuffalo"

let anothername = myYoutubename
anothername = "chaiAurcode"

console.log(myYoutubename);
console.log(anothername);


// Example Heap

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"

}

let userTwo = userOne

userTwo.email = "raman@google.com"

console.log(userOne.email);
console.log(userTwo.email);
