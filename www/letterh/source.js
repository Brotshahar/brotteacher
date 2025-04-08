const color = document.querySelector("#square");



function suffule(){
    const randomOne = Math.floor(Math.random() * 25) + 1;
    color.src = "./asset/" + randomOne + ".png";

}