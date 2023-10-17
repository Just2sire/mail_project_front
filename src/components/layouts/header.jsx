import { Link } from "react-router-dom";

const Header = () => {
    return (  
        <header className="header">

            <Link to="/" className="logo"> se<i className="fas fa-search-dollar"></i> </Link>

            <nav className="navbar">
                <a href="#home">Acceuil</a>
                <a href="#services">Services</a>
                <a href="#work">Travail</a>
                <a href="#pricing">Forfait</a>
                <a href="#reviews">Témoignage</a>
                <a href="#contact">Contact</a>
            </nav>

            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="theme-btn" className="far fa-moon"></div>
            <Link to={'login'}>
                <div id="theme-btn" className="far fa-user"></div> 
            </Link>

            <div className="scroll-indicator"></div>

        </header>
    );
}
 
export default Header;