import Container from "react-bootstrap/Container";
import { createStars } from "./MovieFunctions";
import Stack from "react-bootstrap/Stack";
import "./Movie.css";

export default function Movie({ movie, removeFromList }) {
  return (
    <Stack direction="horizontal" className="movieRow p-2 m-1">
      <span className="">{movie.title}</span>
      <span className="ms-auto">{createStars(movie.rating)}</span>
      <span className="">
        <img
          src="/images/delete.png"
          onClick={() => {
            removeFromList(movie);
          }}
        />
      </span>
    </Stack>
  );
}
