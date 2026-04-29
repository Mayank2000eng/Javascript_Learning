// let a=10
// const b=20
// var c=30

//console.log(a+" "+b+" "+c) // no problem

// Scope mean kaha tak value ko use kar skte hai
// bina block ke sab same behave krenge 

// but when block :
// if(true){
//     let a=10
//     const b=100
//     var c=101
// }
// console.log(a)//error 
// console.log(b)//error
// console.log(c)// No error

// so let and const scope will only inside block

// Also : 

// let a=100
// var c=10
// if(true){
//     let a=1
//     var c=3
//     console.log(a) //give change value of a
//     console.log(c) //give change value of c
// }
// console.log(a) // give 100 as no scope of inner a outside
// console.log(c) // give change value as var scope is outside scope 

// child function can use parent function variable but parent cant use child funtion variable : 

// function one(){
//     const username="hit"
//     function two(){
//         console.log(username) //can use
//         const user1="Ma"
//     }
//     //console.log(user1) // can not use error show
//     two()
// }
// one()

//Similarly with If-else or loop for every block things it same

// Now another imp point  :

console.log(add(5)) // No Error we can use function before declaring function

 function add1(num){
 return num+1
 }

 console.log(add2(5)) // Error show as function store in variable so we cant variable use before innitialisation not like direct function

 let add2=function(num){
    return num+2
 }