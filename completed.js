/* DEVELOPER: Marwa Monsour, IS117-001, Fall 2024 */

// Load completed tasks from localStorage
window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const tasksCompleted = savedTasks.filter(task => task.completed); // Filter tasks by the completed state
    tasksCompleted.forEach(task => addTaskToCompletedList(task.text, task.completed));
  };
  
  // Add task to the Completed task list
  function addTaskToCompletedList(text, completed) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.disabled = true; // Disable checkbox for completed tasks
  
    const span = document.createElement('span');
    span.textContent = text;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
  
    // Delete task
    deleteButton.addEventListener('click', () => {
      li.remove();
      saveTasks();
    });
  
    li.append(checkbox, span, deleteButton);
    document.getElementById('tasks-completed').appendChild(li);
  }
  
  // Save tasks to localStorage
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#tasks-completed li').forEach(li => {
      const text = li.querySelector('span').textContent;
      const completed = li.querySelector('input').checked;
      tasks.push({ text, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  