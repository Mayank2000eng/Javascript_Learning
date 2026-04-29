// const user={
//     username:"hit",
//     price:10000,

//     mes:function(){
//         console.log(`${this.username} , Welcome`) //this curent me kya chal rha usko reffer krta hai
//         // ex 
//         console.log(this) //show curent state of object see by running
//     }
// }
// user.mes()
// user.username="Hit"
// user.mes()


// Imp +++++ :
//console.log(this) //show empty as currently no global object exist inside object it work 
//But in browser if we write console.log(this) on inspect show Window as it is global object for browser

// this kewal object ke lie work krta hai function ya if-else ke liye nahi

// function add(){
//     username="Hit"
//     console.log(this.username)// show nothing as this is for object inside function but no object exist for add function so no username exist
//     console.log(this)//default empty object show
// }
// add() // set username of global object for function is Hit
// // this print default object for function check by printing

// ARROW FUNCTION : 

// function add1(a,b){
//     return a+b
// }
// console.log(add1(2,3)) //normal function

// now :

// add=(a,b)=>{return a+b} // Arrow function
// console.log(add(2,3))

// add=(a,b)=>a+b // also if one statement we can remove return and parenthesis both
// console.log(add(2,3))

// // But if returning object than imp note removing parenthesis not work :

// obj=()=>({name:"ILU"}) //without bracket () undefined show 
// // so () required for object
// console.log(obj())


//This with Arrow Function  :(IMP)

// Normal Function → has its own this
// const obj = {
//   name: "Mayank",
//   greet: function() {
//     console.log(this.name);
//   }
// };

// obj.greet(); // Mayank ✅


// //Arrow Function → NO own this
// const obj = {
//   name: "Mayank",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// obj.greet(); // ❌ undefined

// So Arrow functions do NOT create their own this
//They borrow this from surrounding (outer) scope