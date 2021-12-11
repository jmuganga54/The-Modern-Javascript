'use strict'
//Read existing todos from localStorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos');

    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (error) {
        return []
    }

}

//save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render application todos based on filter
const renderTodos = (todos, filters) => {

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
    searchedTodoDiv.appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodo.forEach((todo) => {
        let todoEl = generateTodoDOM(todo);
        searchedTodoDiv.appendChild(todoEl);

    })
}
//Removing todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id;
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }

}

// toggle todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed;
    }
}
//Get the DOM elements for an individual todo
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const removeButton = document.createElement('button');
    const todoText = document.createElement('span');

    //Setup todo checkbox
    checkbox.type = 'checkbox';
    checkbox.setAttribute('name', 'todoCheckbox');
    checkbox.checked = todo.completed;
    todoEl.appendChild(checkbox);

    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    todo.text !== '' ? todoText.textContent = todo.text : todoText.textContent = 'Unnamed todo'

    todoEl.appendChild(todoText);
    //Setup remove button
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);
    //Event listening when the delete button is clicked on todo
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);

    })
    return todoEl;
}

//Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {

    let summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos Left`

    return summary;

}