// Note we can define objects by two method by constructor and by Literals

// Singleton : It means only object made no multiple instances exist in entire application
// basically singleton means one object,one copy shared everywhere

// OBJECT :

//Literals object :

// const obj1={
//     "id":"@@@@",
//     name:"Mayank", //here Key is name and value Mayank
//     age:19,
//     location:"Varansasi",
//     email:"xxx@.com",
//     islogged: false,
//     lastLogin: ["Mon","Fri"]
// }  //Structure
// two ways two access

// console.log(obj1.name)//first way
// console.log(obj1["name"])// seccond way
// // seccond one is more imp becuause :
// // we cant access "id" by first method we can only access it by seccond method
// console.log(obj1["id"])//Imp

// // Symbol : 
// const symbol_1=Symbol("key1");

// const obj2={
//     [symbol_1]: "Symb1"// without [symbol_name] proper syntax it treat as string
// }
// console.log(obj2.symbol_1)// without proper syntax symbol convert into string

// console.log(obj2[symbol_1])//corect syntax
// console.log(typeof obj2[symbol_1])// string as value of symbol is string
// console.log(typeof symbol_1)//now symbol datatype

// // changing or overwrite value of object only by '=' equal operatoe
// obj1.age=20
// console.log(obj1.age)
// // we want to freeze variable mean cant able to change in future
// Object.freeze(obj1)
// console.log(obj1.age)
// obj1.age=21// no change occur
// console.log(obj1.age)//no chane as freeze use



//function in object:

//note before making function if we have use freeze before remove it before decaring function as it not allow any changes
// obj1.greeting1=function(){
//     console.log("Hello")
// }
// obj1.greeting2=function(){
//     console.log(`Hello ${this.name}`)//using this we can use variables of object
// }
// obj1.greeting1()
// obj1.greeting2()


// Object creation :(research about how to create singleton object and multiple instance object)

// const obj4=new Object()
// // Or
// const obj3={}

// obj3.name="Mayank";
// obj3.id=12345

// console.log(obj3)

// nested object :
// const regularuser={
//     regular_name:"Mayank",
//     personal_user:{
//         personal_name:"Ansu",
//         depp_user:{
//             deep_name:"ABC"
//         }
//     }
// }

// console.log(regularuser)
// console.log(regularuser.personal_user)
// console.log(regularuser.personal_user.depp_user)
// console.log(regularuser.personal_user.depp_user.deep_name)


//Merging object :
const obj1={1:"a",2:"b"}// Note key 1 is automatically js convert it into string "1"(imp)
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

// const obj4=Object.assign({},obj1,obj2,obj3)// it will copy all object in empty {} target object
// console.log(obj4)

//Another way :

// const obj5={...obj1,...obj2,obj3}//using spread operator
// console.log(obj5)


//Array of object :
// const obj_ar={
//     name:"Maya"
// }
// const arr_of_objects=[
//     obj1,obj2,obj3,obj_ar
// ]
// console.log(arr_of_objects)
// console.log(arr_of_objects[3].name)

// // also manuall can make :

// const arr1=[
//     {
//         name1:"aa"
//     },
//     {
//         nam2:"aa1"
//     }
// ]
// console.log(arr1)


//alse some operation on Object :
console.log(Object.keys(obj1))// all key store in array
console.log(Object.values(obj1))
//also
console.log(Object.entries(obj1))//we can itterate in arry using this

console.log(obj1["1"])// write way to access is key is String in obj1 1 is converted in string automatically
console.log(obj1.hasOwnProperty('1'))// tells 1 key is present or not
