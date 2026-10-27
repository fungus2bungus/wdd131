"use strict";
const bookList = document.querySelector('#book-list');
//const bookData = fetch("books.json")
//.then(response => response.json())
//.then(data => displayBooks(data));
async function displayBooks() {
    const response = await fetch("books.json");
    const books = await response.json();
    books.forEach(addBook);
}
function addBook(book) {
    if (!bookList)
        return;
    bookList.innerHTML += `
    <article class="book">
        <div class="info">
            <p><i>${book.date}</i></p>
            <p>${book.ages}</p>
            <p>${book.genre}</p>
            <p>${book.stars}</p>
        </div>
        <h2>${book.title}</h2>
        <img src=${book.imgSrc} alt=${book.imgAlt}>
        <p class="review">${book.description}</p>
    </article>
`;
}

displayBooks();
