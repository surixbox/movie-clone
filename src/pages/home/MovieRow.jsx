
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../pages/home/MovieCard";
import "./MovieRow.css";
import TrailerModal from "../../components/TrailerModal";

const API_KEY = "03582cabf67544d6f29ca20211f63af3";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}${fetchUrl}`, {
          params: { api_key: API_KEY },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("API Error", error);
      } finally {
        setLoading(false);
      }
    };


    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      {loading ? (
        <p className="loading">Loading movies...</p>
      ) : (
        <div className="row-movies">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                title: movie.title || movie.name,
                poster: movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/200x300",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieRow;
