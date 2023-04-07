

//button X - left-Top-side in Header
let buttonX = document.getElementById('buttonX')
let optionsTransition = document.getElementById('OptionsTransition');

buttonX.addEventListener('click', () => {
    buttonX.classList.toggle('ClickOn');
    optionsTransition.classList.toggle('optionsShow')
})

//Colors sections 
let colorSections = document.getElementById('ColorSection').children;

for (let i = 0; i < colorSections.length; i++) {
    colorSections[i].addEventListener('click', () => {
        colorSections[i].classList.toggle('clickOn');
    })
}

//dark Mode
let darkMode = document.getElementById('checkbox-darkMode');

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');

    let dKcontainer = document.querySelector('div.sun-moon-text')
    if (dKcontainer.classList.contains('sunOut')) {
        dKcontainer.classList.remove('sunOut');
        dKcontainer.classList.add('moonOut');
    } else {
        dKcontainer.classList.remove('moonOut');
        dKcontainer.classList.add('sunOut');
    }
})