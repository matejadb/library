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

	const author = document.createElement("h3");
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

	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add("button-container");

	const removeBookButton = document.createElement("button");
	removeBookButton.classList.add("remove-book");
	removeBookButton.textContent = "Remove";

	const addToReadButton = document.createElement("button");
	addToReadButton.classList.add("add-read");
	addToReadButton.textContent = "Add read";

	buttonContainer.append(removeBookButton, addToReadButton);
	book.append(title, author, pages, read, buttonContainer);

	container.appendChild(book);

	form.reset();
	dialog.close();
});

container.addEventListener("click", (e) => {
	if (e.target.classList.contains("remove-book")) {
		const bookToRemove = e.target.closest(".book");
		container.removeChild(bookToRemove);
	}
	/* NOT GOOD, WILL CHANGE */
	if (e.target.classList.contains("add-read")) {
		const bookContainer = e.target.closest(".book");
		const readStatus = bookContainer.querySelector(".book-read");
		if (readStatus.textContent === "You haven't read the book") {
			readStatus.textContent = "You've read the book";
		} else {
			readStatus.textContent = "You haven't read the book";
		}
	}
});

AddBook.addEventListener("click", () => {
	dialog.showModal();
});

closeForm.addEventListener("click", () => {
	dialog.close();
});
