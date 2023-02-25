


// function print(){

//     console.log(this)
// }

// console.log(print())


let person = {

    name: "sabeel", 

    age: 25
}


let person1 = {

    address: "new delhi",

    favSports: [" football", "cricket", "tennis"],

    sayName: function(){

        console.log(this)
    }
}

let newFn = person1.sayName.bind(person);

console.log(newFn());








// console.log(person.sayName())



