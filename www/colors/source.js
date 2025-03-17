const color = document.querySelector("#square");



function suffule(){
    const randomOne = Math.floor(Math.random() *9) +1 ;
    color.src = "./asset/" + randomOne + ".png";

}