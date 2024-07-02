//using for loop get numbers divisible by 2 and 3 from 1 to 50.

for(let i=1;i<=50;i++)
    {
        if(i%2==0 && i%3==0)
        console.log(i)
    }

//sum of natural numbers between 1 to 100

let sum=0
let n=100
for(i=1;i<=n;i++)
    {
        sum=sum+i
    }
console.log(sum)

//five table

for(i=1;i<=10;i++)
    {
        var x=(i+"*5=")+i*5
        console.log(x)
    }