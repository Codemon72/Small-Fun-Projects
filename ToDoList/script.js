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
  console.log(todoText)
}