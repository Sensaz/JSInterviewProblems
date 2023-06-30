//  array_sum([1,2,[3,4,[5]]])

function array_sum(arr, currentSum = 0) {
  let sum = currentSum;
  arr.forEach((number) => {
    if (typeof number === "number") sum += number;
    else if (typeof number === "object") sum = array_sum(number, sum);
    else return;
  });
  return sum;
}

array_sum([1, 2, [3, 4, [5]]]);

// .reduce((a, b) => parseInt(a) + parseInt(b));

// za pomocą is type, jeśli jest array to wywołaj rekurencyjnie funkcje i przeka tą arrayke
