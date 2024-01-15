// Create variables to store all the elements on the html
let currentValue = '';
let previousValue = '';
let operator = '';

// display
let display = document.querySelector('#display');

// operands
let numbers = document.querySelectorAll('.operand');

// operators
let operators = document.querySelectorAll('.operator');

// AC button
let clearBtn = document.querySelector('.clear');

// +/- button
let plusOrMinus = document.querySelector('.sign');

// % button
let percent = document.querySelector('.percent');

// delete/revise button
let deleteBtn = document.querySelector('.delete');

// decimal button
let decimalBtn = document.getElementById('decimal-btn');

// = button
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

function handleOperators(operator) {
    operator = operator;  // assign the retrieved operator to the operator variable
    currentValue = previousValue; // save the current value as previous value and reset current vlaue
    currentValue = '';
}

// clear display/values
clearBtn.addEventListener('click', function() {
    display.textContent = '0'
    currentValue = '';
    previousValue = '';
    operator = '';
})

// Do the calculation