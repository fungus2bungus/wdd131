"use strict";
const colorList = ['blue', 'cyan', 'gray', 'green', 'hot_pink', 'lime', 'orange', 'pink', 'purple', 'red', 'yellow']; // len=12, index=11 didn't feel like including white
// 1. click on button
document.querySelector('#rollButton')?.addEventListener("click", e => {
    // 2. animate the die
    setDieImages("assets/die_rolling.gif");
    // 3. Land on a new random number
    setTimeout(() => {
        //setDieImages("assets/white_dice_6.gif");
        setRolls();
    }, 1000);
});
/**
 * Gets all dice as a collection
 * Iterates through them and assigns them to the rolling .gif
 * @param {string} imagePath path to .gif file
**/
function setDieImages(imagePath) {
    document.querySelectorAll('#gameboard img').forEach((image) => {
        if (!isDieChecked(image.className))
            image.src = imagePath;
    });
}
/**
 * Sets rolled dice images to a random roll(1-6) and a random color
**/
// don't think this was expected, but I foudn it easier to set dice this way, also made it easier to implement the random colors
function setRolls() {
    document.querySelectorAll('#gameboard img').forEach((image) => {
        let roll = Math.floor((Math.random() * 6) + 1);
        let index = Math.floor(Math.random() * 11);
        //console.log(index); // trying to find which and how to get everything from the colorList array
        //console.log(roll);
        //console.log(box.tagName); // took a bit to figure out why it was always IMG
        if (!isDieChecked(image.className))
            image.src = `assets/${colorList[index]}_dice_${roll}.gif`;
        // saw that there were other images that could be used
        // okay, I saw someone else find this,
        // but its still pretty neat
    });
}
// initially had this replace setDieImages, but it seemed easier to just have an if statement check, as seen with the proper subsequent function
function dieChecked() {
    document.querySelectorAll('#gameboard input').forEach((box) => {
        const die = document.querySelector(`.${box.className}`);
        //let roll:number = Math.floor((Math.random()*6)+1);
        if (box.checked == false)
            //document.querySelector<HTMLImageElement>(`.${box.className}`)!.src = `assets/white_dice_${roll}.gif`;
            //setDieImages("assets/die_rolling.gif");
            die.src = "assets/die_rolling.gif";
    });
}
/**
 * Finds the checkbox of a specified dice element
 * Returns if the checkbox is checked or not
 * @param {string} className HTML Element class name
 * @returns {boolean} boolean of .checked property
 **/
// I don't think this was the intended way to do this, but it seems to work just fine
function isDieChecked(className) {
    const box = document.querySelectorAll(`.${className}`)[1];
    return box?.checked;
}
