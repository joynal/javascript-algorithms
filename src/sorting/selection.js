const selectionSort = (arr) => {
  // No need to sort the array if the array only has one element or empty
  if (arr.length < 2) return arr;

  const result = arr.slice(0);

  for (let i = 0; i < result.length; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < result.length; j += 1) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }

    [result[i], result[minIndex]] = [result[minIndex], result[i]];
  }

  return result;
};

module.exports = selectionSort;
