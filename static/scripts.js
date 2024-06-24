document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const taskForm = document.getElementById('task-form');

    addTaskButton.addEventListener('click', function() {
        taskForm.classList.toggle('hidden'); // Toggle the visibility of the task form
    });

    const saveTaskButton = document.getElementById('save-task-button');

    saveTaskButton.addEventListener('click', function(event) {
        event.preventDefault();

        const taskTitle = document.getElementById('task-title').value;
        const taskDesc = document.getElementById('task-desc').value;

        if (!taskTitle) {
            alert('Por favor, ingrese un título para la tarea.');
            return;
        }

        const taskList = document.getElementById('task-list');

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
});
