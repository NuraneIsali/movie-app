import { useNavigate } from "react-router-dom";

function Hero({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null;

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      <div className="hero-overlay">
        <h1>{movie.title}</h1>

        <p>
          Experience cinema at its finest. Action,
          drama and emotion combined.
        </p>

        <div className="hero-buttons">
          <button
            className="watch-btn"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            ▶ Watch Now
          </button>

         
        </div>
      </div>
    </section>
  );
}

export default Hero;