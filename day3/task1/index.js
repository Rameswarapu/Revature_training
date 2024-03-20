/*console.log(10)
console.log("hi")
var a=10
let b=20
const c=30
console.log(a)
console.log(b)
console.log(c)
var a='sowmya'
var h="sowmya"
var y=`sowmya`
console.log("hi"+a+"how r u");
console.log(`hi${a}how r u`)
console.log(true+true)*/

//"use strict" ;
//global scope
    /*var c=10
    function a(){
        console.log(c)
    }
    console.log(c)
    a()*/


    //function scope
/*function a(){
    b=10
    console.log(b)
}    
//console.log(b)
a()*/


//block scope
/*function a(){
    let b=50
    if(b>20){
        let z=10
    }
    console.log(z)
    console.log(b)
}   

a()*/
/*function abc(){
    

    if(true){
        let b=20;
        var a=10;
        console.log("Inside Block a: "+ a);
        console.log("Inside Block b: "+ b);  
    }
    console.log("Outside Block a: "+ a); 
    console.log("Outside Block b: "+ b); 
 
}

abc();*/
//even numbers
/*function even_no(a){
    for(var i=0;i<=a;i++){
        if(i%2==0){
            console.log(i)
        }
    }

}
even_no(20)*/

//check if it is prime
function isprime(n){
    for(var i=2;i<n;i++){
        if(n%i===0){
            return false
        }
        
    }
    return true

}
console.log(isprime(17))
