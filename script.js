const booksData = [
    { id: 1, author: "J.K. Rowling", title: "Harry Potter and the Sorcerer's Stone", availability: 5 },
    { id: 2, author: "George Orwell", title: "1984", availability: 3 },
    { id: 3, author: "J.R.R. Tolkien", title: "The Hobbit", availability: 6 },
    { id: 4, author: "Jane Austen", title: "Pride and Prejudice", availability: 4 },
    { id: 5, author: "F. Scott Fitzgerald", title: "The Great Gatsby", availability: 2 },
    { id: 6, author: "Harper Lee", title: "To Kill a Mockingbird", availability: 7 },
    { id: 7, author: "Herman Melville", title: "Moby Dick", availability: 5 },
    { id: 8, author: "Leo Tolstoy", title: "War and Peace", availability: 3 },
    { id: 9, author: "Mark Twain", title: "The Adventures of Huckleberry Finn", availability: 8 },
    { id: 10, author: "J.K. Rowling", title: "Harry Potter and the Chamber of Secrets", availability: 6 },
];

booksData.forEach(book => {
    book.originalAvailability = book.availability;
})

const container = document.getElementById("grid-container");
const buttons = document.querySelector('book-item');


for (let i = 0; i < booksData.length; i++) {
    const addDiv = document.createElement("div");
    container.appendChild(addDiv);
    addDiv.classList.add("book-item");

    addDiv.innerHTML = `<br> <p>${booksData[i].author}</p> <br> <p>"${booksData[i].title}"</p>  <br> <p>Availability:  ${booksData[i].availability}</p> <br>`;

    const addButtonBorrow = document.createElement("button");
    addDiv.appendChild(addButtonBorrow);
    addButtonBorrow.classList.add("button-style", "borrow");
    addButtonBorrow.setAttribute("book-id", booksData[i].id)
    addButtonBorrow.textContent = 'Borrow';

    const addButtonReturn = document.createElement("button");
    addDiv.appendChild(addButtonReturn);
    addButtonReturn.classList.add("button-style", "return");
    addButtonReturn.setAttribute("book-id", booksData[i].id)
    addButtonReturn.textContent = 'Return';
};


document.querySelectorAll('.borrow, .return').forEach(button => {
    button.addEventListener('click', (event) => {
        const bookId = parseInt(event.target.getAttribute('book-id'));
        const book = booksData.find(b => b.id === bookId);
        const bookItem = event.target.closest('.book-item');
        const availabilityPara = bookItem.querySelectorAll('p') [2];

        if(event.target.classList.contains('borrow')) {
            if(book.availability > 0) {
                book.availability--;
            }
        } else if (event.target.classList.contains('return')) {
                if(book.availability < book.originalAvailability) {
                    book.availability++;
                }
        }

        if(book.availability === 0) {
            availabilityPara.textContent = "Out of Stock !";
        } else {
            availabilityPara.textContent = `Availability: ${book.availability}`
        }

    })
})

