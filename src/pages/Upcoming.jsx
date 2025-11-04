import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";
import MovieCard from "../components/MovieCard";

export default function Popular() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        tmdb.get("/movie/upcoming").then(res => setMovies(res.data.results));
    }, []);

    return (
        <div style={{maxWidth:"1200px",margin:"40px auto"}}>
            <h2 style={{color:"#2563eb",textAlign:"center",marginBottom:"20px"}}>Popular Movies</h2>
            <div style={{display:"flex",flexWrap:"wrap",gap:"20px",justifyContent:"center"}}>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}
