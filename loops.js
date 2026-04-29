// We know
// for loop, while loop, do while, break ,continue all we know

 
// const arr=[1,2,3,4,5]

// for(const num of arr){
//     console.log(num)
// }

// const greetings="Hello World!"

// for(const char of greetings){
//     console.log(char)
// }

//Map :

// const map= new Map()
// map.set('In',"India")
// map.set('USA',"United states of america")

// //console.log(map)

// for(const [key,value] of map){
//     console.log(key,':-',value);
// }

// but this itterable method not work for objects 

const obj={
    game1:'Pubg',
    gam2:'Gta'
}

// for(const [key, value] of obj){
//     // wrong not for objects
// }

// corect way for objects :(using 'in' inplace of 'of')

for(const key in obj){
    console.log(key) //access all key in object
    console.log(obj[key])// accessing value
}

// similarly work for arr :
const arr=[1,2,3,10000]
for(const key in arr){
    console.log(key) // indexin access
    console.log(arr[key])// accessing value of index
}

// But note 'in' not work for map (IMPPPP)


//Higher order loop :-


const coding=["js","ruby","java","c"]

coding.forEach(function (item){
    console.log(item)
})

// or 

coding.forEach((item)=>{
    console.log(item)
})

// or 

function printing(item){
    console.log(item)
}

coding.forEach(printing) // note after function '()' dont use because we just pass refrence not executing inside it will execute automaticall we have to just tell name of function  

// Also not only item :

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// Now Very Imp part accesing object which store in array :

const arr1=[
    {
        language_name:'Java',
        language_File_name:'java'
    },
    {
        language_name:'C',
        language_File_name:'c'
    },
    {
        language_name:'JavaScript',
        language_File_name:'js'
    },
]
// VVV IMPPP :

arr1.forEach((item)=>{
    console.log(item.language_name)// accessing inside object which already store in array
})