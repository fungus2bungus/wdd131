"use strict"; // not sure why typescript put this here...
// Decided to use typescript for this, just to stretch a bit. Also to encounter less errors
const result = document.getElementById("result");
const PI = 3.14;
let radius = 3;
var area = PI * radius ** 2;
console.log(area);
result.textContent = area;
const one = 1;
const two = '2';
let course = "CSE131"; // global scope
if (true) {
    let student = "John";
    console.log(course);
    console.log(student);
}
console.log(course);
// console.log(student);
