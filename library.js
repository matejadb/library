const container = document.querySelector(".container");
const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read);
	myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Godfather", "Godfather Author", 350, true);
addBookToLibrary("The Book Of Old", "Old Man", 400, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Godfather", "Godfather Author", 350, true);
addBookToLibrary("The Book Of Old", "Old Man", 400, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Godfather", "Godfather Author", 350, true);
addBookToLibrary("The Book Of Old", "Old Man", 400, false);

for (let i = 0; i < myLibrary.length; i++) {
	const book = document.createElement("div");
	book.classList.add("book");

	const title = document.createElement("h1");
	title.classList.add("book-title");
	title.textContent = myLibrary[i].title;

	const author = document.createElement("h2");
	author.classList.add("book-author");
	author.textContent = myLibrary[i].author;

	const pages = document.createElement("p");
	pages.classList.add("book-pages");
	pages.textContent = myLibrary[i].pages + " pages";

	const read = document.createElement("p");
	read.classList.add("book-read");
	read.textContent = myLibrary[i].read
		? "You've read the book"
		: "You haven't read the book";

	book.append(title, author, pages, read);
	container.appendChild(book);
}
