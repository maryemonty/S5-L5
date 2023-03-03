document.addEventListener('DOMContentLoaded', () => {
    let scroll = window.scrollY

    const nav = document.querySelector("nav")
    const scrollChange = 350

    window.addEventListener('scroll', function() { 
        scroll = window.scrollY;
        scroll >= scrollChange ? nav.classList.add("white") : nav.classList.remove("white")
    })
    })
document.addEventListener('DOMContentLoaded', () => {
    let scroll = window.scrollY

    const nav = document.querySelector("button")
    const scrollChange = 350

    window.addEventListener('scroll', function() { 
        scroll = window.scrollY;
        scroll >= scrollChange ? nav.classList.add("green") : nav.classList.remove("green")
    })
    })