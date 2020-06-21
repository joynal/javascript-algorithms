const insertionSort = (arr) => {
  // No need to sort the array if the array only has one element or empty
  if (arr.length < 2) return arr;

  const result = arr.slice(0);

  for (let i = 0; i < result.length; i += 1) {
    // storing current element whose left side is
    // checked for its correct position.
    let j = i - 1;
    const tmp = result[i];

    // check whether the adjacent element in left side is greater or
    // less than the current element.
    while (j >= 0 && result[j] > tmp) {
      // moving the left side element to one position forward.
      result[j + 1] = result[j];
      j -= 1;
    }

    // moving current element to its  correct position.
    result[j + 1] = tmp;
  }

  return result;
};

module.exports = insertionSort;
