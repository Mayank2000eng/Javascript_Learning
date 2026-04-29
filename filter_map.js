const nums=[1,2,3,4,5,6,7,8]
//nums.filter((num)=>num>5) //dont return anything just filter only

// So to see filter number we have to first store :

// const filter_num=nums.filter((num)=>num>5)
// console.log(filter_num)

// But :
// const filter_num=nums.filter((num)=>{
//     num>5
// }
// )
//console.log(filter_num) // show empty array becuse after curly braces return neccessary
// So :

// const filter_num=nums.filter((num)=>{
//    return num>5
// }
// )
// console.log(filter_num)

// Similarly we can access filter with objects which are store in array

// Ex : 

// const arr3=[
//     {
//         game1 : 'Pubg',
//         theme : 'Survival'
//     },
//     {
//         game1 : 'Gta',
//         theme : 'Real Life'
//     }
// ]

// const new_arr=arr3.filter((obj)=>{
//     if(obj.theme=='Survival')
//         return obj
// })

// //console.log(new_arr)

// // Or 
// const a_new=[]
// arr3.filter((obj)=>{
//     if(obj.game1=="Gta")
//         a_new.push(obj)
// })
// console.log(a_new)

// Map :
//const a1=nums.map((num)=>num+10)

//console.log(a1)

// we can not use conditions in map like filter (IMPP)


// Chaining :

// const new_arr1=nums.map((num)=>num+10).map((num)=>num*10)
// // we can chain many as we want 
// console.log(new_arr1)

//Another Ex :

// const new_arr2=nums.map((num)=>num+10).filter((num)=>num>15)
// console.log(new_arr2)


