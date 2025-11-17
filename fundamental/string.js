let str = '';

function ucFirst(str) {
  if (str) {
    let firstChar = str[0];
    // console.log(firstChar);
    let fCCodePoint = firstChar.codePointAt(0);
    // console.log(fCCodePoint - 32);

    firstChar = String.fromCodePoint(fCCodePoint - 32);
    firstChar = fCCodePoint < 90 ? String.fromCodePoint(fCCodePoint + 31) : firstChar;
    // console.log(firstChar);

    let remainChars;
    remainChars = str.substring(1, str.length);
    return firstChar + remainChars;
  }
}

// console.log(ucFirst(str));

let charSet = '';

// for (let i = 65; i <= 220; i++) {
//   console.log(`${i}: ${String.fromCodePoint(i)}`);
// }
