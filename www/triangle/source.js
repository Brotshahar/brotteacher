const w = document.querySelector("#width");
const h = document.querySelector("#hight");
const result = document.querySelector("#result");




function output(){
    let calculate = (w.value * h.value)/2;
    result.innerText = ("");
    result.innerText += ("שטח המשולש  " + calculate + " סמר ");
}
