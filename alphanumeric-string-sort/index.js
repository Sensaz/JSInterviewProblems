const str1 = "Sorting0123456789"; // ginortS0246813579
const str2 = "foobar1237348421"; // abfoor2244811337
const str3 = "90856123456789"; // 02466881355799

// 1. Wszystkie małe litery mają byc przed duzymi
// 2. Wszystkie duze litery maja byc przed liczbami
// 3. Wszystkie liczby parzyste mają byc przed nieparzystymi

// `[A-Za-z0-9]`

// Moje rozwiązanie

const sortStr = (str) => {
  const toSort = str.split("");
  const smallLetter = toSort.filter((sign) => sign.match(/[a-z]/)).sort();
  const bigLetter = toSort.filter((sign) => sign.match(/[A-Z]/)).sort();
  const evenNumber = toSort.filter((sign) => parseInt(sign) % 2 === 0).sort();
  const oddNumber = toSort.filter((sign) => parseInt(sign) % 2 === 1).sort();

  const sortedArr = [...smallLetter, ...bigLetter, ...evenNumber, ...oddNumber];

  return sortedArr.join("");
};



// Gotowe rozwiązanie

let lower = "";
let upper = "";
let even = "";
let odd = "";
process.argv[2]
  .split("")
  .sort((a, b) => a.localeCompare(b))
  .forEach((c) => {
    if ("a" <= c && c <= "z") {
      lower += c;
    } else if ("A" <= c && c <= "Z") {
      upper += c;
    } else if ("02468".includes(c)) {
      even += c;
    } else {
      odd += c;
    }
  });
console.log(lower + upper + even + odd);
