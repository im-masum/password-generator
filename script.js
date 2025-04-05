let inputSlider = document.getElementById("input-slider");
let inputValue = document.getElementById("input-value");
let inputBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let button = document.getElementById("button");





// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=> {
sliderValue.textContent = inputSlider.value;

});

genBtn.addEventListener("click", ()=> {
passBox.generatePassword();
}); 

// function to generate password
function generatePassword(){
    let genPassword = "";

    genPassword = Math.floor( Math.random() * 100);
    return genPassword
}