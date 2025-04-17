const color = document.querySelector("#square");



function suffule(){
    const randomOne = Math.floor(Math.random() * 26) + 1;
    color.src = "./asset/" + randomOne + ".png";

}