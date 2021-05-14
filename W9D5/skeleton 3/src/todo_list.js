
let submit = document.querySelector('submit');


let todos = [];
let todolist = document.getElementsByClassName("todos")[0];
let addTodos = document.getElementsByClassName("add-todo-form")[0];



function addTodos(e) {
    let input = document.querySelector('[name=add-todo]').value;
    const toDo = {input, done:false};

    todos.push(toDo);
    input = '';
}




submit.addEventListener('click', addTodo);