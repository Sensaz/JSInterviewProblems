// sum(10, [3, 4, 5, 6, 7]) -> [(4, 6), (3, 7)]
// sum( 8, [3, 4, 5, 4, 4]) -> [(3, 5)]

// Podajemy sume, potem tablice, i ma nam dac wszystkie unikatowe przypadki

function eachHelperFunction(arr, role) {
  arr.forEach((currentElement) => {
    let temporaryArray = arr.filter((el) => el !== currentElement);
    temporaryArray.forEach((temporaryEl) => {
      role(currentElement, temporaryEl);
    });
  });
}

const sum = (k, arr) => {
  let res = [];

  const addResult = (currentElement, temporaryEl) => {
    if (temporaryEl + currentElement === k) {
      res = [...res, [currentElement, temporaryEl]];
    }
  };

  const filterResult = (currentElement, temporaryEl) => {
    const index = res.findIndex((el) => el === currentElement);
    if (
      index !== -1 &&
      temporaryEl.every((el) => currentElement.includes(el))
    ) {
      res.splice(index, 1);
    }
  };

  eachHelperFunction(arr, addResult);
  eachHelperFunction(res, filterResult);

  return res;
};
