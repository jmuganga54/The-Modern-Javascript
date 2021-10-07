let todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean Kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


//filter
const filters = {
    searchText: '',
    hideCompleted: false
}

//rendering todos
const renderTodos = function (todos, filters) {

    //based on the search
    const filteredTodo = todos.filter(function (todo) {
        let searchMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        let hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchMatch && hideCompletedMatch;
    })


    const incompleteTodos = filteredTodo.filter((todo) => {
        return !todo.completed;
    })

    let searchedTodoDiv = document.querySelector('#searchedTodo');

    searchedTodoDiv.innerHTML = '';

    let summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos Left`
    searchedTodoDiv.appendChild(summary);

    filteredTodo.forEach((todo) => {
        const todoEl = document.createElement(`p`);
        todoEl.textContent = todo.text;
        searchedTodoDiv.appendChild(todoEl);

    })
}
renderTodos(todos, filters);

//filtering todos
document.querySelector('#filterTodoItems').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
    // e.target.value = "";
})

//Add Todo Item
document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    todos.push({
        text: e.target.elements.todoText.value,
        complete: false
    })
    renderTodos(todos, filters);
    e.target.elements.todoText.value = '';

})


document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});

