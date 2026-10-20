"use strict";
function convert(grade) {
    let points = 0;
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
const grades = ['D', 'C', 'B'];
const points = grades.map(convert);
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const students = [
    { last: 'Andrus', first: 'Aaron' },
    { last: 'Masa', first: 'Manny' },
    { last: 'Tanda', first: 'Tamanda' }
];
let courseArraysOfObjects = [
    {
        name: "Dynamic Web Fundamentals",
        code: "WDD 131",
        credits: 2,
        instructor: "Brother Warner"
    }
];
//for (let i:number=0; i < students.length; i++) {
//    console.log(`${students[i].first}  ${students[i].last}`)
//}
const body = document.querySelector('body');
const list = document.querySelector('ul');
points.forEach(printed);
function printed(item) {
    const grime = `
        <li>${item}</li>
    `;
    list.innerHTML += grime;
}
students.forEach(printor);
function printor(item) {
    const studentList = `
        <h3 id="student" style=border-bottom:solid>${item.first} ${item.last}</h3>
        `;
    body.innerHTML += studentList;
    //console.log(`${item.first} ${item.last}`)
    //    <div class="content">
    //    </div>
}
const largFruit = words.reduce(totlen);
function totlen(item) {
    let m = "";
    if (item.length > 5)
        m = item;
    return m;
}
console.log(largFruit);
