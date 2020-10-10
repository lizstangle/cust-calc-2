const ageInput = document.querySelector('#input-age')
const weightInput = document.querySelector('#input-weight')
const sizeInput = document.querySelector('#input-size')
const displayExercise = document.querySelector('#exercise')
const displayWater = document.querySelector('#water')
const displayTraining = document.querySelector('#training')
const dogCalc = document.querySelector('#calculate')

var age = 0
function calculateDogHappiness() {
  console.log(sizeInput)
  console.log(sizeInput.value)
  if (sizeInput.value === "large") {
    age = parseInt(ageInput.value) * 3
    console.log(age)
    displayExercise.innerHTML = "Daily Exercise twice per day (in minutes): " + age
  }  else {
    age = parseInt(ageInput.value) * 5
    displayExercise.innerHTML = "Daily Exercise twice per day (in minutes): " + age
  } 
  
  var weight = parseInt(weightInput.value) * 1
  displayWater.innerHTML = "Daily Minimum Water Intake (in ounces): " + weight
  age = parseInt(ageInput.value) * 2
  displayTraining.innerHTML = "Training Once or Twice per day(in minutes): " + age
}

dogCalc.addEventListener('click', calculateDogHappiness)
