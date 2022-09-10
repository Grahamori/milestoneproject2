/* Task One Allow player and Computer to make choices */
/* Task Two Display those above choices in the results section */

const selectedChoices = document.querySelectorAll('[data-selection]');

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
})

function makeSelection(selection) {
    console.log(selection) /* Used this to check function works correctly */
}