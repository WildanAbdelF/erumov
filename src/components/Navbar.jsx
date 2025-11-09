import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">EruMov</h1>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/popular">Popular</Link>
                    <Link to="/upcoming">Upcoming</Link>
                    <Link to="/latest">Latest</Link>
                </div>
            </div>
        </nav>
    );
}
