// Funkcja która przyjmuje dwa stringi

// searchInString('AdnBndAndBdaBn', 'dAn') //  4 ("Adn", "ndA", "dAn", "And")

// searchInString('AbrAcadAbRa', 'cAda') // 2

// <!--------- DLA N ELEMENTÓW ---------!>

function anagramForNElements(arrReg) {
  let options = [];
  let helperCombinations = [];

  (function factorialSort(arr, options) {
    for (let i = 0; i < arr.length; i++) {
      const combination = [];

      for (let j = 0; j < arr.length - 1; j++) {
        const index = (i + j) % arr.length;
        combination.push(arr[index]);
      }
      if (combination.length > 3) factorialSort(combination, options);
      else options.push(combination);
    }
  })(arrReg, options);

  options.forEach((el) => {
    helperCombinations = [
      ...helperCombinations,
      ...anagramForThreeElements(el),
    ];
  });

  return helperCombinations.map((el) => {
    const missingLetter = arrReg
      .filter((element) => !el.split("").includes(element))
      .join("");
    if (missingLetter >= 2) {
      return;
    }
    return missingLetter + el;
  });
}

// <!--------- DLA 3 ELEMENTÓW ---------!>

function anagramForThreeElements(arr) {
  let options = [];
  for (let i = 0; i <= 2; i++) {
    const currentSign = arr[i];
    let firstSign = "";
    const temporary = arr.filter((sign) => sign !== currentSign);
    for (let n = 0; n <= 1; n++) {
      n === 0
        ? (firstSign = temporary)
        : (firstSign = [temporary[1], temporary[0]]);

      options = [...options, ...[[currentSign, ...firstSign].join("")]];
    }
  }
  return options;
}

// <!--------- DLA 2 ELEMENTÓW ---------!>

function anagramForTwoElements(arrReg) {
  return [arrReg.join(""), [arrReg[1], arrReg[0]].join("")];
}

// <!--------- FUNKCJA GŁÓWNA ---------!>

function searchInString(str, reg) {
  const arrReg = reg.split("");
  let combinations = [];
  let includesElements = [];

  if (arrReg.length > 3) combinations = anagramForNElements(arrReg);
  else if (arrReg.length === 3) combinations = anagramForThreeElements(arrReg);
  else combinations = anagramForTwoElements(arrReg);

  combinations.forEach((el) => {
    str.includes(el) && (includesElements = [...includesElements, el]);
  });
  return `Mamy ${
    includesElements.length
  } unikalne rozwiązania: ${includesElements.join(", ")}`;
}
