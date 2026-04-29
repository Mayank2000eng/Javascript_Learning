// if(){

// }else{

// }

//Operators use in condition  :
// <,>,<=,>=,==,!=,

// what about === : it als check about datatypes
// 2=="2" give true as same value but 2==="2" false same value but  diff datatype 
// similarly !== if check for false 

// Scope of variale inside condition block is not define outside block but var still valid outside block which is dangerous for our code  

//Switch  :

const month =3
switch (month){
    case 1: 
        console.log("Jan");
        break;
    case 2 :
        console.log("Feb")
        break;
    default :
        console.log("other")
}

// break use : without break if any case satisfy than all case after that case execute except last default case so to avoide this we use break to avoide other cases.(IMP)

// By default kuch values ko condition me false lelete hai ex :
// false,0, -0, BigInt 0n, "", null, undefines, NaN
// only these trat like false 
// ex :
const str=""
if(str){// mean false in condition 

}

// but :

const arr=[]//empty array
const obj={}//empty object
if(arr){ // empty still act like true

}
// for false :
if(arr.length){

}
//Similarly
if(obj){//empty still act like true

}
//for act like false :
if(Object.keys(obj).length){  //act like false condition
   
}

// Note :
// false==0 //true
// false==""//true
// 0 == "" //true

//Nullish Coalescing Operator (??) :

// jab ab ham kahi se value le rhe hote hai tab kam ata hai ex jaise val=null ?? 10 agr val nul ayga to 10 assign ho jyga autmatically

//Ternary operator we know