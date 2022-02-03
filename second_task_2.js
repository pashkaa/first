const prompt = require('prompt-sync')({ sigint: true });

const array = [];

function getLeastDivisor() {
  let input = prompt('Input:\t');
  array.push(Number(input));

  while (input !== 0) {
    input = prompt(' ');
    input = Number(input);
    array.push(input);
  }

  array.pop();

  function largestDivisor(n, m) {
    return m === 0 ? n : largestDivisor(m, n % m);
  }

  function leastDivisor(n, m) {
    return (n * m) / largestDivisor(n, m);
  }

  return leastDivisor(array[0], array[1]);
}

console.log(getLeastDivisor());
