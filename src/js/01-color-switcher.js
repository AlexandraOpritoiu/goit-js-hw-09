function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

let intervalColor;

function startColorChange() {
    startButton.disabled = true;
    stopButton.disabled = false;

intervalColor = setInterval(() => {
    document.body.style.background = getRandomHexColor();
    }, 1000);
};

function stopColorChange() {
    startButton.disabled = false;
    stopButton.disabled = true;

    clearInterval(intervalColor);
};