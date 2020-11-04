
import { colors } from './js/colors.js';
import { startButton, stopButton } from './js/addClasses.js';


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startButton.addEventListener('click', onChangeColor);
stopButton.addEventListener('click', onDisableChangeBackground)
let clear = null;

function onChangeColor() {
  
  if (startButton.classList.contains('active')) {
    return;
  }
  
  startButton.classList.add('active');
  clear = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, 9)]
  }, 1000);
}

function onDisableChangeBackground() {
  clearInterval(clear);
  startButton.classList.remove('active');
  document.body.style.background = 'white' ;
}


