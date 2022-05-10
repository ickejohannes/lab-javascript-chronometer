const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.split()[0];
  minUniElement.innerHTML = chronometer.split()[1];
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.split()[3];
  secUniElement.innerHTML = chronometer.split()[4];
}

// ==> BONUS
function printMilliseconds() {
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1];
}

function printSplit() {
  let splitElement = document.createElement('li');
  splitElement.className = "split";
  splitElement.innerHTML = chronometer.split();
  splitsElement.appendChild(splitElement);
}

function clearSplits() {
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRightElement.className = "btn split";
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.className = "btn start";
  btnLeftElement.innerHTML = "START";
}

function setResetBtn() {
  btnRightElement.className = "btn reset";
  btnRightElement.innerHTML = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === "btn reset") {
    chronometer.currentTime = 0;
    printTime();
    clearSplits();
  } else {
    printSplit();
    
  }
});
