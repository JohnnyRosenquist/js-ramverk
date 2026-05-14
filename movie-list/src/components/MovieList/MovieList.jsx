import Stack from "react-bootstrap/Stack";
import Movie from "../Movie/Movie";
import { useState } from "react";

export default function MovieList({ movies, removeFromMovieList }) {
  return (
    <Stack className="pt-5" gap={1}>
      <h2 className="display-6">Inlagda filmer</h2>
      {movies.map((movie) => (
        <Movie movie={movie} removeFromList={removeFromMovieList} />
      ))}
    </Stack>
  );
}
