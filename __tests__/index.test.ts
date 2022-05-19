import { getConjugateCollection, EmptyError, NegativeError, handlerStringOfNumbers } from '../src/index';

describe('Testing Receive the Conjugate Colletion', () => {
  test('Must return [ 3, 2, 2, 1, 1 ]', () => {
    const collection = [5, 3, 1];

    expect(getConjugateCollection(collection)).toStrictEqual([3, 2, 2, 1, 1]);
  });

  test('Must return [ 3, 3, 1, 1 ]', () => {
    const collection = [4, 2, 2];

    expect(getConjugateCollection(collection)).toStrictEqual([3, 3, 1, 1]);
  });

  test('Must return Error negative number', () => {
    const collection = [4, 2, -2];

    expect(() => getConjugateCollection(collection)).toThrow(NegativeError);
  });

  test('Must return Error Empty Array', () => {
    const collection: number[] = [];

    expect(() => getConjugateCollection(collection)).toThrow(EmptyError);
  });
});

describe('Testing Handler String', () => {
  test('Must return [ 5,3,1 ]', () => {
    expect(handlerStringOfNumbers('5, 3,  1')).toStrictEqual([5, 3, 1]);
  });

  test('Must ignore string is not a number', () => {
    expect(handlerStringOfNumbers('a ,4 ,5')).toStrictEqual([4, 5]);
  });
});
