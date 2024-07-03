//array
let colours=["red","blue","green"]
colours[3]="black"
console.log(colours)
console.log(colours.length)
console.log(typeof(colours))

//forEach
let Clrs=['black','red','white']
Clrs.forEach((clr)=>{
    console.log(clr)

})

//map
let products = [
    { id: 1, name: "iPhone", price: 1000 },
    { id: 2, name: "Samsung Galaxy", price: 800 },
    { id: 3, name: "Google Pixel", price: 700 }
]
let productnames=products.map((product)=>product.id)
console.log(productnames)

//at
let clrs=['black','white','blue']
let clr=clrs.at(1)
console.log(clr)

//join

let fruits=["apple","orange","banana","guava"]
console.log(fruits.join('>'))
console.log(fruits)