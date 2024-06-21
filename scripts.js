// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const saveTaskButton = document.getElementById('save-task-button');

    addTaskButton.addEventListener('click', function() {
        taskForm.classList.toggle('hidden');
    });

    saveTaskButton.addEventListener('click', function(event) {
        event.preventDefault();

        const taskTitle = document.getElementById('task-title').value;
        const taskDesc = document.getElementById('task-desc').value;

        if (!taskTitle) {
            alert('Por favor, ingrese un título para la tarea.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div class="task-title">${taskTitle}</div>
            <div class="task-desc">${taskDesc}</div>
            <div class="task-buttons">
                <button class="complete-task-button">Completar</button>
                <button class="delete-task-button">Eliminar</button>
            </div>
        `;
        
        taskList.appendChild(taskItem);
        taskForm.classList.add('hidden');
        document.getElementById('task-title').value = '';
        document.getElementById('task-desc').value = '';
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('complete-task-button')) {
            const taskItem = event.target.closest('.task-item');
            taskItem.classList.toggle('completed');
        } else if (event.target.classList.contains('delete-task-button')) {
            const taskItem = event.target.closest('.task-item');
            taskItem.remove();
        }
    });
});
