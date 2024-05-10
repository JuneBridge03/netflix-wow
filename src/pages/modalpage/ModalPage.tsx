import { Movie, getBackdropImageURL } from "../../api/utils"
import "./ModalPage.css";


const ModalPage = (
    { movie, onCloseClick }
    :
    { 
        movie: Movie,
        onCloseClick: () => void
    }
) => {

    return (
        <div className="modal">
            <div className="modal-content">
                <img
                    src={getBackdropImageURL(movie)}
                    width="100%"
                />
                <div className="modal-elements">
                    <h2>{movie.title}</h2>
                    <p>
                        {movie.overview}
                    </p>
                    <button className="movie-btn" onClick={onCloseClick}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalPage