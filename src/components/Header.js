// src/components/Header.js

import { Link } from 'react-router-dom';
import '../styles/header.css';
import image from '../images/user-solid.png';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li className="head">Bookstore CMS</li>
          <li className="route1">
            <Link to="/">BOOKS</Link>
          </li>
          <li className="route2">
            <Link to="/categories">CATEGORIES</Link>
          </li>
          <li className="image-li"><img className="user-image" src={image} alt="" /></li>
        </ul>
      </nav>
    </header>
  );
}
