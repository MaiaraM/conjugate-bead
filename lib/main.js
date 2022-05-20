"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter a collection of integers (separated by commas): ', function (answer) {
    console.log('----------------');
    var collection = (0, index_1.handlerStringOfNumbers)(answer);
    console.log("Collection inserted: {".concat(collection, "}"));
    console.log('----------------');
    (0, index_1.printMatrix)(collection);
    console.log('----------------');
    var conjugateCollection = (0, index_1.getConjugateCollection)(collection);
    console.log("Conjugate Collection: {".concat(conjugateCollection, "}"));
    rl.close();
});
