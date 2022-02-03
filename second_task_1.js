function getLeastDivisor() {
  function largestDivisor(n, m) {
    return m === 0 ? n : largestDivisor(m, n % m);
  }

  function leastDivisor(n, m) {
    return (n * m) / largestDivisor(n, m);
  }

  return leastDivisor(process.argv[2], process.argv[3]);
}

console.log(getLeastDivisor());
