//two types of memory in this obviously 

//  1.Stack(store primitive datatype) 2.Heap(store Nonprimitive)
 
//In stack it gives copy of data not origional data that's why changing in one variable will not affect other origional variable

// let a1="Mayank"
// let a2=a1
// console.log(a1)
// console.log(a2)
// a2="AA"
// console.log(a1)
// console.log(a1) 

//In heap provide reference of data type or origional form so changing in other variable will afect origional :
let a=[1,2,3]
let b=a
b[0]=100
console.log(a)
console.log(b)
 // as referance variable
 
