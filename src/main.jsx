import React from 'react';
import ReactDOM from 'react-dom/client';
import Topbar from './components/Topbar/Topbar.jsx';
import { BooksWrapper, Book } from './components/Book/Book.jsx';
import { useState } from 'react';
import './index.css';

const defaultBooks = [
    { id: crypto.randomUUID(), title: 'The Hobbit', author: 'J.R.R Tolkien', numberOfPages: 320 },
    { id: crypto.randomUUID(), title: '1984', author: 'George Orwell', numberOfPages: 328 },
    { id: crypto.randomUUID(), title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', numberOfPages: 417 },
    { id: crypto.randomUUID(), title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', numberOfPages: 180 },
];

function App() {
    const [books, setBooks] = useState(defaultBooks);

    function addBook() {
        console.log('This is supposed to add a book');
    }

    function removeBook(id) {
        setBooks(
            books.filter((book) => {
                return book.id !== id
            })
        );
    }

    return (
        <BooksWrapper>
            {
                books.map((book) => (
                    <Book
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        numberOfPages={book.numberOfPages}
                        onRemoveBook={removeBook}
                    />
                ))
            }
        </BooksWrapper>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Topbar />
        <App />
    </React.StrictMode>,
);

