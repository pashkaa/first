function largestDivisor(n, m) {
  return m == 0 ? n : largestDivisor(m, n % m);
}

function leastDivisor(n, m) {
  return n * m / largestDivisor(n, m);
}

describe('Least divisor', () => {
  it('[1] Should return least divisor of two elements', () => {
    const result = leastDivisor(9, 3);
    expect(result).toBe(9);
  });
  it('[2] Should return least divisor of two elements', () => {
    const result = leastDivisor(5, 2);
    expect(result).toBe(10);
  });
  it('[3] Should return least divisor of two elements', () => {
    const result = leastDivisor(7, 4);
    expect(result).toBe(28);
  });
  it('[4] Should return least divisor of two elements', () => {
    const result = leastDivisor(3, 7);
    expect(result).toBe(21);
  });
  it('[5] Should return least divisor of two elements', () => {
    const result = leastDivisor(4, 8);
    expect(result).toBe(8);
  });
});
