// function without_return(x,y){
//     console.log(x+y)
// }
// // without_return(3,4)// 7
// // without_return(3,"a")// 3a
// // without_return(3,null)// 3

// // What if we call in and print again :
// // console.log(without_return(3,4))// show another line as undefined mean nothing to print
// // console.log(without_return(3,"a"))
// // console.log(without_return(3,null))

// // without_return //mean only refference
// // without_return() //now we are calling

// function message(username){
//     return `hello ${username}`
// }
// // console.log(message("Maa"))
// console.log(message(""))// show undefined at place of username



// function calculatecartPrice(num1){
//     return num1
// }

// console.log(calculatecartPrice(2))// we know

// // but if arguments are more than parameter

// console.log(calculatecartPrice(2,100)) //take 2 and ignore other

// so to solve this we use Rest operator

// function calculatecartPrice(...num1){
//     return num1
// }
// console.log(calculatecartPrice(2,100,200))

function calculatecartPrice(x,y,...num1){
    return num1
}
console.log(calculatecartPrice(2,100,200,500))// 2 and 100 goes in x and y only 200 and 500 stroe in num1


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));