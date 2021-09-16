const drag = document.querySelector("#drag")
var div = document.getElementById('move');
var div2 = document.getElementById('move2');

let move = false

window.addEventListener("mousedown", (e) => {
    move = true

    drag.style.left = e.pageX+"px" 

    div2.style.maxWidth = (e.pageX - 955) +"px"
})

