const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

let intervalId = null;

startBtnEl.addEventListener('click', onClickStartBtn);
stopBtnEl.addEventListener('click', onClickStoptBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStartBtn() {
  intervalId = setInterval(() => {
    const rendomHexColor = getRandomHexColor();

    document.querySelector('body').style.backgroundColor = rendomHexColor;
  }, 1000);

  startBtnEl.disabled = true;
}

function onClickStoptBtn() {
  clearInterval(intervalId);
  startBtnEl.disabled = false;
}
