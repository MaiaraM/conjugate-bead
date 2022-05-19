import { getConjugateCollection } from '../src/main';

describe('Testing Receive the Conjugate Colletion', () => {
  test('Must return [ 3, 2, 2, 1, 1 ]', () => {
    const collection = [5,3,1]; 

    expect(getConjugateCollection(collection)).toStrictEqual([ 3, 2, 2, 1, 1]);
  });

  test('Must return [ 3, 3, 1, 1 ]', () => {
    const collection = [4, 2, 2]; 

    expect(getConjugateCollection(collection)).toStrictEqual([ 3, 3, 1, 1]);
  });
});