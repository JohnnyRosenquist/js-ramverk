export function updateMovieList(movie, movieList) {
  if (movieList.some((element) => element.title === movie.title)) {
    alert("Filmen finns redan i listan");
    return movieList;
  } else {
    return [
      ...movieList,
      { title: movie.title, rating: movie.rating, key: movie.title },
    ];
  }
}
