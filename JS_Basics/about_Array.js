// Arrays
//const myArr=[0,1,2,3,55] //resizable and different type of data can store
//  console.log(myArr)
//  myArr.push(22)
//  console.log(myArr.pop()) 
//  myArr.unshift(9)// add element at starting by shifting element (O(N))
//  console.log(myArr)
//  myArr.shift()//remove start element
//  console.log(myArr.includes(9))
//  console.log(myArr.indexOf(55))

// const newArray=myArr.join()//convert array in string with comma
// console.log(newArray)

//Slice Vs splice (very imp)

// console.log("A",myArr) // normal

// const myn1=myArr.slice(1,3)
// console.log(myn1) // slice

// console.log("B",myArr)

// const myn2=myArr.splice(1,3)//also remove 1 to 3 element from origional myArr array
// console.log(myn2)

// console.log("C",myArr) // after splice


//Merging array with differnet ways
const a1=[1,2,3,4]
const a2=[5,6,7,8]

//a1.push(a2) // so in this a2 full array is push in a1 as whole element

//console.log(a1[4][0]) // can access element of 2nd array

// Also another way of merging
const a3=a1.concat(a2)
console.log(a3)// same work as above but a2 combine with a1 and generate another full array

//also Spread operator :
const all=[...a1,...a2]
console.log(all)

const another_array=[1,2,3,[4,5],[6,7,[1,2]]]// array inside array inside another array
const a4=another_array.flat(Infinity)// basicall flat concatenate all arry by recursively inside and Infinity mean take depth accordig to it we can also give number in place of Infinity according to us.
console.log(a4)
const a5=another_array.flat(1)// see by ruuning or changing value yourself
console.log(a5)

console.log(Array.isArray("Mayank"))//tell is it array or not
console.log(Array.from("Mayank"))//convert into array
console.log(Array.from({name: "Mayank"}))//if it cant convert any pass valur into array it shows empty array
let x1=100
let x2=200
let x3=300
console.log(Array.of(x1,x2,x3))// of or from both use to convert into array

