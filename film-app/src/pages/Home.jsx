import { useState } from "react";
import moviesData from "../data/movies";

import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";

function Home() {
  const [movies] = useState(moviesData || []);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);
  const [watchlist, setWatchlist] = useState(() => JSON.parse(localStorage.getItem("watchlist")) || []);
  const [loading] = useState(false);

  // ❤️ FAVORITES TOGGLE
  const toggleFavorite = (movie) => {
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

  const isFavorite = (id) =>
    favorites.some((m) => m.id === id);

  const toggleWatchlist = (movie) => {
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

  const isWatched = (id) =>
    watchlist.some((m) => m.id === id);

  // 🎯 FILTERS
  const trending = movies.filter(
    (m) => m.category === "trending"
  );

  const popular = movies.filter(
    (m) => m.category === "popular"
  );

  const topRated = movies.filter(
    (m) => m.category === "top"
  );

  return (
    <div className="home">

      {/* 🔥 HERO (MAIN) */}
      {movies.length > 0 && (
        <Hero movie={movies[0]} />
      )}

      {watchlist.length > 0 && (
        <MovieSection
          title="Continue Watching"
          movies={watchlist}
          isLoading={loading}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
          toggleWatchlist={toggleWatchlist}
          isWatched={isWatched}
        />
      )}

      {/* 🎬 TRENDING */}
      <MovieSection
        title="Trending Movies"
        movies={trending}
        isLoading={loading}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        toggleWatchlist={toggleWatchlist}
        isWatched={isWatched}
      />

      {/* 🔥 POPULAR */}
      <MovieSection
        title="Popular Movies"
        movies={popular}
        isLoading={loading}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        toggleWatchlist={toggleWatchlist}
        isWatched={isWatched}
      />

      {/* ⭐ TOP RATED */}
      <MovieSection
        title="Top Rated Movies"
        movies={topRated}
        isLoading={loading}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        toggleWatchlist={toggleWatchlist}
        isWatched={isWatched}
      />

    </div>
  );
}

export default Home;