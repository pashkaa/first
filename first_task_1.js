const yargs = require('yargs');

const array = yargs.argv._;

function getProductOrder() {
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

console.log(123);
console.log(getProductOrder(array));
