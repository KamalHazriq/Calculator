
const display = document.getElementById("display");

function addToDisplay(input){
    
    if (input === '0') {
        if (display.value === '0') {
            return;
        }
        if (display.value.includes('.')) {
            display.value += input;
        }
    } else {
        display.value += input;
    }
    
    
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    
}

function delDisplay(){
    display.value = display.value.slice(0, -1);
}

// Initialize with the first theme in the sequence
let themeSequence = [1, 2, 3, 2];
let currentIndex = 0;

function changeTheme() {
    // Get the next theme in the sequence
    let nextTheme = themeSequence[currentIndex];
    
    // Apply the new theme
    const body = document.body;
    body.classList.remove('theme1', 'theme2', 'theme3');
    body.classList.add(`theme${nextTheme}`);
    
    const calculator = document.querySelector('.calculator');
    calculator.classList.remove('theme1', 'theme2', 'theme3');
    calculator.classList.add(`theme${nextTheme}`);
    
    // Update the index to the next theme in the sequence
    currentIndex = (currentIndex + 1) % themeSequence.length;
}

// Initialize event listener for the slider
document.querySelector('.slider').addEventListener('click', changeTheme);
