const selectInputFrom = document.getElementById("temp-unit-from");
const tempInput = document.getElementById("temp-input");
const selectInputTo = document.getElementById("temp-unit-to");
const submitBtn = document.getElementById("convert-btn");
const resultDisplay = document.getElementById("output-value");

let tempFrom = "";
let tempTo = "";
let value = 0;


selectInputFrom.addEventListener("change", (e) => (tempFrom = e.target.value));
selectInputTo.addEventListener("change", (e) => (tempTo = e.target.value));
tempInput.addEventListener("input", (e) => (value = e.target.value));

submitBtn.addEventListener("click", () => {
  if (tempFrom && tempTo && value) {
    convertTemperature(value, tempFrom, tempTo);
  } else {
    resultDisplay.innerText = "Invalid input!";
  }
});

function convertTemperature(value, from, to) {
  const possibilities = {
    "celsius-fahrenheit": (celsius) => (celsius * 9) / 5 + 32,
    "fahrenheit-celsius": (fahrenheit) => ((fahrenheit - 32) * 5) / 9,
    "celsius-kelvin": (celsius) => parseFloat(celsius) + 273.15,
    "kelvin-celsius": (kelvin) => kelvin - 273.15,
    "fahrenheit-kelvin": (fahrenheit) => ((fahrenheit - 32) * 5) / 9 + 273.15,
    "kelvin-fahrenheit": (kelvin) => ((kelvin - 273.15) * 9) / 5 + 32,
  };

  const conversionKey = `${from}-${to}`;
  const formula = possibilities[conversionKey];

  if (formula) {
    const result = formula(Number(value)).toFixed(2);
    resultDisplay.innerText = result;
  } else {
    
    resultDisplay.innerText = "Invalid Conversion!";
 
 }
}


