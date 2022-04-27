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
    totalEl.textContent = total;
    lossesEl.textContent = losses;
    winsEl.textContent = wins;
}

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    resetStyles();
    // then increment the guesses
    const correctAnswer = document.getElementById(`${correctSpot}-container`);
    totalGuesses++;
    if (correctSpot === userGuess) {
        correctGuesses++;
        correctAnswer.classList.add('face');           
    }
    
    // if (correctSpot === 1) {
    //     treeContainer.add('face');
    //     correctGuess++;
    // }
    displayResults();
     // then if the user guess is correct, increment the correct guesses
    // // then grab the appropriate container element for the correct guess from the DOM
    
    // then add the face class to that element so that the face shows up
    

    // update the DOM to show this change to the user (including the losses, not tracked directly in state)

}
   // if (userGuess === true || userGuess === false) {
    //     totalGuesses++;
    // }
    // if (correctSpot === userGuess) {
    //     correctGuesses++;
    //     totalGuesses++;
    // } else if (userGuess === false) {
    //     totalGuesses++;
    // } else {
    //     totalGuesses++;
    // }
    
    // const randomContainer
      // if (correctSpot === 3) {
    //     correctGuesses++;
    // }
    // shedContainer.classList.add('face');
    
    // const correctAnswerEl = document.getElementById(`${correctSpot}-container`);
    // if (userGuess === correctSpot) {
    //     correctAnswerEl.classList.add('face');
    // } else {
    //     correctAnswerEl.classList.add('face');
    // }