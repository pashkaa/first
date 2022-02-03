const prompt = require('prompt-sync')({ sigint: true });

const array = [];

function getProductOrder() {
  let input = prompt('Input:\t');
  array.push(Number(input));

  while (input != '') {
    input = prompt('');
    input = Number(input);
    array.push(input);
  }

  array.pop();

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0) {
      array.length = index;
      break;
    }
  }

  for (let i = 1; i < array.length; i += 1) {
    array[i] *= array[i - 1];
  }

  return array;
}

console.log(getProductOrder());
