const cname = document.querySelector('.name');
const cclass = document.querySelector('#class');
const clevel = document.querySelector('#level');
const chealth = document.querySelector('#health');
const cattack = document.querySelector('#attack');
const cuplevel = document.querySelector('#levelUp');

let charcard = 
    {
        name: "Jeff",
        class: "Champion",
        level: 5,
        health: 100,
        image: "imgpath",
        attacked: function() {
            if (this.health > 0) {
                this.health-=20;
                chealth.innerHTML = `<b>Health:</b> ${this.health}`;
            }

            else if (this.health <= 0)
                //console.log("Death arrives");
                alert("Character Died");
        },
        levelUp: function() {
            this.level+=1;
            clevel.innerHTML = `<b>Level:</b> ${this.level}`;
            // thought this'd make sense charcard.health+=10; 
        }
    };

cname.textContent = charcard.name;
cclass.innerHTML = `<b>Class:</b> ${charcard.class}`;
clevel.innerHTML = `<b>Level:</b> ${charcard.level}`;
chealth.innerHTML = `<b>Health:</b> ${charcard.health}`;

cattack.addEventListener("click", function () {
    charcard.attacked();
});

cuplevel.addEventListener("click", function () {
    charcard.levelUp();
});
