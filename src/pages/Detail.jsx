import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";

export default function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        tmdb.get(`/movie/${id}`).then(res => setMovie(res.data));
    }, [id]);

    if (!movie) return <div style={{textAlign:"center",color:"#2563eb",marginTop:"50px"}}>Loading...</div>;

    return (
        <div className="detail-container">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="detail-image"
            />
            <div className="detail-info">
                <h2>{movie.title}</h2>
                <p><strong>Sinopsis:</strong> {movie.overview}</p>
                <p><strong>Genre:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
                <p><strong>Rating:</strong> ⭐ {movie.vote_average?.toFixed(1)}</p>
                <p><strong>Durasi:</strong> {movie.runtime} mins</p>
                <p><strong>Tahun Rilis:</strong> {movie.release_date?.slice(0,4)}</p>
            </div>
        </div>
    );
}
