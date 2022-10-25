'use strict';

const root = document.querySelector(':root');
const element = document.querySelector('.circle')
const elementWrapper = document.querySelector('.circleWrapper')

let tracker = true
elementWrapper.addEventListener('click', () => {
    element.classList.toggle('on')
    if (tracker === true){
        tracker = false
        darkMode()
    }else {
        tracker = true
        lightMode()
    }
})


function lightMode() {
    root.style.setProperty('--white', '#fff');
    root.style.setProperty('--black', '#000');
    root.style.setProperty('--shadow', 'rgba(0,0,0,0.15)');
    root.style.setProperty('--bg', 'rgb(255,255,255)');
    root.style.setProperty('--bg-track', 'rgba(0, 0, 0, 0.05)');
}

function darkMode() {
    root.style.setProperty('--white', '#000');
    root.style.setProperty('--black', '#fff');
    root.style.setProperty('--shadow', 'rgba(255,255,255,0.15)');
    root.style.setProperty('--bg', '#1A1A1A');
    root.style.setProperty('--bg-track', '#3C3C3C');
}