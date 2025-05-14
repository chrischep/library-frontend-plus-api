import React, { useState, useEffect } from 'react';

function BookForm({ selectedBook, refresh }) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    published_year: '',
  });

  useEffect(() => {
    if (selectedBook) setBook(selectedBook);
  }, [selectedBook]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = book.id ? 'PUT' : 'POST';
    const url = book.id
      ? `http://localhost:3000/books/${book.id}`
      : 'http://localhost:3000/books';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });

    setBook({ title: '', author: '', genre: '', published_year: '' });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={book.title} onChange={handleChange} placeholder="Title" />
      <input name="author" value={book.author} onChange={handleChange} placeholder="Author" />
      <input name="genre" value={book.genre} onChange={handleChange} placeholder="Genre" />
      <input name="published_year" value={book.published_year} onChange={handleChange} placeholder="Year" />
      <button type="submit">{book.id ? 'Update' : 'Add'} Book</button>
    </form>
  );
}

export default BookForm;
