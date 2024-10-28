//let m = Math.random();

//console.log(m);

function randRange(min, max) {
   return Math.floor(Math.random() * (max) ) + min;
}


// let g = 4;
let dicemount = [];
let resarry = [];
let d4l = [];
let d6l = [];
let d8l = [];
let d10l = [];
let d12l = [];
let d20l = [];
let d100l = [];

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
            // df.push(result);
            // console.log(df);
            d4l.push(result);
            //df = dicemount
            l4 = JSON.stringify(d4l);
            localStorage.setItem("d4list", l4);

            break;
        case "d6":
            //dicemount.push(randRange(1,6))
            //document.querySelector("#disresult").textContent = dicemount + " ";
            //console.log(newhtml);
            //dires.innerHTML = dicemount.map(addRollResult).join(""); 
            result = randRange(1,6);
            d6l.push(result);
            l6 = JSON.stringify(d6l);
            localStorage.setItem("d6list", l6);
            break;
        case "d8":
            result = randRange(1,8);
            d8l.push(result);
            l8 = JSON.stringify(d8l);
            localStorage.setItem("d8list", l8);
            break;
        case "d10":
            result = randRange(1,10);
            d10l.push(result);
            l10 = JSON.stringify(d10l);
            localStorage.setItem("d10list", l10);
            break;
        case "d12":
            result = randRange(1,12);
            d12l.push(result);
            l12 = JSON.stringify(d12l);
            localStorage.setItem("d12list", l12);
            break;
        case "d20":
            result = randRange(1,20);
            d20l.push(result);
            l20 = JSON.stringify(d20l);
            localStorage.setItem("d20list", l20);
            break;
        case "d100":
            result = randRange(1,100);
            d100l.push(result);
            l100 = JSON.stringify(d100l);
            localStorage.setItem("d100list", l100);
            break;
        case "quickRoll":
            return;
    }

    resarry.push({id: dnum.id, result });
    dicemount.push(result);
    dires.innerHTML = resarry.map(addRollResult).join("");
    console.log(dicemount);
    const listJSON = JSON.stringify(dicemount);
    localStorage.setItem("dicelist", listJSON);
    
}

//console.log(randRange(1,6));


//localStorage.setItem("name", myName);

document.querySelector("#quickRoll").addEventListener("click", roll);
// console.log(dicemount); 