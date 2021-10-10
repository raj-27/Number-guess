let largeNum = 10;
let smallNum = 1;
let winningNum = getRandomNum(smallNum, largeNum);
let guessCount = 3;
let containGame = document.querySelector('.container');
let confirm = document.getElementById('submit');
let minNum = document.querySelector('.minNum');
let maxNum = document.querySelector('.maxNum');
let message = document.querySelector('.message')
let inputNumber = document.querySelector('#inputNumber');

minNum.textContent = smallNum;
maxNum.textContent = largeNum;


containGame.addEventListener('mousedown', (e) => {
    let target = e.target;
    if (target.classList.contains('Play-Again')) {
        window.location.reload();
    }
})

function getRandomNum(smallNum, largeNum) {
    return Math.floor(Math.random() * (largeNum - smallNum + 1) + smallNum)
}

confirm.addEventListener('click', (e) => {
    let guess = parseInt(inputNumber.value)
    if (isNaN(guess) || guess < smallNum || guess > largeNum) {
        sentMessage(`Enter Your Number Between ${smallNum} and  ${largeNum}`, 'red')
    } else {
        if (guess === winningNum) {
            gameOver(true, `${guess} is correct,You Won!`)

        } else {
            guessCount--;
            if (guessCount === 0) {
                gameOver(false, `Game over You lost, And the correct number is ${winningNum}`)
            } else {
                sentMessage(`${guess} is not correct,and${guessCount} guess left`, 'red');
            }
        }
    }
})


function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    inputNumber.disabled = "true";
    sentMessage(msg, color);
    confirm.value = 'Play Again'
    confirm.classList.add('Play-Again');
}

function sentMessage(msg, color) {
    inputNumber.style.borderColor = color;
    message.textContent = msg;
    message.style.color = color;
}