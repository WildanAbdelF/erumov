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
        <div style={{maxWidth:"800px",margin:"40px auto",background:"#fff",borderRadius:"12px",padding:"20px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{width:"100%",borderRadius:"12px"}}/>
            <h2 style={{color:"#2563eb",margin:"20px 0 10px"}}>{movie.title}</h2>
            <p>⭐ {movie.vote_average?.toFixed(1)} | {movie.runtime} mins</p>
            <p style={{marginTop:"10px",color:"#555"}}>{movie.overview}</p>
        </div>
    );
}
