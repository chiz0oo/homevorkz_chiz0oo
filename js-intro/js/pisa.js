let car = {
    name: "car",
    mark: "mersedes",
    birth: 2025,
    isBroken: true,
    beepBeep: function() { console.log("beep-beep") },
}

const carsOwner = {
    name: "piter",
    surname: "navalni",
    age: 987,

}

console.log(car);
console.log(carsOwner);

car.beepBeep()

const people = [];

console.log(people);
people.push("Stephan");
people.push("Pedor");
people.unshift("Alex")
console.log(people);

let someone = people.pop();
console.log(someone);
console.log(people);

console.log(people.indexOf());
console.log(people.indexOf());
console.log(people.indexOf());
console.log(people.indexOf());


const evens = [];
const maxValue = 1000;
for(let i = 0; i<= maxValue; i += 2) evens.push(i);
console.log(evens);