// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { getFilters, setFilters } from "./filters";
import { getSavedTodos, createTodo, saveTodos } from "./todos";
import { renderTodos } from "./views";

let todos = getSavedTodos();

let filters = getFilters();

setFilters({
  searchText: "Beth",
  hideCompleted: true
});

// Render initial todos
renderTodos(todos, filters);

// Set up search text handler
document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// Set up checkbox handler
document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});

// Set up form submission handler
document.querySelector("#new-todo").addEventListener("submit", (e) => {
  const text = e.target.elements.text.value.trim();
  e.preventDefault();

  if (text.length > 0) {
    createTodo(text);
    renderTodos(todos, filters);
    e.target.elements.text.value = "";
  }
});

// Bonus: Add a watcher for local storage
