document.addEventListener("DOMContentLoaded", function(){
    const squares = document.querySelectorAll('#board div');
    squares.forEach(
        function(square){
            square.classList.add("square");
            square.addEventListener("click", xo);
            square.addEventListener("mouseover", hover);
            square.addEventListener("mouseout", nothover);
    });
});

const plays = [];
function xo(event){
    const square = event.target;
    if (!(square.classList.contains("X")) && !(square.classList.contains("O"))){
        if (plays.length % 2 == 0){
            square.classList.add("X");
            square.textContent = "X";
            plays.push(event.target);
        } else {
            square.classList.add("O");
            square.textContent = "O";
            plays.push(event.target);
        }
    }
}

function hover(event){
    const square = event.target;
    square.classList.add("hover");
}

function nothover(event){
    const square = event.target;
    square.classList.remove("hover");
}