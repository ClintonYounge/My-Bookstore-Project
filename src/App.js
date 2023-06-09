// src/App.js

import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookContainer from './components/BookContainer';
import CategoriesPage from './components/CategoriesPage';
import Header from './components/Header';
import './styles/book.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
