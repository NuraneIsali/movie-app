import { useNavigate } from "react-router-dom";

function WatchlistSection({ watchlist, toggleWatchlist }) {
  const navigate = useNavigate();

  if (watchlist.length === 0) {
    return (
      <div className="watchlist-empty">
        <h2>Your watchlist is empty.</h2>
        <p>
          Mark movies as watched from the Home page or movie details to populate
          your personal watch collection.
        </p>
      </div>
    );
  }

  return (
    <section className="watchlist-section">
      <div className="watchlist-grid">
        {watchlist.map((movie) => (
          <div key={movie.id} className="watchlist-card">
            <div
              className="watchlist-thumb"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="watchlist-info">
              <h3>{movie.title}</h3>
              <p>⭐ {movie.rating}</p>
            </div>
            <button
              className="watchlist-remove"
              onClick={() => toggleWatchlist(movie)}
            >
              Remove from Watchlist
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WatchlistSection;
