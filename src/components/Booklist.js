export default function Booklist({ books, onDelete }) {
    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>  
                    {book.title} by {book.author} {" "}
                    |<button onClick={() => onDelete(book.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}