// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { getFilters, setFilters } from "./filters";

setFilters({
  searchText: "Joseph",
  hideCompleted: true
});


console.log(getFilters());

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage
