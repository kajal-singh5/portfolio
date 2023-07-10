// Moving gradient for hero & profile section
const gradientBorder = document.querySelector('.gradient');
let angle = 55;

function incrementAngle() {
    angle += 2;
    angle %= 360;
    gradientBorder.style.setProperty('--angle', `${angle}deg`);
}

setInterval(incrementAngle, 45);


// Move loading screen up
setTimeout(() => {
    const div1 = document.querySelector('.loading');
    div1.classList.add('slide-up');
}, 1000);

setTimeout(() => {
    const div1 = document.querySelector('.loading');
    div1.classList.add('slide-up');

    const div2 = document.querySelector('.main-content');
    div2.style.display = 'block';
}, 6000);