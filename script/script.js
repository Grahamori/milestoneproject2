/* Task One Allow player and Computer to make choices */
/* Task Two Create Array of possible selections */
/* Task Three Display those above choices in the results section */

const selectedChoices = document.querySelectorAll('[data-selection]');
const resultColumn = document.querySelector('[data-result-column]');

const possibleSelections = [
    {
        name: 'water',
        symbol: '🌊',
        this_beats: 'fire'
    },
    {
        name: 'fire',
        symbol: '🔥',
        this_beats: 'earth'
    },
    {
        name: 'earth',
        symbol: '🌱',
        this_beats: 'water'
    }
];

selectedChoices.forEach(selectedChoice => {
    selectedChoice.addEventListener('click', e => {
        const selectedName = selectedChoice.dataset.selection
        const selection = possibleSelections.find(possibleSelection => possibleSelection.name === selectedName) /* took me a few tries to get this one right */
        makeSelection(selection)
    })
});

function makeSelection(selection) {
    const computerChoice = computerSelection()
    const userWinner = isWinner(selection, computerChoice)
    const computerWinner = isWinner(computerChoice, selection)
    // console.log(computerChoice) /* Used this to check function works correctly */

    addWinnerResult(computerChoice, computerWinner)
    addWinnerResult(selection, userWinner)

};

function addWinnerResult(selection, winner) {
    const result = document.createElement('result')
    result.innerText = selection.symbol
    result.classList.add('not-winner')
    if (winner) result.classList.add('winner')
    resultColumn.after(result)
}

function isWinner (selection, rivalSelection) {
    return selection.this_beats === rivalSelection.name
}

function computerSelection() {
    const generateComputerSelection = Math.floor(Math.random() * possibleSelections.length)
    return possibleSelections[generateComputerSelection]
};