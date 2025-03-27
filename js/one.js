console.log ('Thank You');

const fname = document.querySelector("#fullname");
const mobile = document.querySelector("#phone");
const mail = document.querySelector("#email");



function func001(){
    console.log ("workeing");
    console.log (fname.value);
    console.log (mobile.value);
    console.log (mail.value);
    fname.value = ("");
    mobile.value = ("");
    mail.value = ("");
    // contact.style.display = ("none");
    alert("ההודעה נשלחה, המון תודה");
}