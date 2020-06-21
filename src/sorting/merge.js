// Merge the two arrays: left and right
const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // We will concatenate values into the result array in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1; // move left array cursor
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

// Merge Sort Implantation (Recursion)
const mergeSort = (arr) => {
  // No need to sort the array if the array only has one element or empty
  if (arr.length < 2) return arr;

  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(arr.length / 2);

  // This is where we will be dividing the array into left and right
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
};

module.exports = mergeSort;
