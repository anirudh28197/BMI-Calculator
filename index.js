let height = 177
let weight = 59
document.getElementById("height-el").textContent = height
document.getElementById("weight-el").textContent = weight
let logbmiRatio = document.getElementById("bmi-el")
function bmi(){
    calculateBmi = ((weight)/(height*height))*10000
    logbmiRatio.textContent = calculateBmi
}