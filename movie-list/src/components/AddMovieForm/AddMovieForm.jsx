import Form from "react-bootstrap/Form";
import Movie from "../Movie/Movie";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import validInput from "./inputValidation";

export default function AddMovieForm({ addToMovieList }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState("0");

  function handleSubmit(e) {
    e.preventDefault();
    const movie = { title: movieTitle, rating: movieRating };
    if (validInput(movie)) {
      addToMovieList(movie);
      setMovieTitle("");
      setMovieRating("0");
    }
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formMovieTitle">
        <Form.Label>Titel:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Titel här..."
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMovieRating">
        <Form.Label>Betyg:</Form.Label>
        <Form.Select
          value={movieRating}
          onChange={(e) => setMovieRating(e.target.value)}
        >
          <option value="0">Välj betyg här..</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="success" type="submit">
        Spara film
      </Button>
    </Form>
  );
}
