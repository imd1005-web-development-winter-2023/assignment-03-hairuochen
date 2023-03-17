
// Get the input and ul elements from the DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task to the list
function addTask() {
  if (taskInput.value !== "") {
    // Create a new li element and text node for the task input value
    const newTask = document.createElement("li");
    const taskText = document.createTextNode(taskInput.value);
    newTask.appendChild(taskText);

    // Create a strike button for the task
    const strikeButton = document.createElement("button");
    strikeButton.innerHTML = "✔";
    strikeButton.onclick = function () {
      strikeTask(this);
    };
    newTask.appendChild(strikeButton);

    // Create a delete button for the task
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✘";
    deleteButton.onclick = function () {
      deleteTask(this);
    };
    newTask.appendChild(deleteButton);


    // Append the new task li element to the ul list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = "";
  }
}

// Function to delete a task from the list
function deleteTask(taskItem) {
  // Get the parent li element of the delete button, and remove it from the ul list
  const parentLi = taskItem.parentNode;
  taskList.removeChild(parentLi);
}

// Function to strike a task in the list
function strikeTask(taskItem) {
  // Get the parent li element of the strike button, and toggle the "done" class on it
  const parentLi = taskItem.parentNode;
  parentLi.classList.toggle("done");
}


//
// Inits & Event Listeners
//

inititialise();
