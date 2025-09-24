const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Çiçekli-böcekli ikonlar listesi
const icons = [
    "https://img.icons8.com/emoji/48/flower-emoji.png",
    "https://img.icons8.com/emoji/48/sunflower.png",
    "https://img.icons8.com/emoji/48/lady-beetle.png",
    "https://img.icons8.com/emoji/48/butterfly.png",
    "https://img.icons8.com/emoji/48/seedling.png",
    "https://img.icons8.com/emoji/48/sun-with-face.png"
];

// localStorage'dan verileri yükle
window.onload = function() {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    saved.forEach(item => createTodo(item.text, item.icon));
};

function addTodo() {
    const text = todoInput.value.trim();
    if (text === "") return;

    const icon = icons[Math.floor(Math.random() * icons.length)];
    createTodo(text, icon);
    saveTodo(text, icon);

    todoInput.value = "";
}

function createTodo(text, icon) {
    const li = document.createElement("li");
    li.className = "todo-item";

    const img = document.createElement("img");
    img.src = icon;

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = text;

    const del = document.createElement("button");
    del.textContent = "Sil";
    del.className = "delete-btn";
    del.onclick = () => {
        li.remove();
        removeTodo(text);
    };

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(del);

    todoList.appendChild(li);
}

function saveTodo(text, icon) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push({ text, icon });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodo(text) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(item => item.text !== text);
    localStorage.setItem("todos", JSON.stringify(todos));
}