import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-card">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
            />
            <div className="movie-info">
                <div className="movie-top">
                    <div className="movie-row">
                        <h3 className="movie-title">{movie.title}</h3>
                        <p className="movie-year">{movie.release_date?.slice(0, 4)}</p>
                    </div>
                </div>

                <div className="movie-bottom">
                    <div className="movie-row">
                        <p className="movie-rating">⭐ {movie.vote_average?.toFixed(1)}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
