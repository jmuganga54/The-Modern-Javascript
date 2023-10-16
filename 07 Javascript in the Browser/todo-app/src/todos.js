import { v4 as uuidv4 } from "uuid";
// Setup the empty todos array
let todos = [];

// loadTodos
// Arguments: none
// Return value: none
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = (todos) => {
  debugger;
  localStorage.setItem("todos", JSON.stringify(todos));
};

// getTodos
// Arguments: none
// Return value: todos array
todos = getSavedTodos();

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (todoText) => {
  debugger;
  todos.push({
    id: uuidv4(),
    todoText,
    completed: false
  });
  saveTodos(todos);
  debugger;
};

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
};

// Make sure to call loadTodos and setup the exports
export { getSavedTodos, createTodo, saveTodos };
