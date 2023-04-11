window.onscroll = function () {
    stick_header()
}
var header = document.getElementById('header')

// Get the offset position of the navbar
var sticky = header.offsetTop

function stick_header() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}




let cardElement = document.querySelectorAll('.card')

let removeActiveClasses = () =>{
    cardElement.forEach(card =>{
        card.classList.remove('active')
    })
}


cardElement.forEach(card => {
    card.addEventListener('click', () =>{
        removeActiveClasses()
        card.classList.add('active')
    })
})

