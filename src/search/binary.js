// A recursive binary search function. It returns true if target
// is present in given array, otherwise return false
const binarySearch = (arr, lo, hi, target) => {
  // element is not present in array
  if (lo > hi) return false;

  const mid = Math.floor(hi + lo / 2);

  // If the element is present at the middle
  if (arr[mid] === target) return true;

  // If element is smaller than mid, then
  // it can only be present in left subarray
  if (arr[mid] > target) {
    return binarySearch(arr, lo, mid - 1, target);
  }

  // Else the element can only be present in right subarray
  return binarySearch(arr, mid + 1, hi, target);
};

module.exports = (arr, target) => binarySearch(arr, 0, arr.length - 1, target);
