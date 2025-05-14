import React, { useState } from 'react';
import BookList from './Components/Booklist';
import BookForm from './Components/BookForm';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div>
      <h1>Library</h1>
      <BookForm selectedBook={selectedBook} refresh={refresh} />
      <BookList key={refreshFlag} onEdit={setSelectedBook} />
    </div>
  );
}

export default App;
