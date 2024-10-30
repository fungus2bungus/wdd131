console.log(localStorage.dicelist);
/* console.log(localStorage.d4list);
console.log(localStorage.d6list);
console.log(localStorage.d8list);
console.log(localStorage.d10list);
console.log(localStorage.d12list);
console.log(localStorage.d20list);
console.log(localStorage.d100list); */
const rlist = JSON.parse(localStorage.dicelist) || [];
const dlen = rlist.length;
let total = 0;
let avg = 0;
let highRoll = 0;
/* for(let i = 0; i< rlist.length; i++) {
    total += rlist[i]; 
} */
function doCalc(arr) {
    console.log(arr);
    total = 0;
    avg = 0;
    highRoll = 0;
    const jlist = JSON.parse(arr);
    for(let i = 0; i<jlist.length; i++) {
        total+=jlist[i];
    }
    avg = total/jlist.length;
    const mgd = jlist.sort(function(a,b){return a-b});
    highRoll = mgd[(jlist.length)-1]
    // console.log(mgd);
    console.log("Highest Roll",highRoll);
    console.log("Length: ", jlist.length);
    // document.querySelctor()
    // document.querySelector(hgs[]).textContent=avg.toFixed(2);


}
// arrays of the average id selectors and each respective local storage object
// hgs = ["#d4avg", "#d6avg", "#d8avg", "#d10avg", "#d12avg", "#d20avg", "#d100avg"];
hsd = ["d4","d6","d8","d10","d12","d20","d100"]
hws = [localStorage.d4list, localStorage.d6list, localStorage.d8list, localStorage.d10list, localStorage.d12list, localStorage.d20list, localStorage.d100list];
//console.log("Test of local storage value: ", localStorage.(hsd[0]+"list");

findMode(arr) {
    const freqmap = {};
    arr.forEach(item => {
        freqmap[item] = (freqmap[item] || 0)+1;
    });
    

}

for(let k = 0; k<7; k++) {
    // console.log(localStorage.hgs[k]);
    doCalc(hws[k]);
    document.querySelector("#"+hsd[k]+"avg").textContent=(hsd[k]+": "+avg.toFixed(2));
    document.querySelector("#"+hsd[k]+"total").textContent=(hsd[k]+": "+total);
    document.querySelector("#"+hsd[k]+"max").textContent=(hsd[k]+": "+highRoll);

}

// console.log("total: ", total);
// const avg = total/dlen; 
// masd = rlist.sort(function(a, b){return a -b});
// console.log("lenght: ", dlen);
// console.log("highest roll: ", masd[dlen-1]);

function clearstorg() {
    localStorage.clear();
}

// function nOccur(arr, val) {

// }

// I need a function that finds the mode

// I also need a fucntion that finds the occurences of a particular value

//document.getElementById("disavg").textContent=avg.toFixed(2);
// function below is for testing purposes
document.querySelector("#reset").addEventListener("click", clearstorg);