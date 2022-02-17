var letsCookBtn = document.querySelector("#cook-button");
var pot = document.querySelector("#pot-container");

var sides = ["Rice", "Salad"];
var mains = ["Spagetti", "Pineapple Pizza"];
var desserts = ["Banana Bread", "Cheesecake"];

letsCookBtn.addEventListener("click", displaySuggestion);

function displaySuggestion() {
  toggle(pot);
}

function toggle(element) {
  element.classList.toggle("hidden");
}
