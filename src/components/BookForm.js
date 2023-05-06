import { useState } from "react";

export default function BookForm({ onCreate }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title, author);
        setTitle('');
        setAuthor('');
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter book title here"
            />
            <input
                type="text"
                value={author}
                onChange={handleAuthorChange}
                placeholder="Enter book author here"
            />
            <button type="submit">Create</button>
        </form>
    )
}