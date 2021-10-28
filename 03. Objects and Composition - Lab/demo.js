const myPerson = {
    name: 'Peter',
    'last name': 'Jackson',
    age: 23,
    sayHi() {
        console.log(`${this.name} says hi!`)
    }
};

// console.log(myPerson);
// console.log(myPerson.age);
// myPerson.age = 24;
// console.log(myPerson);
// console.log(myPerson['name']);
// console.log(myPerson['na' + 'me']);
// const propName = 'name';
// console.log(myPerson[propName]);
// console.log(myPerson['last name']);
//
// myPerson.nationality = 'UK';
// console.log(myPerson);
//
// delete myPerson['last name'];
// console.log(myPerson);

myPerson.sayHi();

let count = 5;
const parser = {
    increment() {count++},
    decrement() {count--},
    reset() {count = 0}
};
parser["increment"]();
console.log(count);