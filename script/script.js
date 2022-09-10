/* Task One Allow player and Computer to make choices */
/* Task Two Display those above choices in the results section */

const selectedChoices = document.querySelectorAll('[data-selection]');


selectedChoices.forEach(selectedChoice => {
    selectedChoice.addEventListener('click', e => {
        const selectedName = selectedChoice.dataset.selection
        makeSelection(selectedName)
    })
});

function makeSelection(selection) {
    console.log(selection) /* Used this to check function works correctly */
};