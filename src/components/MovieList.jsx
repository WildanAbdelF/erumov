import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function MovieList({ title, movies, seeAllLink }) {
    return (
        <div className="movie-section container">
            <div className="movie-section-header">
                <h2>{title}</h2>
                <Link className="see-all" to={seeAllLink}>See All</Link>
            </div>
            <div className="movie-grid">
                {movies.slice(0, 10).map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
