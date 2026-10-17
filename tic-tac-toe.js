document.addEventListener("DOMContentLoaded", function(){
    const squares = document.querySelectorAll('#board div');
    squares.forEach(
        function(square){
            square.classList.add("square");
            square.addEventListener("click", xo);
            square.addEventListener("mouseover", hover);
            square.addEventListener("mouseout", notHover);
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
    checkWinner();
}

function hover(event){
    const square = event.target;
    square.classList.add("hover");
}

function notHover(event){
    const square = event.target;
    square.classList.remove("hover");
}

let winFound = false;
function checkWinner(){
    const winRows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    if (winFound === false){
        const squares = document.querySelectorAll("#board div");
        for (r of winRows){
            s1 = squares[r[0]].textContent;
            s2 = squares[r[1]].textContent;
            s3 = squares[r[2]].textContent;

            if((s1 !== "" && s2 !== "" && s3 !== "") &&
            (s1 == s2 && s2 == s3)){
                let winner = "";
                if(s1 == "X")
                    winner = "X";
                else
                    winner = "O";
                const msg = document.querySelector('#status');
                msg.textContent = 'Congratulations! ' + winner + ' is the Winner!';
                msg.classList.add('you-won');
                winFound = true;
                break;
            }
        }
    }
}