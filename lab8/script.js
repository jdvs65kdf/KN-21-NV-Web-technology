const apiUrl = 'https://jsonplaceholder.typicode.com/users';
let lastId = 0;

/**
 * Отримує дані користувачів з API
 */
async function fetchUsers() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Помилка мережі');
        
        const users = await response.json();
        renderTable(users);
    } catch (error) {
        console.error('Помилка при завантаженні:', error);
        alert('Не вдалося оновити дані. Перевірте з’єднання.');
    }
}

/**
 * Відображає список у таблиці
 */
function renderTable(users) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Очищуємо таблицю перед заповненням

    users.forEach(user => {
        addRowToTable(user.id, user.name, user.email);
        // Оновлюємо останній ID для коректної роботи форми додавання
        if (user.id > lastId) lastId = user.id;
    });
}

/**
 * Додає один рядок у таблицю
 */
function addRowToTable(id, name, email) {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
    `;
    
    tableBody.appendChild(row);
}

/**
 * Обробка форми додавання нового запису
 */
function addUser() {
    const nameInput = document.getElementById('newName');
    const emailInput = document.getElementById('newEmail');

    if (!nameInput.value || !emailInput.value) {
        alert('Заповніть, будь ласка, обидва поля!');
        return;
    }

    lastId++;
    addRowToTable(lastId, nameInput.value, emailInput.value);

    // Очищення полів після додавання
    nameInput.value = '';
    emailInput.value = '';
}

// Автоматичне завантаження даних при запуску сторінки
document.addEventListener('DOMContentLoaded', fetchUsers);