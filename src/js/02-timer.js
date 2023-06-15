import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('input#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
startBtnEl.addEventListener('click', onStartBtnClick);

let timerId = null;
let timerDedline = null;
startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    Notiflix.Notify.success('Date selected press the start button');

    timerDedline = selectedDates[0];

    startBtnEl.disabled = false;
  },
};

flatpickr(inputEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  if (ms <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  } else {
    return { days, hours, minutes, seconds };
  }
}

function onStartBtnClick() {
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const diff = timerDedline - currentTime;

    if (diff <= 0) {
      clearInterval(timerId);
      Notiflix.Notify.success('Time out');
    }
    const { days, hours, minutes, seconds } = convertMs(diff);

    timer.querySelector('[data-days]').textContent = pad(days);
    timer.querySelector('[data-hours]').textContent = pad(hours);
    timer.querySelector('[data-minutes]').textContent = pad(minutes);
    timer.querySelector('[data-seconds]').textContent = pad(seconds);
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, 0);
}
