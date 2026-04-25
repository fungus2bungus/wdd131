const PI = 3.14;
let radius = 3;

let area = radius*radius*PI;

console.log(area);

radius = 20;

area = radius*radius*PI;

console.log(area);

// type coersion
const one = 1;
const two = '2';

let result = one * two;
console.log(result)

result = one + two;
console.log(result);

// Scope
let course = "CSE313"; //global
if (true) {
    let student = "John"; // local
    console.log(course);
    console.log(student);
}
console.log(course);
console.log(student); // not defined here
