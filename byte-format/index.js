// Funkcja konwertująca bajty na kilo, mega, giga i tera :D

// Moje rozwiązanie

const unit = {
  0: "B",
  1: "KB",
  2: "MB",
  3: "GB",
  4: "TB",
  5: "PB",
  6: "EB",
  7: "ZB",
  8: "YB",
};

const byteFormat = (byte, precision = 2, incNumber = 0) => {
  let i = Math.min(incNumber, objLenght);

  let objLenght = Object.keys(unit).length - 1;
  let byteToConvert = parseFloat(byte, 10);
  if (typeof byteToConvert !== "number" || !byteToConvert)
    return "Podaj liczbe";

  if (byteToConvert > 1024 && i < objLenght) {
    byteToConvert = byteToConvert / 1024;
    i++;
    return byteFormat(byteToConvert, i);
  }

  const parsedPrecision = parseInt(precision, 10);
  return byteToConvert.toFixed(parsedPrecision) + " " + unit[i];
};

// Gotowe rozwiązanie

module.exports = function (bytes, precision) {
  var suffixes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    factor = Math.pow(10, precision > 0 ? precision : 2);
  // Using a for loop since it's perfect for this kind of problem
  for (
    var i = bytes, k = 0;
    i >= 1024 && k < suffixes.length;
    i /= 1024, k++
  ) {}
  // Return the number rounded to precision
  return Math.round(i * factor) / factor + " " + suffixes[k];
};
