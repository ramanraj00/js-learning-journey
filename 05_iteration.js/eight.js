// Reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval)  {
//     console.log(`acc: ${acc} and curval: ${currval}`)
//     return acc + currval
// } , 0)

// console.log(myTotal);

// const myTotal = myNums.reduce((acc,curr) =>  acc+curr , 0)

// console.log(myTotal)

const shoppingCart = [

    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "py Course",
        price:99
    },
    {
        itemName: "Mobile Dev Course",
        price:5999
    },
    {
        itemName: "Data Science Coure",
        price:12999
    }

]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay)