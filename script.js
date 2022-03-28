const container = document.querySelector('.container');

var blockSize = 30;
var currentAngle = 0;

const blockRows = innerHeight / blockSize;
const blockColumns = innerWidth / blockSize;

for (let i = 0; i < blockRows; i++) {
const row = document.createElement('div');
row.className = 'row';
container.appendChild(row);

    for (let j = 0; j < blockColumns; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = square.style.height = `${blockSize}px`;

        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseout', () => removeColor(square));
        square.addEventListener('transitionend', () => { square.style.zIndex = 0});
        row.appendChild(square)
    }
}

function setColor(elem) {
    const color = `hsl(${currentAngle}, 100%, 50%)`;
    currentAngle != 360 ? currentAngle++ : currentAngle = 0;

    elem.style.background = color;
    elem.style.boxShadow = `0 0 20px ${color}`;
    elem.style.zIndex = 1;
}

function removeColor(elem) {
    elem.style.background = 'transparent';
    elem.style.boxShadow = '0 0 2px #000';
}
