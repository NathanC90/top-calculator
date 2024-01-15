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