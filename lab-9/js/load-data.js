let backpacksList = {}
let bootsList = {}
let tShirtsList = {}

document.addEventListener('DOMContentLoaded',  () => {
    ajaxUtils.sendGetRequest('data/backpacks.json',  (request) => {
        backpacksList = JSON.parse(request.responseText);

        const backpacks = document.querySelector('.backpacks-carousel');
        const header = document.querySelector('.backpacks-header');

        header.innerHTML = backpacksList.section
        backpacksList.data.forEach(item => {
            backpacks.innerHTML += `
             <div class="card" style="width: 18rem;">
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

    ajaxUtils.sendGetRequest('data/boots.json',  (request) => {
        bootsList = JSON.parse(request.responseText);

        const boots = document.querySelector('.boots-carousel');
        const header = document.querySelector('.boots-header');

        header.innerHTML = bootsList.section
        bootsList.data.forEach(item => {
            boots.innerHTML += `
             <div class="card" style="width: 18rem;">
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

    ajaxUtils.sendGetRequest('data/tShirts.json',  (request) => {
        tShirtsList = JSON.parse(request.responseText);

        const tShirts = document.querySelector('.t-shirts-carousel');
        const header = document.querySelector('.t-shirts-header');

        header.innerHTML = tShirtsList.section
        tShirtsList.data.forEach(item => {
            tShirts.innerHTML += `
             <div class="card" style="width: 18rem;">
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

const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
    window.setTimeout(() => {
        window.location.reload();
    }, 200);
});
