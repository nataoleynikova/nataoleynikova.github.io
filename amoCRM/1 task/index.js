const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

function createTimerAnimator(seconds) {
  let currentDate = Date.now();
  let correctTime = currentDate + seconds * 1000;
  displayTime(seconds);

  setInterval(() => {
    let secondsLeft = Math.round((correctTime - Date.now()) / 1000);
    if (secondsLeft < 0) {
      return;
    }
    displayTime(secondsLeft);
  }, 1000);
}

function displayTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds / 60);
  let restSeconds = seconds % 60;

  timerEl.innerHTML = `${hours}:${restSeconds < 10 ? "0" : ""}${minutes}:${restSeconds < 10 ? "0" : ""}${restSeconds}`;
}

function startTimer() {
  let seconds = Number(inputEl.value);
  createTimerAnimator(seconds);
}

inputEl.addEventListener('input', () => {
  buttonEl.onclick = () => (
    inputEl.value = ""
  )
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  createTimerAnimator(seconds);

  inputEl.value = '';
});