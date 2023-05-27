const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

// інтервал
let intervalId = null;

// слухачі
startBtnEl.addEventListener('click', onClickStartBtn);
stopBtnEl.addEventListener('click', onClickStoptBtn);

//рандомний колір
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//клік на кнопку старт
function onClickStartBtn() {
  intervalId = setInterval(() => {
    const rendomHexColor = getRandomHexColor();

    document.querySelector('body').style.backgroundColor = rendomHexColor;
  }, 1000);

  startBtnEl.disabled = true;
}

//клік на кнопку стоп
function onClickStoptBtn() {
  clearInterval(intervalId);
  startBtnEl.disabled = false;
}
