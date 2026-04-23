// Отримання доступу до елементів
const changeTextBtn = document.getElementById('change-text-btn');
const textToChange = document.getElementById('text-to-change');

const hoverBtn = document.getElementById('hover-btn');

const addElementBtn = document.getElementById('add-element-btn');
const container = document.getElementById('elements-container');

const variantBtn = document.getElementById('variant-btn');
const clickCounterDisplay = document.getElementById('click-counter');

// 2. Зміна вмісту елемента (innerHTML / textContent)
changeTextBtn.addEventListener('click', () => {
    textToChange.textContent = "Текст змінено! Це новий вміст.";
    textToChange.style.color = "green";
});

// 3. Обробка події наведення (Зміна стилів)
hoverBtn.addEventListener('mouseenter', () => {
    hoverBtn.classList.add('highlight');
    hoverBtn.textContent = "Курсор на мені!";
});

hoverBtn.addEventListener('mouseleave', () => {
    hoverBtn.classList.remove('highlight');
    hoverBtn.textContent = "Наведіть курсор на мене";
});

// 4. Динамічне додавання елементів
addElementBtn.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.className = 'new-element';
    newDiv.textContent = "Це новий доданий елемент.";
    
    // Додаємо можливість видалити елемент при кліку на нього
    newDiv.addEventListener('click', () => {
        newDiv.remove();
    });

    container.appendChild(newDiv);
});

// 5. Додаткове завдання (Варіант n)
let clickCount = 0;
const n = 5; // ВСТАВТЕ СВІЙ НОМЕР ВАРІАНТУ ТУТ
const userName = "Вітаю Надія"; // ВСТАВТЕ СВОЄ ІМ'Я

variantBtn.addEventListener('click', () => {
    clickCount++;
    clickCounterDisplay.textContent = `Кліків: ${clickCount}`;

    if (clickCount === n) {
        alert(`${userName} варіант номер ${n}!`);
        clickCount = 0; // Скидаємо лічильник після alert
        clickCounterDisplay.textContent = `Кліків: 0`;
    }
});