export const EmptyError: string = 'Must count at least 1 number';
export const NegativeError: string = 'Only positive numbers are accepted';
export const WrongFormat: string = 'Some value is not considered a positive integer';

// From a collection of integers returns the collection of conjugates
// of integers.
/**
 * @param {number[]}  numbers - A colletions of integers.
 * @returns {number[]} collection of conjugates of integers
 */
export function getConjugateCollection(numbers: number[]): number[] {
  if (numbers.length === 0) throw new Error(EmptyError);
  if (numbers.some((_number) => _number <= 0)) throw new Error(NegativeError);

  const secondMap = new Map<number, number>();

  for (const num of numbers) {
    for (let j = 1; j <= num; j++) {
      if (!secondMap.get(j)) {
        secondMap.set(j, 1);
      } else {
        secondMap.set(j, secondMap.get(j)! + 1);
      }
    }
  }

  return Array.from(secondMap.values());
}

export function printMatrix(numbers: number[]) {
  for (const num of numbers) {
    console.log(num);
    const row = Array.from(new Array(num), (val, index) => ' O ');
    console.log(row);
  }
}

export function handlerStringOfNumbers(answer: string) {
  try {
    const numbers = answer.replace(/\s/g, '').split(',').map(Number);
    return numbers.filter(Boolean);
  } catch (error) {
    throw new Error(WrongFormat);
  }
}
