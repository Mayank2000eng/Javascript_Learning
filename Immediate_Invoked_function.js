// WHat is Invoked function :

(function add(a,b){
    console.log(a+b)
})(2,7); //immediately Invoked function 
 // note (function)(call) syntax where first bracket for using one by one without first brack nothing show you can see 
 
 // ";" required in this case to avoide error to end above invoked function

 // Why we need to avoide GLOBAL POLUTION  :
 //To avoid global variable pollution
(function() {
  let x = 10;
})();
//console.log(x); // ❌ Error (good!)
// cant acces x outside which is good because it Keeps your code safe and clean

// Global Polution search for it detail