// let myName = "Raman     "
// let myChanel = "chai    "

// console.logz(myName.trueLength)


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

        getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

Object.prototype.raman = function(){
    console.log(` raman is present in all objects`);
}

Array.prototype.heyraman = function(){
    console.log(`Raman say hello`);
}

myHeros.raman()
// heroPower.hitesh()


// Inheritance

const User = {
    name:"chai",
    email:"chai@gmail.com"
}

const Teacher = {
    makevideo : true
}

const TeachingSupport = {
    isAvailable: false
}


const TASupport = {
    akeAssignment : "JS assignment",
    fullTime: true, 
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}


anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()