let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    render();
}

function addTask() {
    if (input.value.trim() === "") return;
    const newTask = {
        id: Date.now(),
        text: input.value,
        completed: false,
        date: new Date().toLocaleDateString()
    };
    tasks.push(newTask);
    input.value = "";
    saveAndRender();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveAndRender();
}

function toggleTask(id) {
    tasks = tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t);
    saveAndRender();
}

function editTask(id) {
    const newText = prompt("Редагувати завдання:");
    if (newText) {
        tasks = tasks.map(t => t.id === id ? {...t, text: newText} : t);
        saveAndRender();
    }
}

function sortAlphabet() {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    saveAndRender();
}

function sortDate() {
    tasks.sort((a, b) => a.id - b.id);
    saveAndRender();
}

function render(filter = 'all') {
    list.innerHTML = "";
    let filtered = tasks;
    if (filter === 'done') filtered = tasks.filter(t => t.completed);
    if (filter === 'active') filtered = tasks.filter(t => !t.completed);

    filtered.forEach(task => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.text} (${task.date})</span>
            <button class="edit-btn" onclick="editTask(${task.id})">✏️</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">❌</button>
        `;
        list.appendChild(li);
    });
}

function filterTasks(type) {
    render(type);
}

addBtn.addEventListener('click', addTask);
render();