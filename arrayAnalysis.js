function analysis(arr) {
  const sum = arr.reduce((acc, e) => acc + e, 0);
  const sort = arr.sort((a, b) => a - b);
  const length = arr.length - 1;

  if (arr.length <= 0) return false;

  const object = {
    average: sum / arr.length,
    min: sort[0],
    max: sort[length],
    length: arr.length,
  };

  return object;
}

export default analysis;