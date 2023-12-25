// Preentrega 2

function listServc() {
    const service = [{
            hotels: "Palermo Essence",
            price: 5200,
            location: "Buenos Aires"
        },
        {
            hotels: "Stay suites",
            price: 3500,
            location: "Cordoba"
        },
        {
            hotels: "Amérian Córdoba",
            price: 7800,
            location: "Cordoba"
        },
        {
            hotels: "Millennium",
            price: 4300,
            location: "Mendoza"
        },
        {
            hotels: "Howard Johnson",
            price: 4700,
            location: "Jujuy"
        }
    ];





    console.log("Todos los hoteles ofrecidos son:", service);

    let filterPrice = '';

    while (!filterPrice) {
        filterPrice = parseInt(prompt("Ingrese el precio hasta el cual desea filtrar"))
    }

    const resultFilter = service.filter((el) => el.price <= filterPrice);

    let filterSort = ''

    while (!filterSort) {
        filterSort = prompt("Quiere ordenar los precios de 'Mayor a menor' o de 'Menor a mayor'");
    }

    if (filterSort.toLocaleLowerCase() === "mayor a menor") {
        resultFilter.sort((a, b) => b.price - a.price);
    } else if (filterSort.toLocaleLowerCase() === "menor a mayor") {
        resultFilter.sort((a, b) => a.price - b.price);
    }
    console.log("Resultado de los filtros aplicados:", resultFilter);




    let payServ = '';


    while (!payServ) {
        payServ = parseInt(
            prompt("Usted pagara el servicio con la opcion 1 (efectivo, trasnferencia, teniendo un 10% de desc.) o con la opcion 2 (Tarjetas, ya sea de debito o credito)? Simplemente complete el campo con 1 o con 2")
        );
    }




    if (payServ === 1) {
        const discountedProduct = resultFilter.map(function (servc) {
            return {
                hotels: servc.hotels,
                price: servc.price * 0.9,
                location: servc.location,
            };
        });
        console.log("Segun lo seleccionado, los precios son los siguientes: ",
            discountedProduct
        );
    } else if (payServ === 2) {
        console.log(
            "Segun lo seleccionado, los precios son los siguientes: ",
            resultFilter
        );
    }



}

listServc()