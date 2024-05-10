import { useEffect, useState } from "react";
import { Movie, getBackdropImageURL, getRandomMovie } from "../api/utils";
import './Banner.css';


const Banner = (
    { showMovieModal }
    :
    {
        showMovieModal: (movie: Movie) => void
    }
) => {
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        getRandomMovie(setMovie);
    }, [movie]);

    if (movie == undefined) return null;

    return (
        <div style={{position: "relative"}}>
            <div>
                <img 
                    src={getBackdropImageURL(movie)}
                    style={{width: "100%", filter: "brightness(70%)"}}
                />
            </div>
            <div style={{position: "absolute", left: 0, top: "30%", paddingLeft: "7%", width: 500, color: "#fff"}}>
                <h1>{movie.title}</h1>
                {movie.overview}
                <br/>
                <br/>
                <button className="movie-btn" onClick={() => showMovieModal(movie)}>설명 봐보기</button>
            </div>
        </div>
    );
};

export default Banner;