'use strict'
let todos = getSavedTodos();

//filter
const filters = {
    searchText: '',
    hideCompleted: false
}

//rendering todos
renderTodos(todos, filters);

renderTodos(todos, filters);

//filtering todos
document.querySelector('#filterTodoItems').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

//Add Todo Item
document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        complete: false
    })
    saveTodos(todos);

    renderTodos(todos, filters);
    e.target.elements.todoText.value = '';

})


document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});