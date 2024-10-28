console.log(localStorage.dicelist);
console.log(localStorage.d4list);
console.log(localStorage.d6list);
console.log(localStorage.d8list);
console.log(localStorage.d10list);
console.log(localStorage.d12list);
console.log(localStorage.d20list);
console.log(localStorage.d100list);
const rlist = JSON.parse(localStorage.dicelist) || [];
const dlen = rlist.length;
let total = 0;
for(let i = 0; i< rlist.length; i++) {
    total += rlist[i];
}
console.log("total: ", total);
const avg = total/dlen; 
masd = rlist.sort(function(a, b){return a -b});
console.log("lenght: ", dlen);
console.log("highest roll: ", masd[dlen-1]);

function clearstorg() {
    localStorage.clear();
}

// function nOccur(arr, val) {

// }

// I need a function that finds the mode

// I also need a fucntion that finds the occurences of a particular value

document.getElementById("disavg").textContent=avg.toFixed(2);
// function below is for testing purposes
document.querySelector("#reset").addEventListener("click", clearstorg);