let currValue = 0;
let prevValue = 0;
let equals = false;
let lastSign = null;

function update(value) {
  document.getElementById('result-text').innerText = value;
}

function clear() {
  currValue = 0;
  prevValue = 0;
  lastSign = null;
  equals = false;
  update(currValue);
}

function applySign(sign) {
  switch (sign) {
    case 'add':
      prevValue += currValue;
      break;
    case 'sub':
      prevValue -= currValue;
      break;
    case 'mul':
      prevValue *= currValue;
      break;
    case 'div':
      prevValue /= currValue;
      break;
    default:
      prevValue = currValue;  
  }
}

document.querySelectorAll('.operand').forEach(item => {
  item.addEventListener('click', event => {
   if (item.id == 'equal') {
    applySign(lastSign);
    equals = true;
    if (lastSign !== null) {
      update(prevValue);
    }
   } else {
    if (!equals) {
      applySign(lastSign);
    }
    lastSign = item.id;
    equals = 0;
    currValue = 0;
    update(0); 
   }
  })
});

document.querySelectorAll('.digit').forEach(item => {
  item.addEventListener('click', event => {
    if (equals) {
      clear();
    }
    currValue = 10 * currValue + parseInt(item.innerText);
    update(currValue);
  })
});

document.getElementById('clear').addEventListener('click', event => {
  clear();
});

document.getElementById('back').addEventListener('click', event => {
  currValue = Math.floor(currValue / 10);
  update(currValue);
});


