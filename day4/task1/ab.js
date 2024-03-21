// Objects
// Task
// Reduce the price of each item by 50 from shopItems array;
// And store the modified objs in new array.
/*var it1={
    name:"Shoes",
    category:"footware",
    price:200
}
var it2={
    name:"Shirt",
    category:"Clothes",
    price:800
}

var it3={
    name:"Pant",
    category:"Clothes",
    price:500
}
var shopItems=[it1,it2,it3];
var newarry= shopItems.map((ele,index,array)=>{
    return ele.price=ele.price-50;
     
 });
 
    console.log(newarry);*/


// Get the total value of all the products in shopitems array.

// Original array of objects
const it1 = {
    name: "Shoes",
    category: "footware",
    price: 200
  };
  const it2 = {
    name: "Shirt",
    category: "Clothes",
    price: 800
  };
  
  const it3 = {
    name: "Pant",
    category: "Clothes",
    price: 500
  };
  
  const shopItems = [it1, it2, it3];
  const TotalValue = shopItems.reduce((accumulator, currentValue) =>{
    var obj={};
    obj.price=accumulator.price+currentValue.price;
    return obj;
  });
  console.log(TotalValue)
  console.log(shopItems)


  //[2:22 pm] Pavan Kumar Reddy Kotla
const newValue=shopItems.reduce((acc,currentItem)=>{
    console.log(acc)
    console.log(currentItem)
    return acc+currentItem.price
   
},0);
console.log(newValue)

  
 
    
 