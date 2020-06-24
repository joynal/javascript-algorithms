// To heapify a subtree rooted with node 'index' which is
// an index in arr[]. 'size' is size of heap
const heapify = (arr, size, index) => {
  let largest = index; // Initialize largest as root
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  // If left child is larger than root
  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than root
  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== index) {
    // swap values
    [arr[index], arr[largest]] = [arr[largest], arr[index]];

    // Recursively heapify the affected sub-tree
    heapify(arr, size, largest);
  }
};

const heapSort = (arr) => {
  // No need to sort the array if the array only has one element or empty
  if (arr.length < 2) return arr;

  const result = arr.slice(0);

  // Build heap (rearrange array) for first time
  for (let i = Math.floor(result.length / 2 - 1); i >= 0; i -= 1) {
    heapify(result, result.length, i);
  }

  // One by one extract an element from heap and again rearrange
  for (let i = result.length - 1; i >= 0; i -= 1) {
    // Move current root to end
    [result[0], result[i]] = [result[i], result[0]];

    // call max heapify on the reduced heap
    heapify(result, i, 0);
  }

  return result;
};

module.exports = heapSort;
