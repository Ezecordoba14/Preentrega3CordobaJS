// Declaracion de los elementos del DOM
const firstName = document.getElementById('name')
const lastName = document.getElementById('lastName')
const emailContact = document.getElementById('emailContact')
const numberContact = document.getElementById('numberContact')
const dateEntrace = document.getElementById('dateEntrace')
const dateExit = document.getElementById('dateExit')
const confirmBooking = document.getElementById('confirmBooking')
const divTextBooking = document.getElementById('divtextbooking')
const bookText = document.getElementById('textbooking')
const resultForm = document.getElementById('resultForm')
const btnBooking = document.getElementById('btnBooking')
const DNIRadio = document.querySelector('#DNIRadio')
DNIRadio.setAttribute('checked', true)
const clearBooks = document.getElementById('clearBooks')
const numberDNI = document.getElementById('numberDNI')


let booking = JSON.parse(localStorage.getItem('booking')) || []
bookingList()



// Datos necesarios para el fromulario
class Data {
    constructor(firstNameData, lastNameData, emailContactData, numberContactData, dateEntraceData, dateExitData, idData) {
        this.firstNameData = firstNameData
        this.lastNameData = lastNameData
        this.emailContactData = emailContactData
        this.numberContactData = numberContactData
        this.dateEntraceData = dateEntraceData
        this.dateExitData = dateExitData
        this.idData = idData
    }
}
let id


// Boton que confirma la reserva
btnBooking.onclick = (event) => {
    event.preventDefault()
    if (lastName.value == '' || lastName.value == '' || emailContact.value == '' || dateEntrace.value == '' || dateExit.value == '' ||numberContact.value <= 0 || numberDNI.value <= 0) {
        resultForm.innerHTML = '<h4>Complete los campos correctamente por favor.<h4>'
    } else {
        booking.push(new Data(
            firstName.value,
            lastName.value,
            emailContact.value,
            numberContact.value,
            dateEntrace.value,
            dateExit.value,
            id = Date.now().toString(30)
        ))
        saveLocal()
        resultForm.innerHTML = '<h4>Muchas gracias<h4>'
        bookingList()

        Toastify({

            text: "Reserva realizada!",
            duration: 3000,
            gravity: "bottom",
            style: {
                background: "linear-gradient(90deg, rgba(238,9,9,1) 0%, rgba(163,9,9,1) 100%)",
            },
        }).showToast();
    }

}

// Guarda en el LocalStorage
const saveLocal = () => {
    localStorage.setItem('booking', JSON.stringify(booking))
}

// Impresion de las reservas
function bookingList() {
    confirmBooking.style.display = 'flex'
    bookText.innerHTML = ''


    booking.forEach(book => {
        const divText = document.createElement('div')
        divText.innerHTML += `
        -Reserva a nombre de: ${book.firstNameData} ${book.lastNameData}, para el dia ${book.dateEntraceData}
        <button id='button${book.idData}' class='cancelBook'>x</button>`
        bookText.appendChild(divText)


        // Accion eliminar reserva
        const buttons = document.querySelector(`#button${book.idData}`)

        buttons.addEventListener('click', () => {
            deleteItem(book.idData)
            divText.innerHTML = ' '

            if (booking.length == 0) {
                confirmBooking.style.display = 'none'
                localStorage.clear()
            }
        })
    });

}

// Boton eliminar Reserva
const deleteItem = (id) => {
    const foundId = booking.find((item) => item.idData === id)
    booking = booking.filter((items) => items.idData != foundId.idData)

    saveLocal()
}




//  minimos en los inputs date
const currentDay = new Date().toISOString().slice(0, 10);
dateEntrace.setAttribute('min', currentDay);

dateEntrace.addEventListener('input', function () {
    dateExit.min = dateEntrace.value;
});

// Boton de limpieza de localStorage
clearBooks.onclick = () => {
    localStorage.clear()
    location.reload(true)
}

setInterval(() => {

    if (!DNIRadio) {
        console.log(DNIRadio.value);
    } 


}, 1000);



//  --------------Estilos----------------------

//visibilidad del div Reservas
if (JSON.parse(localStorage.getItem('booking')) == null) {
    confirmBooking.style.display = 'none'
}



// Letrero Neon h1
const titleBrand = document.getElementById('tilteBrand')
setInterval(function () {
    titleBrand.classList.toggle("parpadeo");
}, 1000);


const pDateEntrace = document.getElementById('pDateEntrace')
const pDateExit = document.getElementById('pDateExit')

dateEntrace.oninput = () => {
    pDateEntrace.style.display = 'flex'
    pDateEntrace.innerHTML = `${dateEntrace.value}`

    if (dateEntrace.value != '') {
        dateExit.removeAttribute('disabled')
        dateExit.style.backgroundColor = '#f30014'
    }
    checkDate()
}




dateExit.oninput = () => {
    pDateExit.style.display = 'flex '
    pDateExit.innerHTML = `${dateExit.value}`

}

// Chequeador de fechas

checkDate = () => {
    if (dateEntrace.value > dateExit.value) {
        dateExit.value = ''
        pDateExit.innerHTML = ' -  -  '
        pDateExit.style.transition = '0.5s'
    }
}


// ----------------------------