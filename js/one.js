console.log ('Thank You');

const fname = document.querySelector("#fullname");
const mobile = document.querySelector("#phone");
const mail = document.querySelector("#email");
const ok = document.querySelector("#ok");



function func001(){
    console.log ("workeing");
    console.log (fname.value);
    console.log (mobile.value);
    console.log (mail.value);
    ok.innerText = ("תודה - אנו ניצור עימך קשר בהקדם");
    fname.value = ("");
    mobile.value = ("");
    mail.value = ("");
    // contact.style.display = ("none");
}