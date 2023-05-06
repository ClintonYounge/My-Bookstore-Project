import { Link } from "react-router-dom";
import '../styles/header.css';
import image from '../images/user-solid.png';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="nav-links">
                    <li className="head">Bookstore CMS</li>
                    <li className="route">
                        <Link to="/">Books</Link>
                    </li>
                    <li className="route">
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li><img className="user-image" src={image} alt=""/></li>
                </ul>
            </nav>
        </header>
    )
}