
function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

const button = document.querySelector('button');
const colorSpan = document.querySelector('span');
const main = document.querySelector('main');


button.addEventListener('click', () => {
    const newColor = generateRandomColor();
    main.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
});

