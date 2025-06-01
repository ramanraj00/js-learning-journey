

function sayMyName (){
console.log("R");
console.log("A");
console.log("M");
console.log("A");
console.log("N");

}

// sayMyName()

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result

    return number1 + number2

    
}

  const result = addTwoNumbers(3 , 5)

  // console.log("Result:" ,  result)

  function loginUserMessage(username = "Ramon") {
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in `
}

 //console.log(loginUserMessage ("hitesh"))
 console.log(loginUserMessage("Hitesh"))