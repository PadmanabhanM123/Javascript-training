//function

function product(a,b){
    return a*b
}
console.log(product(4,7))

//hoisting

console.log(product(4,7))
function product(a,b){
    return a*b
}

//recursion

function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
}
console.log(factorial(6))

//function expression

let even=function(num){
    return num%2==0
}
console.log(even(10))

//sum of array using function expression

let a=[2,3,4,5]
let sum=function(a)
    {let sum=0
    for(let i of a){
        sum+=i
    }
      return sum      
           
}
console.log(sum(a))

//arrow function

let volume=(l,b,h)=>l*b*h
console.log(volume(2,3,4))


let area=r=>Math.PI*r*r
console.log(area(5))