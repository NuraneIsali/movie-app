import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function MovieSection({
  title,
  movies,
  isLoading,
  toggleFavorite,
  isFavorite,
  toggleWatchlist,
  isWatched,
}) {
  const navigate = useNavigate();

  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="movies-section">

      {/* HEADER */}
      <div className="section-header">

        <h2>{title}</h2>

        <div className="slider-buttons">

          <button onClick={handlePrev}>
            ◀
          </button>

          <button onClick={handleNext}>
            ▶
          </button>

        </div>

      </div>

      {/* SLIDER */}
      <div className="slider-wrapper" ref={sliderRef}>

        {isLoading ? (
          Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="shimmer-card"></div>
          ))
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">

              <div
                onClick={() =>
                  navigate(`/movie/${movie.id}`)
                }
                style={{ cursor: "pointer" }}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                />

                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>⭐ {movie.rating}</p>
                </div>
              </div>

              <div className="card-actions">
                <button
                  className="fav-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(movie);
                  }}
                >
                  {isFavorite(movie.id)
                    ? "❤️ Remove"
                    : "🤍 Add"}
                </button>

                {toggleWatchlist && (
                  <button
                    className={`watchlist-btn ${isWatched(movie.id) ? "watched" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWatchlist(movie);
                    }}
                  >
                    {isWatched(movie.id)
                      ? "✅ Watched"
                      : "👁 Mark Watched"}
                  </button>
                )}
              </div>

            </div>
          ))
        )}

      </div>

    </section>
  );
}

export default MovieSection;