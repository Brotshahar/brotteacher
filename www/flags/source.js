const bourd = document.querySelector("#bourd");
function builddom(data) {
  console.log(data);
  data.forEach(element => {
    bourd.innerHTML += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${element.flags.png}" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">${element.name.common}</h4>
  </div>
</div>`
  });
}

fetch(' https://restcountries.com/v3.1/all')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => builddom(data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));