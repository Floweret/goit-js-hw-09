const buttonStartRef = document.querySelector('[data-start]');
const buttonStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

buttonStartRef.addEventListener('click', onButtonStart);
buttonStopRef.addEventListener('click', onButtonStop);

let intervalId;
function onButtonStart(event) {
  buttonStartRef.disabled = true;
  buttonStopRef.disabled = false;
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}

function onButtonStop(event) {
  buttonStopRef.disabled = true;
  buttonStartRef.disabled = false;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
