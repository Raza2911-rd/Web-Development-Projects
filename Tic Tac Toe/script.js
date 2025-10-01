// * Get the main menu element (ID selector without '#')
const mainMenu = document.getElementById('main-menu'); 

// * Get all buttons and convert the HTMLCollection to an array for reliable iteration
const buttons = Array.from(document.getElementsByClassName('btn')); 

// * Attach the click listener to each button
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // ? Hides the main menu by adding the 'hidden' CSS class
        mainMenu.classList.add('hidden');
    });
});