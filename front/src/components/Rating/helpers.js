export const getArrRating = (value) =>
  new Array(5).fill(null).map((_, i) => {
    return i + 1 <= value ? i + 1 : value - i > 0 ? value - i : null;
  });
