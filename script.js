let inputSlider = document.getElementById("input-slider");
let inputValue = document.getElementById("input-value");


// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=> {
sliderValue.textContent = inputSlider.value;

});

