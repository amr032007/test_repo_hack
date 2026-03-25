"use strict";
function generateRandomNumber(minVal, maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
const resultEl = document.getElementById("result");
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const generateBtn = document.getElementById("generateBtn");
const errorEl = document.getElementById("error");
generateBtn.addEventListener("click", () => {
    const min = parseInt(minInput.value, 10);
    const max = parseInt(maxInput.value, 10);
    errorEl.textContent = "";
    if (isNaN(min) || isNaN(max)) {
        errorEl.textContent = "Please enter valid numbers.";
        return;
    }
    if (min >= max) {
        errorEl.textContent = "Min must be less than Max.";
        return;
    }
    resultEl.textContent = String(generateRandomNumber(min, max));
});
