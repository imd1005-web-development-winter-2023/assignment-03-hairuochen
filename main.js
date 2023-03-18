
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const form = document.querySelector("#addTask");
form.addEventListener("submit", addTask);

function addTask(event) {
  if (taskInput.value !== "") {
    console.log("it worked!"); 
    event.preventDefault();

    const newTask = document.createElement("li");
    const taskText = document.createTextNode(taskInput.value);
    newTask.appendChild(taskText);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✔";
    deleteButton.name="delete";
    deleteButton.onclick = function () {
      deleteTask(this);
    };
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";
  }
}

function deleteTask(taskItem) {
  const parentLi = taskItem.parentNode;
  taskList.removeChild(parentLi);
}

//
// Inits & Event Listeners
//

inititialise();
