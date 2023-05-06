import { useState } from "react"
import Booklist from "./Booklist";
import BookForm from "./BookForm";

export default function Book() {
    const [books, setBooks] = useState([]);

    const handleDelete = (id) => {
        const filteredBooks = books.filter((book) => book.id !== id);
        setBooks(filteredBooks);
    }

    const handleCreate = (title, author) => {
        const newBook = { id: books.length, title, author }
        setBooks(...books, newBook);
    }

    return (
        <div>
            <h2>Home</h2>
            <Booklist books={books} onDelete={handleDelete} />
            <BookForm onCreate={handleCreate} />
        </div>
    )
}