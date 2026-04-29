 // Primitive datatypes
 
 // approx 7 type primitive datatype in this
 
 // String
 // Number,
 // Boolean,
 // null,
 // undefined,
 // Symbol,
 // BigInt

const score=100// number datatype
const score_in_point=100.001;// all int and float is come under number datatype not seprate

const isLogged=true //Boolean
const a=null//null mean not zero it means empty
let useremail;//not innitialse yet

 const id=Symbol('123')
 const id_2=Symbol('123')
console.log(id==id_2) //false even same value inside because it treat as diff in symbol datatype


// Reference datatype(Non-Primitive) : 

//Array
//Object
// Function

const heros=["A","B","C"]

let myobj={
    name : "Abc",
    age: 22
}

const myfunction= function(){
    console.log("Hello")
}

console.log(heros)

console.log(myobj)

myfunction() 

console.log(typeof myobj)// to identify datatype of data
 // Note null datatype is object
 console.log(typeof null)