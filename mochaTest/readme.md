# reference
https://javascript.info/testing-mocha


# The page can be divided into five parts:


1. The `<head>` – add third-party libraries and styles for tests.
2. The `<script>` with the function to test, in our case – with the code for pow.
3. The tests – in our case an external script test.js that has describe("pow", ...) from above.
4. The HTML element `<div id="mocha">` will be used by Mocha to output results.
5. The tests are started by the command mocha.run().