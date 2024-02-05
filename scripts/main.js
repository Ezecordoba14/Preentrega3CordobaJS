// Impresion de las cards de los hoteles
const reservas1 = document.querySelector('.reservas1')

fetch('./JSON/hotels.json')
    .then((response) => response.json())
    .then((hotels) =>
        hotels.forEach(hotel => {
            const divText = document.createElement('div')
            divText.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${hotel.img}"
                            class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div>
                                <h5 class="card-title"> ${hotel.name} </h5>
                                <article class="articleDescription">
                                    <p class="card-text">${hotel.description}</p>
                                </article>
                            </div>
                            <div id="divLeft">
                                <h6>$${hotel.price}</h6>
                                <a href="./html/reservas${hotel.id}.html" class="btn btn-primary" id='${hotel.id}'>RESERVAR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
            // console.log(hotel.name);

            reservas1.appendChild(divText)
        })

    )



// Declaracion de inputs
const titleBrand = document.getElementById('tilteBrand')


setInterval(function () {
    titleBrand.classList.toggle("parpadeo");
}, 1000);