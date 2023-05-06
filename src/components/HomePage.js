// src/components/HomePage.js
import '../styles/HomePage.css';
import Header from './Header';

import { useState } from "react"
import Booklist from "./Booklist";
import BookForm from "./BookForm";

export default function Book() {
    const [books, setBooks] = useState([]);

    const handleDelete = (id) => {
        const filteredBooks = filterBooksById(books ,id);
        setBooks(filteredBooks);
    }

    const handleCreate = (title, author) => {
        const newBook = { id: books.length, title, author }
        setBooks([...books, newBook]);
    }

    const filterBooksById = (books, id) => books.filter((book) => book.id !== id);
    
    return (
        <div className="main-container">
            <Header />
            <Booklist books={books} onDelete={handleDelete} />
            <BookForm onCreate={handleCreate} />
        </div>
    )
}