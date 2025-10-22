let turn = "X";
let isGameOver = false;

// Function to change turn
function changeTurn() {
    return turn === "X" ? "O" : "X";
}

// Function to check for a win
function checkWin() {
    let boxtexts = document.getElementsByClassName('boxtext');
    let info = document.querySelector('.info');
    let wins = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];
    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText !== "" &&
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
        ) {
            info.innerText = boxtexts[e[0]].innerText + " WON!";
            isGameOver = true;
        }
    });
}

// Function to check for a draw
function checkDraw() {
    let boxtexts = document.getElementsByClassName('boxtext');
    let info = document.querySelector('.info');
    let filled = Array.from(boxtexts).every(box => box.innerText !== "");
    if (filled && !isGameOver) {
        info.innerText = "DRAW!";
        isGameOver = true;
    }
}

// Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(box => {
    box.addEventListener('click', () => {
        let boxtext = box.querySelector('.boxtext');
        if (boxtext.innerText === "" && !isGameOver) {
            boxtext.innerText = turn;
            checkWin();
            checkDraw();
            if (!isGameOver) {
                turn = changeTurn();
                document.querySelector('.info').innerText = turn + "'s Turn";
            }
        }
    });
});

// Reset function
function reset() {
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(box => {
        box.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.querySelector('.info').innerText = turn + "'s Turn";
}

// Initialize info text
document.querySelector('.info').innerText = turn + "'s Turn";