// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);

//1
//2 2
//3 3 3
//4 4 4 4
//5 5 5 5 5
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// let n = 4;
// let string = "";
// let count = 1;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += count;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

// 12345
// 1234
// 123
// 12
// 1
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);

// 54321
// 5432
// 543
// 54
// 5
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += n - j + 1;
//   }
//   string += "\n";
// }
// console.log(string);

// 54321
// 4321
// 321
// 21
// 1
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += n - j - i + 2;
//   }
//   string += "\n";
// }
// console.log(string);

// 1
// 123
// 12345
// 1234567
// 123456789
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);

//   1
//  234
// 56789
// let n = 3;
// let string = "";
// let count = 1;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += count;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

// 123456789
//  1234567
//   12345
//    123
//     1
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);

// 1
// 123
// 12345
// 1234567
// 123456789
// 1234567
// 12345
// 123
//  1

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j <= i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * (n - i) - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);

// 123456789
// 1234567
//  12345
//   123
//    1
//   123
//  12345
// 1234567
// 123456789

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * (i + 1) - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);

// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);
