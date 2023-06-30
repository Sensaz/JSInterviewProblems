// balancedBrackets('()[]{}(([])){[()][]}') // true
// balancedBrackets('())[]{}') // false
// balancedBrackets('[(])') // false

// Po kazdym nawiasie otwierającym musi występowac nawias zamykający tego samego typu, nawiasy mogą byc zagniezdzone

// Nawiasy () => [] => {}

// Moje rozwiązanie

const balancedBrackets = (str) => {
  let strToChecked = str;

  while (
    strToChecked.includes("()") ||
    strToChecked.includes("[]") ||
    strToChecked.includes("{}")
  ) {
    strToChecked = strToChecked.replace("()", "");
    strToChecked = strToChecked.replace("[]", "");
    strToChecked = strToChecked.replace("{}", "");
  }

  return !strToChecked;
};

balancedBrackets("()[]{[]}");

// Gotowe rozwiązanie

var brackets = {
  "(": ")",
  "{": "}",
  "[": "]",
};

// On each input string, process it using the balance checker
module.exports = function (string) {
  var stack = [];
  // Process every character on input
  for (var i = 0; i < string.length; i++) {
    if (brackets[stack[stack.length - 1]] === string[i]) {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }

  return !stack.length;
};
