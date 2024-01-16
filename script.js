// Create variables to store all the elements on the html
let currentValue = '';
let previousValue = '';
let operator = '';

let display = document.querySelector('#display');
let numbers = document.querySelectorAll('.operand');
let operators = document.querySelectorAll('.operator');
let clearBtn = document.querySelector('.clear');
let plusOrMinus = document.querySelector('.sign');
let percent = document.querySelector('.percent');
let deleteBtn = document.querySelector('.delete');
let decimalBtn = document.getElementById('decimal-btn');
let equals = document.getElementById('equals');

// handle numbers
numbers.forEach(number => {
    number.addEventListener('click', function() {
        handleNumbers(number.textContent);
        display.textContent = currentValue;
    })
})

function handleNumbers(number) {
    if (currentValue.length <= 10) {
        currentValue += number;
    }
}

// handle operators
operators.forEach(operator => {
    operator.addEventListener('click', function() {
        handleOperators(operator.textContent);
        // make the display div show the upcoming number after an operator is clicked
        display.textContent = currentValue;
    })
})

function handleOperators(op) {
    operator = op;  // assign the retrieved operator to the operator variable
    previousValue = currentValue; // save the current value as previous value and reset current vlaue
    currentValue = '';
}

// clear display/values
clearBtn.addEventListener('click', function() {
    display.textContent = '0'
    currentValue = '';
    previousValue = '';
    operator = '';
})

// delete the last digit
deleteBtn.addEventListener('click', function() {
    previousValue.toString();
    currentValue.toString();
    currentValue = currentValue.slice(0, -1);
    if(currentValue === '') {
        display.textContent = '0';
    } else {
        display.textContent = currentValue;
    }
})

// Do the calculation
equals.addEventListener('click', function() {
    operate();
    display.textContent = previousValue;
})

function operate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === '*') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }
    currentValue = previousValue;
    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function round(num) {
    return Math.round(num * 1000000) / 1000000;
}

// % function
percent.addEventListener('click', function() {
    percentage();
    display.textContent = currentValue;
})

function percentage() {
    currentValue = Number(currentValue);
    currentValue = currentValue / 100;
    currentValue = round(currentValue);
    currentValue = currentValue.toString();
}

// +/- function
plusOrMinus.addEventListener('click', function() {
    setMinus();
    display.textContent = currentValue;
})

function setMinus() {
    currentValue = Number(currentValue);
    currentValue = round(currentValue);
    currentValue = currentValue.toString();
    if(!currentValue.includes('-')){
        currentValue = `-${currentValue}`;
    } else {
        currentValue = currentValue.slice(1);
    }
}

// decimal function
decimalBtn.addEventListener('click', function() {
    addDecimal();
    display.textContent = currentValue;
})

function addDecimal() {
    if(!currentValue.includes('.')) {
        currentValue = `${currentValue}.`;
    } else {
        currentValue = currentValue;
    }
}

//