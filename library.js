const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const AddBook = document.querySelector("dialog + button");
const closeForm = document.querySelector(".close-form");
const form = document.querySelector("form");

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

form.addEventListener("submit", (e) => {
	e.preventDefault();
	addBookToLibrary(
		document.querySelector("#title").value,
		document.querySelector("#author").value,
		document.querySelector("#pages").value,
		document.querySelector("#read").checked
	);
	const book = document.createElement("div");
	book.classList.add("book");

	const title = document.createElement("h1");
	title.classList.add("book-title");
	title.textContent = document.querySelector("#title").value;

	const author = document.createElement("h2");
	author.classList.add("book-author");
	author.textContent = document.querySelector("#author").value;

	const pages = document.createElement("p");
	pages.classList.add("book-pages");
	pages.textContent = document.querySelector("#pages").value + " pages";

	const read = document.createElement("p");
	read.classList.add("book-read");
	read.textContent = document.querySelector("#read").checked
		? "You've read the book"
		: "You haven't read the book";

	book.append(title, author, pages, read);
	container.appendChild(book);

	form.reset();
	dialog.close();
});

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

AddBook.addEventListener("click", () => {
	dialog.showModal();
});

closeForm.addEventListener("click", () => {
	dialog.close();
});
