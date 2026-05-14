export function createStars(rating) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img src="/images/star.png" />);
  }
  return stars;
}
