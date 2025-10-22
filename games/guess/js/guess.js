let btn = document.getElementById('checkBtn');
let restart = document.getElementById('resetBtn');
let counter = document.getElementById('counter');
let hint = document.getElementById('hint');
let randomValue = generateRandomValue();
let count = 0;
let won = false;
let val;

function generateRandomValue(){
    return Math.floor(Math.random() * 100) + 1;
}

let userInput = document.getElementById('userInput');

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        btn.click();
    }
});

btn.onclick = function(){
    val = Number(document.getElementById('userInput').value);

    getHint(val);
    increaseCounter();
}


function getHint(val) {
    if (val >= 1 && val <= 100){
        if (val == randomValue) {
            hint.innerText = `CONGRATULATIONS, YOU WON IN ${count + 1} ATTEMPTS!`;
            won = true;
        } else if ((randomValue - val) > 10) {
            hint.innerText = "YOUR GUESS IS TOO LOW!";
        } else if ((val - randomValue) > 10) {
            hint.innerText = "YOUR GUESS IS TOO HIGH!";
        } else if ((randomValue - val) <= 10 && randomValue > val) {
            hint.innerText = "YOUR GUESS IS SLIGHTLY LOW!";
        } else if ((val - randomValue) <= 10 && val > randomValue) {
            hint.innerText = "YOUR GUESS IS SLIGHTLY HIGH!";
        }
    } else {
        hint.innerText = "INVALID INPUT! PLEASE ENTER A NUMBER BETWEEN 1 AND 100";
    }
}

function increaseCounter(){
    if (count < 4) {
        count++;
        counter.innerText = count;
    } else {
        counter.innerText = "Guesses Finished";
        if (!won) {
            hint.innerText = `You lost, the ans was ${randomValue}`
        }
    }
}

restart.onclick = function(){
    location.href = "../build/guessthenumber.html";
}