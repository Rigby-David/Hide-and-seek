// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

const resetStyles = () => {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
};

const displayResults = () => {
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = `${totalGuesses - correctGuesses}`;
    winsEl.textContent = correctGuesses;
};

function handleGuess(correctSpot, userGuess) {
    resetStyles();
    const correctAnswer = document.getElementById(`${correctSpot}-container`);
    totalGuesses++;
    if (correctSpot === userGuess) {
        correctGuesses++;
        correctAnswer.classList.add('face');           
    } else {
        correctAnswer.classList.add('face');
    }
    displayResults();
}
// reset the s 
    // then increment the guessestyles
    // then if the user guess is correct, increment the correct guesses
    // // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
