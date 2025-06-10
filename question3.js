// tasks.js - Basic CRUD System for Task Management

let tasks = []; // Array to store tasks
let taskId = 1; // Counter for unique task IDs

// Add a new task
function addTask(name, description) {
    const task = { id: taskId++, name, description };
    tasks.push(task);
    console.log("Task added:", task);
}

// View all tasks
function viewTasks() {
    console.log("Task List:");
    tasks.forEach(task => console.log(task));
}

// Update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log("Task updated:", task);
    } else {
        console.log("Task not found.");
    }
}

// Delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1);
        console.log("Task deleted:", removedTask[0]);
    } else {
        console.log("Task not found.");
    }
}

// Example usage
addTask("Study JavaScript", "Learn about CRUD operations.");
addTask("Practice SQL", "Work on queries and table designs.");

viewTasks();

updateTask(1, "Study JavaScript Async", "Deep dive into async functions.");
deleteTask(2);

viewTasks();
