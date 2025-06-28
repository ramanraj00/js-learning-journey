const user = {
    username:"Raman",
    loginCount:8,
    signedIn:true,


    getUserDetails: function (){
       // console.log("Got user detail From usr DataBase ")
       //console.log(`Username: ${this.username}`);
       console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this

}

const UserOne = User("raman",12,true)
console.log(UserOne);


// when we use "New" keyword then a empty object{} create which is called Instance

// Step 1 : New Object Create.
// Step 2 : Constructor function Call Hota hai New Keyword ke karan.
// Step 3 : this key Word ke andar arguments inject ho jate hai.
// Step 4 : Aapko function ke anadar mil jaate hai.