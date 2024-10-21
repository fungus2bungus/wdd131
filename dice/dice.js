//let m = Math.random();

//console.log(m);

function randRange(min, max) {
   return Math.floor(Math.random() * (max) ) + min;
}


let g = 4;
dicemount = [];

for (let i = 0; i <= g; i++) {
    dicemount.push(randRange(1,6));
}

for (let i = 0; i < dicemount.length; i++) {
    console.log(dicemount[i]);
}

//console.log(randRange(1,6));
console.log(dicemount);