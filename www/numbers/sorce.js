const circle = document.querySelector("#num");



function suffule(){
    const randomOne = Math.floor(Math.random() *10) ;
    circle.src = "./asset/" + randomOne + ".png";

}