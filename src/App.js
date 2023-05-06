import './App.css';
import { Link } from 'react-router-dom';
import CategoriesPage from './components/CategoriesPage';
import HomePage from './components/HomePage'

function App() {
  return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </>
  );
}

export default App;
