// static/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const taskForm = document.getElementById('task-form');
    const saveTaskButton = document.getElementById('save-task-button');
    const taskList = document.getElementById('task-list');
    const taskTitleInput = document.getElementById('task-title');
    const taskDescInput = document.getElementById('task-desc');

    addTaskButton.addEventListener('click', function() {
        taskForm.classList.toggle('hidden');
    });

    saveTaskButton.addEventListener('click', function() {
        const taskTitle = taskTitleInput.value.trim();
        const taskDesc = taskDescInput.value.trim();

        if (taskTitle) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${taskTitle}</strong>${taskDesc ? ` - ${taskDesc}` : ''}`;
            taskList.appendChild(listItem);

            // Clear the form
            taskTitleInput.value = '';
            taskDescInput.value = '';
            taskForm.classList.add('hidden');
        } else {
            alert('El título de la tarea es obligatorio.');
        }
    });
});
