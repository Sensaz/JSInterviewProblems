// Moje rozwiązanie

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

const toSort = [
  5, 4, 4, 5, 3, 5, 32, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9, 0, 8, 7, 6, 5, 4, 3, 2, 1,
  2, 34, 5, 6, 7, 8, 9, 0,
];

bubbleSort(toSort);

// Gotowe rozwiązanie

module.exports = function (array, compare) {
  // Not an array, empty or array of 1 is already sorted
  if (!Array.isArray(array) || array.length < 2) {
    return array;
  }

  var swap = function (array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
  };

  // Create a compare func if not passed in
  if (typeof compare !== "function") {
    compare = function (a, b) {
      return a > b ? 1 : -1;
    };
  }

  var i, l;

  for (i = 0; i < array.length; i++) {
    l = i;
    while (l-- && compare(array[l], array[l + 1]) > 0) {
      swap(array, l, l + 1);
    }
  }

  return array;
};
