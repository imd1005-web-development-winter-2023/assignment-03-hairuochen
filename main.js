
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value !== "") {
    const newTask = document.createElement("li");
    const taskText = document.createTextNode(taskInput.value);
    newTask.appendChild(taskText);

    const strikeButton = document.createElement("button");
    strikeButton.innerHTML = "✔";
    strikeButton.onclick = function () {
      strikeTask(this);
    };
    newTask.appendChild(strikeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✘";
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

function strikeTask(taskItem) {
  const parentLi = taskItem.parentNode;
  parentLi.classList.toggle("done");
}


//
// Inits & Event Listeners
//

inititialise();
