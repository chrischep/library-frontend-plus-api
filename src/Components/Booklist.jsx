import React, { useEffect, useState } from 'react';

function BookList({ onEdit }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch('http://localhost:3000/books');
    const data = await res.json();
    setBooks(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: 'DELETE',
    });
    fetchBooks(); // Refresh
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((b) => (
          <li key={b.id}>
            {b.title} by {b.author}
            <button onClick={() => onEdit(b)}>Edit</button>
            <button onClick={() => handleDelete(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
