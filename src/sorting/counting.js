const countingSort = (arr, min, max) => {
  // No need to sort the array if the array only has one element or empty
  if (arr.length < 2) return arr;

  // Auxiliary array
  const counts = [];

  for (let i = min; i <= max; i += 1) {
    counts[i] = 0;
  }

  // increase index value
  arr.forEach((el) => { counts[el] += 1; });

  const result = [];

  // put everything in a new array
  for (let i = min; i <= max; i += 1) {
    while (counts[i] > 0) {
      result.push(i);
      counts[i] -= 1;
    }
  }

  return result;
};

module.exports = countingSort;
