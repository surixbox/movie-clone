import "./MovieCard.css";

function MovieCard({ movie, onPlay }) {
  return (
    <div
      className="movie-card"
      onClick={() => onPlay(movie.id)}
    >
      <img src={movie.poster} alt={movie.title} />

      <div className="overlay">
        <p>{movie.title}</p>
      </div>
    </div>
  );
}

export default MovieCard;


