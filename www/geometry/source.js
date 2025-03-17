const w = document.querySelector("#width");
const h = document.querySelector("#hight");
const cubew = document.querySelector("#widthcube");
const cubeh = document.querySelector("#hightcube");
const cubed = document.querySelector("#depthcube");
const c = document.querySelector("#radeuse");
const p = document.querySelector("#output");
const cdata = document.querySelector("#output2");
const cubedata = document.querySelector("#output3");




function output(){
    let calculate = (w.value * h.value);
    let para = ((w.value * 2 ) + (h.value * 2 ));
    p.innerText = ("");
    if (w.value === h.value){
       
        p.innerText = ("Its a Square , ");
    }
    p.innerText += ("The area of the retangle is:  " + calculate + " cm2 ! " + "The paramiter of the retangle is:  " + para + " cm ! ");
}

function output2(){
    cdata.innerText = "";
    let area = (Math.pow(c.value ,2 ) * 3.14);
    let para = (2 *3.14 * c.value);
    cdata.innerText = ("The area of the cercle is:  " + area + " cm2 and the paramiter is: " + para + " cm !");
}


function output3(){
    cubedata.innerText = "";
    let volume = (cubew.value * cubeh.value * cubed.value);
    cubedata.innerText = ("The Volume of the Cube is : " + volume + " cm3 ! ");

}