// Funkcja która przyjmuje dwa stringi

// searchInString('AdnBndAndBdaBn', 'dAn') //  4 ("Adn", "ndA", "dAn", "And")

// searchInString('AbrAcadAbRa', 'cAda') // 2

/* 
<!-----------------------------------------------!>
<!------------MOJE ROZWIĄZANIE------------!>
<!-----------------------------------------------!>
*/

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

/* 
<!-----------------------------------------------!>
<!----------GOTOWE ROZWIĄZANIE----------!>
<!-----------------------------------------------!>
*/

// Simple function that will take a string of latin characters and return a unique hash
var hashString = function (str) {
  // Map characters to prime numbers to multiply
  var charMap = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 97,
    z: 101,
    A: 103,
    B: 107,
    C: 109,
    D: 113,
    E: 127,
    F: 131,
    G: 137,
    H: 139,
    I: 149,
    J: 151,
    K: 163,
    L: 167,
    M: 173,
    N: 179,
    O: 181,
    P: 191,
    Q: 193,
    R: 197,
    S: 199,
    T: 211,
    U: 223,
    V: 227,
    W: 229,
    X: 233,
    Y: 239,
    Z: 241,
  };

  return str.split("").reduce(function (memo, char) {
    return memo * charMap[char];
  }, 1);
};

module.exports = function (parent, child) {
  var length = child.length,
    anagram = hashString(child),
    total = 0;

  for (var i = 0; i < parent.length - length; i++) {
    if (hashString(parent.substr(i, length)) === anagram) {
      total += 1;
    }
  }

  return total;
};
