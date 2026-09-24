// 1. Functions
function nameOfFunction(name:string) {
    console.log("Henlo funcionas!" + name);
    console.log(`Tu nombre es: ${name}`);
}

nameOfFunction("jim");

// 2. Element selecters

//const selectBox:any = document.querySelector("#theme-select");

//selectBox.addEventListener("change", changeTheme);

//function changeTheme(event:any) {
//    console.log(event.target.value);
//}

// 3. If statments
const selectElem:any = document.querySelector("#theme-select");
const pageContent:any = document.querySelector('body');
selectElem.addEventListener('change', changeTheme);


function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
