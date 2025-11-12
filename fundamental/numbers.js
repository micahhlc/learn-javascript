/**
 * Does something cool.
 *
 * See: [numbers.md](./numbers.md)
 */

const siPrefixes = {
  // Small-scale (fractions)
  quecto: 1e-30, // qs
  ronto: 1e-27, // r
  yocto: 1e-24, // y
  zepto: 1e-21, // z
  atto: 1e-18, // a
  femto: 1e-15, // f
  pico: 1e-12, // p
  nano: 1e-9, // n
  micro: 1e-6, // μ
  milli: 1e-3, // m
  centi: 1e-2, // c
  deci: 1e-1, // d

  // Base
  one: 1, // (no prefix)

  // Large-scale (multiples)
  deca: 1e1, // da
  hecto: 1e2, // h
  kilo: 1e3, // k - thousand
  mega: 1e6, // M - mi llion
  giga: 1e9, // G - bi llion
  tera: 1e12, // T - tri llion
  peta: 1e15, // P - qua dri llion
  exa: 1e18, // E - quin ti llion
  zetta: 1e21, // Z - sex ti llion
  yotta: 1e24, // Y - sep ti llion
  ronna: 1e27, // R - oc ti llion
  quetta: 1e30, // Q - noni llion
};

console.log(siPrefixes);

let hex = 0xff;
console.log(hex);
console.log(hex.toString(16));

let binary = 0b1111_1111;
console.log(binary);
console.log(binary.toString(2));

let octal = 0o377;
console.log(octal);
console.log(octal.toString(36));

let num = 1.23456;
console.log(Math.round(num * 100) / 100);
console.log(+num.toFixed(2));

console.log(2.771312312e-319);

console.log(+(0.1 + 0.2).toFixed(1));
console.log(+(0.2).toString(2));

console.log(19_999_999_999_999_999);

console.log(isFinite('15')); // true
console.log(isFinite('str')); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity

// Note the difference:
console.log(Number.isNaN('str')); // false, because "str" belongs to the string type, not the number type
console.log(isNaN('str')); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

console.log((6.35).toFixed(20));
console.log(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

console.log(Number.MAX_SAFE_INTEGER);
//> 9007199254740991

console.log(Number.MAX_SAFE_INTEGER + 1);
//> 9007199254740992  (Still safe)

console.log(Number.MAX_SAFE_INTEGER + 2);
//> 9007199254740992  (Wrong! Loss of precision)

// Your example:
console.log(9_999_999_999_999_999); //e15
//> 10000000000000000 (Wrong! Rounded up)
