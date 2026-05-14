import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
import SortingButton from "./components/SortingButton/SortingButton.jsx";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { sortAlphabetical, sortByRating } from "./util/movieSort.js";
import { updateMovieList } from "./util/movieList.js";

import Movie from "./components/Movie/Movie.jsx";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    setMovieList(updateMovieList(movie, movieList));
  };

  const removeFromMovieList = (deletedMovie) => {
    setMovieList(movieList.filter((movie) => movie !== deletedMovie));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4">Min filmlista</h1>
          <h3 className="display-7">Lägg till en film</h3>
          <hr></hr>
          <AddMovieForm addToMovieList={addToMovieList} />
          <MovieList
            movies={movieList}
            removeFromMovieList={removeFromMovieList}
          />
          <SortingButton
            sortFunction={() => {
              setMovieList(sortAlphabetical(movieList));
            }}
            name={"Alfabetisk ordning"}
          />
          <SortingButton
            sortFunction={() => {
              setMovieList(sortByRating(movieList));
            }}
            name={"Betygsordning"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
