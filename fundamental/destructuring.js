/* 
ref https://javascript.info/destructuring-assignment
*/

/* 
The Core Concept: Positional Destructuring with Arrays
When you destructure an array, you are pulling out values based on their position (index).

let [a, b] = [10, 20] assigns a = 10 (index 0) and b = 20 (index 1).

The rest parameter (...) collects all remaining items into a new array. It must always be the last item in the pattern.

A default value (=) is used if the item at that position is undefined (i.e., the array is too short).
*/

// A two-level array holding our data.
const countriesData = [
  [
    'Tokyo',
    'Japan',
    'Fumio Kishida',
    'Has the busiest train station in the world (Shinjuku)',
    'Vending machines sell everything from hot noodles to fresh eggs',
    'The 2025 World Expo will be in Osaka',
  ],
  [
    'Washington, D.C.',
    'USA',
    'Joe Biden',
    null, // We include a null value to show it's not treated as "missing"
  ],
  [
    'Paris',
    'France',
    'Emmanuel Macron', // This array is intentionally short to demonstrate the default value.
  ],
];

console.log('--- Looping and Destructuring an Array of Arrays ---');

// We loop through each country's data array.
for (const countryInfo of countriesData) {
  console.log(`\nProcessing entry: [${countryInfo.join(', ')}]`);

  // Here is the destructuring assignment in action.
  // Note: The rest parameter `...` must be last.
  // So we assign the first piece of info to `firstInfo` and the rest to `otherInfo`.
  const [capital, country, president, firstInfo = 'N/A', ...otherInfo] = countryInfo;

  console.log(`  Capital: ${capital} (${country})`);
  console.log(`  President: ${president}`);

  // Demonstrates the default value. For France, `firstInfo` will be 'N/A'.
  // For the USA, it will be `null` because a value exists at that position.
  console.log(`  Primary Info: ${firstInfo}`);

  // Demonstrates the 'rest' parameter.
  // For Japan, `otherInfo` will be an array with 2 items.
  // For USA and France, it will be an empty array [].
  if (otherInfo.length > 0) {
    console.log(`  Other Interesting Info:`);
    otherInfo.forEach((info, index) => {
      console.log(`    - ${info}`);
    });
  } else {
    console.log(`  Other Interesting Info: None`);
  }
}

// Array of Objects

const countriesDataAsObjects = [
  {
    capital: 'Tokyo',
    country: 'Japan',
    president: 'Fumio Kishida',
    interestingInfo: [
      'Has the busiest train station in the world (Shinjuku)',
      'Vending machines sell everything from hot noodles to fresh eggs',
    ],
  },
  {
    capital: 'Seoul',
    country: 'South Korea',
    president: 'Yoon Suk Yeol',
    interestingInfo: null, // To show how defaults work with null vs undefined
  },
  {
    capital: 'Berlin',
    country: 'Germany',
    president: 'Frank-Walter Steinmeier',
    // `interestingInfo` key is missing entirely here
  },
];

console.log('\n\n--- Looping and Destructuring an Array of Objects ---');

for (const countryData of countriesDataAsObjects) {
  console.log(`\nProcessing entry for: ${countryData.country}`);

  // Object destructuring is more flexible.
  // You pull variables out by name. Order doesn't matter.
  // You can also assign default values if a property is `undefined`.

  // let {width: w, height: h, title} = options;
  // we can also re-assign variable name with :

  const { capital, country, president, interestingInfo = ['N/A'] } = countryData;

  console.log(`  Capital: ${capital}`);
  console.log(`  President: ${president}`);

  // The default 'N/A' is only used for Germany, where the key was missing.
  // For South Korea, `interestingInfo` is `null` because the key exists.
  if (interestingInfo && interestingInfo.length > 0) {
    console.log(`  Interesting Info:`);
    interestingInfo.forEach((info) => console.log(`    - ${info}`));
  } else {
    // This handles both the Germany case (defaulted to ['N/A']) and the S. Korea case (null)
    console.log(`  Interesting Info: ${interestingInfo === null ? 'null' : 'Not provided'}`);
  }
}
