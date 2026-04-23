document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Зупиняємо відправку форми

    // Очищення попередніх помилок
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let isValid = true;

    // 1. Валідація імені
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = "Ім'я обов'язкове для заповнення";
        isValid = false;
    }

    // 2. Валідація Email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Введіть коректний email";
        isValid = false;
    }

    // 3. Валідація пароля
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = "Пароль має бути мін. 6 символів";
        isValid = false;
    }

    // 4. Підтвердження пароля
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = "Паролі не збігаються";
        isValid = false;
    }

    // 5. Валідація віку
    const age = document.getElementById('age').value;
    if (age === '' || parseInt(age) < 10) {
        document.getElementById('ageError').textContent = "Вік має бути 10+";
        isValid = false;
    }

    // 6. Валідація групи (Непарний варіант)
    const group = document.getElementById('group').value;
    if (group === '') {
        document.getElementById('groupError').textContent = "Виберіть групу";
        isValid = false;
    }

   
    

    // Фінальна перевірка
    if (isValid) {
        alert('Реєстрація успішна!');
        
    }
});