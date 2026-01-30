

import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../pages/home/MovieCard";
import TrailerModal from "../components/TrailerModal";
import "./MovieRow.css";

const API_KEY = "03582cabf67544d6f29ca20211f63af3";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}${fetchUrl}`, {
          params: { api_key: API_KEY },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [fetchUrl]);

  const playTrailer = async (movieId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}/videos`,
        { params: { api_key: API_KEY } }
      );

      const trailer = response.data.results.find(
        (video) =>
          video.type === "Trailer" && video.site === "YouTube"
      );

      if (trailer) {
        setTrailerKey(trailer.key);
      } else {
        alert("Trailer not available");
      }
    } catch (error) {
      console.error("Trailer fetch failed", error);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="row-movies">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                id: movie.id,
                title: movie.title || movie.name,
                poster: movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/200x300",
              }}
              onPlay={playTrailer}
            />
          ))}
        </div>
      )}

      {trailerKey && (
        <TrailerModal
          trailerKey={trailerKey}
          onClose={() => setTrailerKey(null)}
        />
      )}
    </div>
  );
}

export default MovieRow;

