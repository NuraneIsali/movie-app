import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../services/tmdb";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showTrailer, setShowTrailer] = useState(false);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);
  const [watchlist, setWatchlist] = useState(() => JSON.parse(localStorage.getItem("watchlist")) || []);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
      setLoading(false);
    };
    loadMovie();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <h2>Movie not found</h2>;

  const isFavorite = (movieId) => favorites.some((m) => m.id === movieId);
  const isWatched = (movieId) => watchlist.some((m) => m.id === movieId);

  const toggleFavorite = () => {
    let updated;
    const exists = favorites.find((m) => m.id === movie.id);

    if (exists) {
      updated = favorites.filter((m) => m.id !== movie.id);
    } else {
      updated = [...favorites, movie];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const toggleWatchlist = () => {
    let updated;
    const exists = watchlist.find((m) => m.id === movie.id);

    if (exists) {
      updated = watchlist.filter((m) => m.id !== movie.id);
    } else {
      updated = [...watchlist, movie];
    }

    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="detail-container">

      {/* BACK */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* BACKDROP */}
      <div className="backdrop">
        <img src={movie.image} alt={movie.title} />
        <div className="overlay"></div>
      </div>

      {/* CONTENT */}
      <div className="detail-content">

        <div className="detail-left">
          <h1>{movie.title}</h1>
          <p>⭐ {movie.rating}</p>

          <p className="desc">
            {movie.overview || "Watch official trailer below."}
          </p>

          <div className="buttons">
            <button
              className="watch"
              onClick={() => setShowTrailer(true)}
            >
              ▶ Watch Trailer
            </button>
            <button
              className={`fav ${isFavorite(movie.id) ? "favorited" : ""}`}
              onClick={toggleFavorite}
            >
              {isFavorite(movie.id) ? "❤️ Remove" : "🤍 Add to Favorites"}
            </button>
            <button
              className={`watchlist-detail ${isWatched(movie.id) ? "watched" : ""}`}
              onClick={toggleWatchlist}
            >
              {isWatched(movie.id) ? "✅ Watched" : "👁 Mark as Watched"}
            </button>
          </div>
        </div>

        <div className="detail-right">
          <img src={movie.image} alt={movie.title} />
        </div>

      </div>

      {/* TRAILER MODAL */}
      {showTrailer && (
        <div className="modal-overlay" onClick={() => setShowTrailer(false)}>

          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <iframe
              width="100%"
              height="315"
              src={movie.trailer}
              title="Trailer"
              allowFullScreen
            ></iframe>

            <button
              className="close-btn"
              onClick={() => setShowTrailer(false)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default MovieDetail;