// src/App.js

import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookContainer from './redux/components/BookContainer';
import CategoriesPage from './components/CategoriesPage';
// import HomePage from './components/HomePage';
import Header from './components/Header';

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
