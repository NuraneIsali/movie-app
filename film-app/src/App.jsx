import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import MainLayout from "./layouts/MainLayout";
import Favorites from "./pages/Favorites";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <Routes>

      {/* Layout burada qalır */}
      <Route element={<MainLayout />}>
       <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Route>

    </Routes>
  );
}

export default App;