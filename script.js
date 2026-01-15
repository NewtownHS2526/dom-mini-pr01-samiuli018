console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
const pinkbutton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector ("#pink-horse");
const brownButton = document.querySelector("#brown-button");
const brownhorse = document.querySelector ("#brown-horse");


// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
};
const advancePink = (e) => {
  pink_position +=1;
  changePosition(pinkHorse, pink_position);
};



// Check for a winner
const checkWinner = (position, color) => {

};
const advancebrown = () => {
brown_position += 1;
changePosition(brownhorse, brownhorse);
};


// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkbutton.addEventListener ("click",advancePink)
brownbutton.addEventListener("click",advancebrown);