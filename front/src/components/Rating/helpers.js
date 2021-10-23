export const getArrRating = (value) => {
  const arr = [];
  const maxValue = 5;
  const ceilValue = Math.ceil(value);
  const floorValue = Math.floor(value);

  for (let i = 1; i <= maxValue; i++) {
    if (arr.length < maxValue) {
      if (i <= floorValue) {
        arr.push(i);
        if (i === floorValue && arr.length < ceilValue) {
          arr.push(value % 1);
        }
      } else {
        arr.push(null);
      }
    }
  }
  return arr;
};
