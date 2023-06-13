// src/App.js

import './App.css';
import BookContainer from './redux/components/BookContainer';
// import { Route, Routes } from 'react-router-dom';
// import CategoriesPage from './components/CategoriesPage';
// import HomePage from './components/HomePage';
// import Header from './components/Header';

function App() {
  return (
    <>
      {/* <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes> */}
      <BookContainer />
    </>
  );
}

export default App;
