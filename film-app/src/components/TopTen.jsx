import { useNavigate } from "react-router-dom";

function TopTen({ movies }) {
  const navigate = useNavigate();

  return (
    <section className="topten-section">

      <h2 className="topten-title">
        Top 10 This Week 🔥
      </h2>

      <div className="topten-grid">

        {movies.slice(0, 10).map((movie, index) => (
          <div
            key={movie.id}
            className="topten-card"
            onClick={() =>
              navigate(`/movie/${movie.id}`)
            }
          >

            {/* BIG NUMBER */}
            <span className="rank-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* IMAGE */}
            <img
              src={movie.image}
              alt={movie.title}
            />

            {/* INFO */}
            <div className="topten-info">

              <h3>{movie.title}</h3>

              <p>⭐ {movie.rating}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TopTen;