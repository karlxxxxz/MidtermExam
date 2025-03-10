// Task storage array (acting as our in-memory "database")
let tasks = [];
let currentId = 1; // To keep track of unique IDs

// Function to add a new task
function addTask(name, description) {
  const newTask = {
    id: currentId++,
    name,
    description
  };
  tasks.push(newTask);
  console.log('Task added successfully:', newTask);
}

// Function to view all tasks
function viewTasks() {
  console.log('All Tasks:', tasks);
  return tasks;
}

// Function to update a task by id
function updateTask(id, updatedName, updatedDescription) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.name = updatedName;
    task.description = updatedDescription;
    console.log('Task updated successfully:', task);
  } else {
    console.log(`Task with id ${id} not found.`);
  }
}

// Function to delete a task by id
function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);
    console.log('Task deleted successfully:', deletedTask[0]);
  } else {
    console.log(`Task with id ${id} not found.`);
  }
}

// -----------------------------------
// ✅ Example usage:

addTask('Learn JavaScript', 'Study the basics of JS');
addTask('Build a project', 'Create a CRUD app using JS');

viewTasks(); // See all tasks

updateTask(1, 'Learn JavaScript ES6+', 'Study advanced JavaScript features');

viewTasks(); // See updated tasks

deleteTask(2); // Delete task with id 2

viewTasks(); // See final list of tasks
