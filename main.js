var letsCookBtn = document.querySelector("#cook-button");
var pot = document.querySelector("#pot-container");
var mealView = document.querySelector("#meal-view");
var mealIdea = document.querySelector(".meal-idea");
var radioButtons = document.querySelectorAll("input");

var sides = ["Rice", "Salad"];
var mains = ["Spagetti", "Pineapple Pizza"];
var desserts = ["Banana Bread", "Cheesecake"];
var meals = [sides, mains, desserts];

letsCookBtn.addEventListener("click", displaySuggestion);

function displaySuggestion() {
  displayMealIdea();
  toggle(pot);
  toggle(mealView);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMealIdea() {
  // mealIdea.innerText = `${sides[1]}!`;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      mealIdea.innerText = `${meals[i][getRandomIndex(meals[i])]}!`
    }
  }
}

function toggle(element) {
  element.classList.toggle("hidden");
}
