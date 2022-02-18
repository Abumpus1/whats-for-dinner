var letsCookBtn = document.querySelector("#cook-button");
var pot = document.querySelector("#pot-container");
var mealView = document.querySelector("#meal-view");
var mealIdea = document.querySelector(".meal-idea");
var radioButtons = document.querySelectorAll("input");
var radioLabels = document.querySelectorAll("label");
var clearBtn = document.querySelector("#clear-button");

var sides = ["Rice", "Salad"];
var mains = ["Spagetti", "Pineapple Pizza"];
var desserts = ["Banana Bread", "Cheesecake"];
var meals = [sides, mains, desserts];

letsCookBtn.addEventListener("click", requireRadioCheck);
clearBtn.addEventListener("click", clearSuggestion);

function displaySuggestion() {
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

function requireRadioCheck() {
  if (radioButtons[0].checked || radioButtons[1].checked || radioButtons[2].checked) {
    createMealIdea();
  } else {
    for (var i = 0; i < radioLabels.length; i++) {
      radioLabels[i].classList.add("required");
    }
  }
}

function createMealIdea() {
  for (var i = 0; i < radioButtons.length; i++) {
    radioLabels[i].classList.remove("required");
    if (radioButtons[i].checked) {
      mealIdea.innerText = `${meals[i][getRandomIndex(meals[i])]}!`;
      displaySuggestion();
    }
  }
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}
