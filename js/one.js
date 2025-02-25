console.log ('Thank You');

const fname = document.querySelector("#fullname");
const mobile = document.querySelector("#phone");
const mail = document.querySelector("#email");
const ok = document.querySelector("#ok");
const contact = document.querySelector("#contact");


function func001(){
    console.log ("workeing");
    console.log (fname.value);
    console.log (mobile.value);
    console.log (mail.value);
    ok.innerText = ("תודה - אנו ניצור עימך קשר בהקדם");
    ok.style.fontSize = ("25px");
    ok.style.color = ("#214771");
    ok.style.marginRight = ("200px");
    ok.style.fontWeight = ("700");
    contact.style.display = ("none");
}