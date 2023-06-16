// src/components/Header.js

// src/components/Header.js

import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';
import image from '../images/user-solid.png';

export default function Header() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    if (location.pathname === path) {
      return { color: 'black' };
    }
    return { color: 'grey' };
  };

  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li className="head">Bookstore CMS</li>
          <li className="route">
            <Link to="/" style={getLinkStyle('/')}>BOOKS</Link>
          </li>
          <li className="route">
            <Link to="/categories" style={getLinkStyle('/categories')}>CATEGORIES</Link>
          </li>
          <li className="image-li"><img className="user-image" src={image} alt="" /></li>
        </ul>
      </nav>
    </header>
  );
}
