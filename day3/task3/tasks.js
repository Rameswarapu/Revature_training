//LEAP YEAR

/*let y=parseInt(prompt("enter the year:"))
if(y%4==0||y%400==0||y%100!=0){
    console.log("Leap Year")
}
else{
    console.log("Not a Leap Year")
}*/

//GRADE CALCULATION

/*function stdgrade(m){
    
    if(m>=90){
        return 'A'
    }
    else if(m>=80){
        return 'B'
    }
    else if(m>=70){
        return 'C';
    } 
    else if (score >= 60){
        return 'D';
    }
    else {
        return 'F';
    }
    
}
 
let m = 70;
Grade=stdgrade(m)
console.log(Grade)*/

//NUMBER GUSESSING GAME

/*const randomNumber = Math.floor(Math.random() * 100) + 1;
function Game(){
    let guess=0;
    let trails=0;
    while(guess!= randomNumber){
        guess=parseInt(prompt("Guess a Number"))
        trails++;
    if(guess>randomNumber){
        return 'Higher'
    }
    else if(guess< randomNumber){
        return 'Lower'
    }
    else{
        return 'correct guess'
    }
    }
}
Game();*/
/*const randomNumber = Math.floor(Math.random() * 100) + 1;

function Game() {
    let guess;
    let trails = 0;

    while (true) {
        guess = parseInt(prompt("Guess a Number"));
        trails++;

        if (guess > randomNumber) {
            alert('Higher');
        } else if (guess < randomNumber) {
            alert('Lower');
        } else {
            alert('Correct guess');
            break; 
        }
    }
}

Game();*/

//finding an element
/*let a=2
const arr = [1, 2, 3, 4, 5, 6];
index=-1
for(let i=0;i<=arr.length;i++){
    if(arr[i]===a){
        index=i
    }
}
    
if (index !== -1) {
    console.log( index);
} else {
    console.log("Element not found in array");
}*/

//APPLE

/*const fruits = ["banana", "mango", "apple", "kiwi"];
fruits.splice(2,1)
console.log(fruits)*/

//REVERSE THE ORDER

/*const numbers = [23, 45, 12, 67, 89, 34];
numbers.reverse(numbers)
console.log(numbers)*/

//MAX VAL IN ARRAY

/*const numbers = [23, 45, 12, 67, 89, 34];
let max = numbers[0]; // Assume the first element is the maximum

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]; // Update max if a larger element is found
    }
}

console.log(max);*/

//SECOND LARGEST NUMBER IN A ARRAY

/*const numbers = [10, 5, 8, 20, 15, 12];
let m1=0
let m2=0
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>m1){
        m2=m1
        m1=numbers[i]

    }
    else if (numbers[i]>m2){
        m2=numbers[i]
    }
}
console.log(m2)*/

//SUM OF EVEN NUMBERS
/*function sum(...numbers){
    var sum=0;
 
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]%2==0){
     sum += numbers[i];
    }
  }
console.log(sum);
 }

sum(1,2,3,4);
sum(10,25,47);
sum(10,36,63);*/

//STUDENTS ARRAY

const students = [];
students.push({ name: "A", age: 20 });
students.push({ name: "B", age: 22 });
students.push({ name: "C", age: 21 });
console.log(students);


 


    
