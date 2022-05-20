import { getConjugateCollection, printMatrix, handlerStringOfNumbers } from '../src/index';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a collection of integers (separated by commas): ', (answer) => {
  console.log('----------------');

  const collection = handlerStringOfNumbers(answer);
  console.log(`Collection inserted: {${collection}}`);
  console.log('----------------');
  printMatrix(collection);

  console.log('----------------');
  const conjugateCollection = getConjugateCollection(collection);
  console.log(`Conjugate Collection: {${conjugateCollection}}`);

  rl.close();
});
