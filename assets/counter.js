const counter = document.createElement('div');
counter.className = 'counter';
document.body.appendChild(counter);

const title = document.createElement('h1');
title.innerHTML = 'Counter'
counter.appendChild(title);

const counterAddMinus = document.createElement('div');
counterAddMinus.className = 'add-minus';
counter.appendChild(counterAddMinus);

const minusButton = document.createElement('button');
minusButton.innerHTML = '-';
minusButton.className = 'minus';
counterAddMinus.appendChild(minusButton);

const number = document.createElement('div');
number.innerHTML = '0';
number.className = 'counter-number';
counterAddMinus.appendChild(number);

const addButton = document.createElement('button');
addButton.innerHTML = '+';
addButton.className = 'add';
counterAddMinus.appendChild(addButton);


const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
resetButton.className = 'reset';
counter.appendChild(resetButton);

let n = 0;

function add() {
 n+=1;
 number.innerHTML = n;
}

function minus() {
  if(n>0) {
    n-=1;
    number.innerHTML = n;
  }
  else {
    alert('Oops! The counter is already at zero!');
  }
}

function reset() {
  n=0;
  number.innerHTML = n;
}

addButton.onclick = add;
// addButton.setAttribute('onclick', 'add()')

minusButton.onclick = minus;

resetButton.onclick = reset;
