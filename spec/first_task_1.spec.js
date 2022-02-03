function getProductInOrder(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      array.length = index;
      break;
    }
  }

  for (let i = 1; i < array.length; i++) {
    array[i] = array[i - 1] * array[i];
  }
  return array;
}

describe('Product of elements', () => {
  it('[1] Should return product of elements in order', () => {
    const array = [1, 2, 3, 4, 5, -7, 4, 8, 2, 12];
    const result = getProductInOrder(array);
    expect(result).toEqual([1, 2, 6, 24, 120]);
  });
  it('[2] Should return product of elements in order', () => {
    const array = [5, 3, 2, 1, 0, 6, -7, 2, 1, 2];
    const result = getProductInOrder(array);
    expect(result).toEqual([5, 15, 30, 30, 0, 0]);
  });
  it('[3] Should return product of elements in order', () => {
    const array = [4, 8, -3, 12, 3, 4, 6, 12, 33, 90];
    const result = getProductInOrder(array);
    expect(result).toEqual([4, 32]);
  });
  it('[4] Should return product of elements in order', () => {
    const array = [0, 0, -1, 3, 4, 162, 1, 2, 3, 4];
    const result = getProductInOrder(array);
    expect(result).toEqual([0, 0]);
  });
  it('[5] Should return product of elements in order', () => {
    const array = [-7, 3, 1, 1, 7, 3, 4, 8, 4, 10];
    const result = getProductInOrder(array);
    expect(result).toEqual([]);
  });
});
