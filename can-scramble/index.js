const canScramble = (a, b) =>
  a.split("").sort().join("") == b.split("").sort().join("");

canScramble("abc", "cba"); // true
canScramble("aab", "bba"); // false
canScramble("xyzxyz", "zzyyxx"); // true
canScramble("xyzbbxyz", "zzyyxxaa"); //false
