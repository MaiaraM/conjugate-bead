"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerStringOfNumbers = exports.printMatrix = exports.getConjugateCollection = exports.WrongFormat = exports.NegativeError = exports.EmptyError = void 0;
exports.EmptyError = 'Must count at least 1 number';
exports.NegativeError = 'Only positive numbers are accepted';
exports.WrongFormat = 'Some value is not considered a positive integer';
// From a collection of integers returns the collection of conjugates
// of integers.
/**
 * @param {number[]}  numbers - A colletions of integers.
 * @returns {number[]} collection of conjugates of integers
 */
function getConjugateCollection(numbers) {
    if (numbers.length === 0)
        throw new Error(exports.EmptyError);
    if (numbers.some(function (_number) { return _number <= 0; }))
        throw new Error(exports.NegativeError);
    var secondMap = new Map();
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        for (var j = 1; j <= num; j++) {
            if (!secondMap.get(j)) {
                secondMap.set(j, 1);
            }
            else {
                secondMap.set(j, secondMap.get(j) + 1);
            }
        }
    }
    return Array.from(secondMap.values());
}
exports.getConjugateCollection = getConjugateCollection;
function printMatrix(numbers) {
    for (var _i = 0, numbers_2 = numbers; _i < numbers_2.length; _i++) {
        var num = numbers_2[_i];
        console.log(num);
        var row = Array.from(new Array(num), function (val, index) { return ' O '; });
        console.log(row);
    }
}
exports.printMatrix = printMatrix;
function handlerStringOfNumbers(answer) {
    try {
        var numbers = answer.replace(/\s/g, '').split(',').map(Number);
        return numbers.filter(Boolean);
    }
    catch (error) {
        throw new Error(exports.WrongFormat);
    }
}
exports.handlerStringOfNumbers = handlerStringOfNumbers;
