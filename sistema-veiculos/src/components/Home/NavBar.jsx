import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const logotipo = "/src/assets/images/logotipo.png"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logotipo} alt="" />

                </Link>
            </div>

            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
                </li>
                <li>
                    <Link to="/galeria" onClick={() => setMenuOpen(false)}>Galeria</Link>
                </li>
                <li>
                    <a
                        href="https://wa.me/5599999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contato
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;