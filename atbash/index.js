// Atbasl to taki odwrócony alfabet
// Original: abcdefghijklmnopqrstuvwxyz Substitute: zyxwvutsrqponmlkjihgfedcba

// Moje rozwiązanie

const atBashKey = {
  a: "z",
  b: "y",
  c: "x",
  d: "w",
  e: "v",
  f: "u",
  g: "t",
  h: "s",
  i: "r",
  j: "q",
  k: "p",
  l: "o",
  m: "n",
  n: "m",
  o: "l",
  p: "k",
  q: "j",
  r: "i",
  s: "h",
  t: "g",
  u: "f",
  v: "e",
  w: "d",
  x: "c",
  y: "b",
  z: "a",
};

const atBash = (str) => {
  const atBashArr = str.split("");
  let codedString = "";
  atBashArr.forEach((el) => {
    atBashKey[el] && (codedString += atBashKey[el]);
  });
  return codedString;
};

atBash("abcdefghijklmnopqrstuvwxyz");

// Gotowe rozwiązanie

const z = "z".charCodeAt(0);
const a = "a".charCodeAt(0);
const s = process.argv[2];
for (let i = 0; i < s.length; ++i) {
  process.stdout.write(
    s[i] === "\n" ? "\n" : String.fromCharCode(z - (s.charCodeAt(i) - a))
  );
}
