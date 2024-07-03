//personal
const person={
    name:"Dhanu",
    initial:"M",
    age:21,
    gender:"male",
    address:"Suchindrum",
    bike:{name:'zest',
        number:'AX8605',
        clr:'purple'

    },
    info:function(){
        console.log(this.address)
    }
    
}
person.bike['number']='AX8056'
person.age=22
person.info()

//bank
let bank = {name:"sbi",
    branch:"suchindrum",
    accno:54623123455,
    bal:10000,    
    acc() {
        console.log(this.accno);
    }

    
}
bank.acc()


//simple calculation
let calculator={

    add(a,b){
        return(a+b)
    },

    subtract(a,b){
        return(a-b)
    },

    multiply(a,b){
        return(a*b)
    },

    divide(a,b){
        return(a/b)
    }
    

}
console.log(calculator.add(25,78));
console.log(calculator.subtract(10,2));
console.log(calculator.multiply(10,2));
console.log(calculator.divide(10,2));



//merging and cloning two objects

let person={
    name:'Dhanu',
    initial:'m',   
    address:'suchindrum',
    fullname(){
       console.log("My fullname is "+ this.name+ " "+this.initial)
    
    }
}

let person1={
    hobby:['play','poems'],
    age:21,
    gender:"male",
    dob(){
        console.log(new Date().getFullYear() - this.age)
    }

}
//object merging
Object.assign(person,person1)
//object cloning
const person2=Object.assign({},person)
person.name="padhu"
person.age=22
console.log(person,person2)
person.fullname()
person1.dob()