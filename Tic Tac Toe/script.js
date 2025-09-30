const mainMenu = document.getElementById('#main-menu');
const buttons = document.querySelectorAll('#main-menu button');
buttons.forEach(button =>{
    button.addEventListener('click',() =>{
        mainMenu.style.display = 'none';
    });
});