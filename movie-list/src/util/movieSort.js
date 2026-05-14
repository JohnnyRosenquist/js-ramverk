export function sortAlphabetical(movieList) {
  const listCopy = [...movieList];
  return listCopy.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
}

export function sortByRating(movieList) {
  const listCopy = [...movieList];
  return listCopy
    .sort(function (a, b) {
      return a.rating - b.rating;
    })
    .reverse();
}
