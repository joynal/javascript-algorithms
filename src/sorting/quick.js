const swapPosition = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

const partition = (arr, lo, hi) => {
  const pivotIndex = arr[lo];
  let pointer = lo;

  for (let i = lo; i < hi; i += 1) {
    if (arr[i] < pivotIndex) {
      pointer += 1;
      swapPosition(arr, pointer, i);
    }
  }

  swapPosition(arr, lo, pointer);

  return pointer;
};

const quickSortHelper = (arr, lo, hi) => {
  if (lo >= hi) return;

  const pivotIndex = partition(arr, lo, hi);

  quickSortHelper(arr, lo, pivotIndex);
  quickSortHelper(arr, pivotIndex + 1, hi);
};

module.exports = (arr) => {
  const result = arr.slice(0);
  quickSortHelper(result, 0, result.length);
  return result;
};
