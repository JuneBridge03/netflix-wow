import instance from "./axios";
import requests from "./request";


export enum GENRE {
    ACTION = 28,
    COMEDY = 35,
    HORROR = 27,
    ROMANCE = 10749,
    DOCUMENTARIE = 99
};

export interface Movie {
    adult: boolean,
    id: number,
    backdrop_path: string,
    poster_path: string,
    genre_ids: number[],
    title: string,
    overview: string
};

export const getGenreMovies = async (genre: number, setMovies: (movies: Movie[]) => void) => {
    const request = await instance.get(requests.fetchDiscoverMovies, {
        params: {
            with_genres: genre
        }
    });

    setMovies(request.data.results as Movie[])
};

export const getRandomMovie = async (setMovie: (movie: Movie) => void) => {
    const request = await instance.get(requests.fetchNowPlaying);

    setMovie(request.data.results[0] as Movie)
};

export const getPosterImageURL = (movie: Movie) => {
    return "https://image.tmdb.org/t/p/original" + movie.poster_path
}

export const getBackdropImageURL = (movie: Movie) => {
    return "https://image.tmdb.org/t/p/original" + movie.backdrop_path
}
