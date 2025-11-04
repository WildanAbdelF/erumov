import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";
import MovieList from "../components/MovieList";

export default function Home() {
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        tmdb.get("/movie/popular").then(res => setPopular(res.data.results));
        tmdb.get("/movie/upcoming").then(res => setUpcoming(res.data.results));
        tmdb.get("/movie/now_playing").then(res => setLatest(res.data.results));
    }, []);

    return (
        <div>
            <header>
                <h1>🎬 Movie Explorer</h1>
            </header>
            <MovieList title="Popular Movies" movies={popular} seeAllLink="/popular" />
            <MovieList title="Upcoming Movies" movies={upcoming} seeAllLink="/upcoming" />
            <MovieList title="Latest Movies" movies={latest} seeAllLink="/latest" />
        </div>
    );
}
