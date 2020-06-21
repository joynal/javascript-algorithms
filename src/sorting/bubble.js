const bubbleSort = (arr) => {
  // No need to sort the array if the array only has one element or empty
  if (arr.length < 2) return arr;

  const result = arr.slice(0);

  for (let i = 0; i < result.length; i += 1) {
    for (let j = 0; j < (result.length - i - 1); j += 1) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
};

module.exports = bubbleSort;
