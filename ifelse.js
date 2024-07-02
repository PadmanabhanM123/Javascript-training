//If a student scores above 90, assign grade A.
//If a student scores above 75, assign grade B.
//If a student scores below 75, assign grade C.

var score = 80
if(score>90)
   {
       console.log("You got A grade")
   }
else if(score>75 && score<=90)
   {
       console.log("You got B grade")
    }
else
{
   console.log("You got C grade")
}

//print present date and time and make the following operations

let hour=new Date()
let hrs=hour.getHours()
let mins=hour.getMinutes()
let secs=hour.getSeconds()
console.log(hour)
console.log(`${hrs}:${mins}:${secs}`)
if(hrs>=0 && hrs<12)
    {
        console.log("good morning")
    }
else if(hrs>=12 && hrs<15)
    {
        console.log("good noon")
    }
else if(hrs>=15 && hrs<19)
    {
        console.log("good evening")
    }
else
{
    console.log("good night")
}