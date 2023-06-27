const data1 = [2]; // 2 ale chyba powinno byc 0
const data2 = [1969]; // 966
const data3 = [100756]; // 50 346
const data4 = [
  61302, 105953, 129165, 121039, 64799, 120172, 147328, 65147, 123112, 103573,
  85213, 130378, 115416, 129131, 88809, 147043, 86119, 138383, 136803, 66719,
  59465, 122491, 126551, 110028, 96959, 115214, 83823, 109324, 148671, 70505,
  96375, 83861, 62724, 77493, 122275, 112894, 143872, 93525, 50526, 140725,
  147110, 115859, 137582, 143800, 68830, 130259, 122393, 64373, 51810, 62449,
  143889, 108038, 55083, 59927, 77613, 67488, 91711, 67498, 147320, 65348,
  101088, 51983, 97705, 61890, 74561, 128456, 76450, 95132, 78835, 142148,
  128037, 71497, 138382, 143474, 54236, 104095, 121533, 136757, 123213, 66306,
  83269, 90894, 82215, 143024, 117140, 128722, 139823, 87177, 58107, 94303,
  70008, 130633, 114210, 67931, 59062, 125819, 127278, 118718, 70968, 66126,
]; // 5 043 026

// Moduł o masie 14 zuywa 2 jednostki paliwa 2 / 3 zaokrągle w dół daje 0 więc całkowite wymagane paliwo to 2

// 1969 wymaga 654 jednostek paliwa potem to paliwo wymaga 216 więcej jednostek paliwa 654 / 2 - 2, 216 wymaga wtedy 70 więcej paliwa co wymaga 21 co wymaga 5 i dalej ju nic tak więc całkoweite wymagane paliwo dla modułu o masie 1969 wynosi 654 + 216 + 70 + 21 + 5

// const calcFullFuel = (mass) =>
//   `We need ${mass
//     .map((star) => Math.floor(star / 3) - 2)
//     .reduce((a, b) => a + b, 0)} unit fuel`;

const myCalcFullFuel = (mass) =>
  mass
    .map((star) =>
      Math.floor(star / 3) - 2 > 0
        ? [Math.floor(star / 3) - 2].concat(
            myCalcFullFuel([Math.floor(star / 3) - 2])
          )
        : Math.max(0, Math.floor(star / 3) - 2)
    )
    .flat()
    .reduce((a, b) => a + b, 0);


    
const solutionCalcFullFuel = (mass) => {
  let sum = 0;
  mass.forEach((x) => {
    while (x > 0) {
      x = Math.max(0, Math.floor(x / 3) - 2);
      sum += x;
    }
  });
  return sum;
};
