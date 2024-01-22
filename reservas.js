const firstName = document.getElementById('name')
const lastName = document.getElementById('lastName')
const emailContact = document.getElementById('emailContact')
const numberContact = document.getElementById('numberContact')
const dateEntrace = document.getElementById('dateEntrace')
const dateExit = document.getElementById('dateExit')
const confirmBooking = document.getElementById('divtextbooking')
const resultForm = document.getElementById('resultForm')
const btnBooking = document.getElementById('btnBooking')
const checkRadio= document.getElementsByClassName('checkRadio')
const titleBrand= document.getElementById('tilteBrand')



const booking = JSON.parse(localStorage.getItem('booking')) || []
bookingList()

class Data {
    constructor(firstNameData, lastNameData, emailContactData, numberContactData, dateEntraceData, dateExitData) {
        this.firstNameData = firstNameData
        this.lastNameData = lastNameData
        this.emailContactData = emailContactData
        this.numberContactData = numberContactData
        this.dateEntraceData = dateEntraceData
        this.dateExitData = dateExitData
    }
}


btnBooking.onclick = (event) => {
    event.preventDefault()
    if (lastName.value == '' || lastName.value == '' || emailContact.value == ''|| dateEntrace.value==''|| dateExit == '' || !checkRadio) {
        resultForm.innerHTML= '<h4>Complete los campos por favor.<h4>'
    }else{
        booking.push(new Data(
            firstName.value,
            lastName.value,
            emailContact.value,
            numberContact.value,
            dateEntrace.value,
            dateExit.value
        ))
    
    
        localStorage.setItem('booking', JSON.stringify(booking))
    
        console.log(JSON.parse(localStorage.getItem("booking")))
    
            resultForm.innerHTML= '<h4>Muchas gracias<h4>'

        bookingList()
    }
    

}

const currentDay = new Date().toISOString().slice(0, 10);
dateEntrace.setAttribute('min', currentDay);

dateEntrace.addEventListener('input', function () {
    dateExit.min = dateEntrace.value;
});




function bookingList() {
    let bookText = document.createElement('p')
    
    for (let i = 0; i < booking.length; i++) {
        const book = booking[i];
        bookText.innerHTML = `
            -Reserva a nombre de: ${book.firstNameData} ${book.lastNameData}, para el dia ${book.dateEntraceData}`
    }
    confirmBooking.appendChild(bookText)
}



// function title() {
//     titleBrand.style.textShadow= "2px 2px 20px #e40517"
// }
// setInterval (title, 3000)

    setInterval(function() {
        titleBrand.classList.toggle("parpadeo");
    }, 1000);

