const myArr = [10, 20, 30, 40];

console.log(myArr);

console.log(myArr[1]);
myArr[1] = 21;
console.log(myArr[1]);

console.log(myArr.length);

console.log(myArr[myArr.length - 1]);

console.log(myArr[10]); // undefined

// myArr[9] = 100
// console.log(myArr.length);
// console.log(myArr);
// console.log(myArr[4]);

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}

for (let item of myArr) {
    console.log(item)
}

const [firstItem, secondItem, ...rest] = myArr;
console.log(firstItem, secondItem, rest);

console.log(myArr);
myArr.splice(1,1,20);
console.log(myArr);
const removed = myArr.splice(3, 5);
console.log(myArr, removed);

console.log();

const myArrSort1 = [8, 1, 13, 5, 3, 7];
console.log(myArrSort1);
myArrSort1.sort( (a, b)  => a - b); // ascending order
console.log(myArrSort1);

const myArrSort2 = ["Peter", "george", "John", "Mary", "Anne"];
console.log(myArrSort2);
myArrSort2.sort((a, b) => a.localeCompare(b)); // ascending order
console.log(myArrSort2);

