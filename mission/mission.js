clor = document.querySelector("select")
clor.addEventListener("change",changeTheme);
function changeTheme() {
    //console.log(clor.value);
    if (clor.value == "dark") {
        document.querySelector("body").setAttribute("class", "dark");
        document.querySelector("#logo").setAttribute("src", "byui-logo_white.png")
        document.querySelector(".dark h3").style.color = "#468fc3";
    }
    else {
        document.querySelector("body").removeAttribute("class");
        document.querySelector("h3").style.color = "#006ab6";
        document.querySelector("#logo").setAttribute("src", "byui-logo_blue.webp")
    }
}