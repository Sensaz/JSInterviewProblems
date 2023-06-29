// Funkcja która przyjmuje dwa stringi

// searchInString('AdnBndAndBdaBn', 'dAn') //  4 ("Adn", "ndA", "dAn", "And")

// f('AbrAcadAbRa', 'cAda') // 2

function factorial(n, el) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function searchInString(str, reg) {
  const arrReg = reg.split("");
  let combinations = [];
  let includesElements = [];

  for (let i = 0; i <= 2; i++) {
    const currentSign = arrReg[i];
    let firstSign = "";
    const temporary = arrReg.filter((sign) => sign !== currentSign);
    for (let n = 0; n <= 1; n++) {
      n === 0
        ? (firstSign = temporary)
        : (firstSign = [temporary[1], temporary[0]]);

      combinations = [
        ...combinations,
        ...[[currentSign, ...firstSign].join("")],
      ];
    }
  }
  combinations.forEach((el) => {
    str.includes(el) && (includesElements = [...includesElements, el]);
  });
  console.log(combinations);
  console.log(includesElements.length, includesElements);
}

// Obliczyc wszystkie mozliwe kombinacje dla reg, porównac czy str zawiera jakikolwiek ciąg znaków z reg'a następnie wypisac jej wszystkie do talblicy i obliczyc jej długośc es

// 3. Uogólnic kod tak aby działał z większą lub mniejszą ilością znaków, pomocna moze okazac się funckja do obliczania silni, ostatnia funkcja tak jak jest tuataj wydaje mi się ze powinna zosta

// abcd abdc acbd acdb adbc adcb
// bacd badc bcda bcad bdac bdca
// cabd cadb cbad cbda cdab cdba
// dabc dacb dbac dbca dcab dcba
