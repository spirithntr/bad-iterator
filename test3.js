import Iterator from './iterator.js';
import Subject from './subject.js';
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var array2 = [0, 1, 2, 3, 4];
var config = { 'cyclic': true, 'width': 3 };
function allMightyArray() {
}
console.log('0000-----------------0000');
let subjectArr = new Subject();
let a = new Iterator(array, config);
let b = new Iterator(array2, config);
subjectArr.addObserver(a);
subjectArr.addObserver(b);
subjectArr.notify('remove', 0);
console.log(a.current())
console.log(b.current())
subjectArr.notify('insert', 99);
console.log(a.backward())
console.log(b.backward())
subjectArr.notify('append', 13);
console.log(a.current())
console.log(b.current())
