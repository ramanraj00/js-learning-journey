
//var c = 300
let a = 40
if (true) {
    let a = 30
    const b = 20
    //var c = 50
    // console.log("Inner:",a)
}

// console.log("Outer:",a)
// console.log(b)
// console.log(c)



function one(){
    const username = "Raman"

    function two(){
        const website = "youtube"
        console.log(username); // ye to print ho sakta hai kyuki ye child scope hai.
    }
    // console.log(website) // bhaiya tu ye kya print kar raha hai ye to scope ke bahar hai.

    two()


}


// one()

if(true){
    const username = "Raman"
    if(username === "Raman"){
        const website = " Youtube"
        // console.log(username + website);

    }
    // console.log(website);
}

// console.log(username);


// =========+++++========>>>>>>>>>>>>>>>>>>INTRESTING<<<<<<<<<<<<<<<===============+++++===========
console.log(addone(5))

function addone(num){
    return num + 1
}



// dono same hai but upar wale ko function or neeche wale ko expression bolte hai, JavaScript ke andar variable 
//bhaut powerful hote hai kuch v holds kar sakte hai.

addTwo(5)
const addTwo = function(num){
    return num + 2
}

// 2nd wale mai error aagya hai kyuki aapne function ko declare karne ke baad hold v kar liya hai.
