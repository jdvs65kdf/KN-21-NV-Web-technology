const circle = document.getElementById('circle');
const btn = document.getElementById('moveBtn');

// 1. Анімація руху при кліку
btn.addEventListener('click', () => {
    circle.classList.toggle('move');
});

// 2. Зміна кольору на випадковий кожні N секунд (N=4)
const N = 4;

function setRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    circle.style.backgroundColor = randomColor;
}

// Інтервал зміни кольору кожні 4 секунди
setInterval(setRandomColor, N * 1000);