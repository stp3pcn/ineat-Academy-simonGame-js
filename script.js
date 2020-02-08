// Write Javascript code!
const colors = ['green', 'red', 'blue', 'yellow'];

const green = document.getElementById('green');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');


green.addEventListener('click', () => handleClick('green'));
red.addEventListener('click', () => handleClick('red'));
blue.addEventListener('click', () => handleClick('blue'));
yellow.addEventListener('click', () => handleClick('yellow'));

const score = document.getElementById('score');

let game = [];
let playerGame = [];
let level = 0;

function updateGame(number) {
    score.innerHTML = number;
}

async function playSequence() {
    for (let color of game) {
        activeButton(color);
        await sleep(700);
    }
    console.log(`game :${game} `);
}

function activeButton(color) {

    switch (color) {
        case 'green':
            green.classList.add("active");
            setTimeout(() => {
                green.classList.remove("active")
            }, 700);
            break;
        case 'blue':
            blue.classList.add("active");
            setTimeout(() => {
                blue.classList.remove("active")
            }, 700);
            break;
        case 'red':
            red.classList.add("active");
            setTimeout(() => {
                red.classList.remove("active")
            }, 700);
            break;
        case 'yellow':
            yellow.classList.add("active");
            setTimeout(() => {
                yellow.classList.remove("active")
            }, 700);
            break;

        default:
            console.log("error");
            break;
    }

}

async function startGame() {
    nextLevel();

}

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));

}

function handleClick(color) {
    playerGame = [...playerGame, color];
    activeButton(color);
    if (game.length === playerGame.length) {
        checkSequence();
    }
}

function checkSequence() {
    console.log(`playergame : ${playerGame}`);
    if (JSON.stringify(game) === JSON.stringify(playerGame)) {
        playerGame=[];
        nextLevel();
    } else {
        reset();
    }

}

function nextLevel() {
    level = level + 1;
    updateGame(level)
    let indexTableau = Math.floor(Math.random() * 4);
    game.push(colors[indexTableau]);
    playSequence();
}

function reset() {
    game = [];
    playerGame = [];
    level = 0;
    nextLevel();

}

startGame();
