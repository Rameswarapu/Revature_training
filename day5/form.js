var form= document.getElementById("forms");
form.addEventListener("submit",handleForm);
function handleForm(){
    event.preventDefault();
    var fnameEle= document.getElementById("fname");
    console.log(fnameEle.value);
    var pass=document.getElementById("fpass");
    console.log(pass.value);
}





