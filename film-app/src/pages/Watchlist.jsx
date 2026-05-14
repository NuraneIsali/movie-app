import { useState } from "react";
import WatchlistSection from "../components/WatchlistSection";

function Watchlist() {
  const [watchlist, setWatchlist] = useState(() => JSON.parse(localStorage.getItem("watchlist")) || []);

  const toggleWatchlist = (movie) => {
    const exists = watchlist.find((item) => item.id === movie.id);
    const updated = exists
      ? watchlist.filter((item) => item.id !== movie.id)
      : [...watchlist, movie];

    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="watchlist-page">
      <header className="watchlist-hero">
        <div>
          <span className="section-tag">Watchlist</span>
          <h1>Where your watched favorites live.</h1>
          <p>
            Every movie you marked as watched is collected here for quick
            replay, review, or rediscovery.
          </p>
          <p className="watchlist-count">
            {watchlist.length} movie{watchlist.length === 1 ? "" : "s"} watched
          </p>
        </div>
      </header>

      <div className="watchlist-content">
        <WatchlistSection
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist}
        />
      </div>
    </div>
  );
}

export default Watchlist;
