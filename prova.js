let svg = document.querySelectorAll('g')
function show(){
    // setInterval(hide, 1000)
    console.log(svg.length);
}
show()

function hide() {
    svg.setAttribute('opacity','0')
}