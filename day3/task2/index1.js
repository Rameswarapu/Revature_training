
/*var sum=(a,b)=>a+b
var minus=(a,b)=>a-b
var multiplication=(a,b)=>a*b
//console.log(arrowfunc(10,20))
function calculator(){
    var s=prompt("enter the opertaion:")
    var n1=parseInt(prompt("enter first number:"));
    var n2=parseInt(prompt("enter second number:"));
    let res;
    switch(s){
        case 'sum':
            res=sum(n1,n2)
        break;
        case 'minus':
            res=minus(n1,n2)
        break;
        case 'multiplication':
            res=multiplication(n1,n2)
        break;
    }
    console.log(res)
}
calculator();*/

function sum(...numbers){
    console.log(numbers); //30
       var sum=0;

        for (let index = 0; index < numbers.length; index++) {
            sum += numbers[index];
        
        }
        console.log(sum);
 }
 sum(10,10);
sum(10,20,40);
sum(10,20,30,40);

