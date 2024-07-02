//grading system

var grade="K"
switch(grade)
{
    case "O":
        console.log("outstanding")
        break;
    case "A":
        console.log("Very good")
        break;
    case "B":
        console.log("Good")
        break;
    case "U":
        console.log("Fail")
        break;
    default:
        console.log("RA")
}

//Mobile buying system
//if amount>10k buy android
//if amount>60k buy iphone
//if amount>5k and <10k buy base 
//else unaku telephone thn


let amount=4000
switch(true)
{
    case amount>60000:
        console.log("buy iphone")
        break;
    case amount>=10000 && amount<60000:
        console.log("buy android")
        break;

    case amount>=5000 && amount<10000:
        console.log("buy base phone")
        break;
    default:
        console.log("unaku telephone than")
}