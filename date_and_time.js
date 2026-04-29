// let myDate=new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let manual_date=new Date(2030,2,1,12,5);
// console.log(manual_date.toDateString())
// console.log(manual_date.toLocaleString())

// let myDate=new Date("01-03-2030")
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())

// let timestamp=Date.now()
// console.log(timestamp/(1000*60*60*24*365))// this timestamp will give milliseccond from 01/01/1970 so we have convertet it into years 
// let t1=new Date("02-05-2026");
// console.log((Date.now()-t1.getTime())/(1000*60*60*24)) // to compare between two dates

// also many operation

let newDate=new Date()
//console.log(newDate.getMonth())// present month will show
console.log(
  newDate.toLocaleString('default', { weekday: "long" })
)