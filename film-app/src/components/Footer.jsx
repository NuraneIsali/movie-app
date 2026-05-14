import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const subscribe = (event) => {
    event.preventDefault();

    const normalized = email.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!normalized || !validEmail.test(normalized)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("filmzone_newsletter", normalized);
    setMessage("Subscribed! Check your inbox for film updates soon.");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>FilmZone</h2>
          <p>
            A cinematic playground for movie lovers. Discover favorites, stay
            inspired, and stream the vibe.
          </p>
        </div>

        <div className="footer-block">
          <h3>Explore</h3>
          <button type="button" className="footer-link" onClick={() => navigate("/")}>Home</button>
          <button type="button" className="footer-link" onClick={() => navigate("/favorites")}>Favorites</button>
          <button type="button" className="footer-link" onClick={() => navigate("/")}>New Releases</button>
        </div>

        <div className="footer-block">
          <h3>Support</h3>
          <a href="mailto:support@filmzone.com">Help Center</a>
          <a href="/" rel="noreferrer">Terms</a>
          <a href="/" rel="noreferrer">Privacy</a>
        </div>

        <div className="footer-block newsletter-box">
          <h3>Stay in the loop</h3>
          <p>Subscribe for weekly movie inspirations and trending drops.</p>
          <form className="newsletter-form" onSubmit={subscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email for newsletter"
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p className="newsletter-msg">{message}</p>}
          <div className="footer-social">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed for film fans — built with passion and popcorn.</p>
        <div className="footer-actions">
          <div className="badge-row">
            <span>✨ Curated Movie Picks</span>
            <span>🎬 Watchlist Ready</span>
            <span>🚀 Fast & Smooth</span>
          </div>
          <button type="button" className="scroll-top" onClick={scrollToTop}>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
