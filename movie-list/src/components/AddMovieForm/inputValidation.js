export default function validInput(movie) {
  if (!movie.title && movie.rating === "0") {
    alert("Ange titel och betyg");
    return false;
  } else if (!movie.title) {
    alert("Ange titel");
    return false;
  } else if (movie.rating === "0") {
    alert("Ange betyg");
    return false;
  } else {
    return true;
  }
}
