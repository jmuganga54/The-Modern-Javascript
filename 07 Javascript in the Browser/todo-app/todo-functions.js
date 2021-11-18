//fetch existing todos from localStorage
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todos');
    if (todoJSON !== null) {
        return JSON.parse(todoJSON);
    } else {
        return [];
    }
}

//save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render application todos based on filter
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
    searchedTodoDiv.appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodo.forEach((todo) => {
        let todoEl = generateTodoDOM(todo);
        searchedTodoDiv.appendChild(todoEl);

    })
}
//Removing todo
const removeTodo = function (id) {

    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id;
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }

}

// toggle todo
const toggleTodo = function (id) {
    const todo = todos.find((todo) => {
        return todo.id === id;
    })
    debugger;

    if (todo !== undefined) {
        todo.completed = !todo.completed;
        debugger;
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


    if (todo.text !== '') {
        todoText.textContent = todo.text;
    } else {
        todoText.textContent = 'Unnamed todo';
    }
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
const generateSummaryDOM = function (incompleteTodos) {

    let summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos Left`

    return summary;

}