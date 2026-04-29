// const arr=[1,2,3,4]
// const arr1=[6,7,8,9,10]
// const arr2=[]
// let j=0;
// for(i=0;i<arr.length;i++){
//     arr2[j++]=arr[i]
// }
// for(i=0;i<arr1.length;i++){
//     arr2[j++]=arr1[i]
// }
// console.log(arr2)
// arr3=[...arr,...arr1]    
// console.log(arr3)
// {
//     let a=2
//     var b=3
//     console.log(a+b)
// }
//console.log(a) shows error as let scope is fix but var scope is for global
//console.log(b) shows corect as scope is global of var

// const arr=[1,2,3,4]
//  const[a,b,c,d,e]=arr//destructuring array
//  console.log(a)

// const arr=[1,2,3,4,5]
// const[x,y,...z]=arr
// console.log(x+y+","+z)


// const obj={
//     name: "Mayank",
//     age : 20,
//     branch: "Cse"
// }
// console.log(obj)
// let dupl={branch:"Value",...obj}
// console.log(dupl)
// dupl={...obj,branch:"Value"}
// console.log(dupl)
// dupl={name:"Abc",branch:"xyz",...obj}
// console.log(dupl)
// dupl={...obj,name:"Abc",branch:"xyz"}
// console.log(dupl)

// const msg=`Hello World
// Welcome to JavaScript
// This is a multi-line string`
// console.log(msg)
// const name="Mayank"
// const name1="Kumar"
// console.log(`Hello Mr ${name} ${name1}`)

// const test={
//     msg:"Hello World",
//     show: function(){
//         console.log(this.msg)
//     }   
// }
// test.show()

// let mixed=["Hello",200,true,null,undefined,[1,2,3]]
// console.log(mixed[1])

// const t1=[1,2,3,4,5]
// const squre=t1.map((num)=>num*num)
// console.log(squre)
// console.log(t1.map((num)=>num*num).filter((num)=>num>=4))

// const a=new Map()
// a.set(1,12)
// for(const [key,value] of a.entries()){
//     console.log(key+" "+value)
// }

// const arr1=[10,20,30]
// const arr2=[40,50,60]
// console.log(...arr1,...arr2)

// const arr1=[
//     {a:12,b:13,c:14},
//     {d:14,e:15,f:15}
// ]
//  for({a,b,c} of arr1){
//     console.log(`a:${a} b:${b} c:${c}`)
//  }

//  const obj1={
//     name:"Mayank Kumar",
//     age : 21,
//     Branch: "Cse"
//  }
 
// const obj2={
//     ...obj1,
//     age:22,
//     Branch:"Cse-Ai"
// }
// console.log(obj2)

// Promise : 

for (let i = 1; i <= 5; i++) {

    let myPromise = new Promise((resolve, reject) => {

        if (i % 2 === 0) {
            resolve("Even: ");
        } else {
            reject("Odd:");
        }

    });

    myPromise
        .then(result => console.log(result))
        .catch(error => console.log(error));
}

