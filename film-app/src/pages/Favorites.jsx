import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const [favorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);
  const navigate = useNavigate();

  return (
    <div className="favorites-page">

      <h1 className="title">My Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <p className="empty">No favorite movies yet 😢</p>
      ) : (
        <div className="movies-grid">

          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <img src={movie.image} alt={movie.title} />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>⭐ {movie.rating}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Favorites;
