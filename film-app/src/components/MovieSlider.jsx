import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function MovieSlider({ title, movies, isLoading, toggleFavorite, isFavorite, variant = "default" }) {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 6;
  const totalSlides = Math.ceil(movies.length / cardsPerView);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const getCardClass = () => {
    switch (variant) {
      case "trending":
        return "movie-card trending-card";
      case "toprated":
        return "movie-card toprated-card";
      case "upcoming":
        return "movie-card upcoming-card";
      default:
        return "movie-card";
    }
  };

  return (
    <section className={`movies-section ${variant}-section`}>
      <div className="section-header">
        <h2>{title}</h2>
        <div className="nav-buttons">
          <button
            className="nav-btn prev"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            ‹
          </button>
          <button
            className="nav-btn next"
            onClick={nextSlide}
            disabled={currentIndex >= totalSlides - 1}
          >
            ›
          </button>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {isLoading ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="shimmer-card">
                <div className="shimmer-image" />
                <div className="shimmer-info">
                  <div className="shimmer-line short" />
                  <div className="shimmer-line" />
                </div>
                <div className="shimmer-btn" />
              </div>
            ))
          ) : movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className={getCardClass()}>
                <div
                  className="card-content"
                  onClick={() => navigate(`/movie/${movie.id}`)}
                >
                  <img src={movie.image} alt={movie.title} />
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>⭐ {movie.rating}</p>
                  </div>
                </div>
                <button
                  className="fav-btn"
                  onClick={() => toggleFavorite(movie)}
                >
                  {isFavorite(movie.id) ? "❤️" : "🤍"}
                </button>
              </div>
            ))
          ) : (
            <p className="no-results">No movies found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default MovieSlider;