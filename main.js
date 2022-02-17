var letsCookBtn = document.querySelector("#cook-button");
var pot = document.querySelector("#pot-container");
var mealView = document.querySelector("#meal-view");
var mealIdea = document.querySelector(".meal-idea");
var radioButtons = document.querySelectorAll("input");
var clearBtn = document.querySelector("#clear-button");

var sides = ["Rice", "Salad"];
var mains = ["Spagetti", "Pineapple Pizza"];
var desserts = ["Banana Bread", "Cheesecake"];
var meals = [sides, mains, desserts];

letsCookBtn.addEventListener("click", displaySuggestion);
clearBtn.addEventListener("click", clearSuggestion);


function displaySuggestion() {
  displayMealIdea();
  hide(pot);
  show(mealView);
}

function clearSuggestion() {
  show(pot);
  hide(mealView);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMealIdea() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      mealIdea.innerText = `${meals[i][getRandomIndex(meals[i])]}!`
    }
  }
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}
