/* describe('pow', function () {
  it('2 raises to power 3 = 8', function () {
    assert.equal(pow(2, 3), 8);
  });
  it('3 raised to power 4 = 81', function () {
    assert.equal(pow(3, 4), 81);
  });
}); */

/* options

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });

}); */

function getRandomArray(minInput, maxInput, qty) {
  try {
    // Type check
    if (typeof minInput !== 'number' || typeof maxInput !== 'number' || typeof qty !== 'number') {
      throw new Error('All parameters must be numbers.');
    }

    // Logic checks
    if (minInput >= maxInput) {
      throw new Error('minInput must be less than maxInput.');
    }

    const gap = maxInput - minInput + 1;
    if (qty > gap) {
      throw new Error('Quantity exceeds available unique values.');
    }

    if (qty <= 0) {
      throw new Error('Quantity must be greater than zero.');
    }

    // Generate numbers
    const numbers = new Set();
    while (numbers.size < qty) {
      const randomNum = Math.floor(Math.random() * gap) + minInput;
      numbers.add(randomNum);
    }

    return [...numbers];
  } catch (err) {
    // 🔹 Log for debugging
    console.error(`[getRandomArray] Error: ${err.message}`);
    console.table({ minInput, maxInput, qty });

    // 🔹 Return null or [] (depending on design choice)
    return null; // or return []
  }
}

let testPowerNumbers = getRandomArray(2, 10, 5);
console.log(testPowerNumbers);

describe('pow', function () {
  function makeTest(x) {
    let expected = x * x * x;
    // let arrExpected = getRandomArray(2, 10, 4);
    it(`${x} in the power 3 is ${expected}`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  // let testNumbers = getRandomArray(2, 5, 10);
  let test = [1, 2, 3, 5, 7, 9, 11, 13];
  for (let i = 0; i < test.length; i++) {
    makeTest(test[i]);
  }
});
