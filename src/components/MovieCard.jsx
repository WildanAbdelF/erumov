import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.slice(0,4)}</p>
            <p>⭐ {movie.vote_average?.toFixed(1)}</p>
        </Link>
    );
}
