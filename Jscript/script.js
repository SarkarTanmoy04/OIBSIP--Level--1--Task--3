const tempInput = document.getElementById('temp-input');
const unitSelect = document.getElementById('unit-select');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const result_kelvin = document.getElementById('result-kelvin');


function convertTemp() {
    const temperature = tempInput.value;
    const unit = unitSelect.value;

    if (unit === 'C') {
        //Celsius to Fahrenheit 
        const fahrenheit = (temperature * 9/5) +32;
        const celsius_kelvin = temperature + 273.15;
        // const celkel = temperature + 273.15;

        result.textContent = `${temperature}°C  = ${fahrenheit.toFixed(2)} °F`
        result_kelvin.textContent = `${temperature}°C  = ${celsius_kelvin} K`
    }
    else if (unit==='F'){
        //Fahrenheit to Celsius
        const celsius = (temperature-32)*5/9;
        const Fahr_kel = (temperature - 32)*5/9 + 273.15;

        result.textContent=`${temperature}°F = ${celsius.toFixed(2)}°C`;
        result_kelvin.textContent = `${temperature}°F  = ${Fahr_kel}K`
    }
}

convertBtn.addEventListener('click',convertTemp);