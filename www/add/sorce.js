const result = document.querySelector("h1");
let count = 0;

function add(val){
    count = count + val;
    const total = (String(count).padStart(3,0));
    result.innerText = (total);
}