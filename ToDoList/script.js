const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

form.addEventListener('submit', e => {
  e.preventDefault();
  addTodo();
})

const addTodo = (todo) => {
  let todoText = input.value;

  if(todo) {
    todoText = todo.text
  }

  if(todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed){
      todoEl.classList.add('completed')
    }
    todoEl.innerText = todoText;
    todosUL.appendChild(todoEl);
    input.value = ''; 
  }
  console.log(todoText)
}