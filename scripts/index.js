// index.js - behaviour for the home page only

// "Create" does nothing yet (an API call will be added later).
// We only stop the page from reloading.
document.getElementById('create-post-form').addEventListener('submit', function (event) {
  event.preventDefault();
});