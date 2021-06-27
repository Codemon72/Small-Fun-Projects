// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// FUNCTIONS
function addTodo(event) {
  event.preventDefault();
  // create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // check 'completed' button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // check 'trash' button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // append to list
  todoList.appendChild(todoDiv);
  // clear input field
  todoInput.value = "";
}
function deleteCheck (event) {
  const item = event.target;
  // delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  console.log(event.target)
}