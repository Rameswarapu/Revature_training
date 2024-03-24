/*const mainDiv = document.getElementById("mainDiv");
mainDiv.style.color="red";
const paragraphs = document.querySelector('.para');
paragraphs.style.color="red";*/



/*const demoDiv = document.getElementById('demoDiv');
demoDiv.addEventListener('click',handler2);
function handler2(){

   demoDiv.innerHTML="Bye";
   demoDiv.style.backgroundColor="pink";
}*/


/*const btn=document.getElementById("btn")
const  incrementBtn=document.getElementById("incrementBtn")
const decrementBtn=document.getElementById("decrementBtn")
incrementBtn.addEventListener('click',increment)
function increment(){
    let Value = parseInt(btn.textContent);
    Value++;
    btn.textContent=Value
}
decrementBtn.addEventListener('click',decrement)
function decrement(){
    let Value = parseInt(btn.textContent);
    if(Value>0){
    Value--;
    btn.textContent=Value
    }
}*/




    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    const box4 = document.getElementById('box4');

    box1.addEventListener('click', function() {
        this.style.backgroundColor = 'green';
    });

    box2.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'yellow';
    });

    box3.addEventListener('click', function() {
        this.classList.add('image-added');
    });

    box4.addEventListener('click', function() {
        this.classList.toggle('large');
    });


