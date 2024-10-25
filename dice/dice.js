//let m = Math.random();

//console.log(m);

function randRange(min, max) {
   return Math.floor(Math.random() * (max) ) + min;
}


let g = 4;
let dicemount = [];
let resarry = [];

// for (let i = 0; i < g; i++) {
//     dicemount.push(randRange(1,6));
// }

// for (let i = 0; i < dicemount.length; i++) {
//     console.log(dicemount[i]);
// }

function addRollResult(entry) {
    return `<p class="resroll">${entry.id}: ${entry.result}</p>`
}


const dires = document.querySelector("#disresults");


function roll(event) {
    const dnum = event.target;
    //console.log(dnum.id);
/*     if (dnum.id == "d4") {
        dicemount.push(randRange(1,6));
        console.log(dicemount);
        document.querySelector("#disresult").textContent = dicemount;
    } */
   const res = document.querySelector("#results");
// const newhtml = dicemount.map(addRollResult);

    switch(event.target.id) {
        case "d4":
            //dicemount.push(randRange(1,4))
            //document.querySelector("#disresult").textContent = dicemount + " ";
            //console.log(newhtml);
            result = randRange(1,4);
            //dires.innerHTML = dicemount.map(addRollResult).join("");
            break;
        case "d6":
            //dicemount.push(randRange(1,6))
            //document.querySelector("#disresult").textContent = dicemount + " ";
            //console.log(newhtml);
            //dires.innerHTML = dicemount.map(addRollResult).join(""); 
            result = randRange(1,6);
            break;
        case "d8":
            result = randRange(1,8);
            break;
        case "d10":
            result = randRange(1,10);
            break;
        case "d12":
            result = randRange(1,12);
            break;
        case "d20":
            result = randRange(1,20);
            break;
        case "d100":
            result = randRange(1,100);
            break;
        case "quickRoll":
            return;
    }

    resarry.push({id: dnum.id, result });
    dicemount.push(result);
    dires.innerHTML = resarry.map(addRollResult).join("");
    // console.log(dicemount);
}

//console.log(randRange(1,6));


//localStorage.setItem("name", myName);

document.querySelector("#quickRoll").addEventListener("click", roll);
// console.log(dicemount); 