const redCircleEl = document.querySelector('#redCircle');
const yellowCircleEl = document.querySelector('#yellowCircle');
const greenCircleEl = document.querySelector('#greenCircle');

let currentColor = '';

function changeColor() {
  if (currentColor === '' || currentColor === 'green') {
    redCircleEl.style.background = 'red';
    yellowCircleEl.style.background = 'black';
    greenCircleEl.style.background = 'black';
    currentColor = 'red';
  } else if (currentColor === 'red') {
    redCircleEl.style.background = 'black';
    yellowCircleEl.style.background = 'yellow';
    greenCircleEl.style.background = 'black';
    currentColor = 'yellow';
  } else if (currentColor === 'yellow') {
    redCircleEl.style.background = 'black';
    yellowCircleEl.style.background = 'black';
    greenCircleEl.style.background = 'green';
    currentColor = 'green';
  }
}

redCircleEl.style.background = 'black';
yellowCircleEl.style.background = 'black';
greenCircleEl.style.background = 'black';

redCircleEl.addEventListener('click', changeColor);
yellowCircleEl.addEventListener('click', changeColor);
greenCircleEl.addEventListener('click', changeColor);