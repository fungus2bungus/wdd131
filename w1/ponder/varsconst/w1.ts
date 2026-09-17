// Decided to use typescript for this, just to stretch a bit. Also to encounter less errors
const result:any = document.getElementById("result");
const PI:number = 3.14;
let radius:number = 3;
var area:number = PI*radius**2;

console.log(area);
result.textContent=area;

const one:number = 1;
const two:string = '2';

let course:string = "CSE131"; // global scope
if (true) {
    let student:string = "John";
    console.log(course);
    console.log(student);
}
console.log(course);
// console.log(student);
