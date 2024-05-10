import { useEffect, useState } from "react"
import { GENRE, Movie, getGenreMovies, getPosterImageURL } from "../api/utils"
import ModalPage from "../pages/modalpage/ModalPage";

const Row = (
    { genre, showMovieModal }
    :
    { 
        genre: GENRE,
        showMovieModal: (movie: Movie) => void
    }
) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    // Movies 설정
    useEffect(() => {
        getGenreMovies(genre, setMovies);
    }, [genre]);

    if (movies == undefined) return null;


    // UI
    return (
        <div className="row-container">
            <h3>오늘 뜨고 있는 이 영화</h3>
            <div className="row" style={{gap: 40}}>
                {movies.map(movie => 
                    <div key={movie.id}>
                        <MoviePoster movie={movie} onClick={() => showMovieModal(movie)} />
                    </div>
                )}
            </div>
        </div>
    );
}

const MoviePoster = (
    { movie, onClick }
    :
    {
        movie: Movie,
        onClick: () => void
    }
) => {
    return (
        <img
            src={getPosterImageURL(movie)}
            onClick={onClick}
            className="movie-poster"
            width="200px"
            height="260px"
        />
    );
};

export default Row;