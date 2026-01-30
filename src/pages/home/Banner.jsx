import { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";

const API_KEY = "03582cabf67544d6f29ca20211f63af3";
const BASE_URL = "https://api.themoviedb.org/3";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchBannerMovie = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/discover/movie`,
          {
            params: { api_key: API_KEY }
          }
        );

        const randomMovie =
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ];

        setMovie(randomMovie);
      } catch (error) {
        console.error("Banner fetch failed", error);
      }
    };

    fetchBannerMovie();
  }, []);

  if (!movie) return null;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(15, 23, 30, 0.3),
          #0f171e
        ), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    >
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

<div className="banner-buttons">
  <button
    onClick={() =>
      window.open("https://youtu.be/dmg36v0zYbM?si=6S71H9jlZoOk3Tdw", "_blank")
    }
  >
    ▶ Play
  </button>

  <button>More Info</button>
</div>

    </header>
  );
}

export default Banner;
