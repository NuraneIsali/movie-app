import moviesData from "../data/movies";

const API_KEY = "YOUR_TMDB_API_KEY"; // Replace with your TMDB API key
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    return data.results.slice(0, 8).map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: `${IMAGE_BASE_URL}${movie.poster_path}`,
      rating: movie.vote_average.toFixed(1),
      trailer: `https://www.youtube.com/embed/zAGVQLHvwOY`, // Placeholder
      overview: movie.overview,
    }));
  } catch (error) {
    console.error("Error fetching movies from TMDB:", error);
    // Fallback to local data
    return moviesData.map((movie) => ({
      ...movie,
      overview: movie.title + " - A great movie!", // Add overview for consistency
    }));
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    return {
      id: data.id,
      title: data.title,
      image: `${IMAGE_BASE_URL}${data.poster_path}`,
      rating: data.vote_average.toFixed(1),
      overview: data.overview,
      trailer: `https://www.youtube.com/embed/zAGVQLHvwOY`, // Placeholder
    };
  } catch (error) {
    console.error("Error fetching movie details from TMDB:", error);
    // Fallback to local data
    const movie = moviesData.find((m) => m.id === Number(id));
    if (movie) {
      return {
        ...movie,
        overview: movie.title + " - A great movie!",
      };
    }
    return null;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    );
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    return data.results.slice(0, 8).map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: `${IMAGE_BASE_URL}${movie.poster_path}`,
      rating: movie.vote_average.toFixed(1),
      trailer: `https://www.youtube.com/embed/zAGVQLHvwOY`,
      overview: movie.overview,
    }));
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return moviesData.map((movie) => ({
      ...movie,
      overview: movie.title + " - A great movie!",
    }));
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    );
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    return data.results.slice(0, 8).map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: `${IMAGE_BASE_URL}${movie.poster_path}`,
      rating: movie.vote_average.toFixed(1),
      trailer: `https://www.youtube.com/embed/zAGVQLHvwOY`,
      overview: movie.overview,
    }));
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    return moviesData.map((movie) => ({
      ...movie,
      overview: movie.title + " - A great movie!",
    }));
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    );
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    return data.results.slice(0, 8).map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: `${IMAGE_BASE_URL}${movie.poster_path}`,
      rating: movie.vote_average.toFixed(1),
      trailer: `https://www.youtube.com/embed/zAGVQLHvwOY`,
      overview: movie.overview,
    }));
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return moviesData.map((movie) => ({
      ...movie,
      overview: movie.title + " - A great movie!",
    }));
  }
};
