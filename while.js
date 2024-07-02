//while
let i=5
while(i<20)
    {
        console.log(i)
        i+=5
    }

//for in
let car={
    name:'bmw',colour:'red',model:'2023'
}
for(let i in car)
    {
        console.log(i+":"+car[i])
    }

//for of
let cars=['bmw','audi','bently']
for(let i of cars)
    {
        console.log(i)
    }