
const users = [
    { name: "A", city: "New York", age: 10 },
    { name: "B", city: "Los Angeles", age: 5 },
    { name: "C", city: "Chicago", age: 15 }
];


function printNames() {
    
    const outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "";
    users.forEach(user => {
        const nameHeader = document.createElement("h1");
        nameHeader.textContent = user.name;
        outputDiv.appendChild(nameHeader);
    });
}
const printButton = document.getElementById("printButton");

printButton.addEventListener("click", printNames);
