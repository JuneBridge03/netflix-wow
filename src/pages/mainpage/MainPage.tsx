import { useState } from "react";
import { GENRE, Movie } from "../../api/utils";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import Row from "../../components/Row";
import ModalPage from "../modalpage/ModalPage";


const MainPage = () => {
    const [modalMovie, setModalMovie] = useState<Movie|null>(null);

    const showMovieModal = (movie: Movie) => {
        if (modalMovie != null) return; // 이미 모달창이 켜진 상황
        console.log("Movie modal!");

        setModalMovie(movie);
    }

    const onCloseMovieModal = () => {
        setModalMovie(null);
    }

    return (
      <div>
        <NavigationBar />
        <Banner showMovieModal={showMovieModal}/>
        {
          [
            GENRE.ACTION, 
            GENRE.COMEDY, 
            GENRE.DOCUMENTARIE, 
            GENRE.HORROR, 
            GENRE.ROMANCE
          ].map(genre => 
            <div key={genre}>
                <Row genre={genre} showMovieModal={showMovieModal}/>
            </div>
            )
        }
        <Footer />
        {(modalMovie != null) && <ModalPage movie={modalMovie} onCloseClick={onCloseMovieModal} />}
      </div>
    );
};

export default MainPage;