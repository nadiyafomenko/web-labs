const allTypes = ['../data/backpacks.json', '../data/boots.json', '../data/tShirts.json'];
const random = Math.floor(Math.random() * 3);
let selected = allTypes[random];

document.addEventListener('DOMContentLoaded',  () => {
    ajaxUtils.sendGetRequest(selected,  (request) => {
        const specialsList = JSON.parse(request.responseText);

        const specials = document.querySelector('.specials-carousel');

        specialsList.data.forEach(item => {
            specials.innerHTML += `
             <div class="card" style="width: 18rem" >
                  <img src="${item.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <h6 class="card-title">${item.shortname}</h6>
                    <p class="card-text">${item.notes}</p>
                    <div>${item.price}</div>
                  </div>
             </div>`
        })
    })
})
