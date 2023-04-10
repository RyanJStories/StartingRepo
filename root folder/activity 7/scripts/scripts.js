
let tasks = [];

const taskStatus = {
  active: 'active',
  selected: 'selected',
  completed: 'completed'
};

function Task(id, name, status) {
  this.id = id;
  this.name = name;
  this.status = status;
}

function addTaskElement(task) {
  const taskElement = document.createElement('li');
  taskElement.id = task.id;
  taskElement.textContent = task.name;
  document.getElementById('active-list').appendChild(taskElement);
  taskElement.classList.add('active');
}

function addTask(event) {
  event.preventDefault();
  const inputTask = document.getElementById('input-task');
  const name = inputTask.value;
  const id = 'task-' + tasks.length;
  const task = new Task(id, name, taskStatus.active);
  tasks.push(task);
  addTaskElement(task);
  inputTask.value = '';
}

function selectTask(event) {
  const taskElement = event.target;
  taskElement.classList.add(taskStatus.selected);
  taskElement.classList.add('selected');
}

function removeTask(event) {
  const selectedTasks = document.querySelectorAll('#active-list li.selected');
  selectedTasks.forEach(taskElement => {
    const taskId = taskElement.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      taskElement.remove();
    }
  });
}

function completeTask(event) {
    const taskElement = event.target;
    const taskId = taskElement.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex].status = taskStatus.completed;
      const completedTask = tasks.splice(taskIndex, 1)[0];
      const completedTaskElement = document.createElement('li');
      completedTaskElement.id = completedTask.id;
      completedTaskElement.textContent = completedTask.name;
      document.getElementById('completed-list').appendChild(completedTaskElement);
      taskElement.remove();
    }
}



function init() {
  document.getElementById('add-task').addEventListener('click', addTask);
  document.getElementById('remove-task').addEventListener('click', removeTask);
  document.getElementById('active-list').addEventListener('click', selectTask);
  document.getElementById('active-list').addEventListener('dblclick', completeTask);  
}

init();
