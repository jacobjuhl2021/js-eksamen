// funcion - array - for loop - if statement - DOM manipulation - local storage - dato

// variabler = let + const
// datatyper = string, number
// loops = for
// betingelser = if


// Hent gemte værdier fra localStorage ved indlæsning af siden
document.getElementById("weight").value = localStorage.getItem("weight") || "";
document.getElementById("height").value = (localStorage.getItem("height") * 100) || "";
document.getElementById("result").textContent = "Your BMI is: " + localStorage.getItem("bmiResult") + ". This is considered: " + localStorage.getItem("bmiCategory");


function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
    const resultElement = document.getElementById("result");

    let bmi = weight / (height * height);
    let bmiCategory;

    const categories = [
        { range: [0, 18.4], label: "Underweight" },
        { range: [18.5, 24.9], label: "Normal weight" },
        { range: [25, 29.9], label: "Overweight" },
        { range: [30, 34.9], label: "Obesity" },
        { range: [35, 39.9], label: "Severe obesity" },
        { range: [40, Infinity], label: "Extreme obesity" }
    ]; 
        // For loop til at gennemgå alle kategorier - hæver med 1 hver gang ifstatement er false
    for (let i = 0; i < categories.length; i++) {
        let range = categories[i].range;
        // Hvis bmi er inden for det aktuelle interval, sæt bmiCategory til den tilsvarende kategori
        if (bmi >= range[0] && bmi <= range[1]) {
            bmiCategory = categories[i].label;
            break;
        }
    }

    resultElement.textContent = "Your BMI is: " + bmi.toFixed(2) + ". This is considered: " + bmiCategory;

    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    localStorage.setItem("bmiResult", bmi.toFixed(2));
    localStorage.setItem("bmiCategory", bmiCategory);
}