import Iterator from './iterator.js';
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var config = { 'cyclic': true, 'width': 3 };
var iterator = new Iterator(array, config);

console.log(iterator.current());
// --> [0, 1, 2]
console.log(iterator.forward());
// --> [1, 2, 3]
console.log(iterator.jumpTo(5));
// --> undefined
console.log(iterator.current());
// --> [5, 6, 7]
console.log(iterator.backward());
// --> [4, 5, 6]
console.log(iterator.jumpTo(8));
// --> undefined
console.log(iterator.current());
// --> [8, 9, 0]
console.log(iterator.forward());
// --> [9, 0, 1]
console.log(iterator.jumpTo(12));
console.log(iterator.current());