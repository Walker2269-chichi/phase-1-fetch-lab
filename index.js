// Function to fetch books from the Game of Thrones API
function fetchBooks() {
  // Make the fetch request to the API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => renderBooks(data)); // Call renderBooks() with the data
}

// Function to render books (this is assumed to be implemented already)
function renderBooks(books) {
  const booksList = document.getElementById('books-list'); // Make sure you have an element with id 'books-list' in your HTML

  // Iterate over the books array and create a list item for each book
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; // Assuming each book object has a 'name' property
    booksList.appendChild(listItem);
  });
}

// Assuming fetchBooks is called when the page is loaded (e.g., in the DOMContentLoaded event or directly in the script)
document.addEventListener('DOMContentLoaded', () => {
  fetchBooks(); // Call fetchBooks to load the books when the page is ready
});
