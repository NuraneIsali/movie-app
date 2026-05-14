import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

function Navbar() {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* LOGO */}
      <div className="logo">
        FilmZone
      </div>

      {/* LINKS */}
      <ul className="nav-links">

        <li className={isActive("/") ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={isActive("/watchlist") ? "active" : ""}>
          <Link to="/watchlist">Watchlist 🎬</Link>
        </li>

        <li className={isActive("/favorites") ? "active" : ""}>
          <Link to="/favorites">Favorites ❤️</Link>
        </li>

      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <button className="login-btn" onClick={() => setShowLogin(true)}>
          Login
        </button>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

    </nav>
  );
}

export default Navbar;