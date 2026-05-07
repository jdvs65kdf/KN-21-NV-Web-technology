document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    // Отримання значень з полів
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Валідація
    if (name && email && message) {
        // Збереження імені в localStorage
        localStorage.setItem('userName', name);

        // Вивід у консоль
        console.log("Дані форми:");
        console.log("Ім'я:", name);
        console.log("Email:", email);
        console.log("Повідомлення:", message);

        // Привітання
        alert(`Дякуємо, ${name}! Ваше повідомлення надіслано.`);

        // Очищення форми
        this.reset();
    } else {
        alert("Будь ласка, заповніть усі поля!");
    }
});

// Додатково: завантаження імені з localStorage при відкритті сторінки
window.onload = function() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        console.log(`Вітаємо знову, ${savedName}!`);
    }
};