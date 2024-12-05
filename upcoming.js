/* DEVELOPER: Marwa Monsour, IS117-XXX, Spring 2024 */

// Load upcoming tasks from localStorage
window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const tasksUpcoming = savedTasks.filter(task => task.text.includes('Upcoming')); // Filter tasks by keyword "Upcoming"
    tasksUpcoming.forEach(task => addTaskToUpcomingList(task.text, task.completed));
  };
  
  // Add task to the Upcoming task list
  function addTaskToUpcomingList(text, completed) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
  
    const span = document.createElement('span');
    span.textContent = text;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
  
    // Delete task
    deleteButton.addEventListener('click', () => {
      li.remove();
      saveTasks();
    });
  
    // Update localStorage on checkbox change
    checkbox.addEventListener('change', saveTasks);
  
    li.append(checkbox, span, deleteButton);
    document.getElementById('tasks-upcoming').appendChild(li);
  }
  
  // Save tasks to localStorage
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#tasks-upcoming li').forEach(li => {
      const text = li.querySelector('span').textContent;
      const completed = li.querySelector('input').checked;
      tasks.push({ text, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  